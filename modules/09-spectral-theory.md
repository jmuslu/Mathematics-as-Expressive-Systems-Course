# Module 09: Spectral Theory

## Lecture Promise

You will understand eigenvectors and singular vectors as stable modes of transformation.

## Prerequisites

- Linear maps
- Inner products
- Hermitian structure

## Why The Old Object Fails

A dynamic graph evolves. You need to know which patterns grow, decay, oscillate, or remain stable.

## Base Case

For:

```text
A = [2 0]
    [0 1]
```

the x-axis is scaled by 2 and the y-axis by 1.

## Formal Object

Eigenvectors satisfy:

```text
Av = lambda v
```

Singular values measure action between input and output directions.

## Invariants

- Eigenvalues under similarity
- Singular values under orthogonal/unitary changes
- Spectral radius

## Problem Ladder

1. Find eigenvectors of a diagonal matrix.
2. Explain why Hermitian matrices have real spectra.
3. Interpret stable graph modes as memory attractors.

## Memory-System Connection

Spectral theory tells you what your graph dynamics converge toward.

## Hand Problem Trail

### Problem 9.1: Eigenvector by inspection

Let `A = [3 0; 0 1]`. Compute `A(1,0)` and `A(0,1)`.

Answer check:

```text
A(1,0) = 3(1,0)
A(0,1) = 1(0,1)
```

### Problem 9.2: Find eigenvalues

For `A = [2 1; 1 2]`, compute the characteristic polynomial and eigenvalues.

Answer check:

```text
det(A - lambda I) = (2-lambda)^2 - 1
= lambda^2 - 4lambda + 3
lambda = 3, 1
```

### Problem 9.3: Find eigenvectors

Find eigenvectors for the matrix in Problem 9.2.

Answer check:

```text
lambda=3: span((1,1))
lambda=1: span((1,-1))
```

### Problem 9.4: Memory interpretation

A two-node belief system repeatedly applies A. Which mode grows faster: agreement `(1,1)` or disagreement `(1,-1)`?

Answer check: agreement grows by factor 3; disagreement grows by factor 1.
