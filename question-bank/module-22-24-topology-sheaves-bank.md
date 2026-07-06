# Modules 22-24 Bank: Topology, Persistence, and Sheaves

Source posture: original course problems inspired by public sources on topology, persistent homology, topological data analysis, and cellular sheaves on graphs. These are reserve candidates, not promoted lecture text.

## Source Anchors

- [Persistent Homology: Theory and Practice](https://pub.ista.ac.at/~edels/Papers/2012-11-PHTheoryPractice.pdf)
- [Persistent Homology: A Survey](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/edelhare.pdf)
- [A User's Guide to Topological Data Analysis](https://learning-analytics.info/index.php/JLA/article/view/5196)
- [Topological Data Analysis: Mapper, Persistence and Applications](https://dioscuri-tda.org/documents/paris_2021_data_science_school/slides/TDA_Tutorial.pdf)
- [A gentle introduction to sheaves on graphs](https://www.jakobhansen.org/publications/gentleintroduction.pdf)
- [A Very Elementary Introduction to Sheaves](https://arxiv.org/pdf/2202.01379)
- [A Sheaf-Theoretic Framework for Knowledge Graph Embedding](https://proceedings.mlr.press/v206/gebhart23a/gebhart23a.pdf)

## 22.open-set.subspace.a

```text
Module: 22
Topic: subspace topology
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Inspired by standard topology examples distinguishing ambient and subspace openness.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let:

```text
X = [0, 2]
U = [0, 1)
```

Is `U` open in the usual topology on the real line? Is `U` open as a subset of the subspace `X`?

## Answer Check

```text
U is not open in R because 0 has no small open interval contained in U.
U is open in X because U = X intersect (-1,1).
```

## Intuition

Openness depends on the surrounding space.

## Modeling Implication

Neighborhood claims should state the ambient representation space. A cluster can be open relative to a selected dataset while not open globally.

## Reserve Notes

Good graduate-precision add-on for Module 22.

## 22.continuity.threshold-preimage.a

```text
Module: 22
Topic: continuity by inverse images
Role: computation
Status: lecture candidate
Source use: original
Source note: Standard inverse-image continuity check rewritten in course voice.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let:

```text
f(x) = x^2
```

Compute the inverse image of the open interval `(1, 4)`.

## Answer Check

```text
f^{-1}((1,4)) = (-2,-1) union (1,2)
```

because `1 < x^2 < 4` means `1 < |x| < 2`.

## Intuition

Continuity can be tested by asking whether open targets pull back to open sources.

## Modeling Implication

Stable transformations should not turn small output neighborhoods into jagged, nonlocal input conditions unless that discontinuity is intended.

## Reserve Notes

Slightly harder than the current `f(x)=2x` example.

## 22.cover.intersections.a

```text
Module: 22
Topic: open covers and overlaps
Role: warm-up
Status: reserve
Source use: original, source-informed
Source note: Inspired by topology/sheaf use of covers and local overlaps.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

On the real line, let:

```text
U = (-1, 2)
V = (1, 4)
```

Compute `U union V` and `U intersection V`.

## Answer Check

```text
U union V = (-1,4)
U intersection V = (1,2)
```

## Intuition

Local regions overlap on a smaller region where agreement can be checked.

## Modeling Implication

Sheaf-style consistency starts with knowing where local contexts overlap.

## Reserve Notes

Useful bridge from topology into sheaves.

## 22.mapper-style.cover.a

```text
Module: 22
Topic: cover-induced connectivity
Role: modeling interpretation
Status: reserve
Source use: original, source-informed
Source note: Inspired by TDA/Mapper discussions of covers and simplified signatures.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A playlist is mapped to a one-dimensional "energy" score. Songs with energy in:

```text
Low = [0,4]
High = [3,7]
```

belong to overlapping cover intervals. A song has energy `3.5`. Which cover sets contain it, and why might this overlap matter?

## Answer Check

```text
3.5 is in Low and High.
```

The song can connect local summaries built on both intervals.

## Intuition

Overlap lets local views communicate.

## Modeling Implication

Cover design affects the topology seen by a summary graph. Overlap choices are modeling decisions, not neutral defaults.

## Reserve Notes

Keeps the analogy ordinary while introducing cover-based thinking.

## 22.friendship-threshold-components.a

```text
Module: 22
Topic: connected components in a threshold graph
Role: computation / modeling interpretation
Status: promoted
Source use: original, source-informed
Source note: Inspired by topological data analysis examples where thresholded relations produce changing connected components.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

At a strict friendship threshold, the graph has edges:

```text
Ari-Bea
Cy-Dev
```

At a looser threshold, the edge `Bea-Cy` appears. Count the connected components before and after the new edge appears.

## Answer Check

```text
Before: 2 components, {Ari,Bea} and {Cy,Dev}.
After: 1 component, {Ari,Bea,Cy,Dev}.
```

## Intuition

A bridge edge can merge two previously separate connected regions.

## Modeling Implication

Threshold choice changes the topology of the relational graph, so conclusions about connected groups should be tested across thresholds.

## Reserve Notes

Promoted into Module 22 as the ordinary human base case for threshold topology.

## 23.filtration.edge-order.a

```text
Module: 23
Topic: filtration from edge weights
Role: computation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by persistent homology filtrations on threshold graphs.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Four points have pairwise distances:

```text
d(A,B)=1
d(B,C)=2
d(C,D)=4
d(A,D)=7
```

Ignoring all other edges, list which edges are present at thresholds:

```text
epsilon = 1.5, 3, 5
```

## Answer Check

```text
epsilon=1.5: AB
epsilon=3: AB, BC
epsilon=5: AB, BC, CD
```

## Intuition

As the threshold grows, edges are added and previous edges remain.

## Modeling Implication

Persistence requires nested structure: later stages contain earlier stages.

## Reserve Notes

Good four-point extension of the current three-point example.

## 23.friendship-barcode.three-people.a

```text
Module: 23
Topic: H0 barcode from a threshold friendship graph
Role: computation
Status: promoted
Source use: original, source-informed
Source note: Inspired by persistent homology examples tracking component births and deaths across a filtration.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Three people have friendship distances:

```text
d(Ari,Bea)=1
d(Bea,Cy)=2
d(Ari,Cy)=5
```

At thresholds `0`, `1.5`, `3`, and `6`, count connected components. Then give informal `H0` bars if the oldest component survives forever.

## Answer Check

```text
0: 3 components
1.5: 2 components, {Ari,Bea} and {Cy}
3: 1 component, {Ari,Bea,Cy}
6: 1 component

Ari component: [0, infinity)
Bea component: [0, 1]
Cy component: [0, 3]
```

Depending on the merge convention, a different named component may be chosen as the infinite bar, but two components die when they merge.

## Intuition

Components are born as isolated people and die when a threshold edge merges them into an older group.

## Modeling Implication

Barcodes separate stable connected structure from short-lived threshold artifacts.

## Reserve Notes

Promoted into Module 23 to connect the first barcode computation to the friendship-circle running example.

## 23.component-barcode.four-points.a

```text
Module: 23
Topic: H0 barcode
Role: computation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by barcode examples in persistent homology sources.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Using the edge order from `23.filtration.edge-order.a`, give informal `H0` bars if the component born at `A` survives forever and each merge kills the newer component.

## Answer Check

```text
A: [0, infinity)
B: [0, 1]
C: [0, 2]
D: [0, 4]
```

## Intuition

Components are born as isolated points and die when they merge into older components.

## Modeling Implication

Longer component bars indicate structures that survive broader threshold ranges.

## Reserve Notes

Pairs naturally with the previous problem.

## 23.loop.birth-death.square.a

```text
Module: 23
Topic: H1 birth and death
Role: derivation
Status: reserve
Source use: original, source-informed
Source note: Inspired by standard persistent homology loop examples.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A square has boundary edges:

```text
AB, BC, CD, DA
```

at threshold `1`. The two triangular faces:

```text
ABC, ACD
```

are added at threshold `3`. When is the square loop born and when does it die?

## Answer Check

```text
The 1-dimensional loop is born at threshold 1 when the boundary cycle exists.
It dies at threshold 3 when the added faces fill the square.
Barcode: [1,3]
```

## Intuition

A loop is a hole only while it is not filled by higher-dimensional simplices.

## Modeling Implication

Persistent features are about the life span of structure across scale, not just whether a feature appears once.

## Reserve Notes

Good graduate-depth reserve because it asks about filling by faces, not only graph cycles.

## 23.short-loop.noise.a

```text
Module: 23
Topic: persistence interpretation
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Inspired by TDA discussions of persistence diagrams and noise.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Two loops have persistence intervals:

```text
Loop 1: [1.0, 1.1]
Loop 2: [1.0, 6.0]
```

Which loop is more structurally stable across scale, and what caution remains?

## Answer Check

```text
Loop 2 is more persistent because it survives for length 5.
Loop 1 survives for length 0.1.
```

Caution: a long-lived feature can still be semantically irrelevant if the embedding or distance function is poor.

## Intuition

Persistence is a stability signal, not a meaning certificate.

## Modeling Implication

Topological signatures need domain interpretation.

## Reserve Notes

Directly reinforces the course's "persistent but meaningless" failure mode.

## 23.confidence-filtration.direction.a

```text
Module: 23
Topic: confidence threshold filtration
Role: modeling interpretation
Status: lecture candidate
Source use: original
Source note: Original course problem connecting filtrations to confidence thresholds.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A graph keeps edges whose confidence is at least `t`. Edge confidences are:

```text
AB = 0.9
BC = 0.7
CD = 0.4
```

List the edges present at thresholds:

```text
t = 0.8, 0.5, 0.3
```

## Answer Check

```text
t=0.8: AB
t=0.5: AB, BC
t=0.3: AB, BC, CD
```

As `t` decreases, edges are added, so this is a filtration in the decreasing-threshold direction.

## Intuition

Threshold direction matters. High confidence first, then lower confidence expands the graph.

## Modeling Implication

Decay, confidence, and retrieval thresholds can be studied as filtrations if the nesting direction is explicit.

## Reserve Notes

Good memory-adjacent problem that remains mathematically clean.

## 24.sheaf.equalizer.two-edge.a

```text
Module: 24
Topic: global section as compatible assignment
Role: computation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by graph sheaf examples of restriction maps and global sections.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A path graph has nodes:

```text
A - B - C
```

Each node stores a number. Each edge requires equality of endpoint restrictions. Check whether:

```text
x_A=4, x_B=4, x_C=4
```

is a global section.

## Answer Check

```text
Edge AB: 4 = 4
Edge BC: 4 = 4
```

Yes, all overlap equations hold.

## Intuition

A global section is a local choice at every node that satisfies every edge agreement condition.

## Modeling Implication

Global consistency is checked locally but must hold everywhere.

## Reserve Notes

Simple base-case candidate for sheaves.

## 24.sheaf.affine-restriction.a

```text
Module: 24
Topic: non-identity restriction maps
Role: derivation
Status: reserve
Source use: original, source-informed
Source note: Inspired by cellular sheaves on graphs with linear restriction maps.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Two sensors store local values:

```text
x_A = 10
x_B = 5
```

The overlap compares `A` directly but doubles `B`:

```text
res_{A -> e}(x) = x
res_{B -> e}(y) = 2y
```

Do the local values glue?

## Answer Check

```text
res_{A -> e}(10) = 10
res_{B -> e}(5) = 2(5) = 10
```

Yes, the restrictions agree on the overlap.

## Intuition

Local values do not need to be numerically equal if the restriction maps translate them into a common overlap language.

## Modeling Implication

Compatibility depends on the model's restriction maps, not just raw stored values.

## Reserve Notes

Good graduate-depth upgrade beyond equality-only sheaves.

## 24.sheaf.inconsistency-score.a

```text
Module: 24
Topic: sheaf consistency residual
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Inspired by sheaf Laplacian and approximate global section ideas.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Use the same restriction maps:

```text
res_{A -> e}(x) = x
res_{B -> e}(y) = 2y
```

Now let:

```text
x_A = 9
x_B = 5
```

Compute the edge disagreement:

```text
res_{A -> e}(x_A) - res_{B -> e}(x_B)
```

and its squared residual.

## Answer Check

```text
disagreement = 9 - 2(5) = -1
squared residual = 1
```

## Intuition

Approximate consistency can be measured by how far overlap restrictions disagree.

## Modeling Implication

Knowledge graph embeddings can be viewed as approximate global sections when exact consistency is too strict.

## Reserve Notes

Bridge to sheaf Laplacians and approximate global sections without requiring matrix machinery.

## 24.sheaf.pullback-agreement.a

```text
Module: 24
Topic: overlap agreement as matching
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Inspired by sheaf gluing and pullback-like compatibility conditions.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Two witnesses describe a dinner. Witness A records:

```text
(person=Rae, dish=pasta)
```

Witness B records:

```text
(person=Rae, seat=window)
```

The overlap records only `person`. Do these local reports glue on the overlap?

## Answer Check

```text
A restricts to person=Rae.
B restricts to person=Rae.
```

Yes, they glue with respect to the person-only overlap.

## Intuition

Local reports can be compatible on the part they both claim, even if they contain different extra details.

## Modeling Implication

Restriction maps decide which agreement matters for gluing.

## Reserve Notes

Natural human analogy for local-to-global consistency.

## 24.sheaf.false-peace.edition.a

```text
Module: 24
Topic: bad restriction map
Role: failure mode
Status: lecture candidate
Source use: original
Source note: Original failure-mode variant aligned with the current module.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Two study groups cite a textbook title:

```text
Group A: title=Calculus, edition=2, theorem=corrected
Group B: title=Calculus, edition=1, theorem=uncorrected
```

The overlap records only `title`. Do the reports glue under this sheaf, and what is the danger?

## Answer Check

```text
Both restrict to title=Calculus, so they glue under the title-only sheaf.
Danger: the edition distinction matters and has been erased.
```

## Intuition

Compatibility can be too weak if the overlap forgets the field where the contradiction lives.

## Modeling Implication

Restriction design controls which contradictions are visible.

## Reserve Notes

Sharper version of the current false-peace problem.

## 24.global-section.not-truth.a

```text
Module: 24
Topic: coherence versus truth
Role: conceptual check
Status: reserve
Source use: original
Source note: Original course problem emphasizing model limitation.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Three witnesses all report:

```text
arrival time = 7:00
```

Every overlap compares only arrival time, so the reports form a global section. Does that prove the arrival time was truly 7:00?

## Answer Check

```text
No. It proves agreement under the chosen restrictions.
All witnesses could share the same mistaken clock or copied source.
```

## Intuition

Sheaf consistency is coherence, not truth.

## Modeling Implication

Local-to-global agreement must be combined with source reliability, calibration, and evidence quality.

## Reserve Notes

Important conceptual guardrail for Module 24.
