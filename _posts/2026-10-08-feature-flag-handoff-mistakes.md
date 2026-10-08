---
layout: post
title: "Six ways a delegated feature-flag task turns into a rollout nobody approved"
description: "Common mistakes when a coding agent implements a feature behind a flag, a staged rollout brief that keeps implementation, approval and deploy apart, and a small check that catches flag changes in a PR."
date: 2026-10-08 12:00:00 +0400
---

A feature flag is supposed to separate shipping code from exposing it. Hand the implementation to a coding agent and that separation is easy to lose without anyone deciding to lose it. The agent does what the task says, the task says "add the feature behind a flag", and somewhere between the branch and production the flag ends up on for people who were never meant to see it.

Below are six mistakes that cause this, a staged brief that avoids them, and a short script that catches the most mechanical one. The project and flag names are invented; the script and its output are real, run on Python 3.13.5.

## The roles

Three roles, which can belong to fewer than three people but should each be written down:

- **The task author** prepares the work: outcome, scope, test plan, and the flag's starting state.
- **The runner** executes it with their own authorized tools: their own repo access, their own agent, their own staging login.
- **The reviewer** judges whether the delivered revision meets the brief. A separate **release owner** decides who sees it and when.

This is what human supervised AI execution looks like on a release: the agent writes code, people make every exposure decision.

## Mistake 1: the flag value lives in the repo

Many teams keep flag defaults in a config file next to the code. Then the implementation PR can change rollout, and merging it is the rollout. Nobody reviews "25% to 50%" in a diff that also adds 400 lines of feature code.

**Avoid it:** implementation PRs don't change any flag value. Exposure changes go in their own PR, opened by the release owner. A check in CI makes this automatic (below).

## Mistake 2: "default off" except in one environment

An agent turns the new flag on in `dev` so it can see the feature, and that's reasonable during the run. But it gets committed, and the next person to copy `dev` settings to a preview environment ships it there.

**Avoid it:** the brief says the flag starts `off` in every environment, including dev. The runner can turn it on locally without committing that.

## Mistake 3: only the "on" path is tested

The agent's tests prove the new feature works. Nobody checks that the old behaviour still works with the flag off, and that's the path most users are on for the next two weeks.

**Avoid it:** the evidence list asks for both states, plus one off → on → off pass in a single session.

## Mistake 4: acceptance read as approval to ship

The reviewer accepts the delivery, which means "this revision is correct behind the flag". Someone reads that as "approved", and the flag goes up the same afternoon.

**Avoid it:** the brief names the release owner separately, and the acceptance line says what it covers.

## Mistake 5: cleanup in the same task

A tidy agent sees the old code path and removes it "since the flag replaces it". Now there is nothing to roll back to.

**Avoid it:** removing the flag and the old path is a later task, created after the rollout is finished.

## Mistake 6: lending the agent flag access

"Just let it check staging" turns into a flag-service token in the agent's environment. Now an agent can change exposure, which is the one thing this whole setup exists to prevent.

**Avoid it:** the runner checks staging with their own login and reports what they saw. No account or token goes to the agent.

## The staged brief

For an invented `reports_bulk_export` flag:

```text
T-431  Bulk export for admin reports, behind reports_bulk_export

Stage 1  Implement   runner + their agent
  - New flag reports_bulk_export, "off" in dev, staging, production
  - No change to any other flag value; no flag removed
  - Tests: export works with flag on; report page unchanged with flag off
  - Evidence: branch, test output, screenshots of both states,
    one off -> on -> off pass on the runner's local build

Stage 2  Accept      reviewer
  - Accepting means: correct behind the flag at revision <sha>
  - It does not approve exposure

Stage 3  Merge and deploy dark   release owner
  - Deploy with the flag off everywhere; confirm reports look unchanged

Stage 4  Expose      release owner, separate PR or flag service
  - staging on -> internal admins -> 10% -> all
  - Watch: export job failures and report page errors at each step
  - Rollback: flag off

Later    Clean up    new task, after stage 4 has held for two weeks
```

## The check

This runs in CI against the base and head versions of `flags.toml` and fails if the PR changes who sees any flag:

```python
# flag_guard.py: fail an implementation PR that changes who sees a flag.
# Usage: python3 flag_guard.py BASE/flags.toml HEAD/flags.toml
import sys, tomllib

def load(path):
    with open(path, "rb") as f:
        return tomllib.load(f)

base, head = load(sys.argv[1]), load(sys.argv[2])
problems = []
for name, envs in head.items():
    if name not in base:
        for env, value in envs.items():
            if value != "off":
                problems.append(f"new flag {name}: {env} = {value!r}, must start 'off'")
        continue
    for env, value in envs.items():
        old = base[name].get(env)
        if value != old:
            problems.append(f"{name}: {env} {old!r} -> {value!r} is a rollout change")
for name in base.keys() - head.keys():
    problems.append(f"flag {name} removed: cleanup is a separate task")

for p in problems:
    print("FAIL", p)
print("ok" if not problems else f"{len(problems)} problem(s)")
sys.exit(1 if problems else 0)
```

I ran it on a head with two of the mistakes above planted in it: an existing flag bumped from 25% to 50%, and the new flag left on in dev.

```text
FAIL search_typo_tolerance: production '25%' -> '50%' is a rollout change
FAIL new flag reports_bulk_export: dev = 'on', must start 'off'
2 problem(s)
```

The exit code was 1. With both fixed, it printed `ok` and exited 0.

The release owner's own exposure PR would fail this check too, by design. That PR gets an explicit override label instead, so the check doesn't stop rollouts. It just stops them from showing up inside implementation work.

## Limits

- **It only sees one file.** Flags kept in a hosted flag service never show up in a diff. There the protection is permissions: implementation roles can't edit production targeting.
- **Mistakes 3 to 5 need people.** No script can tell that a reviewer meant "correct" and someone heard "ship it". The brief makes those lines explicit. It doesn't enforce them.
- **Stages add time.** For a copy change behind a flag, stages 3 and 4 can be the same person on the same afternoon. Keep the split for changes where a wrong exposure is costly.

Wagglet's [request-to-delivery workflow guide](https://wagglet.com/blog/wagglet-workflow-request-draft-ticket-delivery) treats delivery, acceptance, merge and deployment as separate facts with separate owners, which is the same split this brief applies to a single flag.
