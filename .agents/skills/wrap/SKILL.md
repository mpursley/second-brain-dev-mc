---
name: wrap
description: >-
  Wrap up the session — compile what was learned into the brain and commit
  Trigger this skill when the user runs the "/wrap" command.
---

End of session. Capture what is worth keeping. Emphasis: $ARGUMENTS

Read `GEMINI.md` first if you have not this session — what you write must match
the schema.

---

## 0. Get the date right

Before writing any filename or frontmatter:

```bash
TZ=America/New_York date "+%Y-%m-%d %H:%M %Z"
```

The owner is on the **US East Coast (`America/New_York`)**; the container runs
UTC. Wraps happen at the end of a session, which is often evening — exactly when
the two are on different calendar days. **Never stamp from the bare container
clock.** Use the Eastern date for the session filename, every `captured:` and
`updated:` field, any `due:` tag, and the `wiki/log.md` timestamp.

If the session already established the local time at `/bootstrap`, reuse it, but
re-check if the session has run long.

## 1. Decide what is durable

Go back over the session and separate:

- **Durable** — decisions made and why, facts established, how something works,
  conventions agreed, things that turned out to be true or false.
- **Ephemeral** — the back-and-forth, tool output, dead ends already corrected,
  anything the next session can re-derive in seconds.

Only the durable half lands in the brain.

**A session with nothing durable is a normal outcome.** Say so and stop — do
not manufacture a page to justify the command. Committing noise is worse than
committing nothing, because it costs every future read.

## 2. Land the session record

Write `raw/sessions/YYYY-MM-DD-<slug>.md` — the source, per the schema:

```yaml
---
title: <what the session was about>
source: conversation
captured: YYYY-MM-DD
tags: [session, <topic>]
---
```

Body: what the session set out to do, what actually happened, decisions and
their reasoning, and what was left open. Prose, not a transcript. Do **not**
paste the conversation — a reader six months out needs the conclusions, not the
path. Aim for well under a page.

If more than one session lands on the same date, suffix the slug.

## 3. Compile the durable parts into `wiki/`

Same rules as `/ingest`:

- Search `wiki/` for existing pages before creating anything. Update beats
  duplicate.
- Add the session file to each page's `sources:` and bump `updated:`.
- Never state a fact that is not in a source or already in the wiki.
- Rewrite in place — no changelog sections, git holds history.
- Link related pages; add unwritten ones under **Stubs** in `wiki/index.md`.

## 4. Sweep the loose ends

- Open threads and follow-ups → `todo/inbox.md`, or the right project list.
- If the session produced a next step with a date, tag it `<!-- due:YYYY-MM-DD -->`.
- Add new pages to `wiki/index.md`.
- Append to `wiki/log.md`: `<date> <time>  wrap  <n> pages, <n> todos`.

## 5. Commit

Commit to `dev` — never to `main`. If the repo is on `main`, switch first.

Write a real commit message: what was learned, not "session wrap". Then
`git push -u origin dev`.

## 6. Summarise

End with the four-heading summary from **Command output** in `GEMINI.md` —
**Did / Skipped / Uncertain / Next**.

For a wrap specifically:

- **Did** — session record path, pages created versus updated, todos added.
- **Skipped** — what you judged ephemeral and left out. This matters more here
  than in any other command: the owner cannot see what you discarded, and
  discarding the wrong thing is the main way a wrap goes wrong. Name it.
- **Uncertain** — every inference that reached a page, and anything you marked
  `Unconfirmed:`.
- **Next** — whether `/wrap-pr` is worth running, and if an open PR already
  tracks `dev`, say that instead of proposing a second.

If the session had nothing durable, the summary is one line saying so.
