# Module 23: Persistent Homology

## Lecture Promise

You will understand persistence as a way to measure which structures survive across scale and friendship thresholds.

## Prerequisites

- Topology
- Graphs
- Basic linear algebra

## Why The Old Object Fails

A single thresholded social graph does not tell you which groups, bridges, or loops are stable.

Persistence asks what survives as a threshold changes.

## Base Case

Start with points. At small epsilon, each point is alone. At larger epsilon, edges form. Later, loops may appear and disappear.

## Running Example: Friendship Circles Across Thresholds

Imagine drawing a social graph where two people are connected only if their friendship score is above a threshold. At threshold 0.9, only very close pairs appear. At 0.7, small friend groups connect. At 0.5, acquaintances start linking different groups together.

A loop might appear when four people are connected around a circle but the diagonals are still missing. If the threshold drops further and the missing diagonals appear, the loop is filled in and disappears. Persistence asks which shapes survive as the threshold changes, rather than trusting a single arbitrary cutoff.

## Formal Object

Persistent homology tracks topological features across a filtration:

```text
K_0 subset K_1 subset K_2 subset ...
```

Features have birth and death times.

## Worked Example

A friendship cluster that appears early and survives for many thresholds is more structurally stable than one that appears briefly.

## Failure Mode

Persistence can find shape without meaning. A persistent cluster may be an artifact of the chosen score or embedding geometry.

## Problem Ladder

1. Build a filtration from three points on a line.
2. Identify when connected components merge.
3. Explain how a friendship threshold can be modeled as a filtration.

## Design Connection

Persistent features help separate stable social structure from artifacts of one arbitrary cutoff.

## Hand Problem Trail

### Problem 23.1: Threshold graph

Three people have friendship distances:

```text
d(Ari,Bea)=1
d(Bea,Cy)=2
d(Ari,Cy)=5
```

At threshold `epsilon=1.5`, which edges appear? At `epsilon=3`?

Answer check:

```text
epsilon=1.5: Ari-Bea only
epsilon=3: Ari-Bea and Bea-Cy
```

### Problem 23.2: Filtration check

Using Problem 23.1, explain why the threshold graphs form a filtration as epsilon increases.

Answer check:

```text
Edges only get added, not removed.
The graph at epsilon=1.5 is contained in the graph at epsilon=3.
```

Persistence needs nested spaces.

### Problem 23.3: Connected components over scale

Using Problem 23.1, count connected components at thresholds `0`, `1.5`, `3`, and `6`.

Answer check:

```text
0: 3 components
1.5: 2 components, {Ari,Bea} and {Cy}
3: 1 component, {Ari,Bea,Cy}
6: 1 component
```

### Problem 23.4: Birth and death

For the component containing Cy, when does it merge into the main component?

Answer check: Cy is born at 0 and merges at threshold 3 through edge Bea-Cy.

### Problem 23.5: Barcode for components

Using the same three-point example, give informal bars for the three initial components if the oldest component survives forever.

Answer check:

```text
Ari component: [0, infinity)
Bea component: [0, 1]
Cy component: [0, 3]
```

Depending on convention, the component that survives can be chosen by the merge rule. The key point is that two components die when they merge.

### Problem 23.6: Four-point H0 barcode

Four points have pairwise distances:

```text
d(A,B)=1
d(B,C)=2
d(C,D)=4
d(A,D)=7
```

Ignoring all other edges, use thresholds `0`, `1`, `2`, and `4`. Give informal `H0` bars if the component born at `A` survives forever and each merge kills the newer component.

Answer check:

```text
A: [0, infinity)
B: [0, 1]
C: [0, 2]
D: [0, 4]
```

Components are born as isolated points and die when threshold edges merge them into older components. Longer bars indicate structures that survive across broader threshold ranges.

### Problem 23.7: A loop is born

At threshold `epsilon=1`, edges form a triangle boundary:

```text
A-B, B-C, C-A
```

but the filled triangle face is not yet included. What topological feature appears?

Answer check:

```text
A 1-dimensional loop is born.
```

A cycle without a filling represents a hole.

### Problem 23.8: A loop dies

At threshold `epsilon=2`, the filled triangle face `ABC` is added. What happens to the loop from Problem 23.7?

Answer check:

```text
The loop dies because it becomes the boundary of a filled 2-simplex.
```

Homology treats filled boundaries as no longer holes.

### Problem 23.9: Simple persistence pair

For the loop in Problems 23.7 and 23.8, write its birth-death interval and lifetime.

Answer check:

```text
birth = 1
death = 2
interval = [1,2]
lifetime = 2 - 1 = 1
```

The loop existed after the boundary appeared and before the face filled it.

### Problem 23.10: Noise feature

Suppose a loop is born at `2.00` and dies at `2.05`. What might that suggest?

Answer check:

```text
It may be a short-lived artifact or noise feature, unless the domain gives a reason to care about that narrow scale.
```

Persistence does not remove judgment; it gives a structured signal for judgment.

### Problem 23.11: Friendship threshold as filtration

A social graph keeps only friendship edges with score at least `t`. As `t` decreases from high to low, more edges appear. Is this a filtration?

Answer check:

```text
Yes, if the direction is high threshold to low threshold.
Edges are added as t decreases.
```

Friendship-score thresholds can be turned into nested graph sequences.

### Problem 23.12: Failure mode - persistent but meaningless

Give a reason a persistent friendship cluster might still be misleading.

Answer check:

```text
It may reflect a bad scoring rule, shared schedule constraints, seating proximity, or a feature irrelevant to actual friendship.
```

Persistent homology finds stable shape. It does not guarantee meaningful interpretation.
