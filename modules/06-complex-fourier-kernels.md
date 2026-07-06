# Module 06: Complex Scalars, Phase, Fourier Features, and Kernels

## Lecture Promise

You will understand complex numbers as enriched scalars, not merely extra dimensions, then connect phase and Fourier features to positional encoding, kernels, and similarity.

## Prerequisites

- Real vectors
- Trigonometry
- Matrix multiplication
- Basic inner products

## Why The Old Object Fails

Real scalars stretch and flip. They do not naturally express phase. But memory systems often need periodic or relative structure:

- Word position
- Time since memory write
- Periodic events
- Frequency features
- Rotational encodings

Complex scalars let one coordinate carry magnitude and phase.

## Base Case

Multiplying by i rotates by 90 degrees:

```text
i(a + bi) = -b + ai
```

The scalar changed direction. This is not ordinary real scaling.

## Formal Object

Complex numbers have the form:

```text
z = a + bi
```

with:

```text
i^2 = -1
```

Polar form:

```text
z = r exp(i theta)
```

Multiplication adds phases:

```text
r1 exp(i theta1) * r2 exp(i theta2)
= r1 r2 exp(i(theta1 + theta2))
```

## Legal Operations

Complex scalars allow:

- Rotation by multiplication
- Phase addition
- Conjugation
- Fourier decomposition
- Hermitian inner products
- Unitary transformations

## Worked Derivation: Euler Features And Similarity

Euler's formula:

```text
exp(i theta) = cos(theta) + i sin(theta)
```

The real part of:

```text
exp(i theta1) conjugate(exp(i theta2))
```

is:

```text
cos(theta1 - theta2)
```

So complex phase can encode relative difference. That is why sinusoidal and rotary positional ideas are natural in transformer mathematics.

## Failure Mode

Complex or Fourier features can make similarity depend on periodic structure. This is powerful, but it can alias:

- Different positions may look similar under periodic encoding.
- High-frequency features can be sensitive to small shifts.
- Phase information may help order but not semantic relevance.

## Invariants

- Magnitude |z|
- Phase modulo 2pi
- Hermitian norm
- Unitary preservation of inner product
- Kernel positive semidefiniteness

## Problem Ladder

### Direct Problems

1. Compute (1 + i)(2 - 3i).
2. Write 1 + i in polar form.
3. Show that multiplying by exp(i theta) preserves magnitude.

### Transfer Problems

1. Explain why phase is useful for representing relative position.
2. Construct two different angles that collide under a periodic encoding.
3. Compare real dot product similarity with complex Hermitian similarity.

### Research-Style Problems

1. Derive how a sinusoidal positional encoding can represent relative position through inner products.
2. Explain how kernel feature maps enrich the space without explicitly storing all coordinates.
3. In linear attention, feature maps replace softmax attention. What operation becomes cheaper, and what approximation risk appears?

## Memory-System Connection

Memory is temporal. A memory's usefulness often depends on when it was written and where it sits relative to the current query. Complex phase and Fourier features give math for relative position, periodicity, and kernelized similarity.

## Research Bridge

- Transformer positional encodings use sinusoidal structure.
- Linear attention papers use kernel feature maps to rewrite attention.
- Rotary and Fourier-style features are examples of scalar enrichment becoming retrieval geometry.
