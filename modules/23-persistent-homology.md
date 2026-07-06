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

## Research Bridge

TDA for machine learning uses persistence to detect robust geometric/topological structure.
