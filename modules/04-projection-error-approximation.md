# Module 04: Projection, Error, and Approximation

## Lecture Promise

You will understand projection as best available approximation and residual error.

## Prerequisites

- Inner products
- Linear maps
- Norms

## Why The Old Object Fails

Memory rarely contains the exact thing needed. The system must return the closest available representation and know what remains unexplained.

## Base Case

Project d = (3, 1) onto u = (1, 1):

```text
proj_u(d) = ((d^T u)/(u^T u))u = (4/2)(1,1) = (2,2)
```

Residual:

```text
e = d - proj_u(d) = (1,-1)
```

and e is orthogonal to u.

## Formal Object

Projection is the nearest point in a subspace under a chosen geometry.

## Invariants

- Orthogonality of residual
- Minimum squared error
- Idempotence P^2 = P

## Problem Ladder

1. Project (2, 4) onto (1, 0).
2. Derive the scalar projection formula.
3. Explain what residual error means for failed retrieval.

## Memory-System Connection

Approximation quality matters more than nearest-neighbor confidence.

## Hand Problem Trail

### Problem 4.1: Projection onto one direction

Let `y = (3, 4)` and `u = (1, 0)`. Compute the projection of y onto span(u), then compute the error vector.

Answer check:

```text
proj_u(y) = ((y dot u)/(u dot u))u = 3(1,0) = (3,0)
error = y - proj = (0,4)
```

### Problem 4.2: Projection onto a non-unit vector

Let `y = (2, 3)` and `u = (1, 1)`. Compute `proj_u(y)` and check the residual.

Answer check:

```text
y dot u = 5
u dot u = 2
proj = (5/2)(1,1) = (2.5, 2.5)
error = (-0.5, 0.5)
error dot u = 0
```

### Problem 4.3: Misunderstanding model

A user asks for `y = (accuracy=8, speed=2)`. Your system can only optimize along `u = (1,1)`. Compute the projection and error.

Answer check:

```text
y dot u = 10, u dot u = 2, projection = (5,5)
error = (3,-3)
```

The system over-supplies speed and under-supplies accuracy relative to the request.

### Problem 4.4: Least-squares normal equation

For feature column `x = (1, 2, 2)` and target `y = (1, 2, 4)`, find the best scalar `a` minimizing `||ax - y||^2`.

Answer check:

```text
a = (x dot y)/(x dot x) = (1 + 4 + 8)/(1 + 4 + 4) = 13/9
```
