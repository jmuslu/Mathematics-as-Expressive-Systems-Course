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

Do not memorize arrays; track legal pairings and transformation laws. A typed memory system should know which combinations preserve meaning and which combinations are category errors.

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

## Hand Problem Trail

### Problem 7.1: Pairing must stay invariant

Let `v = (2,3)` and `phi = [4,5]`. Compute `phi(v)`.

Answer check: `phi(v) = 4*2 + 5*3 = 23`.

### Problem 7.2: Units change, meaning should not

In a budgeting problem, a person's spending vector is:

```text
v = (2,3)
```

where the first coordinate is measured in tens of dollars and the second in individual dollars. A scoring covector is:

```text
phi = [4,5]
```

The first coordinate is now measured in twenties of dollars, so the new vector coordinate is:

```text
v' = (1,3)
```

What must happen to the first score weight if the final score is still 23?

Answer check:

```text
old score = 4(2) + 5(3) = 23
new score = a(1) + 5(3)

a + 15 = 23
a = 8
```

The coordinate got smaller because the basis unit got larger. The covector component moved the other way.

### Problem 7.3: Change basis by scaling

Suppose new vector coordinates are `v' = (1,3)` because the first basis vector doubled. Use:

```text
v = A v', A = [2 0]
             [0 1]
phi' = phi A
```

Find `phi'` and check the pairing.

Answer check:

```text
phi' = [4,5][2 0; 0 1] = [8,5]
phi'(v') = 8*1 + 5*3 = 23
```

### Problem 7.4: Gradient as covector

For `f(x,y)=3x+2y`, write the gradient as a covector and evaluate its directional change on `v=(4,-1)`.

Answer check:

```text
df = [3,2]
df(v) = 12 - 2 = 10
```

The gradient is not just an arrow. It is a measurement rule for directional change.

### Problem 7.5: A vector changes differently from a covector

Let:

```text
A = [2 0]
    [0 3]
```

Vector coordinates transform as:

```text
v = A v'
```

If `v' = (1,2)`, compute `v`. Then find the covector coordinates `phi'` for `phi = [5,7]` using:

```text
phi' = phi A
```

Answer check:

```text
v = (2,6)
phi' = [5,7][2 0; 0 3] = [10,21]
```

Vector components and covector components do not follow the same rule because they play different roles.

### Problem 7.6: Check the invariant scalar

Using Problem 7.5, verify:

```text
phi(v) = phi'(v')
```

Answer check:

```text
phi(v) = [5,7](2,6) = 10 + 42 = 52
phi'(v') = [10,21](1,2) = 10 + 42 = 52
```

The scalar is the thing that survives the coordinate change.

### Problem 7.7: Wedge evaluation

Let `alpha=[1,0]`, `beta=[0,1]`, `u=(2,0)`, `v=(0,3)`. Compute `(alpha wedge beta)(u,v)`.

Answer check:

```text
alpha(u) beta(v) - alpha(v) beta(u) = 2*3 - 0*0 = 6
```

### Problem 7.8: Swapping inputs changes orientation

Use the same `alpha`, `beta`, `u`, and `v`. Compute:

```text
(alpha wedge beta)(v,u)
```

Answer check:

```text
alpha(v) beta(u) - alpha(u) beta(v) = 0*0 - 2*3 = -6
```

The same two directions are present, but the order has reversed.

### Problem 7.9: Repeated direction gives zero area

Let:

```text
u = (2,0)
v = (4,0)
alpha = [1,0]
beta = [0,1]
```

Compute `(alpha wedge beta)(u,v)`.

Answer check:

```text
alpha(u) beta(v) - alpha(v) beta(u) = 2*0 - 4*0 = 0
```

The directions are dependent, so the oriented area vanishes.

### Problem 7.10: Identify the legal pairing

For each expression, decide whether it is a legal pairing without adding extra structure:

```text
A. covector(vector)
B. vector(covector)
C. covector covector by dot product
D. 2-form(vector, vector)
```

Answer check:

```text
A. legal
B. not legal as written
C. not legal without an inner product or metric
D. legal
```

Variance is a grammar of slots. It prevents expressions from looking meaningful just because the dimensions match.

### Problem 7.11: A metric changes what can be identified

Let a metric matrix be:

```text
G = [2 0]
    [0 1]
```

Use it to lower the vector `v = (3,4)` into a covector:

```text
v_flat = v^T G
```

Answer check:

```text
v_flat = [3,4][2 0; 0 1] = [6,4]
```

A metric is extra structure. It lets vectors produce covectors, but the result depends on the chosen geometry.

### Problem 7.12: Failure mode - treating every array the same

A student sees `[6,4]` and says it must be a vector because it has two entries. What is wrong?

Answer check:

```text
The entries alone do not determine the object type.
[6,4] could be vector coordinates, covector components, a row of a matrix, or part of a tensor.
The legal operations depend on the slot type and transformation law.
```
