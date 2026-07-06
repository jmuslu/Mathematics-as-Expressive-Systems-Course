# Module 08: Tensors - Several Inputs At Once

## Core Question

How do several objects interact simultaneously?

## Limitation

Linear maps handle one vector input. Many mathematical situations depend linearly on multiple inputs at the same time.

## New Object

Tensors and tensor products.

The tensor product V tensor W is designed so bilinear maps out of V x W become linear maps out of V tensor W.

## Legal Operations

- Combine vector spaces.
- Represent multilinear relationships.
- Separate coordinate choices from geometric meaning.
- Build product states and multilinear forms.

## Invariants

- Rank in special tensor contexts
- Symmetry or antisymmetry
- Order/type
- Dimension of tensor product
- Coordinate transformation law

## Concrete Example

If V has basis e1, e2 and W has basis f1, f2, f3, then V tensor W has basis:

```text
e1 tensor f1, e1 tensor f2, e1 tensor f3,
e2 tensor f1, e2 tensor f2, e2 tensor f3
```

The dimension becomes 2 * 3 = 6.

## Hand Exercises

1. If dim V = 3 and dim W = 4, compute dim(V tensor W).
2. Explain why a dot product is bilinear.
3. Describe the difference between a pair (v, w) and a tensor v tensor w.

## Depends On

Vector spaces, linear maps, and bilinear operations.

## Supports Later

Multilinear algebra, differential geometry, quantum composite systems, representation theory, and category theory.
