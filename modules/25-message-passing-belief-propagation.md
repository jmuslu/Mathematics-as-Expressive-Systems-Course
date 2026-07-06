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

## Hand Problem Trail

### Problem 25.1: Chain messages

Consider binary variables A-B-C. A sends B the message `m_A_to_B(0)=0.8`, `m_A_to_B(1)=0.2`. C sends B `m_C_to_B(0)=0.5`, `m_C_to_B(1)=0.5`. If B has no local preference, compute unnormalized belief at B.

Answer check:

```text
b_B(0)=0.8*0.5=0.4
b_B(1)=0.2*0.5=0.1
normalized: (0.8, 0.2)
```

### Problem 25.2: Add local evidence

Now B has local evidence `psi_B(0)=0.25`, `psi_B(1)=1`. Recompute.

Answer check:

```text
b_B(0)=0.25*0.8*0.5=0.1
b_B(1)=1*0.2*0.5=0.1
normalized: (0.5,0.5)
```

### Problem 25.3: One factor message

A factor prefers equal binary values: potential is 2 if equal, 1 if different. If A's belief is `(0.7,0.3)`, compute the factor-to-B message.

Answer check:

```text
m(0)=2*0.7 + 1*0.3 = 1.7
m(1)=1*0.7 + 2*0.3 = 1.3
```

### Problem 25.4: Validation loop

What does a message represent in an external memory graph?

Answer check: a local summary of evidence passed across a relation, not the full raw memory.
