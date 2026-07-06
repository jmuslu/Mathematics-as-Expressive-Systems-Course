# Module 21: Operads and Compositional Systems

## Lecture Promise

You will understand operads as a way to model operations with many inputs and one output, which is essential for composing validation and reasoning steps.

## Prerequisites

- Categories
- Functions
- Trees or expression graphs

## Why The Old Object Fails

Categories handle one-input one-output arrows well. Reasoning systems often combine many inputs:

```text
evidence_1, evidence_2, rule -> validated claim
```

## Base Case

A validation operation might take:

```text
claim, source, counterclaim -> status
```

This is not just an edge. It is a typed multi-input process.

## Formal Object

An operad describes operations with multiple inputs and one output, plus rules for composing operations.

## Products Versus Composition

Not every way of combining things is the same.

```text
tensor product: build a joint space
wedge product: build an antisymmetric oriented joint object
cartesian product: build paired data
categorical product: build a universal pairing object
operadic composition: plug operations into operation slots
matrix composition: apply one transformation after another
```

This distinction is one of the course's recurring themes. When you design memory architecture, "combine evidence" can mean concatenate, multiply, contract, average, compose, glue, join, or validate. Those are different mathematical commitments.

## Worked Example

If one operation validates a claim and another consolidates validated claims into a summary, operad composition describes the combined process.

## Failure Mode

If multi-input operations are flattened into pairwise edges, the system can lose dependency structure.

## Problem Ladder

1. Draw a binary operation tree for combining two pieces of evidence.
2. Model a three-input validation rule.
3. Explain why hyperedges and operads are related but not identical.
4. Classify a memory operation as product, contraction, composition, or gluing.
5. Explain why "combine two retrieved passages" is underspecified until the operation is named.
6. Design a typed validation operation whose output can feed another operation.

## Memory-System Connection

Validation loops are compositional operations, not merely graph traversals.

## Research Bridge

Applied category theory uses operads to model wiring diagrams, systems, and compositional processes.
