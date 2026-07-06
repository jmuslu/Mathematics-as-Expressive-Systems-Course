# Module 07: Covariance and Contravariance

## Lecture Promise

You will understand why different objects transform in different directions when coordinates change.

## Prerequisites

- Linear maps
- Dual spaces
- Tensors

## Why The Old Object Fails

If a graph memory changes representation, not every quantity should transform the same way.

States, measurements, gradients, and relations have different transformation laws.

## Base Case

If basis vectors transform by A, dual covectors transform by A^{-T} so that the pairing remains invariant:

```text
phi(v)
```

should not depend on coordinates.

## Formal Object

Covariant and contravariant components transform oppositely so geometric meaning is preserved.

## The Product Discipline

Products are only meaningful when their slots match.

```text
covector(vector) -> scalar
vector tensor covector -> linear operator
2-form(vector, vector) -> scalar
```

This is the same instinct you see in serious tensor-focused physics texts: do not memorize arrays; track the legal pairings and transformation laws. For this course, the payoff is architectural rather than physical. A typed memory system should know which combinations preserve meaning and which combinations are category errors.

## Wedge Product And Coordinate Change

A wedge product of covectors, such as:

```text
alpha wedge beta
```

is an antisymmetric object that eats two vectors. Under coordinate change, it transforms as a structured geometric object, not as an arbitrary table of numbers.

Its evaluation obeys:

```text
(alpha wedge beta)(u, v) = alpha(u) beta(v) - alpha(v) beta(u)
```

That determinant-like expression measures oriented two-dimensional content.

## Invariants

- Scalar contractions
- Tensor type
- Pairings between vectors and covectors
- Antisymmetric area or volume elements

## Problem Ladder

1. Explain why gradients behave like covectors.
2. Show why phi(v) should be coordinate-independent.
3. Identify covariant and contravariant parts of a memory scoring rule.
4. Evaluate `(alpha wedge beta)(u, v)` for simple coordinate covectors.
5. Explain why swapping the two input vectors changes the sign.
6. Identify a relation in a memory graph where orientation should matter.

## Memory-System Connection

This is the math behind safe representation changes.
