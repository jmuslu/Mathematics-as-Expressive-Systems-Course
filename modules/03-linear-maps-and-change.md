# Module 03: Linear Maps and Change

## Lecture Promise

You will understand transformations as mathematical objects, not just procedures.

## Prerequisites

- Vectors and bases
- Matrix multiplication

## Why The Old Object Fails

A vector describes a state. A second-brain system needs rules that move one state to another: update, rewrite, validate, propagate, decay.

## Base Case

Let:

```text
A = [1 1]
    [0 1]
```

Then A sends:

```text
(x, y) -> (x + y, y)
```

The transformation preserves the second coordinate but changes the first by mixing in the second.

## Formal Object

A linear map T satisfies:

```text
T(u + v) = T(u) + T(v)
T(alpha u) = alpha T(u)
```

## Invariants

- Rank
- Kernel
- Image
- Trace and determinant for square maps

## Problem Ladder

1. Compute A(2, 3).
2. Find the kernel of a simple 2 by 2 matrix.
3. Give a memory update rule that is linear and one that is not.

## Memory-System Connection

Graph evolution rules are transformations. The first design question is what they preserve.
