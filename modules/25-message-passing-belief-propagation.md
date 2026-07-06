# Module 25: Message Passing and Belief Propagation

## Lecture Promise

You will understand validation loops as local message updates on a graph.

## Prerequisites

- Probability
- Graphs
- Optimization intuition

## Why The Old Object Fails

Static graph structure does not validate itself. Nodes must exchange information and update beliefs.

## Base Case

Three claims form a chain:

```text
A -> B -> C
```

Evidence at A should affect belief at C through messages.

## Formal Object

Belief propagation passes local messages that summarize neighboring evidence.

## Worked Example

If node B receives support from A and contradiction from C, its update rule must combine both messages.

## Failure Mode

Loops can double-count evidence. Correlated sources can produce false confidence.

## Problem Ladder

1. Write one round of messages on a 3-node chain.
2. Explain why trees are easier than loopy graphs.
3. Give a validation loop that could amplify a false claim.

## Memory-System Connection

Validation is not a scalar confidence score. It is a dynamic process over a graph.

## Research Bridge

Mezard and Montanari's work on information, physics, and computation develops message passing and graphical models deeply.
