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

## Research Bridge

Koller and Friedman is the deep reference for probabilistic graphical models.
