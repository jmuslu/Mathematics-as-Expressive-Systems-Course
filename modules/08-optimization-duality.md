# Module 08: Optimization, Duality, and Constraints

## Lecture Promise

You will understand optimization as the mathematics of choosing under tradeoffs, then connect Lagrangians, KKT thinking, and dual variables to retrieval and memory-system design.

## Prerequisites

- Derivatives
- Vectors and matrices
- Probability and expected loss
- Projection and least squares

## Why The Old Object Fails

Memory systems are tradeoff machines:

- Retrieve relevant context, but stay within context budget.
- Store enough detail, but limit memory size.
- Improve recall, but control latency.
- Trust evidence, but avoid poisoned retrieval.

These are constrained optimization problems.

## Base Case

Maximize relevance:

```text
maximize r^T x
```

subject to a context budget:

```text
c^T x <= B
```

where x_i says whether memory i is included.

Even this toy version shows the structure:

```text
objective + constraint
```

## Formal Object

For equality constraints:

```text
minimize f(x)
subject to g(x) = 0
```

the Lagrangian is:

```text
L(x, lambda) = f(x) + lambda g(x)
```

The multiplier lambda measures sensitivity to the constraint.

For inequality constraints, KKT conditions add complementary slackness:

```text
lambda >= 0
g(x) <= 0
lambda g(x) = 0
```

## Worked Derivation: Projection With A Constraint

Minimize:

```text
f(x) = ||x - d||^2
```

subject to:

```text
u^T x = 0
```

Lagrangian:

```text
L(x, lambda) = (x - d)^T(x - d) + lambda u^T x
```

Derivative with respect to x:

```text
2(x - d) + lambda u = 0
```

So:

```text
x = d - (lambda / 2) u
```

Apply constraint:

```text
u^T d - (lambda / 2) u^T u = 0
lambda = 2 (u^T d) / (u^T u)
```

Therefore:

```text
x = d - ((u^T d)/(u^T u)) u
```

The constrained optimum subtracts the projection onto u.

## Failure Mode

Optimization can make a system brittle:

- The objective may not match the real goal.
- Constraints may be underspecified.
- A local optimum may be operationally bad.
- Optimizing recall can increase irrelevant context.
- Optimizing latency can destroy rare-fact retrieval.

## Invariants

- Stationarity
- Feasibility
- Complementary slackness
- Duality gap
- Sensitivity of optimum to constraint changes

## Problem Ladder

### Direct Problems

1. Minimize x^2 subject to x >= 1.
2. Maximize 3x + 2y subject to x + y <= 4, x >= 0, y >= 0.
3. Write the Lagrangian for minimizing ||x||^2 subject to a^T x = 1.

### Transfer Problems

1. Interpret a context-window budget as a constraint.
2. Interpret latency as a constraint in ANN retrieval.
3. Explain why "retrieve more documents" is not always optimal.

### Research-Style Problems

1. Formulate memory write selection as constrained optimization.
2. Formulate retrieval reranking as maximizing expected answer quality under token budget.
3. Design a dual variable interpretation for the price of one extra context token.

## Memory-System Connection

Robust memory design is constrained optimization under uncertainty. You are never optimizing relevance alone. You are optimizing relevance under compute, latency, storage, freshness, safety, and context constraints.

## Research Bridge

- RAG systems optimize retrieval and generation objectives together.
- Vector indexes trade recall against latency and memory.
- Long-context models trade attention cost against evidence availability.
