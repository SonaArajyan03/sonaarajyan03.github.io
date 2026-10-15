---
layout: post
title: "The third attempt broke the first fix: keep every rejection reason as a check"
description: "A rework loop on one task, four agent attempts, two rejection reasons, and the regression that only showed up because the first reason was still being checked."
date: 2026-10-15 17:00:00 +0400
published: true
task_id: W-449
---

When an agent delivery gets sent back, the reason usually lives in a comment: "dates sort wrong", "crashes when there's no due date". The next attempt is checked against the newest comment, because that's what everyone remembers. The older reasons quietly stop being checked.

That's how a task can pass review on its third attempt while undoing the fix from its first one. This post walks through a small example of that, and the one habit that caught it: every reason a delivery is sent back becomes a check that runs on every later attempt of the same task.

The team, task and timeline are invented. The four attempts, the checks and every line of output are real, run with Python 3.13.5.

## The task

One task, kept open the whole time: *order the "This week" list by due date, earliest first.* The sample data the preparer attached is four real-looking rows:

```json
[
  {"id": "T-7",  "title": "Update app store screenshots", "due": "2026-10-9"},
  {"id": "T-12", "title": "Renew SSL certificate",        "due": "2026-10-10"},
  {"id": "T-3",  "title": "Write release notes",          "due": null},
  {"id": "T-21", "title": "Rotate staging API keys",      "due": "2026-10-2"}
]
```

Two details in that data matter later: the dates aren't zero-padded, and one task has no due date at all. The brief mentioned neither.

Roles stay the same across all four rounds. The preparer wrote the task and owns the brief. The runner executes it with their own repository access and their own agent seat; nobody shares a login or a key to get a round done faster. The reviewer judges each delivery and decides whether it goes back.

## Round 1: string sorting

The first delivery sorted the dates as strings. As text, `"2026-10-10"` comes before `"2026-10-2"`, so the order was wrong. The reviewer sent it back with one reason, and the reason went into a checks file as code instead of staying in a comment:

```python
# R1 (added after attempt 1): dates compare as dates, not strings.
def r1_dates_compare_as_dates(order):
    got = [i for i in ids(order(TASKS)) if i != "T-3"]
    assert got == ["T-21", "T-7", "T-12"], f"dated tasks in order {got}"
```

```text
$ python3 rejection_checks.py attempts/attempt1.py
FAIL r1_dates_compare_as_dates: AssertionError: dated tasks in order ['T-12', 'T-21', 'T-7']
```

## Round 2: a crash nobody asked about

Attempt 2 parsed each date into a real `date`. That fixes the ordering, but `T-3` has no due date. With only R1 in the checks file, the run looked like this:

```text
$ python3 rejection_checks.py attempts/attempt2.py
FAIL r1_dates_compare_as_dates: AttributeError: 'NoneType' object has no attribute 'split'
```

This is a new problem, not a failed fix. The reviewer sent it back again with a second reason, and that reason became a second check:

```python
# R2 (added after attempt 2): a task with no due date is listed last and doesn't crash the view.
def r2_no_due_date_goes_last(order):
    got = ids(order(TASKS))
    assert got[-1] == "T-3", f"last task is {got[-1]}"
```

## Round 3: the regression

Attempt 3 handled the missing date by sorting on `(t["due"] is None, t["due"] or "")`. That stops the crash and puts `T-3` last. It also puts the comparison back on strings:

```text
$ python3 rejection_checks.py attempts/attempt3.py
FAIL r1_dates_compare_as_dates: AssertionError: dated tasks in order ['T-12', 'T-21', 'T-7']
PASS r2_no_due_date_goes_last
```

If the review of round 3 had only checked the latest reason, this would have passed. R2 is green, and the list *looks* sorted at a glance. The only reason it failed is that R1 was still running.

## Round 4: both reasons hold

```text
$ python3 rejection_checks.py attempts/attempt4.py
PASS r1_dates_compare_as_dates
PASS r2_no_due_date_goes_last
```

The reviewer accepts on that output plus the diff. The task's history now reads as one story: four deliveries, two reasons, one regression caught, one accepted result. Nobody opened "Fix sorting v2" or "Due-date crash" as separate tickets. Those would have split the reasons across three places, and the check that caught round 3 would most likely have lived in a ticket nobody was looking at anymore.

This is the part of trying to manage human and AI work in one system that's easy to get wrong. A send-back should keep the same task and the same runner, with the reason attached, rather than starting over. Wagglet's [request-to-delivery workflow](https://wagglet.com/blog/wagglet-workflow-request-draft-ticket-delivery) draws that line explicitly: sending a delivery back keeps the runner, while reopening clears the claim. The checks file is the piece that makes the history useful on the next round.

## The rework-loop checklist

When a delivery comes back:

- **Write the reason as something that can fail.** "Dates sort wrong" becomes a check with the expected order. If you can't write the check, the reason isn't specific enough yet.
- **Add it to the task's checks file. Never replace an earlier one.** Every attempt runs every check.
- **Paste the full check output into the delivery note,** including the checks that passed.
- **Keep the same task and the same runner** unless the runner can't continue. A new runner gets the checks file, not a summary.
- **After the third send-back, stop and read the brief.** Here, both reasons came from facts the brief left out: unpadded dates and missing due dates. The preparer should add them to the brief on the same task, so the history shows they were missing from the start and not added after delivery.

## Limits

- **Checks only cover what someone thought to write down.** A fifth attempt could break something neither reason describes, like the order of two tasks due on the same day.
- **Four rows of sample data is thin.** It was enough to show three different failures, but real lists have time zones, duplicate dates and stranger formats.
- **The checks are only as honest as the person running them.** They belong in the repository and should be run by the reviewer too, not just reported by the runner.
- **A checks file can grow into a second test suite.** Once the task is accepted, move the checks that still matter into the project's real tests and delete the rest.
