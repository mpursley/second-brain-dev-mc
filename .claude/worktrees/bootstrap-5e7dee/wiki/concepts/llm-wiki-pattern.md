---
title: LLM wiki pattern
type: concept
tags: [second-brain, knowledge-management]
created: 2026-08-15
updated: 2026-08-15
sources:
  - raw/sessions/2026-08-16-second-brain-scaffold.md
---

# LLM wiki pattern

A pattern published by Andrej Karpathy in April 2026 as a gist: instead of
retrieving from raw documents on every question, an agent incrementally compiles
a persistent wiki of markdown files and reads that.

The point is that knowledge compounds while retrieval stays cheap. It is a
deliberate move away from RAG — no embeddings, no vector search, no confidence
scores. Grep and read, at a scale where the whole wiki fits in a context window.

## Structure

Three parts:

- `raw/` — immutable source material. Clips, transcripts, exports, notes.
  Never edited after landing.
- `wiki/` — agent-generated pages. Concepts, entities, people, projects,
  syntheses, comparisons. Rewritten freely in place.
- `CLAUDE.md` (or `agents.md`) — the schema the agent follows.

Plus two files that keep the wiki navigable: `wiki/index.md` as the global table
of contents, and `wiki/log.md` as an append-only record of operations.

## Operations

Three core: **ingest** (compile new sources into pages), **query** (answer from
the wiki with citations), **lint** (check index integrity, links, health).

Variants in the wild add a capture step and a daily digest. `/capture`,
`/ingest`, `/query`, `/lint`, `/digest`, `/todo` is the set
[this repo](../projects/second-brain.md) settled on.

## Why it was chosen here

The owner asked for it by name, for compatibility with other tooling built on
the pattern. That constraint is why `todo/` and `daily/` are marked as
extensions rather than folded into the core — a tool that understands the
pattern should still recognise this repo.

## Confidence

**Unconfirmed as of 2026-08-15:** the original gist has not been read. The
structure above was reconstructed from secondary sources — the
`charlie947/ai-second-brain` and `Astro-Han/karpathy-llm-wiki` repos, plus
search summaries. Two attempts to fetch hosted copies of the gist were blocked
by the network egress proxy.

Every secondary source agreed on the structural claims, so the core is likely
right. The details — exact frontmatter fields, page-type taxonomy — are this
repo's own choices and should not be assumed to match the original.
