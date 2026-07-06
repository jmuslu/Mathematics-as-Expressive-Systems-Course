# Module 26: Probabilistic Graphical Models

## Lecture Promise

You will understand graphical models as structured probability distributions over claims, evidence, and hidden states.

## Prerequisites

- Probability
- Graphs
- Conditional independence

## Why The Old Object Fails

A typed graph tells you relationships. It does not tell you uncertainty.

## Base Case

Let:

```text
Claim truth -> Evidence observation
Source reliability -> Evidence observation
```

The evidence depends on both truth and source reliability.

## Formal Object

A graphical model factorizes a joint distribution according to graph structure.

For example:

```text
P(A, B, C) = P(A) P(B | A) P(C | B)
```

## Failure Mode

Conditional independence assumptions can be wrong. A graph may understate hidden common causes.

## Problem Ladder

1. Factorize a 3-node chain.
2. Draw a hidden-source variable for two claims.
3. Explain how correlated evidence breaks naive validation.

## Memory-System Connection

Graphical models give math for belief, uncertainty, source reliability, and evidence conflict.

## Hand Problem Trail

### Problem 26.1: Factorization

For chain `A -> B -> C`, write the joint distribution factorization.

Answer check: `P(A,B,C)=P(A)P(B|A)P(C|B)`.

### Problem 26.2: Conditional independence

In the same chain, what independence does the graph suggest?

Answer check: `A is independent of C given B`.

### Problem 26.3: Numeric posterior

Suppose:

```text
P(Claim true)=0.6
P(Evidence positive | true)=0.8
P(Evidence positive | false)=0.3
```

Compute `P(true | positive)`.

Answer check:

```text
numerator = 0.8*0.6 = 0.48
denominator = 0.48 + 0.3*0.4 = 0.60
posterior = 0.8
```

### Problem 26.4: Design assumption

What does an edge absence mean in a graphical model?

Answer check: it encodes an independence assumption, not ignorance. This is a modeling commitment.
