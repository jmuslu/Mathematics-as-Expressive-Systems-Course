# Module 08 Bank: Inner Products and Hermitian Structure

Source posture: original course problems inspired by public notes on Hermitian inner products, unitary matrices, adjoints, and complex geometry. These are reserve candidates, not promoted lecture text.

## Source Anchors

- [Complex Inner Products](https://www.math.umd.edu/~hking/Hermitian.pdf)
- [Hermitian Operators](https://www.maths.dur.ac.uk/users/kasper.peeters/mathphys/hermitian_operators.html)
- [Hermitian Inner Product](https://mathworld.wolfram.com/HermitianInnerProduct.html)
- [Inner Product Space](https://en.wikipedia.org/wiki/Inner_product_space)

## 08.phase.length.failure.a

```text
Module: 08
Topic: conjugation and positivity
Role: warm-up
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by public notes emphasizing why complex inner products need conjugation.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let:

```text
z = 2 + i
```

Compare `z z` with `conjugate(z) z`. Which expression can be a squared length?

## Answer Check

```text
zz = (2+i)^2 = 3 + 4i
conjugate(z)z = (2-i)(2+i) = 5
```

Only the conjugated expression is real and nonnegative.

## Intuition

Complex numbers carry phase. Squared length must remove phase rather than double it.

## Modeling Implication

If a representation uses phase-like coordinates, ordinary multiplication is not automatically valid geometry.

## Reserve Notes

Useful as a smaller scalar base case before vector examples.

## 08.inner-product.compute.a

```text
Module: 08
Topic: complex inner product
Role: computation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by standard complex-coordinate inner-product examples.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Using the convention:

```text
<u,v> = conjugate(u1)v1 + conjugate(u2)v2
```

compute `<u,v>` for:

```text
u = (1 - i, 2 + i)
v = (3 + i, -1 + 2i)
```

## Answer Check

```text
conjugate(u) = (1+i, 2-i)

<u,v> = (1+i)(3+i) + (2-i)(-1+2i)
      = (2 + 4i) + (0 + 5i)
      = 2 + 9i
```

## Intuition

The result need not be real for two different vectors. Positivity is required only when the two inputs match.

## Modeling Implication

Similarity can carry phase information, but self-similarity must remain a valid magnitude.

## Reserve Notes

Good arithmetic drill if current Module 08 needs another computation.

## 08.conjugate-symmetry.check.a

```text
Module: 08
Topic: conjugate symmetry
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Based on Hermitian inner-product axioms.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Using the same `u` and `v` from `08.inner-product.compute.a`, compute `<v,u>` and check conjugate symmetry.

## Answer Check

```text
conjugate(v) = (3-i, -1-2i)

<v,u> = (3-i)(1-i) + (-1-2i)(2+i)
      = (2 - 4i) + (0 - 5i)
      = 2 - 9i

<v,u> = conjugate(<u,v>)
```

## Intuition

Switching order does not preserve the same complex number; it preserves the conjugate relationship.

## Modeling Implication

Directed phase-sensitive similarity needs a controlled order convention.

## Reserve Notes

Pairs with the previous problem.

## 08.unitary.phase-matrix.a

```text
Module: 08
Topic: unitary matrices
Role: computation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by public notes defining unitary matrices by `U*U = I`.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let:

```text
U = [0  i]
    [1  0]
```

Compute `U*U`. Then apply `U` to `v = (2, 3)` and compare norms.

## Answer Check

```text
U* = [0 1]
     [-i 0]

U*U = [1 0; 0 1]

Uv = (3i, 2)
||Uv||^2 = conjugate(3i)(3i) + 2(2) = 9 + 4 = 13
||v||^2 = 2^2 + 3^2 = 13
```

## Intuition

A unitary transformation can rotate and phase-shift coordinates while preserving Hermitian length.

## Modeling Implication

Stable dynamics over complex features should preserve the right geometry, not raw coordinates.

## Reserve Notes

Could replace or extend the simpler diagonal phase example in Module 08.

## 08.hermitian.matrix.diagonal-real.a

```text
Module: 08
Topic: Hermitian matrix structure
Role: conceptual check
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by the standard condition `A* = A`.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Find all conditions on real numbers `a,b,c,d` that make:

```text
H = [a+bi   2+3i]
    [c+di   5]
```

Hermitian.

## Answer Check

```text
Diagonal entries must be real, so b = 0.
Off-diagonal entries must be conjugates:
c + di = 2 - 3i
so c = 2 and d = -3.
```

## Intuition

Hermitian symmetry is ordinary symmetry plus conjugation. The diagonal cannot keep imaginary phase.

## Modeling Implication

A self-adjoint measurement should return real self-scores.

## Reserve Notes

Good bridge from 1-by-1 Hermitian matrices to full matrices.

## 08.hermitian.quadratic-form.a

```text
Module: 08
Topic: Hermitian quadratic form
Role: harder calculation
Status: reserve
Source use: original, source-informed
Source note: Inspired by Hermitian matrix/operator notes.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let:

```text
H = [3   1+i]
    [1-i 2]
v = (1+i, 2)
```

Compute `v* H v`.

## Answer Check

```text
Hv = [3(1+i) + (1+i)2, (1-i)(1+i) + 2(2)]
   = [5 + 5i, 2 + 4]
   = [5 + 5i, 6]

v* = [1-i, 2]

v*Hv = (1-i)(5+5i) + 2(6)
     = 10 + 12
     = 22
```

## Intuition

The vector has complex coordinates, but the Hermitian quadratic measurement is real.

## Modeling Implication

Complex-valued internal representations can still produce real validation scores if the operator has the right structure.

## Reserve Notes

Good graduate-depth arithmetic exercise.

## 08.adjoint.product.order.a

```text
Module: 08
Topic: adjoint reverses composition
Role: derivation
Status: reserve
Source use: original, source-informed
Source note: Inspired by adjoint operator properties in public Hermitian-operator notes.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let:

```text
A = [1 i]
    [0 1]

B = [2 0]
    [1 i]
```

Compute `(AB)*` and `B*A*`. Verify they match.

## Answer Check

```text
AB = [1 i; 0 1][2 0; 1 i]
   = [2+i, -1; 1, i]

(AB)* = [2-i, 1; -1, -i]

A* = [1 0; -i 1]
B* = [2 1; 0 -i]

B*A* = [2 1; 0 -i][1 0; -i 1]
     = [2-i, 1; -1, -i]
```

## Intuition

Taking adjoints reverses the order because the rightmost operation acts first in the original composition.

## Modeling Implication

Reverse-order rules matter when undoing, auditing, or comparing composed transformations.

## Reserve Notes

This is a good bridge from Hermitian structure into later representation/composition modules.

## 08.projection.complex-line.a

```text
Module: 08
Topic: complex projection
Role: derivation
Status: reserve
Source use: original, source-informed
Source note: Inspired by the standard projection formula in inner-product spaces.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Project:

```text
y = (2+i, 1)
```

onto the complex line spanned by:

```text
u = (1, i)
```

using:

```text
proj_u(y) = (<u,y>/<u,u>)u
```

## Answer Check

```text
<u,y> = conjugate(1)(2+i) + conjugate(i)(1)
      = 2+i-i
      = 2

<u,u> = 1 + (-i)i = 2

proj_u(y) = (2/2)(1,i) = (1,i)
```

## Intuition

The projection coefficient is computed by a Hermitian measurement.

## Modeling Implication

Approximation over complex features needs the same conjugation discipline as similarity.

## Reserve Notes

Useful if Module 08 is tied back to Module 04 projection.

## 08.phase.playlist.analogy.a

```text
Module: 08
Topic: phase interpretation
Role: modeling interpretation
Status: reserve
Source use: original
Source note: Course-style standalone analogy.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Imagine a playlist model where magnitude records how strongly a listener likes a song feature, and phase records when that feature tends to matter during a night: early, middle, or late. Why should a similarity score between phase-coded profiles use conjugation?

## Answer Check

```text
Without conjugation, a nonzero complex coordinate z can produce zz, which may be non-real.
With conjugation, conjugate(z)z = |z|^2 is real and nonnegative.
So the score can compare phase-aware features while keeping self-similarity meaningful.
```

## Intuition

Phase is allowed to matter between different objects, but self-length should not turn into a rotated complex number.

## Modeling Implication

The analogy is ordinary first: taste strength plus timing. The design lesson is that enriched scalars require enriched geometry.

## Reserve Notes

Potential lecture analogy if Module 08 needs a less architecture-heavy human frame.
