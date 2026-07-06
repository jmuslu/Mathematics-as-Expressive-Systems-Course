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

## Running Example: Changing Perspective

Suppose a friend gives advice that changes how you interpret a situation:

```text
new confidence = old confidence + outside perspective
outside perspective = unchanged
```

The advice does not erase the original perspective. It mixes one coordinate into another.

That is a linear map when mixing respects addition and scaling. The transformation itself becomes an object you can compose, invert, or test for lost information.

The same style explains a self-discovery calculation. If two observations about a situation can be transformed into one compatible pair of hidden coordinates, the system has found a consistent explanation. If a transformation collapses two different states into the same output, then some distinction has been lost. Linear algebra is the language for asking which changes are merely a new perspective and which changes destroy information.

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

### Problem 3.2: Apply the base-case shear

Let:

```text
A = [1 1]
    [0 1]
```

Compute `A(2,3)`.

Answer check:

```text
A(2,3) = (2+3,3) = (5,3)
```

The second coordinate is preserved while the first mixes in the second.

### Problem 3.3: Apply the transformation

For `x = (7, 2)`, compute `Ax`.

Answer check: `Ax = (5, 2)`.

### Problem 3.4: Test linearity

Let `T(x,y)=(x+y,y)`. Check `T((1,0)+(0,2)) = T(1,0)+T(0,2)`.

Answer check:

```text
T(1,2) = (3,2)
T(1,0)=(1,0)
T(0,2)=(2,2)
T(1,0)+T(0,2)=(3,2)
```

The map preserves vector addition.

### Problem 3.5: Nonlinear update

Is `F(x,y)=(x^2,y)` linear?

Answer check:

```text
No. F(2,0)=(4,0), but 2F(1,0)=2(1,0)=(2,0).
```

Not every update rule is a linear map.

### Problem 3.6: Compose two changes

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

### Problem 3.7: Compute a kernel

Find the kernel of:

```text
K = [1 -1]
```

as a map from `R^2 -> R`.

Answer check:

```text
K(x,y)=x-y=0
so x=y
ker(K)=span((1,1))
```

The kernel is what the measurement cannot see.

### Problem 3.8: Compute an image

For:

```text
A = [1 0]
    [0 0]
```

what is the image of A?

Answer check:

```text
A(x,y)=(x,0)
image(A)=span((1,0))
```

The image is the set of reachable outputs.

### Problem 3.9: Rank-nullity

For the matrix in Problem 3.8, compute rank and nullity.

Answer check:

```text
rank = 1
kernel is span((0,1)), so nullity = 1
rank + nullity = 2
```

Rank-nullity accounts for output directions and lost directions.

### Problem 3.10: Fixed point

For the same A, solve `Ax = x`.

Answer check:

```text
A(x,y) = (x,0)
(x,0) = (x,y) means y = 0.
```

All states `(t,0)` survive unchanged.

### Problem 3.11: Determinant intuition

For:

```text
D = [2 0]
    [0 3]
```

compute the determinant and explain the area scaling.

Answer check:

```text
det(D)=6
```

The map scales area by a factor of 6.

### Problem 3.12: Transformation design

A state update deletes the contradiction coordinate:

```text
(claim, contradiction) -> (claim, 0)
```

Is this invertible?

Answer check:

```text
No. The original contradiction value cannot be recovered.
```

Some transformations are useful but irreversible.
