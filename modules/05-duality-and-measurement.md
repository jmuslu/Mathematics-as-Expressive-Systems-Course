# Module 05: Duality and Measurement

## Lecture Promise

You will understand dual spaces as the mathematics of tests, scores, constraints, and measurements.

## Prerequisites

- Vector spaces
- Linear maps

## Why The Old Object Fails

A profile is not enough. You also need functions that evaluate it:

```text
kindness, humor, availability, trust, effort
```

These are covectors.

## Base Case

The functional:

```text
f(x, y) = 2x - y
```

maps a vector to a scalar measurement.

## Running Example: Dating Standards As Measurements

A dating profile might have coordinates:

```text
kindness, humor, availability
```

The profile is a vector. A person's standard is a measurement:

```text
2 * kindness + 1 * humor - 3 * unavailability
```

That measurement is not the person. It is a question asked of the profile. A different person can ask a different question of the same vector and get a different score.

Duality is the distinction between states and tests.

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

## Design Connection

Every scoring rule is a measurement. Duality makes those measurements explicit, including what they cannot see.

## Hand Problem Trail

### Problem 5.1: Covector as a test

A dating profile is represented by:

```text
v = (kindness, ambition, humor) = (4,2,5)
```

One person's standard is the covector:

```text
f = [2, -1, 1]
```

Compute `f(v)`. Then describe one nonzero change `w` that this standard cannot detect.

Answer check:

```text
f(v) = 2(4) - 1(2) + 1(5) = 11

w = (1,2,0) is invisible because:
f(w) = 2(1) - 2 + 0 = 0
```

So `v` and `v+w` receive the same score from this measurement.

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

### Problem 5.9: Annihilator as a blind spot

A group-chat mood vector has coordinates:

```text
serious, playful, chaotic
```

A moderator only cares about the total balance:

```text
f = [1,1,1]
```

Find two linearly independent mood changes that are invisible to `f`.

Answer check:

```text
f(w) = w_1 + w_2 + w_3 = 0

w1 = (1,-1,0)
w2 = (1,0,-1)

f(w1)=0
f(w2)=0
```

The two changes are not scalar multiples, so they span part of the measurement's blind spot.

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

You want a scalar score that rewards kindness, rewards reliability twice as much, and penalizes unavailability three times as much. Write the covector for state `(kindness, reliability, unavailability)`.

Answer check: `phi = [1, 2, -3]`.

### Problem 5.12: Measurement failure

A score covector ignores unavailability:

```text
phi = [1,2,0]
```

for state `(kindness, reliability, unavailability)`. What can go wrong?

Answer check:

```text
A kind and reliable profile can score well even when unavailability is large, because the test cannot see the unavailability coordinate.
```

Every measurement makes some directions visible and others invisible.
