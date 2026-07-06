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

## Hand Problem Trail

### Problem 12.1: Pairwise edge or hyperedge?

Classify each relation.

1. Source S cites paper P.
2. Source S supports claim C only under condition T.
3. Three memories form one contradiction cycle.

Answer check:

```text
1. edge
2. hyperedge
3. hyperedge or 2-simplex, depending on whether faces are included
```

### Problem 12.2: Triangle versus filled triangle

Draw nodes A, B, C. First draw only the three pairwise edges. Then draw a filled 2-simplex. What extra assertion does the filled triangle make?

Answer check: the filled triangle says the triple participates as one coherent higher-order relation, not merely three pairwise associations.

### Problem 12.3: Boundary of a 2-simplex

The oriented face `[A,B,C]` has boundary `[B,C] - [A,C] + [A,B]`. Write the boundary of `[B,A,C]`.

Answer check:

```text
[A,C] - [B,C] + [B,A]
```

Orientation changes signs.

### Problem 12.4: Wedge analogy

Why does `u wedge u = 0` resemble a degenerate simplex?

Answer check: repeated direction gives no area, just as repeated or collapsed vertices fail to span a genuine higher-dimensional relation.
