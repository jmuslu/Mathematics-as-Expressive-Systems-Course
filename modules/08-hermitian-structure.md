# Module 08: Hermitian Structure and Playlist Phase

## Lecture Promise

You will understand why complex vector spaces need Hermitian geometry, and why preserving geometry over richer scalars matters.

## Prerequisites

- Complex numbers
- Inner products
- Linear maps

## Why The Old Object Fails

Real inner products do not correctly preserve geometry over complex scalars. If phase matters, conjugation matters.

A complex scalar can change both magnitude and phase. If the geometry ignores conjugation, then length can stop being real and positivity can fail. Hermitian structure is not complex decoration; it is the repair that makes measurement, orthogonality, projection, and spectral theory survive over C.

## Base Case

For z = 1 + i:

```text
conjugate(z) z = (1 - i)(1 + i) = 2
```

The norm is real and nonnegative.

## Running Example: Playlist Phase

Imagine a playlist profile where magnitude means how strongly someone likes a feature, and phase means when that feature matters:

```text
early night, late night, nostalgic, energetic
```

Two people can have the same strength of preference but different timing. If similarity ignores conjugation, a nonzero phase-coded preference can produce a zero or non-real "length." That is not a usable geometry.

Hermitian structure says: phase can matter when comparing different profiles, but self-length must still be real and nonnegative.

## Formal Object

A Hermitian inner product satisfies:

```text
<u, v> = conjugate(<v, u>)
<u, u> >= 0
```

A Hermitian operator satisfies:

```text
A* = A
```

Here A* means conjugate transpose. This is the complex analogue of a symmetric real matrix.

## Legal Operations

The legal moves in Hermitian geometry are:

- conjugate the first slot of the inner product
- compute squared norm as `<v,v>`
- take conjugate transpose when forming an adjoint
- test Hermitian operators with `A*=A`
- test unitary operators with `U*U=I`
- preserve phase-sensitive similarity without sacrificing positive length

Once scalars are complex, ordinary transpose is no longer the correct geometry-preserving operation.

## Worked Example: Why Conjugation Is Forced

Let v = (1, i). Without conjugation:

```text
v^T v = 1^2 + i^2 = 0
```

That would say a nonzero vector has zero length. With Hermitian geometry:

```text
v* v = conjugate(1)1 + conjugate(i)i = 1 + (-i)i = 2
```

The same vector now has a valid squared norm.

## Operator Classes You Should Recognize

- Hermitian: A* = A. These behave like self-adjoint measurements.
- Unitary: U*U = I. These preserve inner products and norms.
- Normal: A*A = AA*. These are diagonalizable by a unitary basis.

The point is not quantum mechanics specifically. The point is that once representation includes phase, the legal geometry changes.

Non-degenerate Hermitian forms add geometric structure to a complex vector space. They identify vectors with dual vectors in a controlled way, so scores, similarities, and validation tests do not quietly assume an identification that the representation has not earned.

## Worked Derivation

Let:

```text
u = (1+i, 2)
v = (3, 1-i)
```

Using:

```text
<u,v> = conjugate(u_1)v_1 + conjugate(u_2)v_2
```

gives:

```text
<u,v> = (1-i)3 + 2(1-i)
      = 5 - 5i
```

Reverse the order:

```text
<v,u> = conjugate(3)(1+i) + conjugate(1-i)2
      = 3+3i + 2+2i
      = 5+5i
```

So:

```text
<u,v> = conjugate(<v,u>)
```

Similarity can be complex between different vectors, while self-similarity remains real and nonnegative.

## Invariants

- Hermitian norm
- Orthogonality
- Real eigenvalues of Hermitian operators
- Unitary preservation of geometry

## Failure Mode

If a complex model uses transpose-only geometry, it can assign zero or non-real length to nonzero states. That breaks projection, orthogonality, spectral interpretation, and stability checks.

The fix is not cosmetic conjugation. It is the structure that makes complex similarity usable.

## Problem Ladder

1. Compute <(1+i), (2-i)> with conjugation.
2. Find the entry conditions that make a complex matrix Hermitian.
3. Explain why phase-aware taste profiles may need complex geometry.
4. Compute v^T v and v* v for v = (1, i, 1 - i).
5. Show that if U is unitary, then ||Uv|| = ||v||.
6. Give a modeling example where phase could encode timing, direction, rotation, or relation polarity.

## Representation Design Connection

Hermitian structure is the serious version of "geometry still works after enriching scalars." If a model uses complex embeddings, Fourier features, phase-coded relations, or unitary dynamics, this module is the reason its notion of similarity and stability remains mathematically coherent.

## Hand Problem Trail

### Problem 8.1: Why conjugation matters

Let `v = (1, i)`. Compute `v^T v` and `v* v`.

Answer check:

```text
v^T v = 1^2 + i^2 = 0
v* v = conjugate(1)1 + conjugate(i)i = 1 + (-i)i = 2
```

### Problem 8.2: A complex similarity score

Let:

```text
u = (1+i, 2)
v = (3, 1-i)
```

Using the convention:

```text
<u,v> = conjugate(u1)v1 + conjugate(u2)v2
```

compute `<u,v>`.

Answer check:

```text
<u,v> = (1-i)3 + 2(1-i)
      = 3 - 3i + 2 - 2i
      = 5 - 5i
```

Complex inner products may be complex when the two inputs differ. Lengths are the special case that must be real and nonnegative.

### Problem 8.3: Check conjugate symmetry

Using the same `u` and `v`, compute `<v,u>` and compare it with `<u,v>`.

Answer check:

```text
<v,u> = conjugate(3)(1+i) + conjugate(1-i)2
      = 3(1+i) + (1+i)2
      = 5 + 5i

<v,u> = conjugate(<u,v>)
```

The order matters, but in a controlled way.

### Problem 8.4: Hermitian or not?

Decide whether each matrix is Hermitian.

```text
A = [2  i]
    [-i 3]

B = [1 i]
    [i 1]
```

Answer check: A is Hermitian. B is not Hermitian because conjugate transpose changes the off-diagonal entries.

### Problem 8.5: Build the Hermitian conditions

Let:

```text
H = [a+bi   2+3i]
    [c+di   5]
```

where `a`, `b`, `c`, and `d` are real numbers. Find the conditions that make `H` Hermitian.

Answer check:

```text
Diagonal entries must be real, so b = 0.
Off-diagonal entries must be conjugates:
c + di = 2 - 3i
so c = 2 and d = -3.
```

Hermitian symmetry is ordinary symmetry plus conjugation. A self-adjoint measurement can carry complex interaction terms, but its diagonal self-scores must be real.

### Problem 8.6: A Hermitian quadratic form is real

Let:

```text
H = [3   1+i]
    [1-i 2]
v = (1+i, 2)
```

Compute `v* H v`.

Answer check:

```text
Hv = [3(1+i) + (1+i)2, (1-i)(1+i) + 2(2)]
   = [5 + 5i, 2 + 4]
   = [5 + 5i, 6]

v* = [1-i, 2]

v*Hv = (1-i)(5+5i) + 2(6)
     = 10 + 12
     = 22
```

Hermitian forms behave like real-valued measurements even when the vectors have phase.

### Problem 8.7: Unitary preservation

Let `U = [0 1; 1 0]`. Show `U*U = I` and compute `||U(3,4)||`.

Answer check:

```text
U*U = I
U(3,4) = (4,3), norm = 5
```

### Problem 8.8: A phase rotation is unitary

Let:

```text
U = [i 0]
    [0 1]
v = (2,3)
```

Compute `Uv` and compare `||Uv||^2` with `||v||^2` using the Hermitian norm.

Answer check:

```text
Uv = (2i,3)
||Uv||^2 = conjugate(2i)(2i) + 3*3
          = (-2i)(2i) + 9
          = 4 + 9
          = 13

||v||^2 = 2^2 + 3^2 = 13
```

Multiplying by a complex phase changes direction in the complex plane but preserves length.

### Problem 8.9: Orthogonality with phase

Let:

```text
u = (1, i)
v = (1, i)
w = (1, -i)
```

Compute `<u,w>`.

Answer check:

```text
<u,w> = conjugate(1)1 + conjugate(i)(-i)
      = 1 + (-i)(-i)
      = 1 - 1
      = 0
```

The vector `w` is not visually orthogonal in the real-coordinate sense, but it is Hermitian-orthogonal to `u`.

### Problem 8.10: Projection in a complex line

Project:

```text
y = (1, i)
```

onto the line spanned by:

```text
u = (1, 0)
```

using:

```text
proj_u(y) = (<u,y>/<u,u>) u
```

Answer check:

```text
<u,y> = 1
<u,u> = 1
proj_u(y) = (1)(1,0) = (1,0)
```

Projection still works over complex scalars, but only after the geometry uses conjugation.

### Problem 8.11: Failure mode - using transpose instead of conjugate transpose

Let:

```text
v = (1, i, 1-i)
```

Compute `v^T v` and `v* v`.

Answer check:

```text
v^T v = 1^2 + i^2 + (1-i)^2
      = 1 - 1 + (1 - 2i + i^2)
      = -2i

v* v = 1 + 1 + conjugate(1-i)(1-i)
     = 2 + (1+i)(1-i)
     = 2 + 2
     = 4
```

Without conjugation, squared length can become non-real.

### Problem 8.12: Playlist timing interpretation

A dinner playlist model records magnitude as taste strength and phase as when that feature matters during the night: early, middle, or late. Why must similarity use conjugation?

Answer check:

```text
Without conjugation, a nonzero complex coordinate z can produce zz, which may be non-real.
With conjugation, conjugate(z)z = |z|^2 is real and nonnegative.
```

Phase is allowed to matter when comparing different profiles, but self-similarity should remain a meaningful length.
