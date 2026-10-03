# Second Brain — Schema

This repo is a personal knowledge base built on the Karpathy LLM-wiki pattern:
immutable sources in `raw/`, compiled knowledge in `wiki/`, and this file as the
schema the agent follows.

The principle: **do not re-read raw sources on every question.** Compile what is
learned into `wiki/` pages once, then read those. Knowledge compounds; retrieval
stays cheap.

Owner: Matt Pursley (`mpursley@gmail.com`). **East Coast — `America/New_York`.**

---

## Time

Read this before writing any date or time, anywhere in the repo.

**The owner is on the US East Coast (`America/New_York`).** Eastern observes
daylight saving: `EDT` (UTC−4) roughly March to November, `EST` (UTC−5)
otherwise. Never hardcode an offset — the zone name handles the switch.

**The execution container runs UTC.** These are different calendar days for four
to five hours every evening. A note stamped from container time at 9pm Eastern
lands on tomorrow's date.

So: **convert before stamping anything.** Never read the bare container clock.

```bash
TZ=America/New_York date "+%Y-%m-%d"        # date for filenames and frontmatter
TZ=America/New_York date "+%Y-%m-%d %H:%M"  # timestamp for wiki/log.md
```

This governs:

- `daily/YYYY-MM-DD.md` filenames — "today" means today in Eastern.
- `captured:`, `created:`, `updated:` frontmatter.
- `due:` and `done:` in `todo/`.
- `wiki/log.md` timestamps.
- `raw/<topic>/YYYY-MM-DD-<slug>.md` filenames.

**Reading times is the same problem in reverse.** Calendar events, email
timestamps, and file modification times arrive in assorted zones — several of
the owner's calendars are stored in UTC and two in `America/Vancouver`. Convert
everything to Eastern before presenting or recording it, and when a time could
be misread, write the zone explicitly (`2:00pm ET`).

When a source states a time with no zone and you cannot resolve it, record it
verbatim and mark it `Unconfirmed:` rather than assuming Eastern.

---

## Layout

```
raw/        Immutable source material. Append-only — never edit after landing.
wiki/       Compiled pages. The agent creates and rewrites these freely.
  index.md  Global table of contents. Every wiki page is listed here.
  log.md    Append-only operation log. One line per ingest/lint/digest.
todo/       Task lists.            (extension — not part of the base pattern)
daily/      Dated notes + digests. (extension — not part of the base pattern)
```

Topic folders inside `raw/` and `wiki/` are created on demand. Do not
pre-create empty ones.

---

## `raw/` — immutable

- Path: `raw/<topic>/YYYY-MM-DD-<slug>.md`
- Everything that lands here is a source: article clips, transcripts, exported
  threads, meeting notes, pasted email, calendar dumps.
- **Never edit a file in `raw/` after it is committed.** Corrections go in the
  wiki page that cites it, not in the source. If a source is superseded, add a
  new one and note the supersession in the wiki page.
- Keep the original text. Light cleanup (stripping nav chrome, ads) is fine;
  rewriting is not.
- Every raw file starts with the frontmatter below so provenance survives.

```yaml
---
title: Original title of the source
source: https://... | email | conversation | manual
captured: YYYY-MM-DD
tags: [topic, topic]
---
```

---

## `wiki/` — compiled

- Path: `wiki/<topic>/<slug>.md` — lowercase, hyphenated, no dates in the name.
  A wiki page is a living document, not an event.
- One page per concept, entity, person, project, or decision. When a page grows
  past roughly 300 lines or starts covering two things, split it and link.
- Rewrite pages in place. History lives in git, not in the prose — do not keep
  "update: ..." changelog sections inside a page.

### Frontmatter

```yaml
---
title: Human-readable page title
type: concept | entity | person | project | decision | synthesis | comparison | procedure
tags: [topic, topic]
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources:
  - raw/<topic>/YYYY-MM-DD-<slug>.md
---
```

`sources` is required on any page that makes a factual claim. A page with no
sources is either the agent's own synthesis (mark `type: synthesis`) or a stub.

**`procedure`** is for things to remember when doing a recurring task — parking
the boat, closing up the house. Checklists, in the owner's own order, written so
they work when read in a hurry.

Two rules matter more here than anywhere else in the wiki:

- **Never invent a step.** A procedure is trusted at the moment of use, when
  there is no time to check it. A plausible-sounding step that was guessed is
  worse than a gap, because a gap is visible and a wrong step is not.
- **Record why, where the why is not obvious.** A step whose reason is known
  survives; one that reads as arbitrary gets skipped. Keep it to a clause.

### Linking

- Link between wiki pages with relative markdown links: `[Laminr](../entities/laminr.md)`.
- Cite a source inline where the claim is made, not in a footer dump.
- If a page mentions an entity that has no page yet, link it anyway and add the
  path to the **Stubs** section of `wiki/index.md`. Broken-link-then-fill is the
  intended growth path.

### Voice

Write for the owner, in plain declarative prose. State what is known. Mark
uncertainty explicitly (`Unconfirmed:`, `As of YYYY-MM-DD:`) rather than
hedging every sentence. No filler preambles.

---

## Operations

The four commands live in `.gemini/commands/`. Each one ends by appending a line
to `wiki/log.md`.

| Command | Does |
|---|---|
| `/capture` | Drop a source into `raw/` with frontmatter. Does not touch `wiki/`. |
| `/ingest` | Read unprocessed `raw/` files, write/update `wiki/` pages, refresh `index.md`. |
| `/query`  | Answer a question from `wiki/`, citing pages. Falls back to `raw/` only if the wiki is thin — and then proposes an ingest. |
| `/lint`   | Check index integrity, broken links, missing frontmatter, orphan pages, stale `updated` dates. Fix what is safe; report the rest. |

`/digest`, `/todo` and `/good-morning` are the extension commands — daily rollup,
task triage, and the morning catch-up. `/good-morning` is read-only: it reports
yesterday and today, then points at `/digest` or `/todo` rather than doing their
work.

### Session commands

These bracket a working session rather than acting on the brain directly.

| Command | Does |
|---|---|
| `/bootstrap <focus>` | Read-only preflight: verify tool access, load context for the focus. |
| `/wrap` | Compile what the session established into `raw/sessions/` and `wiki/`, commit to `dev`. |
| `/wrap-pr` | Open a PR from `dev` into `main`, described from the actual diff. |
| `/wrap-and-pr` | Combine `/wrap` and `/wrap-pr`: compile session, commit to `dev`, and open a PR into `main`. |

A session ideally opens with `/bootstrap` and closes with `/wrap`. `/wrap-pr`
runs when `dev` has accumulated enough to review.

MCP tools are deferred — their schemas load via `ToolSearch`, and connectors
drop and reconnect mid-session. Treat a missing tool as "search again" before
treating it as unavailable.

### Command output

**Every command ends with a summary.** It is the only part the owner reads
without opening files, so it carries the things a diff cannot say — what was
skipped, what is uncertain, what is worth doing next.

Four headings, in this order. Drop any that would be empty rather than writing
"none".

| Heading | Contents |
|---|---|
| **Did** | What changed, with paths. Distinguish created from updated. Counts, not prose. |
| **Skipped** | What was deliberately left out, and why. Silence here reads as "nothing was left out" — so say it when something was. |
| **Uncertain** | Anything marked `Unconfirmed:`, inferred rather than sourced, or not verified. Every inference that reached a page belongs here. |
| **Next** | The single most useful next action, or nothing. Not a menu. |

Rules:

- Keep it to roughly ten lines. A summary longer than the change it describes is
  a failure.
- Do not restate the command's own steps back. The owner knows what `/ingest`
  does; he does not know what it found.
- **Report what happened, not what was intended.** If a step failed or was
  skipped, that goes in the summary, not a claim of success.
- State counts you actually checked. Counting tasks or pages by hand and being
  wrong is worse than not counting.

### Ingest rules

1. Never invent a fact that is not in a source or already in the wiki.
2. Prefer updating an existing page over creating a near-duplicate. Search
   `wiki/` for the topic before creating.
3. When two sources conflict, say so on the page and cite both. Do not silently
   pick a winner.
4. After ingesting, add every new page to `wiki/index.md`.

---

## `todo/` — extension

- `todo/inbox.md` is the unsorted capture point. Anything can land there.
- Project-scoped lists live at `todo/<project>.md`.
- Format is GitHub task list syntax so it renders everywhere:

```markdown
- [ ] Thing to do  <!-- due:2026-08-20 -->
- [x] Finished thing  <!-- done:2026-08-16 -->
```

- Completed items stay in place for two weeks, then move to the bottom under
  `## Done` on the next `/todo` run.
- A todo that turns out to be a project gets a `wiki/projects/<slug>.md` page,
  and the todo links to it.

## `daily/` — extension

- Path: `daily/YYYY-MM-DD.md`. One per day, created on demand.
- Holds the day's calendar, scratch notes, and anything captured but not yet
  filed. `/digest` writes here.
- Daily notes are **not** durable knowledge. Anything worth keeping gets
  promoted into `wiki/` by `/ingest`, and the daily note links to it.

---

## Branches

- `main` — reviewed state, changed only by pull request.
- `dev` — working branch. Commit captures, ingests, and todo edits here directly.

Default to `dev` for everything. Do not commit to `main`; open a PR from `dev`
instead, and write the description from what actually changed — which sources
landed, which pages were created versus updated, and any judgment calls made
during ingest.

## Standing reminders

Things the owner has asked to be told, rather than left to remember. Surface
them when the topic comes up — do not wait to be asked.

**He can SSH into his home laptops.** Two MacBooks run Tailscale and hold his
projects between them. Whenever something is blocked because a cloud container
cannot reach it — a signed-in website, a local file, a device on the home
network, a real browser, anything wanting a desktop — remind him that he can
**SSH into a laptop and set up remote control from there**. He lost an afternoon
to a Google Cloud VM before remembering this, and asked to be reminded.

The wider goal is running everything from his phone while away from the desk, so
"use the laptop" means *reach it remotely*, not *go and sit at it*. See
[remote dev access](wiki/projects/remote-dev-access.md).

## Conventions

- Dates are `YYYY-MM-DD`, always. Times are America/New_York — see **Time** above.
- Filenames: lowercase, hyphens, no spaces, no underscores.
- Markdown only. No proprietary formats in the tree.
- The repo is private and holds personal data. Do not push its contents to any
  external service, paste it into a public issue, or include it in a PR body.
