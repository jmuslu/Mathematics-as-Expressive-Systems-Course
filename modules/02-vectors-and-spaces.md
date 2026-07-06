# Module 02: Vector Spaces, Reachability, and Memory Slots

## Lecture Promise

You will understand vectors as representational slots, vector spaces as reachable meaning spaces, and basis choice as a design decision for memory.

## Prerequisites

- Scalars from Module 01
- Vector addition and scalar multiplication
- Basic dot products

## Why The Old Object Fails

A scalar can rank a memory, but it cannot represent a memory. A memory item usually has many simultaneous features:

```text
topic, entity, time, source, certainty, style, task relevance
```

A vector is the first object that can store several coordinates at once. A vector space is the rule system that says how those memory representations can combine.

## Base Case

Represent a memory by two coordinates:

```text
m = (semantic relevance, recency)
```

Let:

```text
m1 = (3, 1)
m2 = (1, 3)
q  = (2, 2)
```

If retrieval means closest to q, then neither coordinate alone is enough. The memory lives in a space where tradeoffs are visible.

## Formal Object

A vector space V over a field F is a set with:

- Vector addition: u + v
- Scalar multiplication: a v

These operations obey closure, associativity, distributivity, identity, and inverse rules.

## Legal Operations

Vector spaces allow you to:

- Add memory representations
- Interpolate between memories
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

This is the memory-system idea behind basis expressiveness: a representation is reachable if your basis can combine to express it.

## Failure Mode

Vectors can hide meaning:

- A coordinate may not correspond to an interpretable feature.
- A basis may be redundant.
- A subspace may exclude important memory distinctions.
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

1. Suppose memory vectors all lie near a 2D plane inside R^100. What does that suggest about compression?
2. Give a two-vector example where adding recency changes the nearest memory.
3. Explain why an embedding dimension is not automatically an interpretable feature.

### Research-Style Problems

1. In dense retrieval, a query encoder and document encoder map text into a vector space. What assumptions are made when inner product is used as relevance?
2. Construct a toy embedding space where synonymy and recency conflict.
3. Design a memory vector with semantic, temporal, and confidence coordinates. State which operations should be legal.

## Memory-System Connection

A memory slot is not merely stored text. It is a vector representation plus a set of legal operations:

- Add or merge memories
- Compare query and memory
- Project into an index space
- Compress or quantize
- Update after feedback

The design question is: what vector space should memory live in?

## Research Bridge

- Dense Passage Retrieval uses vector representations for questions and passages.
- ColBERT changes the representation from one vector per passage to many contextual token vectors.
- Product quantization compresses vector memory by decomposing it into subspaces.

## Hand Problem Trail

### Problem 2.1: Memory as a vector

A memory item is represented by:

```text
m = (relevance, confidence, recency) = (3, 4, 12)
```

Compute its L1, L2, and L-infinity norms.

Answer check:

```text
||m||_1 = 19
||m||_2 = sqrt(3^2 + 4^2 + 12^2) = 13
||m||_infinity = 12
```

### Problem 2.2: Normalize before comparing

Let `a = (3, 4)` and `b = (6, 8)`. Compute both L2 norms and normalize both vectors.

Answer check:

```text
||a|| = 5, ||b|| = 10
ahat = bhat = (3/5, 4/5)
```

They point in the same direction but have different magnitudes.

### Problem 2.3: Span as reachable memory

Let `u = (1, 0, 1)` and `v = (0, 1, 1)`. Can `(2, 3, 5)` be written as `a u + b v`?

Answer check:

```text
a u + b v = (a, b, a+b)
Set a=2, b=3, then a+b=5. Yes.
```

Can `(2, 3, 7)` be written that way? No, because the third coordinate would have to be `2 + 3 = 5`.

### Problem 2.4: Basis choice

Give a basis for `S = {(x, y, z) : z = x + y}`.

Answer check: one valid basis is `{(1,0,1), (0,1,1)}`.
