---
name: capture
description: >-
  Save a source into raw/ with provenance frontmatter
  Trigger this skill when the user runs the "/capture" command.
---

Capture a source into `raw/`. Read `GEMINI.md` first if you have not this session.

Source: $ARGUMENTS

Steps:

1. Get the content. If it is a URL, fetch it and convert to markdown, stripping
   nav chrome and ads but not rewriting the prose. If it is pasted text or a
   local path, use it as-is.
2. Pick a topic folder under `raw/`. Reuse an existing one if it fits — list
   `raw/` before inventing a new topic. If nothing fits and you are unsure, use
   `raw/inbox/`.
3. Get today's date in the owner's zone — **East Coast, `America/New_York`** —
   never from the bare container clock, which runs UTC and is a day ahead every
   evening:

   ```bash
   TZ=America/New_York date "+%Y-%m-%d"
   ```

4. Write to `raw/<topic>/YYYY-MM-DD-<slug>.md` with this frontmatter:

   ```yaml
   ---
   title: <original title>
   source: <url | email | conversation | manual>
   captured: <today, YYYY-MM-DD>
   tags: [<topic>, ...]
   ---
   ```

5. Append one line to `wiki/log.md`: `<date> <time>  capture  <path>`, with the
   timestamp in Eastern.

Do **not** touch `wiki/` — capture only lands the source. Compiling is `/ingest`.

End with the four-heading summary from **Command output** in `GEMINI.md` —
**Did / Skipped / Uncertain / Next**. For a capture that is usually short: the
path written, what the source says in a line, anything you stripped as chrome,
and whether it is worth an `/ingest` now.
