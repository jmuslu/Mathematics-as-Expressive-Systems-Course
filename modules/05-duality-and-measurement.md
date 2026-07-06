# Module 05: Duality and Measurement

## Lecture Promise

You will understand dual spaces as the mathematics of tests, scores, constraints, and measurements.

## Prerequisites

- Vector spaces
- Linear maps

## Why The Old Object Fails

A memory state is not enough. You also need functions that evaluate it:

```text
relevance, trust, contradiction, freshness, support
```

These are covectors.

## Base Case

The functional:

```text
f(x, y) = 2x - y
```

maps a vector to a scalar measurement.

## Formal Object

The dual space V* consists of linear maps:

```text
V -> F
```

## Invariants

- Kernel of a functional
- Annihilator of a subspace
- Pairing between V and V*

## Problem Ladder

1. Find the kernel of f(x,y)=2x-y.
2. Interpret a constraint as a covector.
3. Explain why validation is a dual operation.

## Memory-System Connection

Every scoring rule is a measurement. Duality makes those measurements explicit.

## Hand Problem Trail

### Problem 5.1: Covector as a test

A memory state is `x = (source_quality, recency, contradiction) = (4, 2, 3)`. A validation covector is `phi = [2, 1, -3]`. Compute `phi(x)`.

Answer check:

```text
2*4 + 1*2 - 3*3 = 1
```

### Problem 5.2: Same vector, different tests

Using the same x, compute:

```text
phi_1 = [1, 0, 0]
phi_2 = [0, 0, 1]
phi_3 = [1, 1, -1]
```

Answer check:

```text
phi_1(x)=4, phi_2(x)=3, phi_3(x)=3
```

A covector is a question you ask of a state.

### Problem 5.3: Hyperplane of acceptable states

Find all `(a,b)` satisfying `[2, -1](a,b) = 0`.

Answer check:

```text
2a - b = 0, so b = 2a.
The acceptable states lie on span((1,2)).
```

### Problem 5.4: Design a validation test

You want a scalar score that rewards source quality, rewards independent corroboration twice as much, and penalizes contradiction three times as much. Write the covector for state `(quality, corroboration, contradiction)`.

Answer check: `phi = [1, 2, -3]`.
