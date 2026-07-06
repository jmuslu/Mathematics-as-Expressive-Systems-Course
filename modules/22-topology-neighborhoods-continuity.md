# Module 22: Topology, Neighborhoods, and Continuity

## Lecture Promise

You will understand topology as the study of structure that survives deformation, and why it matters once memories are embedded geometrically.

## Prerequisites

- Sets
- Metric spaces
- Graph intuition

## Why The Old Object Fails

Geometry gives distances. But memory systems also need connectivity:

- Which regions are connected?
- Which paths persist?
- Which clusters survive threshold changes?

## Base Case

Take points in an embedding space and connect points within distance epsilon. As epsilon grows, components merge.

The exact distances matter less than which connections persist across thresholds.

## Running Example: Friendship Thresholds

Imagine a class social graph where two people are connected only when their friendship score is above a chosen threshold.

At a strict threshold, only very close friends are connected:

```text
Ari -- Bea
Cy -- Dev
```

At a looser threshold, Bea and Cy may become connected too:

```text
Ari -- Bea -- Cy -- Dev
```

The people did not change. The topology changed because the relation used to draw edges changed. Topology asks which connected groups, bridges, and loops survive as the threshold moves, rather than trusting one arbitrary cutoff.

## Formal Object

Topology studies open sets, neighborhoods, continuity, connectedness, and holes.

## Worked Example

If two memory clusters are close under one threshold but disconnected under another, persistence asks whether the connection is stable or accidental.

## Failure Mode

Topology can ignore metric magnitude. Geometry can ignore persistent structure. A second-brain system needs both.

## Problem Ladder

1. Draw connected components for points at two distance thresholds.
2. Give a memory example where geometry says close but topology says disconnected.
3. Explain why continuity matters for graph evolution.

## Memory-System Connection

Topology helps detect whether reasoning paths and memory clusters survive decay or threshold changes.

## Hand Problem Trail

### Problem 22.1: Open neighborhood intuition

On the real line, is `(0,1)` open? Is `[0,1]` open in the usual topology?

Answer check: `(0,1)` is open. `[0,1]` is not open because endpoints have no small interval contained inside `[0,1]`.

### Problem 22.2: Boundary point check

Why is `0` a boundary point of `[0,1]` in the usual topology on the real line?

Answer check:

```text
Every open interval around 0 contains points inside [0,1] and points outside [0,1].
```

Topology cares about local neighborhoods, not only membership.

### Problem 22.3: Continuity by inverse image

Let `f(x)=2x`. What is the inverse image of `(0,4)`?

Answer check: `f^{-1}((0,4)) = (0,2)`.

### Problem 22.4: A discontinuous threshold map

Let:

```text
f(x) = 0 if x < 1
f(x) = 1 if x >= 1
```

Why is this discontinuous at `x=1`?

Answer check:

```text
Values just below 1 are 0, while f(1)=1.
Arbitrarily small input changes around 1 can cause a jump in output.
```

Thresholds are useful, but they create topological events.

### Problem 22.5: Graph neighborhood

In path `1 - 2 - 3`, list the one-hop neighborhood of node 2 and node 1.

Answer check:

```text
N(2)={1,2,3} if closed; {1,3} if open graph neighborhood.
N(1)={1,2} closed; {2} open.
```

### Problem 22.6: Components in a threshold graph

At a strict friendship threshold, the social graph has edges:

```text
Ari-Bea
Cy-Dev
```

How many connected components are there?

Answer check:

```text
2 components: {Ari,Bea} and {Cy,Dev}
```

Connectivity is a topological property of the thresholded relation.

### Problem 22.7: Component merge

At a looser friendship threshold, add edge:

```text
Bea-Cy
```

How many connected components remain?

Answer check:

```text
1 component: {Ari,Bea,Cy,Dev}
```

A new bridge can merge two previously separate regions.

### Problem 22.8: Same components, different geometry

Compare these two graphs:

```text
G1: Ari-Bea-Cy
G2: Ari-Bea-Cy with edge Ari-Cy also present
```

Do they have the same number of connected components?

Answer check:

```text
Yes. Both have one connected component.
```

Topology may ignore geometric or combinatorial detail that does not affect the chosen invariant.

### Problem 22.9: Loop detection in a graph

Which graph has a 1-dimensional loop?

```text
A. A-B-C path
B. triangle A-B-C-A
```

Answer check:

```text
B has a loop. A does not.
```

Loops are one kind of structure that survives beyond mere connectivity.

### Problem 22.10: Continuity and graph evolution

What would it mean for a memory update rule to be continuous?

Answer check: small changes in local evidence should not cause arbitrary jumps in global memory state unless a threshold is intentionally modeled.

### Problem 22.11: Geometry says close, topology says disconnected

Give a toy example where two clusters are geometrically close but topologically disconnected at a chosen threshold.

Answer check:

```text
Example: Ari-Bea are connected, Cy-Dev are connected, and the closest cross-group friendship score is just below the chosen edge threshold.
The clusters may be close in distance, but no edge connects them at that threshold.
```

Topology depends on the relation you choose, such as an epsilon-neighborhood graph.

### Problem 22.12: Failure mode - topology without magnitude

What can topology miss if it only records connectedness?

Answer check:

```text
It may miss how far apart points are, how strong edges are, or how costly paths are.
```

Topology and geometry answer different questions; graduate-level judgment is knowing which invariant is being used.
