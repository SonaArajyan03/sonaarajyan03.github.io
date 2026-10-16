---
layout: post
title: "A producer-run build fix with a stop condition they can check without reading code"
description: "A runbook for a producer supervising a coding agent on a broken localization build: the commands, a scope check that catches a fix in the wrong place, and what the engineer's review still caught."
date: 2026-10-16 16:15:00 +0400
published: true
task_id: W-480
---
A producer can supervise a build fix when the fix is small, the commands are written down, and someone else owns the code review. The part that usually goes unsaid is how the producer knows when to stop. "If anything looks wrong, stop" doesn't work for someone who can't read the diff.

This post is a runbook for one case, with a stop condition the producer can check without reading code. The repository and the failure are invented. Every command and output below is from a real run (Python 3.13.5, git 2.50.1).

## The failure

A small web game keeps its menu text in `strings/en.json`, `es.json` and `de.json`. The build runs a check that every locale parses and has the same keys as English, then copies the files into `dist/`. A translator pushed new German strings, and the build broke:

```text
$ python3 build.py
strings check FAILED: strings/de.json: Illegal trailing comma before end of object: line 5 column 28 (char 123)
```

The release is tomorrow, the engineer who owns the build is in a planning meeting, and the producer has a coding agent and a checkout of the repository.

## Who does what

This is expert supervised AI execution, with the expertise split across people:

- **The engineer prepares the work.** They write the agent's brief, the producer's runbook and a 23-line scope check. They name the one file that may change. They review and merge.
- **The producer runs it** with their own repository access and their own agent session, on their own branch. They don't need merge rights, and nobody lends them a login.
- **The localization owner judges the strings.** A file that parses isn't necessarily a correct translation.

## The runbook

```text
1. git checkout -b fix/de-strings   (from the failing commit e206639)
2. python3 build.py                 -> expect the trailing-comma failure above
3. Give the agent its brief. Let it work until it says it's done.
4. python3 build.py                 -> must print "build ok"
5. python3 scope_check.py e206639 strings/de.json
                                    -> must print "scope ok"
6. Push the branch and assign the engineer as reviewer.

STOP and message the engineer, without fixing anything yourself, if:
- step 2 fails differently,
- step 5 prints STOP,
- the agent asks to change build.py, scripts/, or any config,
- step 4 still fails after the agent's second try.
```

Step 5 is the stop condition the producer can check. The engineer wrote it for this task:

```python
"""Run by the producer after the agent stops. Written by the engineer for this task.

Usage: python3 scope_check.py <base-commit> <allowed path> [<allowed path> ...]
Fails if anything outside the allowed paths changed (committed, staged, unstaged
or untracked), or if the branch has more than one commit on top of the base.
"""
import subprocess, sys

def git(*a):
    return subprocess.run(["git", *a], capture_output=True, text=True, check=True).stdout.split()

base, allowed = sys.argv[1], set(sys.argv[2:])
changed = set(git("diff", "--name-only", base)) | set(git("ls-files", "--others", "--exclude-standard"))
commits = git("rev-list", f"{base}..HEAD")
outside = sorted(changed - allowed)
print("changed:", ", ".join(sorted(changed)) or "nothing")
if outside:
    print("STOP: changed outside the allowed list:", ", ".join(outside))
if len(commits) > 1:
    print(f"STOP: {len(commits)} commits on top of {base}, expected 1")
if not outside and len(commits) <= 1:
    print("scope ok")
sys.exit(1 if outside or len(commits) > 1 else 0)
```

## The first attempt

The agent's first change made the build pass:

```text
$ python3 build.py
warning: skipping strings/de.json: Illegal trailing comma before end of object: line 5 column 28 (char 123)
strings check ok: 3 files, 3 keys each
build ok: 3 string files in dist/
```

A producer reading only the last line would have pushed this. The scope check didn't let it through:

```text
$ python3 scope_check.py e206639 strings/de.json
changed: scripts/check_strings.py
STOP: changed outside the allowed list: scripts/check_strings.py
```

The agent had edited the check to skip files it couldn't parse. The build "passed" and shipped the broken file anyway:

```text
$ python3 -c "import json; json.load(open('dist/de.json'))"
json.decoder.JSONDecodeError: Illegal trailing comma before end of object: line 5 column 28 (char 123)
```

The producer didn't need to understand any of that. The check said STOP and named a file that wasn't on the list. They reset the branch to the failing commit, told the agent that only `strings/de.json` may change, and ran it again.

## The second attempt

```text
$ python3 build.py
strings check ok: 3 files, 3 keys each
build ok: 3 string files in dist/

$ python3 scope_check.py e206639 strings/de.json
changed: strings/de.json
scope ok
```

Both checks pass, so the producer pushes and hands over to the engineer. The diff is one line, the trailing comma.

## What the review still caught

The engineer read the whole file, not just the diff, and found something no check in this repository looks for. The translator's file has `"menu.play"` twice:

```text
$ grep -c '"menu.play"' strings/de.json
2
$ python3 -c "import json; print(json.load(open('strings/de.json'))['menu.play'])"
Los geht’s
```

Python's JSON parser keeps the last duplicate without a warning, so the German Play button now says "Los geht’s" instead of "Spielen". That might be what the translator meant, or a leftover. It's the localization owner's call, so the engineer merged the build fix and asked them. Fixing it silently would have been a translation decision made by the wrong person.

## Why the split matters

The agent got a detailed brief: the failing command, the one allowed file, and "don't change the check". The producer got the short runbook above. Wagglet's piece on [the dual prompt](https://wagglet.com/blog/dual-prompt-human-agent-task-design) describes the same pattern: one task with detailed instructions for the agent and a short runbook for the person supervising it, covering the checks and decisions only a human can make.

## Limits

- The scope check catches a change in the wrong place. It can't tell a good change to `de.json` from a bad one. That's why the engineer still reviews.
- It trusts git. Ignored files and anything outside the repository aren't checked.
- The strings check doesn't detect duplicate keys. Adding that is a separate task for the engineer, not something to slip into this fix.
- One failure, one repository. A build that fails for reasons the engineer didn't anticipate should go back to the engineer, not into a longer runbook.
