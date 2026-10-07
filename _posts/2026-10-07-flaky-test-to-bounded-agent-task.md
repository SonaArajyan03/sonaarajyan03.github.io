---
layout: post
title: "From \"this test is flaky\" to a task a coding agent can finish: one hash-seed bug, start to end"
description: "A worked example of turning a flaky test ticket into a bounded coding-agent task: reproduction, before/after brief, acceptance test and the actual failure evidence."
date: 2026-10-07 12:00:00 +0400
---

A flaky test ticket is one of the worst things to hand to a coding agent as written. "Fix the flaky test" has an obvious way to make the ticket go green, and most of those ways delete the information the test was protecting.

This post walks through one small, real example: the test, the ticket as it usually arrives, how to reproduce it on demand, the rewritten brief, and the evidence that decides whether it's done. Everything in the code blocks below was run on Python 3.13.5; the project and ticket are invented for the example.

*Disclosure: I'm involved with Wagglet, a tool for handing tasks between people and agents. Nothing here depends on it. This post was drafted with AI and reviewed by hand.*

## The test

A helper cleans up ticket tags: lowercase, trim, drop duplicates.

```python
# tags.py
def normalize_tags(raw):
    """Lowercase, trim and de-duplicate ticket tags."""
    return list({t.strip().lower() for t in raw if t.strip()})
```

```python
# test_tags.py
def test_normalize_tags():
    assert normalize_tags(["UI", "ui ", "Bug", "bug", "p1"]) == ["ui", "bug", "p1"]
```

It passed for whoever wrote it. In CI it fails "sometimes".

## The ticket as it arrives

> **test_normalize_tags is flaky.** Fails on some CI runs, passes on retry. Please fix.

Give that to an agent and there are at least three ways to close it that make things worse: compare sets instead of lists (the order contract silently disappears), sort the output (changes behaviour for every caller), or mark the test as retry-on-failure. All three produce a green build. None of them answers the real question, which is whether callers depend on tag order.

## Step one belongs to the preparer: make it fail on demand

Before writing a brief, the person preparing the task should be able to make the failure happen whenever they want. Here the cause is that a Python `set` of strings has no stable order: it depends on hash randomization, which changes per process unless `PYTHONHASHSEED` is fixed. So the reproduction is a seed sweep:

```sh
#!/bin/sh
# run_seeds.sh: run the test once per hash seed and count failures.
fail=0; failed=""
for seed in $(seq 0 99); do
  if ! PYTHONHASHSEED=$seed python3 test_tags.py 2>/dev/null; then
    fail=$((fail+1)); failed="$failed $seed"
  fi
done
echo "failed $fail of 100 seeds:$failed"
```

Actual output on the original code (the seed list is cut short here):

```text
failed 85 of 100 seeds: 0 1 2 3 4 6 7 8 9 11 12 13 14 15 17 18 ...
```

And the same input printed under a few fixed seeds:

```text
seed 0: ['bug', 'p1', 'ui']
seed 1: ['ui', 'p1', 'bug']
seed 3: ['p1', 'bug', 'ui']
seed 5: ['ui', 'bug', 'p1']
```

Seed 5 is one of the 15 that pass. That explains "works on my machine": with three tags there are six possible orders and the test expects one of them. `PYTHONHASHSEED=1 python3 test_tags.py` now fails every time, which is the line that goes into the brief.

## The rewritten brief

This is the part of project management for coding agents that's easy to skip: the agent gets a bounded job with a reproduction and a definition of done, and the human supervising the run gets a separate, shorter list of the decisions they can't hand to the agent. Splitting the two is the idea behind Wagglet's [dual-prompt task design](https://wagglet.com/blog/dual-prompt-human-agent-task-design); the brief below is my own example of it.

**For the agent:**

```text
Goal: make normalize_tags() return a deterministic order so
test_normalize_tags passes under any PYTHONHASHSEED.

Reproduce first:
  PYTHONHASHSEED=1 python3 test_tags.py   -> AssertionError (expected)
  ./run_seeds.sh                          -> "failed 85 of 100 seeds"

Intended behaviour: keep the FIRST-SEEN order of tags after
lowercasing and trimming. ["UI", "ui ", "Bug"] -> ["ui", "bug"].

Scope: tags.py and test_tags.py only.
Do not: compare as sets, sort the output, add retries or skips,
or change the expected value in the existing test.

Done when:
  1. ./run_seeds.sh prints "failed 0 of 100 seeds"
  2. a new test pins first-seen order with a different input
  3. the delivery note pastes the actual output of both runs
```

**For the human running it:**

- Confirm with the reviewer before starting that "first-seen order" is the intended contract. If nobody knows, stop; that's a product question, not a coding one.
- Run it with your own repo access and your own agent. If you can't reach the repo, the task waits.
- Check the delivered diff touches only the two files, and that the seed sweep output is pasted, not summarised.

## The evidence that closes it

The fix the brief points at is one line: `dict.fromkeys` keeps insertion order and drops duplicates.

```python
def normalize_tags(raw):
    """Lowercase, trim and de-duplicate ticket tags, keeping first-seen order."""
    return list(dict.fromkeys(t.strip().lower() for t in raw if t.strip()))
```

Plus the new test the brief asked for:

```python
def test_normalize_tags_keeps_first_seen_order():
    assert normalize_tags(["p1", "Bug", "UI", "bug"]) == ["p1", "bug", "ui"]
```

Seed sweep after the change, same script:

```text
failed 0 of 100 seeds:
```

That before/after pair is what the reviewer reads. "Tests pass now" on its own would have been equally true of the set-comparison shortcut.

## Who does what

- **The preparer** reproduces the failure, writes the brief, and gets the order question answered before the task is claimed.
- **The runner** executes it with their own authorized tools: their own repo access and their own agent seat. No shared logins, no borrowed tokens.
- **The reviewer** accepts or rejects based on the pasted evidence and the diff, not on a green badge.

One person can hold two of these roles. The preparer and the reviewer being the same person is common and fine; the runner judging their own delivery is the combination to avoid.

## Checklist for the next flaky test ticket

- Can you make it fail on demand? If not, the first task is investigation, not a fix.
- Does the brief say what behaviour is intended, not just "make it pass"?
- Does it list the shortcuts that are off the table?
- Is "done" a command and its expected output?
- Does the delivery have to include the actual output, before and after?

## Limits

- This one was easy because the cause was deterministic once the seed was fixed. Timing races, shared state between tests and network calls rarely give you a single variable to pin, and the reproduction step can take longer than the fix.
- 100 seeds is evidence, not proof. For order bugs it's convincing; for a race it wouldn't be.
- The brief assumes someone can answer "is first-seen order the contract?" If tag order is part of an API that other teams consume, that answer needs their reviewer too.

The example files (`tags.py`, `test_tags.py`, `run_seeds.sh`) are small enough to recreate from the blocks above.
