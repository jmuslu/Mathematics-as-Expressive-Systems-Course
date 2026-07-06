# Problem Trail Style

This guide keeps the problem bank and lecture trails from drifting into two common failures:

1. collecting many correct exercises that do not teach the module's central idea,
2. forcing every analogy into the final design interpretation before the local math has earned it.

The question bank can be large. The lecture trail should be selective.

## Central Bank, Selective Lecture

It is appropriate to build a broad central question bank from public papers, open lecture notes, institutional resources, and original variants. That bank is a workshop: it can contain reserve exercises, harder calculations, source-adjacent drafts, and alternate scenarios.

A lecture module is different. It should receive only the problems that clarify the principle being taught in that module.

Use this promotion test:

- Does the problem teach one clear mathematical move?
- Can the answer be checked by hand?
- Does the problem support the current lecture promise?
- Does it fit the module's analogy or scenario without sounding forced?
- Does it show either a useful operation, an invariant, or a failure mode?
- Has any source-derived material been rewritten or licensed according to `QUESTION_BANK_SOURCE_POLICY.md`?

If a problem is good but interrupts the arc, keep it in reserve.

## Analogy Principle

The analogy should work first as an ordinary situation. The math then explains the hidden structure.

Good analogies are local:

- friendship, trust, reputation, and social groups,
- dinner planning, seating, shared preferences, and constraints,
- playlists, taste profiles, genres, and phase-like alignment,
- group projects, roles, permissions, and coordination,
- maps, routes, neighborhoods, and continuity,
- courtroom evidence, witnesses, consistency, and burden of proof,
- budgets, units, exchange rates, and legal transformations,
- rumors, revisions, decay, reinforcement, and source reliability.

The final design interpretation can appear after the calculation. It should not usually be the premise of the analogy. A module on tensors can be about a dinner table before it becomes about typed multi-way relations. A module on sheaves can be about witnesses agreeing locally before it becomes about local-to-global consistency. A module on group actions can be about relabeling seats or teams before it becomes about invariant structure.

Avoid analogies that are only plausible because the course's end goal exists. If the scenario would sound strange in an ordinary applied math lecture, replace it with a simpler human or operational setup.

## Twelve-Problem Lecture Shape

Each module currently uses a 12-problem hand trail. The exact order can vary, but the trail should usually include:

- warm-up computation,
- base-case manipulation,
- conceptual check,
- guided derivation,
- slightly harder calculation,
- transformation or invariance check,
- counterexample or failure mode,
- interpretation problem,
- design implication.

Every promoted problem needs exactly one `Answer check` marker so the audit script can verify the trail.

The preferred rhythm is:

```text
concrete situation -> small calculation -> formal move -> answer check -> intuition -> implication
```

## Bank Roles

Use these roles in `question-bank/` when drafting or scraping candidates:

| Role | Purpose |
| --- | --- |
| warm-up | Make symbols concrete with a tiny example |
| computation | Practice the operation directly |
| conceptual check | Ask what the object means or permits |
| derivation | Walk from definition to useful formula |
| harder calculation | Stretch the same skill without changing topic |
| counterexample | Show where an assumption matters |
| failure mode | Show how the representation misleads or breaks |
| interpretation | Translate the result back into the scenario |
| reserve | Useful, but not currently needed in lecture |

## Source Use

Sources should improve correctness and variety, not replace authorship.

Public papers and open notes are useful for finding standard examples, notation, canonical counterexamples, and topic coverage. Institutional-login material can help verify what a normal course would ask. In both cases, the default action is to write a new course problem in the course's voice.

Direct copying belongs only in the bank when reuse rights are clear and provenance is explicit. Promoted lecture problems should normally be original or heavily rewritten.
