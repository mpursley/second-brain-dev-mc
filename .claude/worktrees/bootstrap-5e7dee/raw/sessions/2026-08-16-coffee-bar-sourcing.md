---
title: Sourcing a table for the patio coffee bar, and two access changes
source: conversation
captured: 2026-08-16
tags: [session, patio, coffee, tooling, claude-code]
---

# Sourcing a table for the patio coffee bar

Session opened with `/bootstrap` on the coffee bar. Two access facts changed
underneath it, then the session became a live product search on Amazon.

## Two access changes

**GitHub.** `git fetch` failed at bootstrap with "Repository not found". Both
`gh` and git's credential helper authenticate as `openworldtechio`, not
`mpursley`, and that account could not see the private repo. The owner granted
`openworldtechio` contributor access mid-session and the fetch immediately
succeeded — the API now reports `pull`, `push` and `triage` true, `admin` and
`maintain` false. That is the standard Write role and it covers the entire
second-brain workflow including `/wrap-pr`. He wants to keep `gh` on the
openworld account because most of his projects live there, so this is the
permanent arrangement rather than a workaround.

Side effect: commits to this repo are authored as `Open World Tech`.

**The browser.** A local Chrome is now reachable — `list_connected_browsers`
returned one macOS device with `isLocal: true`, and navigating to `amazon.com`
returned his **signed-in** session ("Buy it again", "Reorder 5 eligible items",
purchase-based recommendations, delivering to Bradenton). This directly
contradicts what was recorded on 2026-08-16 in the morning, which stated flatly
that no bridge to his machine existed. The earlier note was correct when
written; the capability appeared later the same day.

## The 38-inch problem, confirmed and reframed

The project page predicted that 38 in height would be hard to buy. That held up
across roughly 160 results: furniture is 35.4 in (counter) or 41.3 in (bar),
with nothing between.

**But depth turned out to be the harder constraint.** Console and bar tables run
15.7–19.7 in deep, because they are designed to sit behind a couch. None of them
take a 24 in deep machine. The two constraints together rule out the entire
console/sideboard/bar-cabinet category that the earlier todo pointed at.

The category that natively does 60 x 24 with a steel frame, a wood top, casters
and adjustable height is the **garage workbench**. Same industrial visual
language as the mockups, and height becomes a specified feature instead of luck.

**The trap inside that category:** most adjust in fixed notches. The Betterhood
60 x 24 has an ideal footprint but nine levels running 25.5–37.5 in in 1.5 in
steps, so it tops out half an inch under target and cannot reach 38 at all. Read
the adjustment mechanism, not just the range.

## Candidates, with verified specs

Read off the Amazon product pages 2026-08-16, not from search-result titles.

| Item | ASIN | Dimensions | Price | Rating |
|---|---|---|---|---|
| TORACK adjustable workbench | `B0GWVC3RSW` | 60 x 23.5 x 0.75 in top; 29–41 in height | $199.99 | 4.4 |
| Betterhood adjustable workbench | `B0DNJXJN9V` | 60 x 24 in; 25.5–37.5 in, 9 notches | $219.99 | 4.4 |
| Homieasy kitchen island cart | `B0FY1MCYW3` | 20 D x 39.4 W x 35.3 H in | $149.99 | 4.5 (46) |
| WLIVE lift-top coffee table | `B0BJ6WJVG2` | 19.69 D x 41.34 W x 20.2 H in | $69.99 | 4.3 (676) |

**TORACK** is the only one that reaches 38 in cleanly: height is set by screwing
and unscrewing the leg screws, so it is continuous rather than notched, and 38.0
is simply a setting. Powder-coated frame, solid rubberwood top, 2000 lb. Its
weaknesses against the mockup are a thin 0.75 in top and no shelves — it is an
open frame. A butcher-block slab laid on top fixes the look and adds about
1.5 in, so the legs would be set near 36.5 in.

**Homieasy** is the cart the owner liked, and it resolves an ambiguity: he
referred to "the one with the wheels", which matched neither mockup — both have
fixed feet. It was this Amazon listing. It is the closest thing found to the
mockup aesthetic: genuine pipe legs, three tiers, rustic brown, lockable casters
already fitted. His observation that pipe legs are threaded at the bottom and
could take casters does not apply here — it already rolls, and the casters are
inside the 35.3 in height.

**WLIVE** is for the daybed end of the patio, not the coffee bar.

## Concerns raised

**Engineered wood.** Both the Homieasy and the WLIVE are MDF with a printed
woodgrain wrap. A photo shared this session showed the patio is more open to
weather than the earlier note implied — string lights, a curtain, weather
reaching in from one side. In Bradenton humidity, MDF swells at the edges and
delaminates once the wrap lifts. Not a veto at $150 and $70, but it is the
difference between furniture and a two-year purchase. The rubberwood-topped,
powder-coated workbench is the durable option.

**Power.** Every workbench in this category advertises a built-in power strip,
and those are ETL-listed for dry indoor locations only. On an open patio,
running a fridge continuously, near a pool, that item should not be carried
over. The existing extension lead has the same defect. This is an argument for
solving power properly regardless of which table is chosen.

## Left open

**The cart he likes is two-thirds the size he specified.** The Homieasy is
39.4 x 20 x 35.3 against a stated target of 60–64 x 24 x 38. Both cannot be
right: either the target was aspirational, or the Homieasy is a style reference
rather than a product. This is his call and it is unresolved.

The corner still has not been measured, which is what would settle it.

Also unresolved and noted but not investigated: whether a mini fridge fits under
the Homieasy's top shelf. Three tiers inside 35.3 in leaves roughly 14–15 in of
clearance, and most mini fridges are about 19 in tall. The actual shelf gap was
not confirmed.
