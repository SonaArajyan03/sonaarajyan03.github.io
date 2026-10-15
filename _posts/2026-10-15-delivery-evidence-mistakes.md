---
layout: post
title: "Five ways delivery evidence lies without anyone lying"
description: "A changed-files list that includes a teammate's work, a green test run that skipped the two tests that mattered, and three more mistakes in the evidence attached to coding-agent deliveries."
date: 2026-10-15 17:10:00 +0400
published: true
task_id: W-440
---

Most bad delivery evidence isn't dishonest. Someone runs a reasonable command, pastes the output, and the output says something slightly different from what everyone assumes it says. The reviewer reads "6 files changed" or "OK", accepts, and finds out later.

Below are five mistakes I see in the evidence attached to coding-agent deliveries: test results, screenshots, changed-file lists and known limits. The first two come with real output from a small toy repository (git 2.50.1, Python 3.13.5). The project is invented; the commands and their output are not.

The setup: an agent worked on a branch called `agent/price-format`, changing how prices are formatted. While it worked, a teammate merged unrelated admin pages into `main`.

## 1. The changed-files list includes someone else's work

The quickest way to list what a branch changed is `git diff main..agent/price-format`. With two dots, git compares the two branch tips, so anything that landed on `main` after the branch started shows up too, as if the branch had deleted it:

```text
$ git diff --stat main..agent/price-format
 app/admin/audit.py    |  1 -
 app/admin/users.py    |  1 -
 app/pricing.py        |  2 +-
 app/settings.py       |  1 -
 docs/changelog.md     |  1 -
 tests/test_pricing.py | 17 +++++++++++++++--
 6 files changed, 16 insertions(+), 7 deletions(-)
```

Four of those six files are the teammate's. With three dots, git compares the branch to the point where it split from `main`, which is what the delivery actually changed:

```text
$ git diff --stat main...agent/price-format
 app/pricing.py        |  2 +-
 tests/test_pricing.py | 17 +++++++++++++++--
 2 files changed, 16 insertions(+), 3 deletions(-)
```

A reviewer reading the first list either panics about admin pages being deleted, or learns to skim the list. Both are bad. **Fix:** use three dots, or `git merge-base` explicitly, and paste the command along with its output.

## 2. "All tests pass" hides the tests that didn't run

The agent's delivery note said the tests pass. They do:

```text
$ python3 -m unittest -v
test_cents (tests.test_pricing.T.test_cents) ... ok
test_large_amount (tests.test_pricing.T.test_large_amount) ... skipped 'needs CURRENCY_TESTS=1'
test_negative_refund (tests.test_pricing.T.test_negative_refund) ... skipped 'needs CURRENCY_TESTS=1'
test_whole_dollars (tests.test_pricing.T.test_whole_dollars) ... ok

Ran 4 tests in 0.000s

OK (skipped=2)
```

Two of the four tests were skipped, and they're the two that exercise edge cases of the change. Run them:

```text
$ CURRENCY_TESTS=1 python3 -m unittest
(output trimmed to the failure lines)
FAIL: test_large_amount (tests.test_pricing.T.test_large_amount)
AssertionError: '$1234567.89' != '$1,234,567.89'
FAIL: test_negative_refund (tests.test_pricing.T.test_negative_refund)
AssertionError: '$-3.50' != '-$2.50'
FAILED (failures=2)
```

The refund case is a real bug, not a formatting preference: `-250 // 100` is `-3` in Python, so a $2.50 refund displays as `$-3.50`. "OK" was accurate and still told the reviewer the wrong thing. **Fix:** paste the full summary line, including `skipped=`. For any skipped test that touches the change, either run it or list it under known limits with the reason.

## 3. The screenshot doesn't say what it's a screenshot of

A screenshot of the new price label is good evidence that the label *can* look right. Without context it can't tell the reviewer which build it came from, which data was on screen, or whether it was a real page or a mocked state. **Fix:** caption every screenshot with the commit, the URL or state it shows, and how it was captured, and include the case that was most likely to break. Here that's a refund, not $19.99.

## 4. The evidence is for an earlier commit

Agents often run tests, make one more "small" change, and deliver. The test output in the note belongs to the commit before the last one. **Fix:** put the commit hash at the top of the evidence, and have the runner re-run the checks on exactly that commit before delivering. If the hash in the note doesn't match the branch tip, the evidence is about a different delivery.

## 5. Known limits written as reassurance

"Should work in Safari." "Large amounts are probably fine." Those read like limits but work like approval. A known limit should say what wasn't checked and what could go wrong, so the reviewer can decide whether to check it themselves: "Not tested: amounts over $9,999 (no thousands separator yet); negative amounts (tests skipped)." In this example, that sentence would have pointed straight at both failures.

## Who does what

- **The preparer** writes the task and says which evidence is required, including which tests must run.
- **The runner** executes it with their own repository access and their own agent seat, gathers the evidence on the final commit, and doesn't edit it to look cleaner.
- **The reviewer** judges the delivery on that evidence. If the evidence is weak, they send it back on the same task with a specific reason, rather than accepting it or quietly redoing the work.

Keeping all of that on one task, with delivery and acceptance recorded as separate steps, is most of what it takes to manage human and AI work in one system without losing track of who claimed what. Wagglet's [request-to-delivery workflow](https://wagglet.com/blog/wagglet-workflow-request-draft-ticket-delivery) separates those steps the same way.

## A delivery-evidence template

```text
Commit:          <hash of the branch tip being delivered>
Changed files:   git diff --stat <base>...<branch>   (paste output)
Tests:           <exact command>  (paste the full summary, incl. skipped=)
Skipped tests:   <name> - <why> - <touches this change? yes/no>
Screenshots:     <file> - <commit, URL/state, how captured>
Not checked:     <what, and what could go wrong>
```

## Limits

- The toy repository has six files. In a real repository the two-dot list can run to hundreds of files, which makes the mistake easier to miss, not harder.
- Skipped tests aren't always a problem. Some are skipped for good reasons; the point is that the reviewer sees them.
- A template can be filled in mechanically. It helps a careful runner and reviewer; it doesn't replace either.
