# second-brain

A personal knowledge base — memory, notes, and todo lists as markdown files.

Owner is on the **US East Coast (`America/New_York`)**. Everything here is dated
and timed in Eastern — see the **Time** section of `CLAUDE.md`, which every
command follows. Agents run in UTC containers, so this is not automatic and the
rule is written into each command explicitly.

Built on the [Karpathy LLM-wiki pattern](https://github.com/charlie947/ai-second-brain):
raw sources land immutably, an agent compiles them into wiki pages, and queries
read the compiled pages instead of re-reading the sources every time.

## Layout

```
raw/     immutable sources — clips, transcripts, exports, meeting notes
wiki/    compiled knowledge — one page per concept, person, project, decision
  index.md   table of contents
  log.md     append-only operation log
todo/    task lists
daily/   dated notes and digests
```

`CLAUDE.md` and `GEMINI.md` hold the schema the agents follow. `AGENTS.md` points at them for
other tools.

## Commands

Run these in Claude Code or Gemini from the repo root:

| Command | Does |
|---|---|
| `/capture` | Save a source into `raw/` with provenance frontmatter |
| `/ingest`  | Compile new `raw/` files into `wiki/` pages |
| `/query`   | Answer a question from the wiki, with citations |
| `/lint`    | Check links, frontmatter, index integrity |
| `/digest`  | Write today's `daily/` note |
| `/todo`    | Triage and tidy the task lists |
| `/good-morning` | Catch up on yesterday, surface what today needs (read-only) |

Session commands — these bracket a working session rather than acting on the
brain directly:

| Command | Does |
|---|---|
| `/bootstrap <focus>` | Verify tool access, then load context relevant to the focus |
| `/wrap`    | Compile what the session established into the brain, commit to `dev` |
| `/wrap-pr` | Open a PR from `dev` into `main`, described from the real diff |

Every command ends with a short summary — **Did / Skipped / Uncertain / Next** —
so what a command chose *not* to do, and what it was unsure about, is visible
without opening the diff. The shape is defined once in `CLAUDE.md` and `GEMINI.md`.

The Claude commands live in `.claude/commands/` and Gemini skills live in `.agents/skills/`. They are checked in, so they travel with
the repo — clone it anywhere and they are available, and changes to them get
reviewed through the same PR flow as the notes.

## Branches

| Branch | Role |
|---|---|
| `main` | Reviewed state. Only changes by pull request. |
| `dev`  | Working branch. Captures, ingests, and edits land here directly. |

Day-to-day work goes straight to `dev` — capturing a source or ticking off a
todo does not need review. When `dev` has accumulated something worth keeping,
open a PR into `main` with a description of what changed and why.

```
git checkout dev
# ... /capture, /ingest, /todo ...
git push origin dev
# then open a PR: dev -> main
```

The PR template in `.github/` prompts for the provenance checks that matter
here: sources cited, `raw/` unedited, index and log current.

## Using it

Capture liberally, ingest deliberately. `raw/` is cheap and append-only — dump
things in without worrying about organization. The wiki is where the thinking
happens, and it is fine for it to lag behind the raw pile.

Nothing here is generated automatically. The wiki only grows when `/ingest`
runs, which keeps the agent's edits reviewable in git.

## Privacy

This repo is private and contains personal information — calendar, contacts,
health, work. Keep it that way. Do not paste its contents into public issues or
external services.
