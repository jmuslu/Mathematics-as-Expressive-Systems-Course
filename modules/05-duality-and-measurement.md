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

### Problem 5.2: Functional on a 2D vector

Let:

```text
f(x,y)=2x-y
```

Compute `f(3,5)`.

Answer check:

```text
f(3,5)=2(3)-5=1
```

A functional turns a vector into a scalar.

### Problem 5.3: Test linearity of a functional

For `f(x,y)=2x-y`, verify:

```text
f((1,0)+(0,3)) = f(1,0)+f(0,3)
```

Answer check:

```text
f(1,3)=2-3=-1
f(1,0)=2
f(0,3)=-3
2+(-3)=-1
```

Linear measurements respect vector addition.

### Problem 5.4: Same vector, different tests

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

### Problem 5.5: Kernel of a functional

Find the kernel of:

```text
f(x,y)=2x-y
```

Answer check:

```text
2x-y=0
y=2x
ker(f)=span((1,2))
```

The kernel is the set of states the test scores as zero.

### Problem 5.6: Hyperplane of acceptable states

Find all `(a,b)` satisfying `[2, -1](a,b) = 0`.

Answer check:

`2a - b = 0`, so `b = 2a`.

The acceptable states lie on `span((1,2))`.

### Problem 5.7: Nonzero level set

Find all `(a,b)` satisfying:

```text
[2,-1](a,b)=3
```

Answer check:

```text
2a-b=3
b=2a-3
```

A nonzero score gives an affine line, not a subspace through the origin.

### Problem 5.8: Dual basis evaluation

Let `e1=(1,0)` and `e2=(0,1)`. The dual basis covectors satisfy:

```text
e1*(x,y)=x
e2*(x,y)=y
```

Compute `e1*(4,7)` and `e2*(4,7)`.

Answer check:

```text
e1*(4,7)=4
e2*(4,7)=7
```

Dual basis covectors read coordinates.

### Problem 5.9: Annihilator of a subspace

Let `W=span((1,1))` in `R^2`. Find a nonzero covector that annihilates W.

Answer check:

```text
phi=[1,-1]
phi(1,1)=0
```

An annihilator contains measurements that vanish on a subspace.

### Problem 5.10: Pairing should produce a scalar

Let:

```text
v=(2,5)
phi=[3,-1]
```

Compute `phi(v)`.

Answer check:

```text
phi(v)=3(2)-1(5)=1
```

The vector-covector pairing is a scalar.

### Problem 5.11: Design a validation test

You want a scalar score that rewards source quality, rewards independent corroboration twice as much, and penalizes contradiction three times as much. Write the covector for state `(quality, corroboration, contradiction)`.

Answer check: `phi = [1, 2, -3]`.

### Problem 5.12: Measurement failure

A score covector ignores contradiction:

```text
phi = [1,2,0]
```

for state `(quality, corroboration, contradiction)`. What can go wrong?

Answer check:

```text
High-quality and corroborated claims can score well even when contradiction is large, because the test cannot see the contradiction coordinate.
```

Every measurement makes some directions visible and others invisible.
