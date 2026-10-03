---
title: Boat notes, the coffee bar project, and /good-morning
source: conversation
captured: 2026-08-16
tags: [session, boat, patio, second-brain]
---

# Boat notes, the coffee bar project, and /good-morning

Continues the session recorded in `raw/sessions/2026-08-15-tasks-resume-ingest.md`.
The same working session ran from the evening of 2026-08-15 into the morning of
2026-08-16 — the calendar day changed partway through, which mattered more than
expected. See below.

## What happened

**Summary convention.** Every command now ends with **Did / Skipped /
Uncertain / Next**, defined once in `CLAUDE.md` under **Command output** and
referenced from all commands rather than specified separately in each.
`Skipped` and `Uncertain` carry the weight: a diff shows what changed but never
what was deliberately left out or what rested on a guess.

**Laminr correction.** The owner confirmed Laminr is **not** the unnamed
"Stealth Startup" on his résumé — different companies, both current. The
inference had been marked `Unconfirmed` on two pages rather than asserted, and
it was still wrong.

**`/good-morning` added.** Read-only morning catch-up: yesterday from the record,
today's schedule and due items, then decisions actually blocking. It points at
`/digest` and `/todo` rather than doing their work.

**`procedure` page type added.** Needed for the boat notes; none of the existing
types fit "things to remember when doing a recurring task".

**Boat.** An overview page plus four procedures — parking, pickup, launching,
rinsing and cleaning. Only parking and launching got real content.

**Patio coffee bar.** Captured with three images, then promoted to a project
page when the owner confirmed it was multi-step.

## Decisions

- **Procedures never get invented steps.** A procedure is trusted at the moment
  of use, when there is no time to check it. A wrong step is invisible in a way
  a gap is not. Two of the four boat pages are therefore empty stubs saying so,
  rather than plausible checklists.
- **Images are committed to the repo** rather than described in prose. A design
  reference loses most of its value as text, and the conversation carrying it
  does not persist.
- Todos imported or captured from a mockup stay unpriced and unsourced until
  the owner decides; the mockups are labelled references, not products.

## What was learned

**Re-read the clock; do not estimate timestamps.** Three `wiki/log.md` entries
were written by guessing forward from the previous line and ended up in the
future — `23:58` and `00:05` when the real time was `23:50`. The **Time**
section covers *which zone* but not *read it at the moment of writing*.

The same failure nearly hit the boat files. They were first stamped 2026-08-15
from a clock reading taken hours earlier; by the time they were written it was
the morning of the 16th. Caught before commit, and the filename, frontmatter and
the light-failure date were corrected.

**In a long session the date itself can change.** Reusing a time established at
`/bootstrap` is only safe for a short session.

## Left open

The repo now carries 6.6MB of images, almost all one full-size phone photo at
6.1MB. No convention exists for whether to downscale on capture, keep
full-size, or keep images out of git. Committed as-is pending that decision.

Whether the espresso machine and grinder in the coffee bar mockups are equipment
the owner already has, or Gemini's invention. The current-state photo shows a
hot plate and a moka pot. It changes the build substantially and is recorded as
not established.

The owner's theory that the boat's battery switch position prevents the solar
panel charging both batteries is untested, and the switch model is not recorded.
