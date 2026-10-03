---
title: second-brain (this repo)
type: project
tags: [second-brain, tooling, meta]
created: 2026-08-15
updated: 2026-08-16
sources:
  - raw/sessions/2026-08-16-second-brain-scaffold.md
  - raw/sessions/2026-08-15-tasks-resume-ingest.md
  - raw/sessions/2026-08-16-boat-coffee-bar-good-morning.md
---

# second-brain

`mpursley/second-brain` — a private GitHub repo holding memory, notes, and todo
lists as markdown. Built on the [LLM wiki pattern](../concepts/llm-wiki-pattern.md).

Scaffolded 2026-08-15 from a completely empty repo.

## Layout

```
raw/      immutable sources — never edited after commit
wiki/     compiled pages — rewritten in place, git holds history
todo/     task lists (extension)
daily/    dated staging notes (extension)
```

`todo/` and `daily/` are deliberate extensions beyond the base pattern and are
marked as such in `CLAUDE.md`, so the compatible `raw/` + `wiki/` + `CLAUDE.md`
core stays identifiable to other tooling.

## Branches

`main` is the reviewed state and changes only by pull request. `dev` is the
working branch — captures, ingests, and todo edits commit there directly.

The default branch was initially the session branch
`claude/second-brain-calendar-access-irn7ko`, because that was the first branch
pushed to an empty repo. The owner set it to `main` on 2026-08-15. That session
branch is now redundant; its commit is an ancestor of `main`.

`.github/pull_request_template.md` prompts for provenance checks specific to this
repo: new pages cite their sources, `raw/` was not edited after the fact,
`wiki/index.md` and `wiki/log.md` are current.

The flow was first exercised on 2026-08-15 with PR #1. The provenance checks are
meant to be run, not assumed — `git log --diff-filter=M -- raw/` is the one that
actually catches an immutability violation.

## Commands

Checked into `.claude/commands/` rather than `~/.claude/`, so they travel with a
clone and changes to them are reviewed through the same PR flow as the notes.

| Command | Role |
|---|---|
| `/capture` | source → `raw/` |
| `/ingest` | `raw/` → `wiki/` |
| `/query` | answer from `wiki/`, with citations |
| `/lint` | links, frontmatter, index health |
| `/digest` | today's `daily/` note |
| `/todo` | triage task lists |
| `/good-morning` | read-only catch-up on yesterday and today |
| `/bootstrap <focus>` | read-only preflight + load context for the focus |
| `/wrap` | compile the session into the brain, commit to `dev` |
| `/wrap-pr` | open `dev` → `main`, described from the real diff |

Every command ends with a summary — **Did / Skipped / Uncertain / Next** —
defined once under **Command output** in `CLAUDE.md` rather than restated in
each command. `Skipped` and `Uncertain` are the two that earn their keep: a diff
shows what changed, never what was left out or what rested on a guess.

Two behaviours were chosen explicitly by the owner rather than defaulted:

- `/wrap` commits and pushes to `dev` on its own; it does not stage for review.
- `/bootstrap` always probes the repo and GitHub, but probes Calendar, Gmail,
  and Drive only when the session focus implies them. When the focus is
  ambiguous it probes rather than skips, and a skipped connector is explicitly
  not treated as a verified one.

## Related

- [LLM wiki pattern](../concepts/llm-wiki-pattern.md) — the pattern this follows
- [Claude Code environment](../concepts/claude-code-environment.md) — tooling constraints that shaped the commands
- [Google calendars](../entities/google-calendars.md) — what `/digest` and `/bootstrap` read
