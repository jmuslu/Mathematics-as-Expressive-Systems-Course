# Module 12: Hypergraphs and Simplicial Complexes

## Lecture Promise

You will understand why edges are often too weak for knowledge systems, and how higher-order relations change the design space.

## Prerequisites

- Graphs
- Tensors
- Basic topology intuition

## Why The Old Object Fails

Pairwise edges cannot naturally represent a relation that only exists among three or more objects together.

## Base Case

The claim:

```text
source S supports claim C under condition T
```

is not just S-C, C-T, and S-T. The relation is ternary.

## Formal Object

A hypergraph allows edges connecting any number of nodes. A simplicial complex closes higher-order relations under faces.

## Exterior Product Intuition

A filled triangle is not just three edges. It says the three objects participate in one higher-order relation.

The wedge product gives a parallel algebraic intuition:

```text
u wedge v
```

is not two independent arrows. It is an oriented two-dimensional element generated jointly by `u` and `v`.

Likewise, a 2-simplex says:

```text
A, B, C belong together as one face
```

not merely as three pairwise associations. This analogy is imperfect, but useful: exterior algebra teaches you to notice when a whole carries information not recoverable from isolated parts.

## Invariants

- Incidence
- Dimension
- Faces
- Connected components and holes

## Problem Ladder

1. Represent a ternary evidence relation as a hyperedge.
2. Convert a triangle into a filled 2-simplex.
3. Explain what information is lost by replacing a hyperedge with pairwise edges.
4. Compare a triangle graph with a filled 2-simplex.
5. Explain why `u wedge v` vanishes when the directions collapse.
6. Give a memory example where a joint evidence bundle should not be reduced to pairwise similarity.

## Memory-System Connection

Second-brain memory needs higher-order evidence bundles, not just pairwise association.
