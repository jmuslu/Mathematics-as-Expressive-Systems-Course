# Module 06 Pilot Question Bank: Tensors and Dinner Table Relations

Status: pilot for review

Source orientation:

- Existing course module: `modules/06-tensors-typed-relations.md`
- Local slide style reference: vectors, matrix operations, determinants/inverses, span/rank, and friendship/null-space decks
- Tensor reference orientation: tensor-as-multilinear-map, components as values on basis vectors, Levi-Civita volume intuition

This pilot does not replace the module yet. It tests a reusable shape for expanded problem trails:

```text
base case -> by-hand manipulation -> answer check -> intuition -> modeling implication
```

## Human Scenario: The Dinner Table Problem

Imagine a group of friends trying to choose dinner.

- Ari likes spicy food and does not care much about price.
- Bea cares a lot about price and only mildly likes spice.
- Cam changes the decision depending on the situation: quick lunch, birthday dinner, or late-night food.

A simple edge can say:

```text
Ari likes tacos
```

But the real decision is usually not that simple:

```text
person, dish, occasion, price, spice, distance, mood
```

That is no longer just a friendship score or a one-number rating. It is a typed relation with multiple slots. If you swap the slots, repeat a slot, or combine the wrong kinds of slots, the meaning changes or stops making sense.

The tensor habit is:

```text
know the slots, know what can go into each slot, know what survives a change of coordinates
```

In this scenario:

- A vector can represent one person's taste profile.
- A dual vector can represent a question like "how much does this person care about price?"
- A matrix can represent a change of coordinates, such as switching from `(spice, price)` to `(adventure, comfort)`.
- A bilinear form can score how a person-profile interacts with a dish-profile.
- A tensor can score a multi-slot relation like `person, dish, occasion`.
- A wedge product can represent oriented difference: not just that two preferences differ, but how one direction turns into another.
- A contraction is what happens when one slot is filled, turning a multi-slot object into a simpler object.

## Problem Trail

### Problem 6.1: A Dot Product Is Already A Two-Slot Machine

Base case:

Let Ari's taste profile be `a = (2, -1)` and Bea's taste profile be `b = (3, 4)`.

By-hand manipulation:

Compute the dot product:

```text
a . b
```

Answer check:

```text
a . b = 2(3) + (-1)(4) = 6 - 4 = 2
```

Intuition:

The score is positive but small. Ari and Bea are not perfectly aligned, but their profiles are not fully opposed either.

Modeling implication:

An inner product is useful when the question is alignment. It is not enough when the relation needs more than two slots.

### Problem 6.2: Bilinear Means Linear In Each Slot

Base case:

Let

```text
A = [1 2]
    [0 1]
```

and define

```text
B(u, v) = u^T A v
```

By-hand manipulation:

Compute:

```text
B((1, 0), (0, 1))
B((1, 1), (1, 0))
```

Answer check:

```text
A(0, 1) = (2, 1)
B((1, 0), (0, 1)) = (1, 0) . (2, 1) = 2

A(1, 0) = (1, 0)
B((1, 1), (1, 0)) = (1, 1) . (1, 0) = 1
```

Intuition:

The matrix first transforms the second profile. The first profile then measures the transformed result.

Modeling implication:

This is a two-slot typed relation: one slot is measured directly, and the other is transformed before measurement.

### Problem 6.3: Check Linearity In One Slot

Base case:

Use the same `A` and `B` from Problem 6.2. Let:

```text
u1 = (1, 0)
u2 = (0, 1)
v = (1, 2)
```

By-hand manipulation:

Verify:

```text
B(u1 + u2, v) = B(u1, v) + B(u2, v)
```

Answer check:

```text
u1 + u2 = (1, 1)
A v = A(1, 2) = (5, 2)

B(u1 + u2, v) = (1, 1) . (5, 2) = 7
B(u1, v) = (1, 0) . (5, 2) = 5
B(u2, v) = (0, 1) . (5, 2) = 2

5 + 2 = 7
```

Intuition:

If Ari's taste profile is decomposed into two components, the total score decomposes into the sum of the two partial scores.

Modeling implication:

Linearity lets you explain a score as a sum of interpretable contributions.

### Problem 6.4: Outer Product As A Generated Relation

Base case:

Let Ari's taste vector be:

```text
a = (2, 1)
```

and Bea's taste vector be:

```text
b = (3, 4)
```

By-hand manipulation:

Compute:

```text
a b^T
```

Answer check:

```text
a b^T =
[2] [3 4]
[1]

= [6 8]
  [3 4]
```

Intuition:

Each entry records one interaction between an Ari-coordinate and a Bea-coordinate.

Modeling implication:

An outer product creates a full relation table from two separate vectors. This is the first step from "two people have scores" to "their dimensions interact."

### Problem 6.5: A Tensor Needs More Than Row And Column

Base case:

Suppose a dinner plan records:

```text
person, dish, occasion
```

There are 2 people, 2 dishes, and 3 occasions.

By-hand manipulation:

How many scalar entries are needed to store every possible score?

Answer check:

```text
2 * 2 * 3 = 12
```

Intuition:

A matrix has rows and columns. This object needs a third slot.

Modeling implication:

When the question needs person-dish-occasion scores, forcing the data into a matrix hides type information.

### Problem 6.6: Read One Tensor Entry As A Sentence

Base case:

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

By-hand manipulation:

Write the entry as a sentence.

Answer check:

```text
Bea likes tacos for late-night food with score 0.7.
```

Intuition:

The number is not self-explanatory. The slots give it meaning.

Modeling implication:

A tensor entry should never be interpreted without its schema.

### Problem 6.7: Same Numbers, Different Slots

Base case:

Compare:

```text
T[person, dish, occasion]
S[dish, person, occasion]
```

Suppose both arrays contain the number `0.7` at position `[2, 1, 3]`.

By-hand manipulation:

Do these entries automatically mean the same thing?

Answer check:

```text
No.

T[2, 1, 3] means:
person 2 likes dish 1 on occasion 3.

S[2, 1, 3] means:
dish 2 is related to person 1 on occasion 3.
```

Intuition:

The coordinates may look identical, but the slot types changed.

Modeling implication:

A good model should track slot names, not just array shapes.

### Problem 6.8: Wedge Product Sign

Base case:

Treat `e1 wedge e2` as the positive oriented area unit.

By-hand manipulation:

Compute:

```text
e2 wedge e1
(e1 + e2) wedge e1
```

Answer check:

```text
e2 wedge e1 = - e1 wedge e2

(e1 + e2) wedge e1
= e1 wedge e1 + e2 wedge e1
= 0 - e1 wedge e2
= - e1 wedge e2
```

Intuition:

Swapping direction reverses orientation. Repeating a direction creates no area.

Modeling implication:

Wedge products are useful when order and independent direction matter, not just association strength.

### Problem 6.9: Oriented Difference Between Two Taste Profiles

Base case:

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

By-hand manipulation:

Compute `a wedge b`.

Answer check:

```text
a wedge b = (1)(1) - (2)(3)
= 1 - 6
= -5

So a wedge b = -5 e1 wedge e2.
```

Intuition:

The negative sign says the ordered move from Ari's direction to Bea's direction has the opposite orientation from `e1 wedge e2`.

Modeling implication:

If the sign matters, do not replace wedge information with an ordinary similarity score.

### Problem 6.10: Dependence Makes The Wedge Vanish

Base case:

Let:

```text
a = (2, 4)
b = (1, 2)
```

By-hand manipulation:

Compute:

```text
a wedge b
```

Answer check:

```text
a wedge b = (2)(2) - (4)(1)
= 4 - 4
= 0
```

Intuition:

The two preference directions lie on the same line. They do not span a genuine two-dimensional difference.

Modeling implication:

When a wedge vanishes, the model may be seeing repetition or dependence rather than genuinely different directions.

### Problem 6.11: Levi-Civita As Oriented Volume

Base case:

Let an oriented volume tensor return:

```text
Vol(e1, e2, e3) = 1
```

By-hand manipulation:

Compute:

```text
Vol(e2, e1, e3)
Vol(e1, e1, e3)
Vol(e3, e1, e2)
```

Answer check:

```text
Vol(e2, e1, e3) = -1
Vol(e1, e1, e3) = 0
Vol(e3, e1, e2) = 1
```

Intuition:

Swapping two slots flips orientation. Repeating a direction destroys volume. Cycling all three basis directions preserves orientation.

Modeling implication:

A multi-way object can encode orientation and independence, not merely the presence of three ingredients.

### Problem 6.12: Contraction Fills A Compatible Slot

Base case:

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

By-hand manipulation:

Compute `w`.

Answer check:

```text
w_1 = 2(5) + 1(6) = 16
w_2 = 3(5) + 4(6) = 39

w = (16, 39)
```

Intuition:

Filling one slot of a two-slot relation leaves a one-slot object.

Modeling implication:

Contraction is how filling one typed slot can produce a simpler derived object.

### Problem 6.13: Symmetric, Antisymmetric, Or Neither

Base case:

For each relation, decide whether the relation should be symmetric, antisymmetric, or neither:

```text
A. Ari and Bea are mutual study partners.
B. Ari recommends tacos to Bea.
C. Ari's taste direction turns toward Bea's taste direction with an oriented sign.
D. Ari and Bea paid the same final dinner bill.
```

By-hand manipulation:

Classify each one.

Answer check:

```text
A. symmetric
B. neither
C. antisymmetric
D. symmetric
```

Intuition:

Some relations survive a swap, some reverse under a swap, and some change meaning completely.

Modeling implication:

Before choosing a product or tensor type, decide what swapping slots is supposed to do.

### Problem 6.14: Failure Mode - Flattening Destroys Meaning

Base case:

A student flattens this typed relation:

```text
T[person, dish, occasion]
```

into a matrix:

```text
M[row, column]
```

but does not record which row-column encoding was used.

By-hand manipulation:

Name one thing that can go wrong.

Answer check:

```text
The model may confuse a dish coordinate for a person coordinate, or compare entries from different occasions as if they lived in the same slot.
```

Intuition:

Flattening can preserve numbers while destroying grammar.

Modeling implication:

A useful model should preserve typed slots or store enough labels to reconstruct them.

## Mini Review Card

| Object | Human-reading question | Modeling reading |
| --- | --- | --- |
| Inner product | How aligned are two preferences? | similarity or compatibility score |
| Outer product | What interaction table do two profiles generate? | rank-one relation pattern |
| Bilinear form | How does one profile score a transformed profile? | typed two-slot score |
| Tensor | What multi-slot relation is being scored? | typed multi-way relation |
| Wedge product | What oriented independent relation appears? | signed area or independent difference |
| Contraction | What happens after filling a compatible slot? | derived lower-order state |

## Reviewer Questions

1. Is the Dinner Table scenario the right kind of human analogy, or should the pilot use a more playful scenario like friendship, dating, group projects, social media, or courtroom evidence?
2. Should future question-bank files stay separate from lecture modules, or should the best problems be copied into each module after review?
3. Do you want more exact slide-style wording and simpler arithmetic, or this slightly more course-specific modeling framing?
