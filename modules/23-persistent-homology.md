# Module 23: Persistent Homology

## Lecture Promise

You will understand persistence as a way to measure which structures survive across scale, decay, or confidence thresholds.

## Prerequisites

- Topology
- Graphs
- Basic linear algebra

## Why The Old Object Fails

A node-level decay score does not tell you which reasoning paths or clusters collapse.

Persistence asks what survives as a threshold changes.

## Base Case

Start with points. At small epsilon, each point is alone. At larger epsilon, edges form. Later, loops may appear and disappear.

## Formal Object

Persistent homology tracks topological features across a filtration:

```text
K_0 subset K_1 subset K_2 subset ...
```

Features have birth and death times.

## Worked Example

A memory cluster that appears at low threshold and survives for many thresholds is more structurally stable than one that appears briefly.

## Failure Mode

Persistence can find shape without meaning. A persistent cluster may be an artifact of embedding geometry.

## Problem Ladder

1. Build a filtration from three points on a line.
2. Identify when connected components merge.
3. Explain how decay could be modeled as a filtration.

## Memory-System Connection

Persistent features can guide consolidation: keep structures that survive perturbation, decay, or threshold changes.

## Hand Problem Trail

### Problem 23.1: Threshold graph

Three points have distances `d(A,B)=1`, `d(B,C)=2`, and `d(A,C)=5`. At threshold `epsilon=1.5`, which edges appear? At `epsilon=3`?

Answer check:

```text
epsilon=1.5: AB only
epsilon=3: AB and BC
```

### Problem 23.2: Connected components over scale

Using Problem 23.1, count connected components at thresholds `0`, `1.5`, `3`, and `6`.

Answer check:

```text
0: 3 components
1.5: 2 components
3: 1 component
6: 1 component
```

### Problem 23.3: Birth and death

For the component containing C, when does it merge into the main component?

Answer check: C is born at 0 and merges at threshold 3 through edge BC.

### Problem 23.4: Memory decay interpretation

If edges above a confidence threshold survive, what does a long-lived component suggest?

Answer check: a stable cluster of memories persists across many thresholds; it may represent robust structure rather than accidental similarity.
