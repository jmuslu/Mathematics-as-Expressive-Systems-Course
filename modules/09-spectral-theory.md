# Module 09: Spectral Theory and Friendship Moods

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

## Running Example: Friendship Moods

Imagine a friend group where two patterns can repeat week after week:

```text
everyone gets more excited together
one half gets excited while the other half pulls away
```

Those are not individual people. They are modes of the group. A weekly update may amplify one mode, damp another, or leave one unchanged.

Spectral theory asks: which patterns are stable under the transformation? Eigenvectors are the directions that keep their shape while only their strength changes.

## Formal Object

Eigenvectors satisfy:

```text
Av = lambda v
```

Singular values measure action between input and output directions.

## Legal Operations

The legal moves in spectral theory are mode-decomposition moves:

- test whether a vector is an eigenvector
- solve `det(A - lambda I)=0` for eigenvalues
- find eigenspaces by solving `(A - lambda I)v=0`
- decompose a state into eigenmodes when enough eigenvectors are available
- apply repeated powers by scaling each eigenmode
- use singular values when the map is rectangular or input/output geometries differ

The friendship-mood lesson is that a repeated social update is easiest to understand in the directions it does not mix.

## Worked Derivation

For:

```text
A = [2 1]
    [1 2]
```

the characteristic polynomial is:

```text
det(A - lambda I) = (2-lambda)^2 - 1
                  = lambda^2 - 4lambda + 3
```

so:

```text
lambda = 3, 1
```

The shared mood mode:

```text
u=(1,1)
```

satisfies:

```text
Au=(3,3)=3u
```

The contrast mood mode:

```text
v=(1,-1)
```

satisfies:

```text
Av=(1,-1)=v
```

So the update amplifies shared excitement and preserves contrast. If `(4,2)=3u+v`, then:

```text
A^t(4,2)=3*3^t u + 1^t v
```

The long-run behavior is dominated by the shared mood mode.

## Invariants

- Eigenvalues under similarity
- Singular values under orthogonal/unitary changes
- Spectral radius

## Failure Mode

Eigenvectors are powerful only when the decomposition is appropriate. A non-diagonalizable map, a changing update rule, or a nonlinear threshold can make the clean mode story misleading.

The design question is whether the repeated process really preserves the same linear transformation at each step.

## Problem Ladder

1. Find eigenvectors of a diagonal matrix.
2. Explain why Hermitian matrices have real spectra.
3. Interpret stable social modes as friendship attractors.

## Design Connection

Spectral theory tells you which modes a repeated dynamic amplifies, damps, or preserves.

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

Find eigenvectors for the matrix in Problem 9.3.

Answer check:

```text
lambda=3: span((1,1))
lambda=1: span((1,-1))
```

### Problem 9.5: Decompose friendship mood into eigenmodes

Two friends start the week with mood vector `(4,2)`, where each coordinate is one person's excitement about a shared plan. Write this state as a combination of the shared-mood mode and the contrast-mood mode:

```text
u=(1,1)     shared mood
v=(1,-1)    contrast mood
```

Answer check:

```text
a(1,1)+b(1,-1)=(a+b,a-b)=(4,2)
a+b=4
a-b=2
2a=6, a=3
b=1
```

So `(4,2)=3u+v`: most of the state is shared excitement, with one unit of contrast between the two friends.

### Problem 9.6: Apply repeated powers to the friendship mood

The weekly update rule is:

```text
A = [2 1]
    [1 2]
```

This update triples the shared-mood mode `u=(1,1)` and leaves the contrast-mood mode `v=(1,-1)` unchanged. Use Problem 9.5 to compute `A^3(4,2)`.

Answer check:

```text
A^3(4,2)=A^3(3u+v)
=3(3^3u)+1(1^3v)
=81u+v
=81(1,1)+(1,-1)
=(82,80)
```

After three weeks, the shared mood has been amplified from `3u` to `81u`, while the contrast mood is still just `v`. Eigenvectors make repeated dynamics easier to understand because powers act separately on each mode.

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

### Problem 9.11: Social interpretation

A two-person friendship repeatedly applies the update rule from Problem 9.6. Which mode grows faster: shared excitement `(1,1)` or contrast `(1,-1)`?

Answer check: shared excitement grows by factor 3 each update; contrast grows by factor 1.

### Problem 9.12: Failure mode - largest mode is not always best

If the largest eigenmode of a friend-group dynamic corresponds to drama rather than care, what can go wrong?

Answer check:

```text
Repeated updates may amplify the loudest or most contagious pattern even when it damages the group.
```

A stable or growing spectral mode needs interpretation, not blind trust.
