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

Jeevanjee frames non-degenerate Hermitian forms as part of the tiered structure of linear algebra: vector space first, dual space next, then the extra geometric structure that identifies vectors with dual vectors in a controlled way. This matters here because memory scores, similarity, and validation tests should not quietly assume an identification that the representation has not earned.

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
