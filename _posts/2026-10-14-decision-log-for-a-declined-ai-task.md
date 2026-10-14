---
layout: post
title: "Write down why the agent task didn't start"
description: "A short decision log for a declined or deferred AI task: what access was missing, which part of the scope was unclear, and who should own it next."
date: 2026-10-14 16:30:00 +0400
published: true
task_id: W-573
---

Most tasks that never start leave very little behind. A card goes back to the column it came from, someone writes "blocked" in a comment, and a week later another teammate picks it up and repeats the same investigation, finds the same missing permission, and puts it back too.

The work done before saying no is useful. Someone read the brief, tried to set up the environment, and found out exactly what was in the way. A decision log keeps that, so the next person starts from the answer instead of the question.

## Declined and deferred are different answers

It helps to name the decision before writing the reason.

- **Declined** means the task shouldn't go ahead as written. The brief asks for the wrong thing, duplicates other work, or conflicts with a decision someone already made.
- **Deferred** means the work is right, but it can't be done now or by this person. Usually it's missing access, a scope question nobody has answered, or an owner who is somewhere else.

They lead to different follow-ups. A declined task goes back to the person who wrote it, with a reason they can argue with. A deferred task needs an "unblock when" line, and someone has to check it again.

## Three reasons cover most of them

When an AI-assisted task stalls before any code changes, the reason is almost always one of these three. Each one needs a specific line in the log.

**Missing access.** Write down the exact resource and the permission level you have, for example "read-only on the gateway config repo". "No access" on its own sends the next person on the same search. Missing access is also not something to work around. If the runner doesn't have the permission, the fix is for an authorized person to grant it or take the task. Borrowing someone's token, or pasting their session into the agent, isn't a fix.

**Unclear scope.** Quote the sentence in the brief that has two readings and write both readings out. "Limit to 5 per minute" could mean per IP, per account, or both, and each one is a different change. The task author answers this, not the agent.

**Alternate owner.** If the work belongs to another team, name the team and a person if you know one. Then say whether you're handing the task over or just pointing at them.

## Who writes which part

The log works when each role writes the part it actually knows.

- The **task author** prepares the work: the brief, the scope, the definition of done. If the log says the scope is unclear, the author answers.
- The **runner** is the person who claims the task and does the work, with an agent if it's an agent task, using their own authorized accounts and tools. The runner does the readiness check and writes the log. An agent can draft the entries, but the runner confirms them, because only the runner knows what they actually tried.
- The **reviewer** judges whether a delivered result is acceptable. For a declined or deferred task, the reviewer or author decides whether the reason holds and what happens next.

## A worked example

This one is made up, but it's the shape these usually take.

The task: "Rate-limit the password-reset endpoint to 5 requests per minute." Ani claims it and opens it with a coding agent. Before changing anything, they do a readiness check: they find where the limit would go, check what they can change there, and confirm what "5 per minute" means.

They stop after twenty minutes and write this on the task:

```text
DECISION LOG  task: Rate-limit the password-reset endpoint
2026-10-14 11:40  runner: Ani (with coding agent)

decision:        deferred, not declined
missing access:  the limit belongs in the API gateway config.
                 Ani has read-only access to that repo.
unclear scope:   "5 per minute" could be per IP, per account, or both.
                 The brief doesn't say which.
tried:           read the gateway docs and the current rules file.
                 An app-level limit would duplicate a gateway rule,
                 so the agent didn't write one.
changed:         nothing. No branch pushed.
alternate owner: Platform team (Davit owns gateway config)
unblock when:    the author picks the scope, AND either Ani gets
                 write access or Platform takes the task.
revisit:         2026-10-16 standup
```

Three things make this useful. "Changed: nothing" tells the reviewer there's no half-finished branch to clean up. The "tried" line saves the next runner from writing the same app-level patch the agent decided against. And "unblock when" has two conditions joined by AND, so nobody gets write access and then starts while the scope question is still open.

## Where the log should live

Put the log on the task itself, not in a chat thread. The next runner opens the task, not the chat.

Most AI agent task management software already has the states this needs. It doesn't always ask for the reason. Wagglet's [request-to-delivery workflow](https://wagglet.com/blog/wagglet-workflow-request-draft-ticket-delivery) is one example. A reviewer who rejects a published request has to leave a reason, and the request goes back to its owner. Unpublishing an unfinished task turns it back into a private Draft, releases the runner, and keeps the history. A deferred task should get the same treatment: the reason stays attached to the same record, and nobody opens a second ticket.

## Checklist

- [ ] The decision is named: declined or deferred.
- [ ] Missing access names the resource and the permission level the runner has.
- [ ] Unclear scope quotes the brief and lists each reading.
- [ ] The alternate owner is a team, and a person if known.
- [ ] "Changed" says what was touched, or "nothing".
- [ ] "Unblock when" says what has to be true before anyone restarts.
- [ ] There's a revisit date or meeting.
- [ ] No secrets, tokens or credentials are pasted into the log.

## Limits

A decision log doesn't grant access or answer the scope question. It only makes the question visible to the person who can. On a five-minute task it's too much. One line saying who should take it is enough there.

The log also records what the runner believed at the time. Sometimes the alternate owner says the work isn't theirs either. When that happens, add an entry to the same log instead of rewriting the first one, so the history shows the task was passed along twice.
