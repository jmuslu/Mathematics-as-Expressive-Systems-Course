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

## Hand Problem Trail

### Problem 3.1: A rewrite rule as a matrix

A memory state has two coordinates `x = (claim_strength, contradiction_strength)`. The update rule sends:

```text
new_claim = claim_strength - contradiction_strength
new_contradiction = contradiction_strength
```

Write the matrix A such that `Ax` gives the new state.

Answer check:

```text
A = [1 -1]
    [0  1]
```

### Problem 3.2: Apply the transformation

For `x = (7, 2)`, compute `Ax`.

Answer check: `Ax = (5, 2)`.

### Problem 3.3: Compose two changes

Let:

```text
A = [1 -1]   B = [2 0]
    [0  1]       [0 1]
```

Compute `ABx` and `BAx` for `x = (7,2)`.

Answer check:

```text
Bx = (14,2), ABx = (12,2)
Ax = (5,2), BAx = (10,2)
```

Composition order matters.

### Problem 3.4: Find what survives

For the same A, solve `Ax = x`.

Answer check:

```text
(x1 - x2, x2) = (x1, x2)
So x2 = 0. All states (t, 0) survive unchanged.
```
