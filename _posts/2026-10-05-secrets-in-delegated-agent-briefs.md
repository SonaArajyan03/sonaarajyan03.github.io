---
layout: post
title: "Name the secret, never paste it: credentials in a delegated agent brief"
description: "Where API keys and connection strings leak when a task moves to a teammate's coding agent, a redacted example brief, and an access-boundary checklist to run before you hand it over."
date: 2026-10-05 15:00:00 +0400
---

When you hand a task to a teammate who will run it with their own coding agent, the brief is what travels. Everything in it ends up in their agent session, and from there with whichever model provider that agent uses.

Customer data is the leak people think about. Credentials are the one that slips through, because they rarely arrive as "here is a password". They come in a pasted `.env` excerpt, a stack trace that prints a connection string, a curl command copied from your terminal history, or a screenshot of a dashboard with a key half-visible in the corner.

This post is about that second kind of leak in an AI work handoff: how to tell the runner which secret a task needs without putting its value in the brief.

*Note: I'm involved with Wagglet, a tool for this kind of task handoff. The approach below doesn't depend on it. This post was drafted with AI and reviewed by hand. The example is invented and every value in it is fake.*

## Three people, three different relationships to the secret

- **The preparer** writes the task. They may well have the production key in their own environment. That doesn't mean the task needs it.
- **The runner** executes the task with their own authorized tools: their own agent account, their own repository access, their own staging credentials. If the task needs a secret the runner doesn't already have legitimate access to, the fix is to grant access properly or narrow the task. It is never to paste the value into the brief.
- **The reviewer** judges whether the result is acceptable. They need evidence that the task worked, not the secret it worked with.

Nobody in that list should end up holding someone else's credential. That includes the runner's agent.

## Where secrets actually leak

Going through a brief before handing it over, these are the places to look:

1. **Pasted config.** "Here's my `.env` so you can see the setup" puts every value in it into the brief.
2. **Logs and stack traces.** Database drivers and HTTP clients often print the full DSN or request headers on failure.
3. **Reproduction commands.** A curl line copied from shell history usually carries its `Authorization` header.
4. **Attachments and screenshots.** A dashboard screenshot or a downloaded log file may show more than the bug.
5. **Rework comments.** "Try again with this key" in a follow-up comment travels with the task just like the original brief.

Number 4 has a detail worth knowing. In Wagglet's case, its [security page](https://wagglet.com/security) notes that a Task Handoff can return attachment download links, and that a link already returned stays sensitive even after the task's read credential is revoked. Whatever tool you use, assume an attachment you hand over has left your control.

## A worked example

Here is a brief for a staging bug, written the quick way. **Every value is fake.**

```text
Task: Webhook retries fail on staging

The payment webhook handler 500s on retry. Repro:
  curl -X POST https://staging.example.test/hooks/pay \
    -H "Authorization: Bearer sk_test_EXAMPLE_DO_NOT_USE" -d @event.json
Log from my machine:
  ERROR db: connect failed postgres://app:EXAMPLEpass@db.staging.internal:5432/app
My .env for reference:
  PAYMENTS_SECRET=whsec_EXAMPLE
  DATABASE_URL=postgres://app:EXAMPLEpass@db.staging.internal:5432/app
Fix it and make sure retries are idempotent.
```

Three credentials are in there, and none of them helps the runner. Here is the same task, rewritten so it can be handed over:

```text
Task: Webhook retries fail on staging

Outcome: a retried payment webhook with the same event id is accepted once
and returns 200 on every retry. No duplicate rows in `payments`.

Secrets this task needs (by name only):
  - STAGING_DATABASE_URL: from your own staging access. If you don't have
    it, stop and ask; don't borrow mine.
  - PAYMENTS_WEBHOOK_SECRET: the staging signing secret, from the team vault
    entry "payments / staging". Read access is required.

Reproduce with the fixture, not a live call:
  npm run test -- webhooks/retry.spec.ts   (uses fixtures/event.retry.json)

Out of scope: production config, key rotation, the payments provider dashboard.
Stop if: the fix needs a secret not listed above, or any step would print
a secret value to the terminal or a log.
Evidence: test output, the diff, and a note confirming no secret values
appear in the diff, logs or attachments.
Reviewer: the payments owner (not the runner).
```

The runner learns which secrets exist and where their own access comes from. The agent never sees a value. The reviewer gets evidence that doesn't contain one either.

## The access-boundary checklist

Run this before you hand the task over:

- [ ] The brief names every secret the task needs, by variable name and where legitimate access comes from. It contains no values.
- [ ] No pasted `.env`, config dump, or shell history.
- [ ] Logs are trimmed to the error line, with any DSN, header or token replaced.
- [ ] Reproduction uses a fixture or a test, not a live authenticated call.
- [ ] Attachments and screenshots were checked for keys, tokens and signed URLs.
- [ ] The runner already has their own access to everything listed, or the task says to stop and ask.
- [ ] The task says what is out of scope: production, rotation, provider dashboards.
- [ ] There is a stop condition for "this step would print or need a secret not listed".
- [ ] The evidence requested doesn't require sharing a secret.
- [ ] A reviewer other than the runner is named.

## Honest limits

- **A checklist doesn't catch everything.** Base64-encoded keys, secrets inside binary attachments, or a value that happens to look like normal text can slip through. A secret scanner in CI helps, but it isn't complete either.
- **Removing the secret doesn't remove the risk.** The runner's agent still works with real staging access through their own credentials. That's the point, but it means their access should be scoped to what the task needs.
- **If a secret was already pasted, rotate it.** Deleting the message isn't enough once a brief has been copied into an agent session.
- **This covers credentials, not customer data.** Personal data in briefs needs the same discipline, with different patterns to look for.
