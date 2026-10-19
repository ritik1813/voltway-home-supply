---
title: "MCB, RCCB and distribution board sizing for a flat: a plain-language guide"
description: "What each device in your flat's distribution board does, how to choose MCB ratings for lights, sockets, ACs and geysers, why you need an RCCB and whether to split it, how many ways your DB should have, and which brands to buy in Gurgaon."
date: 2026-10-19
category: Electrical
keywords: MCB rating for AC, RCCB for home, distribution board size flat, 32A MCB geyser, SPN DB 3bhk, MCB vs RCCB, havells legrand schneider MCB
related: electrical-material-supplier-gurgaon, electrical-material-list-3bhk-flat-gurgaon, polycab-vs-havells-vs-finolex-house-wire
---

The distribution board is the one part of a flat's electrical system that owners never look at and electricians rarely explain. It is also the part that decides whether a fault trips one circuit or burns a wall. This guide explains what goes in a flat's DB, how the ratings are chosen, and the mistakes we see on lists from Gurgaon sites.

## What each device does

**Isolator.** A switch that cuts the whole flat. No protection, just a way to turn everything off safely. Rated 40A or 63A for a flat.

**MCB (miniature circuit breaker).** Protects a circuit against overload and short circuit. If a socket circuit draws more than its MCB rating for long enough, or shorts, the MCB trips. One MCB per circuit.

**RCCB (residual current circuit breaker), also called ELCB or RCD.** Detects current leaking to earth, which is what happens when a person touches a live part or a geyser element cracks. Trips in milliseconds at 30 mA, well below the level that stops a heart. It does not protect against overload; that is the MCB's job.

**RCBO.** An MCB and RCCB in one device, per circuit. More expensive, used where you want a leaking geyser to trip only its own circuit.

**Distribution board (DB).** The enclosure with a busbar that holds all of the above. Sold by the number of "ways" (MCB positions) and as SPN (single phase and neutral, for flats) or TPN (three phase, for houses with a three-phase connection, lifts and large loads).

## Sizing MCBs by circuit

The MCB rating must protect the wire, not the appliance. The rule is: MCB rating at or below the wire's safe current, and above the circuit's normal load. For a flat wired as described in our [3BHK material list](/blog/electrical-material-list-3bhk-flat-gurgaon/):

| Circuit | Wire | MCB | Notes |
|---|---|---|---|
| Lighting (one per 8 to 10 points) | 1.5 sq mm | 6A | Type B or C curve |
| 6A socket circuit | 1.5 sq mm | 10A or 16A | 16A only if wire is 2.5 sq mm |
| 16A power sockets, kitchen counter | 2.5 sq mm | 16A or 20A | One circuit per kitchen wall is sensible |
| Geyser 2 to 3 kW | 2.5 sq mm | 16A or 20A | Dedicated circuit each |
| 1 to 1.5 ton split AC | 2.5 or 4 sq mm | 20A | Dedicated circuit each |
| 2 ton split AC | 4 sq mm | 25A or 32A | Use C curve for compressor inrush |
| Washing machine, dishwasher, oven | 2.5 sq mm | 16A or 20A | Dedicated where possible |

Two common mistakes: a 32A MCB on 2.5 sq mm wire because "the AC is big" (the wire will cook before the MCB trips), and 6A MCBs on socket circuits that then trip every time the iron and kettle run together.

## Curves: B, C and D

MCBs come in trip curves. **B** trips at 3 to 5 times rated current, good for lighting and resistive loads. **C** trips at 5 to 10 times, tolerating the inrush of motors and compressors, so use C for AC, refrigerator and pump circuits. **D** is for industrial loads and does not belong in a flat. Most electricians in Gurgaon fit C everywhere, which is acceptable; B on lighting is slightly more sensitive.

## RCCB: one or two?

A single 40A or 63A, 30 mA RCCB after the isolator protects the whole flat. The drawback is that one leaking geyser element trips everything, including the refrigerator while you are away.

The better layout for a 3BHK with three geysers and three or four ACs is two RCCBs: one feeding the AC and geyser MCBs, one feeding lighting and sockets. A leak in a bathroom then leaves the rest of the flat live. The cost is one extra RCCB and a slightly larger DB.

Use **30 mA** for personal protection. 100 mA and 300 mA units are for fire protection on incomers in larger buildings, not for a flat. Choose **type A** rather than the older type AC if the budget allows; modern inverter ACs and washing machines produce pulsating DC leakage that a type AC device can miss.

## How many ways?

Count your circuits, add the RCCBs and isolator (each takes two ways), then add 20 to 30 percent spare. A typical 3BHK lands at:

- Isolator: 2 ways
- RCCB(s): 2 or 4 ways
- Lighting MCBs: 4 to 6
- Socket and kitchen MCBs: 4 to 6
- AC and geyser MCBs: 5 to 7
- Spare: 3 to 4

That is a **16-way or 18-way SPN DB** for most 3BHKs with a double-RCCB layout, and a 12-way for a compact 2BHK. Buying an 8-way "because it was cheaper" is the most common regret.

Choose a **double-door** metal DB (inner door covers the busbar, outer door hides the MCBs) for a flat; it looks tidier and keeps fingers out.

## Brands and buying

Havells, Legrand, Schneider Electric, Siemens, L&T and ABB all make reliable residential MCBs and RCCBs. Mixing brands inside a DB is poor practice: the busbar pitch and clip dimensions are designed for each brand's own range, and consultants will reject it on a project. Pick one brand for the DB, isolator, RCCB and all MCBs.

Counterfeits exist here too, especially for Havells and Schneider. Buy through authorised channels with a GST invoice; the device that fails to trip in a fault is not the place to save money.

## Checklist for your electrician

1. One dedicated circuit per AC and per geyser, C-curve MCB sized to the wire.
2. 30 mA RCCB, type A if possible, two RCCBs on a 3BHK.
3. 16-way or larger double-door SPN DB with spare ways.
4. Same brand across the board.
5. Earth wire to every point and a tested earth at the meter; an RCCB cannot protect a circuit with no earth path.

We quote complete DB kits (board, isolator, RCCBs and MCBs) in Havells, Legrand and Schneider against your circuit list for flats and projects across Gurgaon and NCR. See the [electrical material supply page](/electrical-material-supplier-gurgaon/).

## Frequently asked questions

### What MCB rating do I need for a 1.5 ton AC?

A 20A C-curve MCB on a dedicated circuit of 2.5 sq mm wire for short runs or 4 sq mm for runs over about 20 metres. A 2 ton unit should go on 4 sq mm wire with a 25A or 32A C-curve MCB.

### What is the difference between an MCB and an RCCB?

An MCB protects wire from overload and short circuit. An RCCB detects current leaking to earth, which is the shock hazard, and trips at 30 mA. A flat needs both: MCBs on every circuit and at least one RCCB on the incomer.

### Why does my RCCB trip when the geyser is on?

The geyser element insulation is breaking down and leaking current to earth through the water. The RCCB is doing its job. Replace the element or the geyser. If the RCCB trips with nothing switched on, there is a wiring fault or moisture in a box, and an electrician should test each circuit.

### Can I add an RCCB to an old DB?

Usually yes, if there are two spare ways after the isolator. If the DB is full, replace it with a larger one; the MCBs can often be reused if they are the same brand and in good condition.
