---
description: Answer a question from the wiki, with citations
argument-hint: <question>
---

Answer from the compiled wiki. Read `CLAUDE.md` first if you have not this session.

Question: $ARGUMENTS

Steps:

1. Start at `wiki/index.md` to orient, then grep and read the relevant `wiki/`
   pages. This is a grep-and-read system at 50K–100K token scale — no vector
   search, no embeddings.
2. Answer directly and concretely, citing the pages you used as relative links.
3. If the wiki does not cover it, say so plainly rather than guessing. Then
   check whether `raw/` has relevant uncompiled sources — if it does, answer
   from those and **propose an `/ingest`** so the knowledge lands in the wiki
   for next time.
4. If nothing in the repo covers it, say that. Do not answer from general
   knowledge and present it as though it came from the brain.

Do not modify any files. `/query` is read-only.

---

## Summary

The answer is the output, so keep the trailer to two or three lines rather than
the full four headings:

- **Read** — the pages you answered from, as links.
- **Uncertain** — anything in the answer that rests on a page marked
  `Unconfirmed:` or on inference rather than a cited source. If the whole answer
  does, say so before the answer, not after.
- **Next** — only if the wiki was thin and an `/ingest` would fix it.
