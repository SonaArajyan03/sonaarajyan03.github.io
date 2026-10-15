---
layout: post
title: "Seven mistakes that make a declined AI task impossible to pick up again"
description: "A deferred single sign-on task, logged badly and then logged well. The seven mistakes in the first version, and what each one costs the next person."
date: 2026-10-15 13:00:00 +0400
published: true
task_id: W-578
---

A task that stops before any work ships still leaves a record. When the record is bad, the next person repeats the whole investigation. When it's good, they start where the last person stopped.

Below is one deferred task, logged twice: first the way it usually happens, then fixed. The task and the people are made up, but every mistake in the first version is one I've seen in real tickets.

## The task

> Add single sign-on to the internal admin panel. Everyone should log in with their company account. Remove the shared admin password.

Narek claims it and opens it with a coding agent, using his own laptop and his own repository access. The agent finds the login route, drafts an OIDC callback, and then stops. Registering the app with the identity provider needs admin rights in the provider's console, which Narek doesn't have. The brief also doesn't say which roles to map.

## The first log

```text
Blocked - no access to SSO. Not clear what roles they want.
Will pick up later. Agent did some work on branch.
```

It's three lines, written in good faith, and it contains seven problems.

## Mistake 1: "blocked" instead of a decision

"Blocked" doesn't say whether the task should still happen. **Declined** means it shouldn't go ahead as written, so it goes back to the author with a reason. **Deferred** means the work is right but can't be done now or by this person. Those two need different follow-ups, so name the one you mean.

Here it's deferred. Nobody disputes that the panel needs SSO.

## Mistake 2: "no access" without the resource, the level or the grantor

"No access to SSO" sends the next person on the same search. The useful version names the resource (the identity provider's admin console), what Narek has (none), what's needed (permission to register an app), and who can grant it (IT).

The tempting shortcut is to ask an IT admin to sign in on your laptop "for one minute", or to use the existing shared admin password the task is meant to remove. Neither is a fix. The access gap is a fact for the log, and someone who has the access either grants it or does that step.

## Mistake 3: leaving the scope question with the agent

"Not clear what roles they want" is accurate, but it doesn't say who answers. The agent had proposed mapping everyone in the engineering group to "admin". That's a reasonable guess and a security decision. Quote the sentence from the brief, write out the readings, and name the author as the one who answers.

## Mistake 4: an alternate owner who doesn't know they're one

The log doesn't name an owner at all. When logs do, they often name a team that has never heard of the task. Say whether you're **handing it over** (they own it now) or **pointing at them** (you keep it and need one thing from them), and tell them.

## Mistake 5: hiding what changed

"Agent did some work on branch" sounds harmless. But the reviewer can't tell whether the branch is safe to delete, whether it touched the login route that's in production, or whether it's half a migration. Write the branch name and what's on it, or "nothing".

## Mistake 6: closing the ticket and opening a new one later

"Will pick up later" usually turns into a closed card and, weeks later, a new one titled "SSO for admin panel (again)". The history, the agent's draft and the scope question all stay behind on the dead ticket.

Keep it on the same record. AI agent task management software can support this directly. In Wagglet's [request-to-delivery workflow](https://wagglet.com/blog/wagglet-workflow-request-draft-ticket-delivery), unpublishing an unfinished task turns it back into a private Draft and keeps its history. Republishing restores the same Ticket with its original age, instead of announcing it as brand-new work. Whatever tool you use, the rule is the same: a deferral pauses the record, it doesn't end it.

## Mistake 7: no revisit date

"Later" has no owner. A deferral without a date and a condition just sits there quietly. Write what has to be true before anyone restarts, and when someone looks again.

## The fixed log

```text
DECISION LOG  task: SSO for the internal admin panel
2026-10-16 10:20  runner: Narek (with coding agent)

decision:        deferred
missing access:  identity provider admin console - app registration.
                 Narek has: none. Needs: register one OIDC app.
                 Can grant or do it: IT (Lusine)
unclear scope:   "Everyone should log in with their company account."
                 reading A: all staff get panel access, roles later
                 reading B: only the support and engineering groups,
                            mapped to viewer / admin
                 answered by: task author (Ani, support lead)
alternate owner: IT (Lusine) - pointing only; Narek keeps the task
changed:         branch sso-oidc-draft: callback route + config
                 stub, not deployed. Shared password untouched.
unblock when:    Ani picks a reading AND IT registers the app
                 (or grants Narek rights to do it)
revisit:         2026-10-20
```

## Who does what

- **The task author prepares the work.** Ani wrote "everyone", so she answers which reading she meant.
- **The runner executes with their own authorized tools.** Narek works from his own access and writes the log. The agent drafted code and spotted the role question, but Narek confirms what's in the log.
- **The reviewer judges.** They check that the deferral reason holds. Could IT have granted a scoped permission instead? Is the branch safe to keep? Then they decide whether the task waits or goes to someone else.

## Checklist

- [ ] The log says declined or deferred.
- [ ] Missing access names the resource, the current level, the needed level and the grantor.
- [ ] Nobody borrowed a session, password or token to get past the gap.
- [ ] The unclear sentence is quoted, with each reading and who answers.
- [ ] The alternate owner knows, and the log says handing over or pointing only.
- [ ] "Changed" lists the branch and what's on it, or says nothing.
- [ ] The task stays on the same record, with an unblock condition and a revisit date.

## Limits

This is one invented example. A log doesn't grant access or answer the role question. It only puts them in front of the people who can. For a five-minute task, one line saying who should take it is enough. And the log only records what Narek believed on the day. If IT says the app registration belongs to someone else, add a new entry rather than rewriting this one.
