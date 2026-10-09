---
layout: post
title: "A producer-supervised build fix: when the art drop breaks the size budget"
description: "A runbook that lets a producer run an agent on a failing web-game build, with real commands, a scope check, stop conditions, and an engineer who still owns the merge."
date: 2026-10-09 14:00:00 +0400
---

Some build failures are perfect for a producer to supervise. The cause is clear, the fix is narrow, and the evidence is a number anyone can read. A common one in web games: an artist drops in a new image, and the build's size check fails.

This post is a runbook for exactly that case. A producer runs a coding agent, the agent makes the fix, and an engineer reviews it before anything merges. I tested every command below in a small toy repo, so the output is real. The image is a stand-in file, not real art.

## The failure

The repo has a size budget: no single file in `dist/` over 400 KB, and no more than 1,500 KB in total. Someone added `assets/ui/chest-open.png` for the reward screen, and the check now fails:

```text
$ npm run size
FAIL dist/assets/ui/chest-open.png 2344 KB > 400 KB
total 2734 KB / 1500 KB
FAIL total over budget
```

The right fix is to re-export that one image smaller. The tempting wrong fix is to raise the budget. Most of this runbook exists to make the wrong fix visible.

## Who does what

A cross functional AI workflow only works if each step has a named owner:

- **The engineer prepares the task.** They write the agent's brief, name the one file that may change, and pick the stop conditions. They also own the merge.
- **The producer runs it** with their own repository access, on their own branch, in their own agent session. They don't need merge rights, and nobody lends them a login.
- **The artist judges the image.** A smaller file that looks wrong is not a fix.

The agent gets a short, strict brief. Allowed: replace `assets/ui/chest-open.png` with a smaller export of the same art. Not allowed: `size-budget.json`, build scripts, package files, CI config, any other asset. Stop and report if the budget can't be met at a size the art still works at.

## The runbook

**1. Reproduce on main before anything changes.** This proves the failure is real and records where you started.

```bash
git status --short          # must print nothing
git rev-parse --short HEAD  # write this down
node --version
npm run build
npm run size                # expect the FAIL lines above
```

If `git status` prints anything, stop. Those are someone's uncommitted changes, and they aren't yours to move.

**2. Branch and start the agent.**

```bash
git switch -c fix/chest-size
```

Paste in the engineer's brief and let the agent work.

**3. Check the result yourself, in this order.**

```bash
npm run build
npm run size
git diff --name-only main...HEAD \
  | grep -v -E '^assets/ui/chest-open\.(png|webp)$' \
  && echo 'STOP: changes outside the agreed file' \
  || echo 'scope ok'
git diff --stat main...HEAD
```

The third command lists every changed file except the one that's allowed. If it prints anything, the agent went outside scope.

## What the scope check caught

In the toy repo I tried the wrong fix first, the way an agent might if its only goal were "make the check pass". It raised `maxFileKB` from 400 to 2,500. The per-file failure disappeared, but the total was still over budget, and the scope check flagged it:

```text
$ npm run size
total 2734 KB / 1500 KB
FAIL total over budget

$ git diff --name-only main...HEAD | grep -v -E ... || echo 'scope ok'
size-budget.json
STOP: changes outside the agreed file
```

Imagine the per-file limit had been the only check. The build would have gone green with a 2.3 MB image still in it. The scope check is what tells a producer, who can't judge the code, that the fix was the wrong kind.

The right fix, a smaller re-export of the same image, gave:

```text
$ npm run size
total 693 KB / 1500 KB

scope ok

$ git diff --stat main...HEAD
 assets/ui/chest-open.png | Bin 2400000 -> 310000 bytes
 1 file changed, 0 insertions(+), 0 deletions(-)
```

## Stop conditions

The producer stops the run and sends the agent's notes to the engineer if any of these happen:

- `git status` wasn't clean at the start.
- The scope check prints anything.
- The agent proposes changing the budget, a build script, or a dependency, even with a good reason.
- The image can't get under 400 KB without the artist rejecting it. That's a budget conversation for the engineer and the art lead, not a run decision.
- The build fails for a reason other than size.

A stop isn't a failure. It's the runbook handing a decision back to the person who owns it.

## Review and sign-off

When the size check passes and the scope check says `scope ok`:

1. The producer puts the old and new image side by side on the reward screen and sends a screenshot to the artist.
2. The artist approves or asks for a different export.
3. The producer opens a pull request with the starting commit, the three command outputs, and the artist's approval.
4. The engineer reviews and merges. The producer does not merge, even with a green build.

Wagglet's guide to [writing one task as agent instructions plus human supervision notes](https://wagglet.com/blog/dual-prompt-human-agent-task-design) explains why the agent's brief and the producer's runbook should be separate documents. This post is a worked example of the producer's half.

## Limits

- **This fits narrow fixes.** A size failure caused by a new dependency or a bundler change isn't a producer-supervised task. Send it to an engineer.
- **The scope check is only as good as its allowlist.** If the engineer names the wrong file, the check passes the wrong change.
- **It doesn't judge quality.** A 310 KB image can still look bad. That's why the artist signs off.
- **The toy repo is simpler than a real one.** Real builds hash filenames, run several checks, and take longer. Adapt the paths and commands, but keep the order: reproduce, branch, check size, check scope, then review.
