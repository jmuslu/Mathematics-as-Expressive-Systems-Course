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

## Running Example: Rumor Chain

Suppose Ari tells Bea a rumor, and Bea tells Cy.

Cy should not receive Ari's entire memory. Cy receives a message shaped by Bea's trust in Ari, Bea's own uncertainty, and the relation between the claims.

If Cy later sends the rumor back through another path and the system treats it as new independent evidence, confidence can inflate for the wrong reason. That is why message passing needs graph structure: local summaries are useful, but loops can echo.

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

Consider a rumor chain Ari-Bea-Cy. At Bea, state `0` means "rumor false" and state `1` means "rumor true."

Ari sends Bea the message:

```text
m_Ari_to_Bea(false)=0.8
m_Ari_to_Bea(true)=0.2
```

Cy sends Bea an uninformative message:

```text
m_Cy_to_Bea(false)=0.5
m_Cy_to_Bea(true)=0.5
```

If Bea has no local preference, compute the unnormalized belief at Bea.

Answer check:

```text
b_Bea(false)=0.8*0.5=0.4
b_Bea(true)=0.2*0.5=0.1
normalized: (false=0.8, true=0.2)
```

### Problem 25.2: Normalize a belief

An unnormalized belief at Bea is:

```text
b_Bea(false)=6
b_Bea(true)=2
```

Normalize it.

Answer check:

```text
total = 6 + 2 = 8
normalized = (false=6/8, true=2/8) = (false=0.75, true=0.25)
```

Messages often give proportional beliefs first; normalization turns them into probabilities.

### Problem 25.3: Add local evidence

Now Bea has local evidence:

```text
psi_Bea(false)=0.25
psi_Bea(true)=1
```

Recompute using the messages from Problem 25.1.

Answer check:

```text
b_Bea(false)=0.25*0.8*0.5=0.1
b_Bea(true)=1*0.2*0.5=0.1
normalized: (false=0.5, true=0.5)
```

### Problem 25.4: Variable-to-factor message

A variable node X is connected to factors `a`, `b`, and `c`. Incoming messages are:

```text
m_a_to_X = (0.6, 0.4)
m_b_to_X = (0.5, 0.5)
```

What message should X send to factor `c`, ignoring local evidence?

Answer check:

```text
m_X_to_c(0)=0.6*0.5=0.3
m_X_to_c(1)=0.4*0.5=0.2
normalized: (0.6,0.4)
```

A variable sends the product of incoming information from the other neighboring factors.

### Problem 25.5: One factor message

A factor prefers equal binary values: potential is 2 if equal, 1 if different. If A's belief is `(0.7,0.3)`, compute the factor-to-B message.

Answer check:

```text
m(0)=2*0.7 + 1*0.3 = 1.7
m(1)=1*0.7 + 2*0.3 = 1.3
```

### Problem 25.6: Normalize the factor message

Normalize the message from Problem 25.5.

Answer check:

```text
total = 1.7 + 1.3 = 3
normalized = (1.7/3, 1.3/3) = (0.5667, 0.4333)
```

The factor nudges B toward 0 because A currently leans toward 0 and the factor prefers equality.

### Problem 25.7: Contradiction factor

A factor prefers different binary values: potential is 2 if different, 1 if equal. If A's belief is `(0.7,0.3)`, compute the factor-to-B message.

Answer check:

```text
m(0)=1*0.7 + 2*0.3 = 1.3
m(1)=2*0.7 + 1*0.3 = 1.7
```

A contradiction relation pushes B away from A.

### Problem 25.8: One round on a three-node chain

In chain `A-B-C`, suppose the initial local evidence is:

```text
psi_A=(0.9,0.1)
psi_B=(1,1)
psi_C=(0.4,0.6)
```

With equality factors of weight 2 for equal and 1 for different, compute the two messages into B.

Answer check:

```text
A to B:
m_A(0)=2*0.9 + 1*0.1 = 1.9
m_A(1)=1*0.9 + 2*0.1 = 1.1

C to B:
m_C(0)=2*0.4 + 1*0.6 = 1.4
m_C(1)=1*0.4 + 2*0.6 = 1.6
```

B receives one message leaning toward 0 and one message leaning toward 1.

### Problem 25.9: Combine incoming messages at B

Using Problem 25.8 and `psi_B=(1,1)`, compute B's unnormalized and normalized belief.

Answer check:

```text
b_B(0)=1*1.9*1.4 = 2.66
b_B(1)=1*1.1*1.6 = 1.76

total = 2.66 + 1.76 = 4.42
normalized = (2.66/4.42, 1.76/4.42)
           approx (0.602, 0.398)
```

After normalization, B leans toward 0 because A's strong support dominates C's weaker pressure.

### Problem 25.10: Why trees are easier

Why is belief propagation exact on trees but risky on loopy graphs?

Answer check:

```text
On a tree, information has a unique path and messages do not return to their source through a cycle.
On a loopy graph, evidence can circulate and be counted more than once.
```

Loops turn local updates into an approximation unless extra care is taken.

### Problem 25.11: Double-counting example

A claim receives two messages that both originate from the same source, but the graph treats them as independent. What failure can occur?

Answer check:

```text
The model can become overconfident because it counts one source as if it were two independent confirmations.
```

Message passing depends on the dependency assumptions encoded by the graph.

### Problem 25.12: Validation loop

What does a message represent in an external memory graph?

Answer check: a local summary of evidence passed across a relation, not the full raw memory.
