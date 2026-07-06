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

### Problem 9.2: Non-eigenvector check

For `A = [3 0; 0 1]`, compute `A(1,1)`. Is `(1,1)` an eigenvector?

Answer check:

```text
A(1,1)=(3,1)
```

This is not a scalar multiple of `(1,1)`, so `(1,1)` is not an eigenvector.

### Problem 9.3: Find eigenvalues

For `A = [2 1; 1 2]`, compute the characteristic polynomial and eigenvalues.

Answer check:

```text
det(A - lambda I) = (2-lambda)^2 - 1
= lambda^2 - 4lambda + 3
lambda = 3, 1
```

### Problem 9.4: Find eigenvectors

Find eigenvectors for the matrix in Problem 9.2.

Answer check:

```text
lambda=3: span((1,1))
lambda=1: span((1,-1))
```

### Problem 9.5: Decompose a vector into eigenmodes

Write `(4,2)` as a combination of:

```text
u=(1,1)
v=(1,-1)
```

Answer check:

```text
a(1,1)+b(1,-1)=(a+b,a-b)=(4,2)
a+b=4
a-b=2
2a=6, a=3
b=1
```

So `(4,2)=3u+v`.

### Problem 9.6: Apply powers using eigenmodes

For `A=[2 1; 1 2]`, use Problem 9.5 to compute `A(4,2)`.

Answer check:

```text
A(4,2)=A(3u+v)=3(3u)+1(1v)=9u+v
=9(1,1)+(1,-1)=(10,8)
```

Eigenvectors make repeated dynamics easier to understand.

### Problem 9.7: Spectral radius

What is the spectral radius of `A=[2 1; 1 2]`?

Answer check:

```text
eigenvalues are 3 and 1
spectral radius = max(|3|,|1|)=3
```

The largest eigenvalue magnitude controls long-run growth for repeated powers.

### Problem 9.8: Hermitian spectrum intuition

Why are the eigenvalues of:

```text
A = [2 1]
    [1 2]
```

real?

Answer check:

```text
A is real symmetric, hence Hermitian. Hermitian matrices have real eigenvalues.
```

Geometry is better behaved for Hermitian operators.

### Problem 9.9: Singular value base case

Let:

```text
D = [3 0]
    [0 2]
```

What are the singular values?

Answer check:

```text
3 and 2
```

For a diagonal matrix with positive entries, singular values are the axis stretch factors.

### Problem 9.10: Stable mode

For:

```text
A = [1 0]
    [0 0.5]
```

which direction survives repeated application longer?

Answer check:

```text
The x-axis/e1 direction survives with eigenvalue 1.
The y-axis/e2 direction decays by 0.5 each step.
```

Spectral theory identifies stable and decaying modes.

### Problem 9.11: Memory interpretation

A two-node belief system repeatedly applies A. Which mode grows faster: agreement `(1,1)` or disagreement `(1,-1)`?

Answer check: agreement grows by factor 3; disagreement grows by factor 1.

### Problem 9.12: Failure mode - largest mode is not always best

If the largest eigenmode of a memory dynamic corresponds to popularity rather than truth, what can go wrong?

Answer check:

```text
Repeated updates may amplify popular or frequently traversed beliefs even when they are false or low quality.
```

A stable or growing spectral mode needs interpretation, not blind trust.
