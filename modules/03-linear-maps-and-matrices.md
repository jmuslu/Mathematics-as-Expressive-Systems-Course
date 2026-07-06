# Module 03: Linear Maps and Matrices - Machines That Move Vectors

## Core Question

How does a whole space transform?

## Limitation

Vectors describe positions or directions, but they do not by themselves describe machines acting on those directions.

## New Object

A linear map. A matrix is the coordinate representation of a linear map after bases have been chosen.

## Legal Operations

- Transform vectors.
- Compose transformations by multiplying matrices.
- Invert transformations when possible.
- Solve linear systems.
- Compare transformations through their action on basis vectors.

## Invariants

- Rank
- Nullity
- Image
- Kernel
- Determinant for square matrices
- Trace for square matrices

## Concrete Example

The matrix

```text
[2 0]
[0 1]
```

stretches the x direction by 2 and leaves the y direction unchanged. The columns tell you where the basis vectors go.

## Hand Exercises

1. Compute the image of (1, 2) under the matrix above.
2. Give a matrix that rotates R^2 by 90 degrees.
3. Explain why matrix multiplication represents composition of machines.

## Depends On

Vectors, bases, and systems of equations.

## Supports Later

Eigenvectors, determinants, adjoints, representations, and linear differential equations.
