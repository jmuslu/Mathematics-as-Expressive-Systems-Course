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
