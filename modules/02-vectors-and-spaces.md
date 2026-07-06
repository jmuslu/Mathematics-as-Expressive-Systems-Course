# Module 02: Vector Spaces, Reachability, and Friendship Profiles

## Lecture Promise

You will understand vectors as multi-coordinate descriptions, vector spaces as reachable state spaces, and basis choice as a design decision for representing relationships.

## Prerequisites

- Scalars from Module 01
- Vector addition and scalar multiplication
- Basic dot products

## Why The Old Object Fails

A scalar can rank a friendship, but it cannot describe one. A relationship usually has many simultaneous features:

```text
humor, reliability, shared interests, trust, time, effort
```

A vector is the first object that can store several coordinates at once. A vector space is the rule system that says how those relationship profiles can combine.

## Base Case

Represent a friendship profile by two coordinates:

```text
m = (shared interests, reliability)
```

Let:

```text
m1 = (3, 1)
m2 = (1, 3)
q  = (2, 2)
```

If the target friendship style is closest to q, then neither coordinate alone is enough. The profile lives in a space where tradeoffs are visible.

## Running Example: Friendship Profiles

Think of a friendship profile with coordinates:

```text
humor, reliability, shared interests
```

One number cannot describe the friendship. Someone can be funny but unreliable, reliable but quiet, or deeply aligned in one topic and distant in another.

A vector lets several traits live together. A vector space says which combinations are legal:

```text
mix two profiles
scale a trait pattern
ask whether a desired profile is reachable from available directions
```

This is why span matters: it tells you what kinds of states your chosen coordinates can express.

## Formal Object

A vector space V over a field F is a set with:

- Vector addition: u + v
- Scalar multiplication: a v

These operations obey closure, associativity, distributivity, identity, and inverse rules.

## Legal Operations

Vector spaces allow you to:

- Add profile representations
- Interpolate between profiles
- Form spans
- Define subspaces
- Choose a basis
- Measure dimension
- Project onto a smaller space

## Worked Derivation: Span As Reachability

Let:

```text
u = (1, 0)
v = (1, 1)
```

Can we reach q = (2, 3) using u and v?

We need scalars a and b:

```text
a u + b v = q
a(1, 0) + b(1, 1) = (2, 3)
(a + b, b) = (2, 3)
```

So:

```text
b = 3
a + b = 2
a = -1
```

The target is reachable:

```text
q = -1 u + 3 v
```

This is the representation idea behind basis expressiveness: a profile is reachable if your basis directions can combine to express it.

## Failure Mode

Vectors can hide meaning:

- A coordinate may not correspond to an interpretable feature.
- A basis may be redundant.
- A subspace may exclude important relationship distinctions.
- Two vectors may be close geometrically but wrong semantically.

## Invariants

- Dimension
- Linear independence
- Span
- Rank of a set of vectors
- Subspace membership

## Problem Ladder

### Direct Problems

1. Decide whether (3, 5) is in the span of (1, 1) and (1, -1).
2. Give two different bases for R^2.
3. Find a basis for the span of (1, 2, 0), (2, 4, 0), and (0, 0, 1).

### Transfer Problems

1. Suppose friendship-profile vectors all lie near a 2D plane inside R^100. What does that suggest about compression?
2. Give a two-vector example where adding reliability changes the nearest profile.
3. Explain why an embedding dimension is not automatically an interpretable feature.

### Research-Style Problems

1. In dense retrieval, a query encoder and document encoder map text into a vector space. What assumptions are made when inner product is used as relevance?
2. Construct a toy profile space where shared interests and reliability conflict.
3. Design a relationship vector with humor, trust, time, and effort coordinates. State which operations should be legal.

## Design Connection

A friendship profile is not merely a vibe. It is a vector representation plus a set of legal operations:

- Combine trait patterns
- Compare a current profile with a desired one
- Project into a smaller coordinate system
- Compress or simplify
- Update after new interactions

The design question is: what vector space should the relationship live in?

## Hand Problem Trail

### Problem 2.1: Friendship as a vector

A friendship profile is represented by:

```text
m = (humor, trust, shared time) = (3, 4, 12)
```

Compute its L1, L2, and L-infinity norms.

Answer check:

```text
||m||_1 = 19
||m||_2 = sqrt(3^2 + 4^2 + 12^2) = 13
||m||_infinity = 12
```

### Problem 2.2: Add two state vectors

Let:

```text
a = (humor=3, reliability=1)
b = (humor=1, reliability=4)
```

Compute `a+b`.

Answer check:

```text
a+b = (4,5)
```

Vector addition combines coordinates slot by slot.

### Problem 2.3: Scale a vector

For `a=(3,1)`, compute `0.5a`.

Answer check:

```text
0.5a = (1.5,0.5)
```

Scalar multiplication changes magnitude without changing the coordinate grammar.

### Problem 2.4: Normalize before comparing

Let `a = (3, 4)` and `b = (6, 8)`. Compute both L2 norms and normalize both vectors.

Answer check:

```text
||a|| = 5, ||b|| = 10
ahat = bhat = (3/5, 4/5)
```

They point in the same direction but have different magnitudes.

### Problem 2.5: Span as a reachable profile

Let `u = (1, 0, 1)` and `v = (0, 1, 1)`. Can `(2, 3, 5)` be written as `a u + b v`?

Answer check:

```text
a u + b v = (a, b, a+b)
Set a=2, b=3, then a+b=5. Yes.
```

Can `(2, 3, 7)` be written that way? No, because the third coordinate would have to be `2 + 3 = 5`.

### Problem 2.6: Ticket combinations as span

A club sells adult tickets for 20 dollars and student tickets for 10 dollars. Read each ticket type as a vector:

```text
a = (1 ticket, 20 dollars)
s = (1 ticket, 10 dollars)
```

Can the club reach:

```text
t = (8 tickets, 130 dollars)
```

using a nonnegative integer combination of `a` and `s`?

Answer check:

```text
x a + y s = (8,130)

x + y = 8
20x + 10y = 130

10(x+y)=80
10x=50
x=5
y=3
```

Yes:

```text
5a + 3s = (8,130)
```

Span asks whether a target can be built from allowed moves. The nonnegative-integer constraint adds a second design question: not just reachable over real scalars, but reachable using actual ticket counts.

### Problem 2.7: Linear dependence

Are these vectors linearly independent?

```text
(1,2,0), (2,4,0), (0,0,1)
```

Answer check:

```text
(2,4,0)=2(1,2,0), so the set is dependent.
```

One vector repeats information already present in another.

### Problem 2.8: Basis choice

Give a basis for `S = {(x, y, z) : z = x + y}`.

Answer check: one valid basis is `{(1,0,1), (0,1,1)}`.

### Problem 2.9: Dimension of a subspace

What is the dimension of `S = {(x,y,z): z=x+y}`?

Answer check:

```text
S has basis {(1,0,1),(0,1,1)}, so dim(S)=2.
```

The constraint removes one degree of freedom from `R^3`.

### Problem 2.10: Coordinate meaning

Two vectors are close:

```text
a=(9,1)
b=(8,2)
```

Name one reason closeness might still be misleading.

Answer check:

```text
The coordinates may be poorly scaled or not semantically meaningful.
For example, a one-unit change in humor may not be comparable to a one-unit change in reliability.
```

Geometry is only as meaningful as the representation.

### Problem 2.11: Subspace membership

Is `(1,2,4)` in the subspace `S = {(x,y,z): z=x+y}`?

Answer check:

```text
x+y = 1+2 = 3, but z=4.
No.
```

Subspace membership is a legal-state test.

### Problem 2.12: Compression intuition

If friendship-profile vectors in `R^100` all lie near a 2D plane, what does that suggest?

Answer check:

```text
The data may be compressible to a low-dimensional representation with small projection error.
```

Low-dimensional structure is a mathematical reason compression might work.
