# Module 08: Inner Products and Hermitian Structure

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

## Invariants

- Hermitian norm
- Orthogonality
- Real eigenvalues of Hermitian operators
- Unitary preservation of geometry

## Problem Ladder

1. Compute <(1+i), (2-i)> with conjugation.
2. Show that a 1 by 1 Hermitian matrix contains a real number.
3. Explain why phase-aware memory edges may need complex geometry.
4. Compute v^T v and v* v for v = (1, i, 1 - i).
5. Show that if U is unitary, then ||Uv|| = ||v||.
6. Give a memory-design example where phase could encode direction, time offset, uncertainty rotation, or relation polarity.

## Memory-System Connection

Hermitian structure is the serious version of "geometry still works after enriching scalars." If a future memory architecture uses complex embeddings, Fourier features, phase-coded relations, or unitary dynamics, this module is the reason its notion of similarity and stability remains mathematically coherent.

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

### Problem 8.5: A 1 by 1 Hermitian matrix is real

Let:

```text
H = [a + bi]
```

What condition makes `H` Hermitian?

Answer check:

```text
H* = [a - bi]
H* = H means a - bi = a + bi
so b = 0
```

A one-dimensional Hermitian measurement must be a real number.

### Problem 8.6: A Hermitian quadratic form is real

Let:

```text
H = [2  i]
    [-i 3]
v = (1, i)
```

Compute `v* H v`.

Answer check:

```text
H v = [2  i; -i 3](1,i)
    = (2 + i^2, -i + 3i)
    = (1, 2i)

v* = [1, -i]
v* H v = [1, -i](1, 2i)
       = 1 + (-i)(2i)
       = 1 + 2
       = 3
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

### Problem 8.12: Phase interpretation

If a playlist relation has magnitude as taste strength and phase as temporal offset, why must similarity use conjugation?

Answer check:

```text
Without conjugation, a nonzero complex coordinate z can produce zz, which may be non-real.
With conjugation, conjugate(z)z = |z|^2 is real and nonnegative.
```

Phase is allowed to matter when comparing different profiles, but self-similarity should remain a meaningful length.
