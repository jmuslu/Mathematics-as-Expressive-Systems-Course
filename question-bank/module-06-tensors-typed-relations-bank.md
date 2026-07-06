# Module 06 Bank: Tensors and Dinner Table Relations

Source posture: structured reserve entries converted from the reviewed Module 06 dinner-table pilot. Problems are original course problems inspired by local slide style and public tensor/multilinear algebra orientation; no source problem text is copied.

## Source Anchors

- Existing course module: `modules/06-tensors-typed-relations.md`.
- Archived pilot: `question-bank/module-06-tensors-typed-relations-pilot.md`.
- Local slide style reference: vectors, matrix operations, determinants/inverses, span/rank, and friendship/null-space decks.
- Tensor reference orientation: tensor-as-multilinear-map, components as values on basis vectors, exterior/wedge products, contractions, and Levi-Civita volume intuition.

## 06.inner-product.two-slot.a

```text
Module: 06
Topic: inner products as two-slot machines
Role: warm-up
Status: reserve
Source use: original, source-informed
Source note: Converted from the reviewed Module 06 dinner-table pilot; inspired by local slide style and tensor/multilinear algebra references.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let Ari's taste profile be `a = (2, -1)` and Bea's taste profile be `b = (3, 4)`.

Compute the dot product:

```text
a . b
```

## Answer Check

```text
a . b = 2(3) + (-1)(4) = 6 - 4 = 2
```

## Intuition

The score is positive but small. Ari and Bea are not perfectly aligned, but their profiles are not fully opposed either.

## Modeling Implication

An inner product is useful when the question is alignment. It is not enough when the relation needs more than two slots.

## Reserve Notes

Converted from pilot Problem 6.1: A Dot Product Is Already A Two-Slot Machine.

## 06.bilinear.form.compute.a

```text
Module: 06
Topic: bilinear forms
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Converted from the reviewed Module 06 dinner-table pilot; inspired by local slide style and tensor/multilinear algebra references.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let

```text
A = [1 2]
    [0 1]
```

and define

```text
B(u, v) = u^T A v
```

Compute:

```text
B((1, 0), (0, 1))
B((1, 1), (1, 0))
```

## Answer Check

```text
A(0, 1) = (2, 1)
B((1, 0), (0, 1)) = (1, 0) . (2, 1) = 2

A(1, 0) = (1, 0)
B((1, 1), (1, 0)) = (1, 1) . (1, 0) = 1
```

## Intuition

The matrix first transforms the second profile. The first profile then measures the transformed result.

## Modeling Implication

This is a two-slot typed relation: one slot is measured directly, and the other is transformed before measurement.

## Reserve Notes

Converted from pilot Problem 6.2: Bilinear Means Linear In Each Slot.

## 06.bilinear.slot-linearity.a

```text
Module: 06
Topic: linearity in one tensor slot
Role: derivation
Status: reserve
Source use: original, source-informed
Source note: Converted from the reviewed Module 06 dinner-table pilot; inspired by local slide style and tensor/multilinear algebra references.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Use the same `A` and `B` from Problem 6.2. Let:

```text
u1 = (1, 0)
u2 = (0, 1)
v = (1, 2)
```

Verify:

```text
B(u1 + u2, v) = B(u1, v) + B(u2, v)
```

## Answer Check

```text
u1 + u2 = (1, 1)
A v = A(1, 2) = (5, 2)

B(u1 + u2, v) = (1, 1) . (5, 2) = 7
B(u1, v) = (1, 0) . (5, 2) = 5
B(u2, v) = (0, 1) . (5, 2) = 2

5 + 2 = 7
```

## Intuition

If Ari's taste profile is decomposed into two components, the total score decomposes into the sum of the two partial scores.

## Modeling Implication

Linearity lets you explain a score as a sum of interpretable contributions.

## Reserve Notes

Converted from pilot Problem 6.3: Check Linearity In One Slot.

## 06.outer-product.generated-relation.a

```text
Module: 06
Topic: outer products
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Converted from the reviewed Module 06 dinner-table pilot; inspired by local slide style and tensor/multilinear algebra references.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let Ari's taste vector be:

```text
a = (2, 1)
```

and Bea's taste vector be:

```text
b = (3, 4)
```

Compute:

```text
a b^T
```

## Answer Check

```text
a b^T =
[2] [3 4]
[1]

= [6 8]
  [3 4]
```

## Intuition

Each entry records one interaction between an Ari-coordinate and a Bea-coordinate.

## Modeling Implication

An outer product creates a full relation table from two separate vectors. This is the first step from "two people have scores" to "their dimensions interact."

## Reserve Notes

Converted from pilot Problem 6.4: Outer Product As A Generated Relation.

## 06.tensor.slot-count.a

```text
Module: 06
Topic: tensor shape and slot count
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Converted from the reviewed Module 06 dinner-table pilot; inspired by local slide style and tensor/multilinear algebra references.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Suppose a dinner plan records:

```text
person, dish, occasion
```

There are 2 people, 2 dishes, and 3 occasions.

How many scalar entries are needed to store every possible score?

## Answer Check

```text
2 * 2 * 3 = 12
```

## Intuition

A matrix has rows and columns. This object needs a third slot.

## Modeling Implication

When the question needs person-dish-occasion scores, forcing the data into a matrix hides type information.

## Reserve Notes

Converted from pilot Problem 6.5: A Tensor Needs More Than Row And Column.

## 06.tensor.entry.sentence.a

```text
Module: 06
Topic: tensor entries as typed sentences
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Converted from the reviewed Module 06 dinner-table pilot; inspired by local slide style and tensor/multilinear algebra references.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let `T[i, j, k]` score:

```text
person i likes dish j on occasion k
```

Assume:

```text
i = 2 means Bea
j = 1 means tacos
k = 3 means late-night food
T[2, 1, 3] = 0.7
```

Write the entry as a sentence.

## Answer Check

```text
Bea likes tacos for late-night food with score 0.7.
```

## Intuition

The number is not self-explanatory. The slots give it meaning.

## Modeling Implication

A tensor entry should never be interpreted without its schema.

## Reserve Notes

Converted from pilot Problem 6.6: Read One Tensor Entry As A Sentence.

## 06.slot-order.schema.a

```text
Module: 06
Topic: slot order and schema
Role: counterexample
Status: reserve
Source use: original, source-informed
Source note: Converted from the reviewed Module 06 dinner-table pilot; inspired by local slide style and tensor/multilinear algebra references.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Compare:

```text
T[person, dish, occasion]
S[dish, person, occasion]
```

Suppose both arrays contain the number `0.7` at position `[2, 1, 3]`.

Do these entries automatically mean the same thing?

## Answer Check

```text
No.

T[2, 1, 3] means:
person 2 likes dish 1 on occasion 3.

S[2, 1, 3] means:
dish 2 is related to person 1 on occasion 3.
```

## Intuition

The coordinates may look identical, but the slot types changed.

## Modeling Implication

A good model should track slot names, not just array shapes.

## Reserve Notes

Converted from pilot Problem 6.7: Same Numbers, Different Slots.

## 06.wedge.sign.a

```text
Module: 06
Topic: wedge product sign
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Converted from the reviewed Module 06 dinner-table pilot; inspired by local slide style and tensor/multilinear algebra references.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Treat `e1 wedge e2` as the positive oriented area unit.

Compute:

```text
e2 wedge e1
(e1 + e2) wedge e1
```

## Answer Check

```text
e2 wedge e1 = - e1 wedge e2

(e1 + e2) wedge e1
= e1 wedge e1 + e2 wedge e1
= 0 - e1 wedge e2
= - e1 wedge e2
```

## Intuition

Swapping direction reverses orientation. Repeating a direction creates no area.

## Modeling Implication

Wedge products are useful when order and independent direction matter, not just association strength.

## Reserve Notes

Converted from pilot Problem 6.8: Wedge Product Sign.

## 06.wedge.oriented-taste.a

```text
Module: 06
Topic: oriented wedge computation
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Converted from the reviewed Module 06 dinner-table pilot; inspired by local slide style and tensor/multilinear algebra references.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let Ari's dinner preference direction be:

```text
a = (1, 2)
```

and Bea's dinner preference direction be:

```text
b = (3, 1)
```

In two dimensions:

```text
a wedge b = (a1 b2 - a2 b1) e1 wedge e2
```

Compute `a wedge b`.

## Answer Check

```text
a wedge b = (1)(1) - (2)(3)
= 1 - 6
= -5

So a wedge b = -5 e1 wedge e2.
```

## Intuition

The negative sign says the ordered move from Ari's direction to Bea's direction has the opposite orientation from `e1 wedge e2`.

## Modeling Implication

If the sign matters, do not replace wedge information with an ordinary similarity score.

## Reserve Notes

Converted from pilot Problem 6.9: Oriented Difference Between Two Taste Profiles.

## 06.wedge.dependence-vanish.a

```text
Module: 06
Topic: wedge vanishing and dependence
Role: counterexample
Status: reserve
Source use: original, source-informed
Source note: Converted from the reviewed Module 06 dinner-table pilot; inspired by local slide style and tensor/multilinear algebra references.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let:

```text
a = (2, 4)
b = (1, 2)
```

Compute:

```text
a wedge b
```

## Answer Check

```text
a wedge b = (2)(2) - (4)(1)
= 4 - 4
= 0
```

## Intuition

The two preference directions lie on the same line. They do not span a genuine two-dimensional difference.

## Modeling Implication

When a wedge vanishes, the model may be seeing repetition or dependence rather than genuinely different directions.

## Reserve Notes

Converted from pilot Problem 6.10: Dependence Makes The Wedge Vanish.

## 06.levi-civita.orientation.a

```text
Module: 06
Topic: Levi-Civita orientation
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Converted from the reviewed Module 06 dinner-table pilot; inspired by local slide style and tensor/multilinear algebra references.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let an oriented volume tensor return:

```text
Vol(e1, e2, e3) = 1
```

Compute:

```text
Vol(e2, e1, e3)
Vol(e1, e1, e3)
Vol(e3, e1, e2)
```

## Answer Check

```text
Vol(e2, e1, e3) = -1
Vol(e1, e1, e3) = 0
Vol(e3, e1, e2) = 1
```

## Intuition

Swapping two slots flips orientation. Repeating a direction destroys volume. Cycling all three basis directions preserves orientation.

## Modeling Implication

A multi-way object can encode orientation and independence, not merely the presence of three ingredients.

## Reserve Notes

Converted from pilot Problem 6.11: Levi-Civita As Oriented Volume.

## 06.contraction.slot-fill.a

```text
Module: 06
Topic: tensor contraction
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Converted from the reviewed Module 06 dinner-table pilot; inspired by local slide style and tensor/multilinear algebra references.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let a two-slot tensor have components:

```text
T = [2 1]
    [3 4]
```

Let a vector be:

```text
v = (5, 6)
```

Contract the second slot:

```text
w_i = T_ij v_j
```

Compute `w`.

## Answer Check

```text
w_1 = 2(5) + 1(6) = 16
w_2 = 3(5) + 4(6) = 39

w = (16, 39)
```

## Intuition

Filling one slot of a two-slot relation leaves a one-slot object.

## Modeling Implication

Contraction is how filling one typed slot can produce a simpler derived object.

## Reserve Notes

Converted from pilot Problem 6.12: Contraction Fills A Compatible Slot.

## 06.symmetry.classification.a

```text
Module: 06
Topic: symmetry and antisymmetry
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Converted from the reviewed Module 06 dinner-table pilot; inspired by local slide style and tensor/multilinear algebra references.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

For each relation, decide whether the relation should be symmetric, antisymmetric, or neither:

```text
A. Ari and Bea are mutual study partners.
B. Ari recommends tacos to Bea.
C. Ari's taste direction turns toward Bea's taste direction with an oriented sign.
D. Ari and Bea paid the same final dinner bill.
```

Classify each one.

## Answer Check

```text
A. symmetric
B. neither
C. antisymmetric
D. symmetric
```

## Intuition

Some relations survive a swap, some reverse under a swap, and some change meaning completely.

## Modeling Implication

Before choosing a product or tensor type, decide what swapping slots is supposed to do.

## Reserve Notes

Converted from pilot Problem 6.13: Symmetric, Antisymmetric, Or Neither.

## 06.flattening.failure.a

```text
Module: 06
Topic: flattening failure mode
Role: counterexample
Status: reserve
Source use: original, source-informed
Source note: Converted from the reviewed Module 06 dinner-table pilot; inspired by local slide style and tensor/multilinear algebra references.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A student flattens this typed relation:

```text
T[person, dish, occasion]
```

into a matrix:

```text
M[row, column]
```

but does not record which row-column encoding was used.

Name one thing that can go wrong.

## Answer Check

```text
The model may confuse a dish coordinate for a person coordinate, or compare entries from different occasions as if they lived in the same slot.
```

## Intuition

Flattening can preserve numbers while destroying grammar.

## Modeling Implication

A useful model should preserve typed slots or store enough labels to reconstruct them.

## Reserve Notes

Converted from pilot Problem 6.14: Failure Mode - Flattening Destroys Meaning.

