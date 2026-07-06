# Module 03: Linear Maps and Changing Perspective

## Lecture Promise

You will understand transformations as mathematical objects, not just procedures.

## Prerequisites

- Vectors and bases
- Matrix multiplication

## Why The Old Object Fails

A vector describes a state. But relationships, interpretations, and plans change. We need rules that move one state to another: update, rotate perspective, amplify, dampen, project, or erase.

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

## Legal Operations

The legal moves for linear maps are transformation moves:

- apply the map to a vector
- compose compatible maps
- test whether addition and scaling are preserved
- compute kernel, image, and rank
- invert the map when the determinant is nonzero
- change basis by conjugating the matrix representation

For a perspective change, this means you may mix coordinates by a fixed linear rule, but you may not add a threshold, maximum, or conditional branch and still call the result linear.

## Worked Derivation

For the base map:

```text
A = [1 1]
    [0 1]
```

apply it to a state `(x,y)`:

```text
A(x,y) = (x+y,y)
```

The kernel solves:

```text
x + y = 0
y = 0
```

so `y=0` and `x=0`. The kernel is only the zero vector, so this transformation does not collapse two different states to the same output.

The determinant is:

```text
det(A)=1*1 - 0*1 = 1
```

so the map is invertible. In the advice example, the perspective shift can be undone because no coordinate has been erased.

## Invariants

- Rank
- Kernel
- Image
- Trace and determinant for square maps

## Failure Mode

A rule can look like a transformation while quietly breaking linearity. For example:

```text
new_confidence = max(confidence + outside_perspective, 0)
```

may be a reasonable emotional model, but it is not a linear map. Once thresholds or cases enter, matrix tools like kernel, rank, and inverse no longer describe the whole rule.

## Problem Ladder

1. Compute A(2, 3).
2. Find the kernel of a simple 2 by 2 matrix.
3. Give a relationship-state update rule that is linear and one that is not.

## Design Connection

State-change rules are transformations. The first design question is what they preserve.

## Hand Problem Trail

### Problem 3.1: Advice as a matrix

A relationship state has two coordinates `x = (confidence, outside_perspective)`. A friend's advice sends:

```text
new_confidence = confidence - outside_perspective
new_outside_perspective = outside_perspective
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

### Problem 3.3: Self-discovery consistency check

Someone says their weekly energy has two hidden causes:

```text
x = sleep quality
y = social overload
```

Three observations give:

```text
x + y = 7
2x + y = 11
x - y = 1
```

Use elimination to decide whether these observations are mutually consistent.

Answer check:

Subtract the first equation from the second:

```text
x = 4
```

Then the first equation gives:

```text
y = 3
```

Check the third:

```text
x - y = 4 - 3 = 1
```

All three equations are consistent. Elimination exposes whether different observations can live in the same hidden state.

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

A state update deletes the uncertainty coordinate:

```text
(confidence, uncertainty) -> (confidence, 0)
```

Is this invertible?

Answer check:

```text
No. The original uncertainty value cannot be recovered.
```

Some transformations are useful but irreversible.
