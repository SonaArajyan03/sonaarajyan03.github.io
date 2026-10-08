---
layout: post
title: "Your teammates use different AI tools. Check what the task depends on before you pick the runner."
description: "Choosing who runs an AI task when the team mixes Claude Code, Codex and editor assistants: find the tool-specific setup hiding in the repo, then decide who runs it and who reviews."
date: 2026-10-05 12:00:00 +0400
---

Most small teams don't standardise on one AI coding tool. One person lives in Claude Code, another uses the Codex CLI, a third works in an editor with an assistant built in. That's fine, until a task has to move from one person to another.

The usual advice for choosing who runs a task is sound. Check access first, then whether the person can recognise a bad result, then whether they're available. This post is about the step that advice tends to skip: finding out whether the task quietly depends on one particular tool.



## The three roles stay the same

Whatever tools are involved:

- **The preparer** writes the task: outcome, constraints, the check that decides it's done.
- **The runner** executes it with their own authorized tools, meaning their own repo access and their own agent account.
- **The reviewer** decides whether the result is acceptable.

That's how you delegate an AI task without sharing an account. The task moves to someone who can legitimately do it. Nobody's login, API key or usage allowance moves with it. If the only way to run a task is with somebody else's account, the task isn't ready to hand over.

## Where tool lock-in hides

A brief can look tool-neutral and still depend on one tool's setup in the repository. Common places:

- **Instruction files.** Claude Code reads `CLAUDE.md`. Codex reads `AGENTS.md`. Cursor has its own rules files. If the repo's testing conventions live in only one of these, a runner using a different tool won't see them.
- **Project tool config.** An MCP server configured for one tool (for example in a project `.mcp.json` for Claude Code) isn't automatically available in another.
- **Custom commands and hooks.** "Run `/test-web`" means nothing to a tool that doesn't have that command defined.
- **The brief's own wording.** Instructions written in one tool's vocabulary ("use plan mode first") assume that tool.

Which files each tool reads changes over time, and some tools read more than one. Check current docs for the tools your team actually uses. A quick inventory of the repo is a good start:

```bash
# Tool-specific setup at the repo root (adjust for monorepo packages)
ls -d CLAUDE.md AGENTS.md .claude/commands .mcp.json .cursor/rules .cursorrules 2>/dev/null
```

Anything this lists is a question for the preparer: does the task depend on it?

## A worked example

**Task:** move the date-formatting tests in the `web` package from Jest to Vitest. Done when `npm test -w web` passes on Vitest, no test was deleted, and the coverage report for `src/dates/` is no lower than before.

**The repo:** has a `CLAUDE.md` with two conventions the migration needs. Tests use a fixed `TZ=UTC`, and snapshot files live next to the test, not in `__snapshots__`. There's also a custom `/test-web` command in `.claude/commands/`. There is no `AGENTS.md`.

**Preparer:** Gus, the web lead. He knows what "done" means but is fully booked.

**Candidates:**

- **Dana** uses Claude Code, has write access to the repo, and knows the `web` package well. She's out until Thursday.
- **Eli** uses the Codex CLI, has write access, comes from QA, and is free today.
- **Fay** uses an editor assistant and knows the date logic best. She has read-only access to this repo.

**Decision:**

1. **Access first.** Fay can't push a branch. That rules her out as runner. It doesn't rule her out of the task, though: she's the best person to judge whether date behaviour changed. She becomes the **reviewer**.
2. **Expertise.** Dana and Eli could both recognise a broken test run. Eli's QA background makes him good at noticing a test that passes for the wrong reason, which matters in a migration.
3. **Tool fit.** This is where it gets specific. Eli's Codex won't read `CLAUDE.md`, so it won't know about `TZ=UTC` or where snapshots go, and `/test-web` doesn't exist for him. Dana's setup has all of that, but she isn't here.
4. **The options:**
   - Wait for Dana. That's two days, for a task Eli could finish today.
   - Make the task portable. Gus copies the two conventions into the brief and replaces `/test-web` with the plain command it runs (`TZ=UTC npm test -w web`). If the team wants this to stick, the repo owner can approve an `AGENTS.md` with the same two lines. That's a repo change, so it's a separate decision.
   - **Not an option:** Dana lending Eli her Claude Code login so the "right" tool runs it.

They chose to make the task portable. Eli runs it today with his own Codex setup. Fay reviews the date behaviour, and Gus accepts the merge.

## The checklist

Before assigning a task on a mixed-tool team:

- [ ] Every candidate runner has their own access to everything the task touches.
- [ ] The repo inventory above has been checked, and the preparer knows which listed items the task depends on.
- [ ] Conventions the agent needs are in the brief, not only in one tool's instruction file.
- [ ] Custom commands are replaced with the plain commands they run.
- [ ] Required MCP servers or integrations are named, and the runner has their own working connection to each.
- [ ] Someone who can judge the result, who isn't the runner, is named as reviewer.
- [ ] Borrowing anyone's account is off the table, written down so nobody has to ask.

## Honest limits

- The same brief won't produce the same work in two tools. Models differ, and so do their defaults and how they handle long tasks. A portable brief makes the task possible to run elsewhere, not identical.
- Copying conventions into briefs duplicates them. If they change in `CLAUDE.md` and not in the brief template, the brief goes stale. A shared file both tools read solves that, but it's a repo decision.
- Some tasks really do need one tool, for example because they depend on a specific integration. Then the runner list is shorter, and that's the correct answer.

The Wagglet field note on [closing team skill gaps with AI task handoffs](https://wagglet.com/blog/close-team-skill-gaps-with-ai-task-handoffs) covers the broader idea: an expert prepares the technical side so another teammate's judgment and access can carry a bounded task. Tool differences are one more gap a good brief can close.
