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

## Product Atlas

Different products answer different design questions. This module is where the course starts treating "product" as a family of mathematical moves, not one operation.

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

The original ML math course leaned heavily on matrix products, inner products, projections, SVD, covariance, and optimization. This course keeps those, then adds the missing mature products: tensor product for typed joint state, wedge product for oriented antisymmetric structure, and categorical products for structural composition.

## Formal Object

A tensor can be understood as a multilinear map or as an element of a tensor product space.

## Wedge Product

The wedge product is the antisymmetric part of tensor combination:

```text
u wedge v = -(v wedge u)
u wedge u = 0
```

Geometrically, `u wedge v` represents an oriented area element. In higher dimensions, wedge products build oriented volumes and differential forms.

Jeevanjee opens tensor intuition with the Levi-Civita symbol and the volume tensor: an object that eats three vectors and returns oriented volume. That is the exact style this course should imitate. The object is introduced because ordinary vectors and matrices do not directly express oriented multi-vector content.

Why this belongs here:

- It distinguishes ordered orientation from unordered association.
- It vanishes when two directions are dependent.
- It gives mature intuition for flux, circulation, constraints, and "joint evidence with orientation."
- It prepares you for topology and cohomology without requiring a physics specialization.

## Physicist's Tensor Intuition, Without The Physics Detour

The useful part of the physicist's tensor style is the discipline around:

- what kind of object this is,
- what slots it accepts,
- how its components transform,
- what contractions are legal,
- which quantities are coordinate-free.

That is why the course later emphasizes covariance, contravariance, Hermitian structure, exterior/wedge products, and invariants. The goal is not quantum mechanics. The goal is mathematical maturity about representation.

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

### Problem 6.1: Bilinear means linear in each slot

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

### Problem 6.2: Outer product as generated relation

Let `u = (2,1)` and `v = (3,4)`. Compute `u v^T`.

Answer check:

```text
[6 8]
[3 4]
```

### Problem 6.3: Wedge product sign

Treat `e1 wedge e2` as the positive oriented area unit. Compute `e2 wedge e1` and `(e1 + e2) wedge e1`.

Answer check:

```text
e2 wedge e1 = - e1 wedge e2
(e1 + e2) wedge e1 = - e1 wedge e2
```

### Problem 6.4: Levi-Civita volume intuition

If the oriented volume tensor returns `1` on `(e1,e2,e3)`, what should it return on `(e2,e1,e3)` and `(e1,e1,e3)`?

Answer check:

```text
(e2,e1,e3) swaps two inputs, so volume = -1.
(e1,e1,e3) repeats a direction, so volume = 0.
```
