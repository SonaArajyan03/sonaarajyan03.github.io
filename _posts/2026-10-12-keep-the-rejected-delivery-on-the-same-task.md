---
layout: post
title: "Keep the rejected delivery on the same task"
description: "A concrete review and rework example that preserves the original scope, runner, failed evidence, and proof of correction."
date: 2026-10-12 00:00:00 +0400
published: true
task_id: W-448
---

AI-assisted work note: the example below uses an original local fixture. Its export checks were run, but its review timeline is illustrative. No real Wagglet ticket was changed, accepted, merged, or deployed.

A rejected agent delivery already has something valuable attached to it: the scope someone agreed to, the work someone attempted, and evidence of where that work failed. Opening a second ticket for the correction can scatter those facts across two records.

Keep the existing task when the requested outcome is still the same. Give the runner a precise reason to return to it, then review the next delivery against that reason. That makes it possible to explain what changed between “this is wrong” and “this is ready for acceptance.”

## Give the reviewer a small outcome to judge

Consider a task named `DEMO-214`: export active release-checklist items in ascending identifier order. Archived items must stay out, and the source records must remain untouched.

The fixture contains these four records, in this order:

```text
REL-030  Review reward copy           active
REL-010  Check landscape layout       active
REL-020  Retired login experiment     archived
REL-040  Verify reconnect message     active
```

The task author prepares that source, the expected output, the permitted change, and the review boundary. An agent may write the implementation and verification steps. The runner executes the work through their own authorized tools and account; the task context can move between teammates without transferring anybody's login or token.

The first implementation copies the records into the export without filtering or sorting them. It produces a valid JSON document, so a check that asks only “does the file parse?” would pass. The delivery still fails the actual request.

## Write feedback that can become the next run's brief

The rejection needs two concrete reasons:

1. `REL-020` is archived and appears in the exported list. Remove archived records from this export.
2. The active records appear as `REL-030`, `REL-010`, `REL-040`. Return them as `REL-010`, `REL-030`, `REL-040`.

A useful review note also keeps the boundary clear: preserve each active record's identifier and label, leave the source data unchanged, and do not redesign the checklist or add a new endpoint.

That is enough to prepare a bounded correction. “The export is bad, fix it” asks the runner to guess which part of the result failed. A broad suggestion such as “make the export more reliable” can turn a two-rule change into an unrelated rewrite.

If the original instructions omitted the ordering rule, the reviewer should say so and correct the brief. The history should distinguish a missed requirement from a requirement introduced after delivery.

## Choose whether the same runner continues

For this example, the runner understands the problem and can finish it. The proposed workflow sends the delivery back on the same task and keeps that runner responsible for the next attempt.

Wagglet's [complete workflow for coding agent task management](https://wagglet.com/blog/wagglet-workflow-request-draft-ticket-delivery) distinguishes sending a delivery back to the existing runner from reopening the work so someone else can claim it. Those choices answer different ownership questions.

Use the route that matches the situation. If the runner has lost access or cannot continue, transferring the next attempt may be appropriate. If the requirement has become a separate piece of work, define that new scope explicitly. Neither situation is a reason to hide the failed delivery.

Keep the old artifact as historical evidence and identify which new artifact is the standing candidate. In this fixture, `attempt-1.json` remains available beside `attempt-2.json`; both name `DEMO-214`.

## Prove the correction against the rejection

The corrected implementation filters archived records, copies the requested fields, and sorts the remaining identifiers. The verifier compares the result with an explicit expected list written separately from that implementation.

These are the actual local check results:

```text
Task: DEMO-214
Attempt 1: FAIL
  Actual:   REL-030, REL-010, REL-020, REL-040
Attempt 2: PASS
  Actual:   REL-010, REL-030, REL-040
  Expected: REL-010, REL-030, REL-040
Source records unchanged: true
```

The verification report records hashes for the source, implementation, and both output files. That ties the reported check to particular artifacts rather than an unspecified “latest version.” The first output's hash differs from the second output's hash, and the failed artifact is retained.

The [source and verification package]({{ '/assets/rework-loop/source.zip' | relative_url }}) includes the small fixture and a dependency-free Node script. It demonstrates this correction only. It does not test arbitrary malformed input, a database export, permissions, large datasets, or a real production checklist.

## Review the new delivery, then decide acceptance

Passing the local checks makes the second attempt a review candidate. It does not supply the authorized human verdict.

The reviewer should check that the new evidence answers both rejection reasons, that the original scope still applies, and that no unrelated change slipped into the correction. Engineering owns the technical judgment for code; the product owner checks whether the requested outcome still serves the intended use. The runner can gather that evidence without becoming the final authority on every question.

Record the decision on the original task. Acceptance, merging a branch, and deploying a revision remain separate facts. This example claims none of them.

The useful history is specific: one task, one failed delivery, two stated reasons, one correction, and a new result awaiting judgment. The reviewer can follow that history without searching a duplicate ticket for the part that explains why the first attempt was returned.
