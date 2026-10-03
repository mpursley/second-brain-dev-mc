---
name: ingest
description: >-
  Compile new raw/ sources into wiki/ pages
  Trigger this skill when the user runs the "/ingest" command.
---

Compile sources from `raw/` into `wiki/` pages. Read `GEMINI.md` first if you
have not this session.

Scope: $ARGUMENTS (if empty, find everything in `raw/` not yet cited by any wiki
page — grep `wiki/` for each raw path to determine this).

For each unprocessed source:

1. Read it fully.
2. Decide what durable knowledge it contains. Not everything deserves a page —
   a source with nothing worth compiling gets logged as ingested and skipped.
3. Search `wiki/` for existing pages on the topic **before creating anything**.
   Updating an existing page beats creating a near-duplicate.
4. Write or rewrite the page(s) at `wiki/<topic>/<slug>.md` with full
   frontmatter, adding this source to the `sources:` list and bumping `updated:`.
5. Link to related pages. If you reference something with no page yet, link it
   anyway and add the path under **Stubs** in `wiki/index.md`.

Rules:

- Never state a fact that is not in a source or already in the wiki.
- When sources conflict, present both and cite each. Do not silently pick one.
- Rewrite pages in place. No inline changelog sections — git holds history.
- Mark uncertainty explicitly (`Unconfirmed:`, `As of YYYY-MM-DD:`).

Finish by:

- Adding every new page to the right section of `wiki/index.md`.
- Appending to `wiki/log.md`: `<date> <time>  ingest  <n> sources -> <n> pages`.

End with the four-heading summary from **Command output** in `GEMINI.md` —
**Did / Skipped / Uncertain / Next**.

- **Did** — pages created versus updated, sources consumed.
- **Skipped** — sources you read and judged not worth a page, and why. A source
  that produced nothing is a normal result, but say so; silence looks like an
  oversight.
- **Uncertain** — conflicts between sources you left unresolved, and every
  inference that reached a page.
- **Next** — usually nothing. Propose something only if a real gap opened.
