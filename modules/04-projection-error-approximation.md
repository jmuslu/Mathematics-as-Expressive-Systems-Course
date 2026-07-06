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

## Running Example: Misunderstanding A Request

Imagine someone asks for a restaurant that is:

```text
very quiet, moderately cheap
```

but your recommendation system only understands one direction:

```text
quiet-and-cheap together
```

Projection gives the best answer available inside that limited direction. The residual is the part of the request the system failed to express.

The important lesson is not merely "nearest is good." It is: nearest inside the wrong subspace still leaves meaningful error.

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

### Problem 4.2: Check orthogonality of residual

Using Problem 4.1, compute `error dot u`.

Answer check:

```text
error = (0,4)
u = (1,0)
error dot u = 0
```

The residual is orthogonal to the approximation direction.

### Problem 4.3: Projection onto a non-unit vector

Let `y = (2, 3)` and `u = (1, 1)`. Compute `proj_u(y)` and check the residual.

Answer check:

```text
y dot u = 5
u dot u = 2
proj = (5/2)(1,1) = (2.5, 2.5)
error = (-0.5, 0.5)
error dot u = 0
```

### Problem 4.4: Projection length versus vector projection

For `y=(2,3)` and `u=(1,1)`, compute the scalar coefficient:

```text
(y dot u)/(u dot u)
```

Answer check:

```text
(2+3)/(1+1)=5/2
```

The coefficient says how much of direction `u` is used.

### Problem 4.5: Misunderstanding model

A friend asks for a place that is:

```text
quiet = 3
cheap = 1
```

Your simple recommender only understands the combined direction:

```text
u = (1,1)
```

Project `d=(3,1)` onto `span(u)` and compute the residual.

Answer check:

```text
proj_u(d) = ((d dot u)/(u dot u))u
          = ((3+1)/(1+1))(1,1)
          = 2(1,1)
          = (2,2)

residual = d - proj_u(d) = (3,1) - (2,2) = (1,-1)
```

Check:

```text
residual dot u = (1,-1) dot (1,1) = 0
```

The best available answer still misses "more quiet, less cheap" because the model only has one blended direction.

### Problem 4.6: Idempotence of projection

Let projection onto the x-axis be:

```text
P = [1 0]
    [0 0]
```

Compute `P^2`.

Answer check:

```text
P^2 = [1 0; 0 0] = P
```

Projecting twice is the same as projecting once.

### Problem 4.7: Projection matrix onto span(1,1)

For `u=(1,1)`, compute:

```text
P = u u^T / (u^T u)
```

Answer check:

```text
u u^T = [1 1]
        [1 1]
u^T u = 2
P = [1/2 1/2]
    [1/2 1/2]
```

This matrix projects any vector onto the line `y=x`.

### Problem 4.8: Apply the projection matrix

Use the matrix from Problem 4.7 to project `y=(2,4)`.

Answer check:

```text
P(2,4) = (3,3)
```

The closest point to `(2,4)` on `span((1,1))` is `(3,3)`.

### Problem 4.9: Least-squares normal equation

For feature column `x = (1, 2, 2)` and target `y = (1, 2, 4)`, find the best scalar `a` minimizing `||ax - y||^2`.

Answer check:

```text
a = (x dot y)/(x dot x) = (1 + 4 + 8)/(1 + 4 + 4) = 13/9
```

### Problem 4.10: Compute least-squares residual

Using Problem 4.9, compute the residual `r = y - ax` with `a=13/9`.

Answer check:

```text
ax = (13/9, 26/9, 26/9)
r = (1,2,4) - (13/9,26/9,26/9)
  = (-4/9, -8/9, 10/9)
```

Least squares does not make the error zero unless the target is in the span.

### Problem 4.11: Normal equation check

Using the residual from Problem 4.10, verify `x dot r = 0`.

Answer check:

```text
x dot r = 1(-4/9) + 2(-8/9) + 2(10/9)
        = -4/9 -16/9 +20/9
        = 0
```

The residual is orthogonal to the fitted subspace.

### Problem 4.12: Approximation failure

Name one reason the closest vector in an embedding space can still be the wrong answer.

Answer check:

```text
The embedding geometry may omit task context, source reliability, negation, time, or contradiction.
```

Projection and nearest-neighbor methods optimize within a chosen geometry; they do not guarantee semantic truth.
