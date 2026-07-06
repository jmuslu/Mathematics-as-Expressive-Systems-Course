# Module 03: Linear Systems, Projection, and Error

## Lecture Promise

You will understand projection as the mathematics of "best available approximation," then connect it to retrieval error, least squares, and memory mismatch.

## Prerequisites

- Vector spaces and span
- Dot products and norms
- Solving small linear systems

## Why The Old Object Fails

Span tells you whether a target is reachable. But memory systems often face unreachable targets:

```text
The user asks for D, but the memory basis can only express nearby C.
```

We need a way to answer:

- What is the closest reachable point?
- What error remains?
- How do we measure that error?

Projection is the object forced by this limitation.

## Base Case

Let the only available memory direction be:

```text
u = (1, 1)
```

The query target is:

```text
d = (3, 1)
```

We want the best approximation to d inside span(u). That means find a scalar a such that:

```text
au is as close as possible to d
```

## Formal Object

The projection of d onto the span of u is:

```text
proj_u(d) = ((d^T u) / (u^T u)) u
```

The error is:

```text
e = d - proj_u(d)
```

The defining property is:

```text
e^T u = 0
```

The error is orthogonal to the reachable direction.

## Worked Derivation

Minimize:

```text
f(a) = ||d - au||^2
```

Expand:

```text
f(a) = (d - au)^T(d - au)
     = d^T d - 2a d^T u + a^2 u^T u
```

Differentiate with respect to a:

```text
f'(a) = -2 d^T u + 2a u^T u
```

Set equal to zero:

```text
a = (d^T u) / (u^T u)
```

So projection is not magic. It is the least-error reachable point.

## Worked Numbers

For u = (1, 1) and d = (3, 1):

```text
d^T u = 4
u^T u = 2
a = 2
proj_u(d) = 2(1, 1) = (2, 2)
e = (3, 1) - (2, 2) = (1, -1)
```

Check:

```text
e^T u = (1, -1)^T(1, 1) = 0
```

## Failure Mode

Projection depends on the geometry you choose.

- L2 projection minimizes squared error, not semantic harm.
- Orthogonality depends on the inner product.
- A low-dimensional projection may erase rare but important facts.
- The nearest memory may be the wrong explanatory memory.

## Invariants

- Orthogonality of residual
- Minimum L2 error
- Projection matrix idempotence: P^2 = P
- Rank of the projection

## Problem Ladder

### Direct Problems

1. Project d = (2, 4) onto u = (1, 0).
2. Project d = (2, 4) onto u = (1, 1).
3. Find the residual and verify that it is orthogonal to u.

### Transfer Problems

1. Suppose a query asks for a concept outside the memory span. What does the projection represent?
2. Give an example where the closest vector by L2 distance is not the most useful memory.
3. Explain how least-squares regression is projection onto a column space.

### Research-Style Problems

1. In dense retrieval, assume the correct document is not in the index. What is the analog of projection error?
2. In RAG, separate retrieval error from generation error. Give a toy example of each.
3. Derive the normal equations X^T X w = X^T y as a projection condition.

## Memory-System Connection

Retrieval is often projection-like:

```text
query -> closest available memory -> residual uncertainty
```

Robust memory systems should not only return the nearest memory. They should estimate the residual: what was not captured by the retrieved context?

## Research Bridge

- Dense retrieval learns spaces where relevant passages should be close to queries.
- RAG depends on whether retrieved documents approximate the missing knowledge.
- BEIR exposes that a retriever can work in one domain but project badly in another.
