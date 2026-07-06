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

## Research Bridge

Topological data analysis studies persistent structure in data across scales.

## Hand Problem Trail

### Problem 22.1: Open neighborhood intuition

On the real line, is `(0,1)` open? Is `[0,1]` open in the usual topology?

Answer check: `(0,1)` is open. `[0,1]` is not open because endpoints have no small interval contained inside `[0,1]`.

### Problem 22.2: Continuity by inverse image

Let `f(x)=2x`. What is the inverse image of `(0,4)`?

Answer check: `f^{-1}((0,4)) = (0,2)`.

### Problem 22.3: Graph neighborhood

In path `1 - 2 - 3`, list the one-hop neighborhood of node 2 and node 1.

Answer check:

```text
N(2)={1,2,3} if closed; {1,3} if open graph neighborhood.
N(1)={1,2} closed; {2} open.
```

### Problem 22.4: Memory interpretation

What would it mean for a memory update rule to be continuous?

Answer check: small changes in local evidence should not cause arbitrary jumps in global memory state unless a threshold is intentionally modeled.
