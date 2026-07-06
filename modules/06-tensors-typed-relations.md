# Module 06: Tensors and Typed Relations

## Lecture Promise

You will understand tensors as objects for multi-way interactions, not just higher-dimensional arrays.

## Prerequisites

- Vector spaces
- Duality
- Matrix multiplication

## Why The Old Object Fails

Edges model pairwise relations. Knowledge often needs multi-way relations:

```text
claim, source, time, confidence, validation status
```

## Base Case

A bilinear form takes two vector inputs:

```text
B(u, v)
```

A tensor generalizes this to structured multi-input relations.

## Running Example: Dinner Table Relations

At a dinner table, "Ari likes tacos" is a two-slot relation:

```text
person, dish -> score
```

But dinner planning often needs more slots:

```text
person, dish, occasion -> score
```

Bea might like tacos for late-night food, dislike them for a formal dinner, and feel neutral about them at lunch. A matrix can store person-by-dish preferences, but it cannot remember the occasion slot without flattening something meaningful.

The tensor lesson is simple: some relationships need several typed slots at once. The number only means something after the slots are named.

## Product Atlas

Different products answer different design questions. Product is not one operation; it is a family of ways to combine objects.

| Product | Question it answers | Base example |
| --- | --- | --- |
| Inner product | How aligned are two objects? | `<u, v>` |
| Outer product | What rank-one relation do two objects generate? | `u v^T` |
| Matrix product | What happens when transformations compose? | `ABx` |
| Hadamard product | What happens coordinate by coordinate? | `x * y` |
| Tensor product | How do independent slots combine into a joint space? | `u tensor v` |
| Kronecker product | How do matrix actions combine on product spaces? | `A kron B` |
| Wedge product | What oriented area, volume, or antisymmetric relation is generated? | `u wedge v` |
| Contraction | How does a tensor reduce by pairing a vector with a covector? | `T^i_j v^j` |

Tensor product gives a typed joint state. Wedge product gives oriented antisymmetric structure. Categorical products describe universal ways of combining structure. Each product has a different legal meaning.

## Formal Object

A tensor can be understood as a multilinear map or as an element of a tensor product space.

## Wedge Product

The wedge product is the antisymmetric part of tensor combination:

```text
u wedge v = -(v wedge u)
u wedge u = 0
```

Geometrically, `u wedge v` represents an oriented area element. In higher dimensions, wedge products build oriented volumes and differential forms.

The Levi-Civita symbol can be understood as the components of a volume tensor: an object that eats three vectors and returns oriented volume. Ordinary vectors and matrices do not directly express this kind of oriented multi-vector content.

Why this belongs here:

- It distinguishes ordered orientation from unordered association.
- It vanishes when two directions are dependent.
- It gives mature intuition for flux, circulation, constraints, and "joint evidence with orientation."
- It prepares you for topology and cohomology without requiring a physics specialization.

## Tensor Discipline

The useful discipline is to track:

- what kind of object this is,
- what slots it accepts,
- how its components transform,
- what contractions are legal,
- which quantities are coordinate-free.

Covariance, contravariance, Hermitian structure, exterior products, and invariants all enforce the same habit: know the object, know its slots, and know which quantities are coordinate-free.

## Invariants

- Tensor order/type
- Symmetry or antisymmetry
- Transformation law
- Legal contractions
- Coordinate-free quantities

## Problem Ladder

1. Explain why dot product is bilinear.
2. Represent a ternary relation as a tensor.
3. Explain why hyperedges are more natural than edges for evidence bundles.
4. Compute `u wedge v` and `v wedge u` symbolically and explain the sign change.
5. Show why `u wedge u = 0` encodes dependence.
6. Decide whether a memory relation should be symmetric, antisymmetric, or neither.

## Memory-System Connection

Typed memory relations are tensorial: they have slots, variance, and transformation rules.

## Hand Problem Trail

### Problem 6.1: A dot product is already a two-slot machine

Let Ari's taste profile be `a = (2, -1)` and Bea's taste profile be `b = (3, 4)`.

Compute:

```text
a . b
```

Answer check:

```text
a . b = 2(3) + (-1)(4) = 6 - 4 = 2
```

The score is positive but small. Ari and Bea are not perfectly aligned, but their profiles are not fully opposed either.

### Problem 6.2: Bilinear means linear in each slot

Let `B(u,v) = u^T A v` with:

```text
A = [1 2]
    [0 1]
```

Compute `B((1,0),(0,1))` and `B((1,1),(1,0))`.

Answer check:

```text
A(0,1) = (2,1), so B((1,0),(0,1)) = 2
A(1,0) = (1,0), so B((1,1),(1,0)) = 1
```

### Problem 6.3: Check linearity in one slot

Use the same `A` and `B`. Let:

```text
u1 = (1,0)
u2 = (0,1)
v = (1,2)
```

Verify:

```text
B(u1 + u2, v) = B(u1, v) + B(u2, v)
```

Answer check:

```text
u1 + u2 = (1,1)
A v = A(1,2) = (5,2)

B(u1 + u2, v) = (1,1) . (5,2) = 7
B(u1, v) = (1,0) . (5,2) = 5
B(u2, v) = (0,1) . (5,2) = 2
```

Linearity lets a multi-slot score decompose into interpretable contributions.

### Problem 6.4: Outer product as generated relation

Let `u = (2,1)` and `v = (3,4)`. Compute `u v^T`.

Answer check:

```text
[6 8]
[3 4]
```

### Problem 6.5: A tensor needs more than row and column

Suppose a dinner plan records:

```text
person, dish, occasion
```

There are 2 people, 2 dishes, and 3 occasions. How many scalar entries are needed to store every possible score?

Answer check:

```text
2 * 2 * 3 = 12
```

A matrix has rows and columns. This object needs a third slot.

### Problem 6.6: Read one tensor entry as a sentence

Let `T[i,j,k]` score:

```text
person i likes dish j on occasion k
```

Assume:

```text
i = 2 means Bea
j = 1 means tacos
k = 3 means late-night food
T[2,1,3] = 0.7
```

Write the entry as a sentence.

Answer check:

```text
Bea likes tacos for late-night food with score 0.7.
```

The number is not self-explanatory. The slots give it meaning.

### Problem 6.7: Same numbers, different slots

Compare:

```text
T[person, dish, occasion]
S[dish, person, occasion]
```

Suppose both arrays contain the number `0.7` at position `[2,1,3]`. Do these entries automatically mean the same thing?

Answer check:

```text
No.

T[2,1,3] means person 2 likes dish 1 on occasion 3.
S[2,1,3] means dish 2 is related to person 1 on occasion 3.
```

Typed models track slot names, not just array shapes.

### Problem 6.8: Wedge product sign

Treat `e1 wedge e2` as the positive oriented area unit. Compute `e2 wedge e1` and `(e1 + e2) wedge e1`.

Answer check:

```text
e2 wedge e1 = - e1 wedge e2
(e1 + e2) wedge e1 = - e1 wedge e2
```

### Problem 6.9: Oriented difference between two profiles

Let:

```text
a = (1,2)
b = (3,1)
```

In two dimensions:

```text
a wedge b = (a1 b2 - a2 b1) e1 wedge e2
```

Compute `a wedge b`.

Answer check:

```text
a wedge b = (1)(1) - (2)(3) = -5
```

The sign says the ordered move from `a` to `b` has the opposite orientation from `e1 wedge e2`.

### Problem 6.10: Dependence makes the wedge vanish

Let:

```text
a = (2,4)
b = (1,2)
```

Compute `a wedge b`.

Answer check:

```text
a wedge b = (2)(2) - (4)(1) = 0
```

The two directions lie on the same line. They do not span a genuine two-dimensional difference.

### Problem 6.11: Levi-Civita volume intuition

If the oriented volume tensor returns `1` on `(e1,e2,e3)`, what should it return on `(e2,e1,e3)` and `(e1,e1,e3)`?

Answer check:

```text
(e2,e1,e3) swaps two inputs, so volume = -1.
(e1,e1,e3) repeats a direction, so volume = 0.
```

### Problem 6.12: Contraction fills a compatible slot

Let a two-slot tensor have components:

```text
T = [2 1]
    [3 4]
```

Let `v = (5,6)`. Contract the second slot:

```text
w_i = T_ij v_j
```

Compute `w`.

Answer check:

```text
w_1 = 2(5) + 1(6) = 16
w_2 = 3(5) + 4(6) = 39

w = (16,39)
```
