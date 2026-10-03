---
title: Scaffolding the second-brain repo and its session commands
source: conversation
captured: 2026-08-16
tags: [session, second-brain, tooling]
---

# Scaffolding the second-brain repo

The repo `mpursley/second-brain` existed on GitHub but was completely empty —
zero commits, no branches, no default branch resolved. This session turned it
into a working knowledge base and set up the commands to operate it.

## What was decided

**Pattern.** Adopted the Karpathy LLM-wiki pattern, at the owner's request, for
compatibility with other tooling built on it. The core is `raw/` (immutable
sources) + `wiki/` (compiled pages) + `CLAUDE.md` (the schema). `todo/` and
`daily/` were added as extensions and are marked as such in the schema so the
compatible core stays identifiable.

**Branches.** `main` is the reviewed state and changes only by pull request;
`dev` is the working branch that takes captures and ingests directly. A PR
template at `.github/pull_request_template.md` prompts for provenance checks
specific to this repo — sources cited, `raw/` unedited, index and log current.

**Commands live in the repo.** `.claude/commands/` is checked in rather than
kept in `~/.claude/`, so the commands travel with a clone and changes to them
are reviewed through the same PR flow as the notes. Nine exist: `/capture`,
`/ingest`, `/query`, `/lint`, `/digest`, `/todo`, plus the session commands
`/bootstrap`, `/wrap`, `/wrap-pr`.

**Session command behaviour**, chosen by the owner when asked:

- `/wrap` commits and pushes to `dev` on its own rather than staging for review.
- `/bootstrap` always probes the repo and GitHub, but probes Calendar, Gmail,
  and Drive only when the session focus implies them — with a rule to probe
  rather than skip when the focus is ambiguous.

## What was established about the environment

MCP tools are deferred: schemas are not loaded until fetched with `ToolSearch`,
so a tool absent from the listing is not proof it is unavailable.

Connectors are unstable across a session. Google Calendar, Gmail, Drive, Slack
and IFTTT were absent at the start, appeared mid-session, then dropped. The
GitHub server disconnected and reconnected. Any command that depends on a
connector has to re-search rather than trust an earlier negative result.

The container clock runs UTC while the owner is America/New_York. At the time of
writing, container time was `2026-08-16 02:52 UTC`, which is `2026-08-15 22:52`
locally. Date-stamped files written from container time can land on the wrong
day during the evening offset window.

## Open at the end of the session

The owner set the default branch to `main` partway through, after it had
defaulted to the session branch `claude/second-brain-calendar-access-irn7ko`.
That branch is now redundant — its commit is an ancestor of `main`.

Nothing has been ingested yet beyond this session record. `wiki/` was empty
before this wrap.

## Provenance note

The Karpathy pattern was reconstructed from secondary sources — the
`charlie947/ai-second-brain` README and `SKILL.md`, the `Astro-Han/karpathy-llm-wiki`
README, and web search summaries. **The original gist was not read**; two
attempts to fetch hosted copies were blocked by the network egress proxy. The
structural claims (`raw/` + `wiki/` + `CLAUDE.md`, ingest/query/lint) were
consistent across every secondary source, but the detail has not been checked
against the primary.

Sources consulted:

- https://github.com/charlie947/ai-second-brain
- https://github.com/Astro-Han/karpathy-llm-wiki
