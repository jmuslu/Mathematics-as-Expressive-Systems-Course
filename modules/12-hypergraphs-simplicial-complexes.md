# Module 12: Hypergraphs, Simplicial Complexes, and Group Commitments

## Lecture Promise

You will understand why edges are often too weak for joint social situations, and how higher-order relations change the design space.

## Prerequisites

- Graphs
- Tensors
- Basic topology intuition

## Why The Old Object Fails

Pairwise edges cannot naturally represent a relation that only exists among three or more objects together.

## Base Case

The dinner commitment:

```text
Ari, Bea, and Cy share one reservation
```

is not just Ari-Bea, Bea-Cy, and Ari-Cy. The relation is ternary.

## Running Example: Group Chat Plans

In a group chat, three friends might agree:

```text
Ari, Bea, Cy are going to the concert together
```

That is not the same as three pairwise friendships. Ari and Bea may be friends, Bea and Cy may be friends, and Ari and Cy may be friends, but the concert plan is a single three-person commitment.

A hyperedge records the joint event. A filled simplex says the whole group belongs together as one higher-order piece, with lower-dimensional faces available when the model wants them.

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

1. Represent a ternary dinner relation as a hyperedge.
2. Convert a triangle into a filled 2-simplex.
3. Explain what information is lost by replacing a hyperedge with pairwise edges.
4. Compare a triangle graph with a filled 2-simplex.
5. Explain why `u wedge v` vanishes when the directions collapse.
6. Give a social example where a joint commitment should not be reduced to pairwise similarity.

## Design Connection

Some commitments belong to the whole group, not to pairwise associations.

## Hand Problem Trail

### Problem 12.1: Pairwise edge or hyperedge?

Classify each relation.

1. Ari and Bea are friends.
2. Ari, Bea, and Cy made one dinner reservation together.
3. Ari, Bea, and Cy split one appetizer together.

Answer check:

```text
1. edge
2. hyperedge
3. hyperedge
```

### Problem 12.2: Encode a ternary relation

Represent:

```text
Ari, Bea, and Cy made one dinner reservation together
```

as one hyperedge.

Answer check:

```text
{Ari, Bea, Cy}
```

The reservation belongs to the triple, not to three independent pairwise friendships.

### Problem 12.3: Pairwise shadow

If the hyperedge `{Ari,Bea,Cy}` is replaced by pairwise edges, which edges appear?

Answer check:

```text
Ari-Bea, Ari-Cy, Bea-Cy
```

The pairwise shadow loses the fact that there was one three-person commitment rather than three separate pairwise plans.

### Problem 12.4: Triangle versus filled triangle

Draw nodes A, B, C. First draw only the three pairwise edges. Then draw a filled 2-simplex. What extra assertion does the filled triangle make?

Answer check: the filled triangle says the triple participates as one coherent higher-order relation, not merely three pairwise associations.

### Problem 12.5: Faces of a simplex

If `[A,B,C]` is a 2-simplex in a simplicial complex, which edges must also be present?

Answer check:

```text
[A,B], [A,C], [B,C]
```

A simplicial complex is closed under faces.

### Problem 12.6: Hypergraph versus simplicial complex

A hypergraph contains the hyperedge `{A,B,C}` but not the edge `{A,B}`. Is that allowed?

Answer check:

```text
Yes for a hypergraph.
No for a simplicial complex, because faces must be included.
```

Hypergraphs and simplicial complexes encode different commitments.

### Problem 12.7: Boundary of a 2-simplex

The oriented face `[A,B,C]` has boundary `[B,C] - [A,C] + [A,B]`. Write the boundary of `[B,A,C]`.

Answer check:

```text
[A,C] - [B,C] + [B,A]
```

Orientation changes signs.

### Problem 12.8: Count dimensions

What is the dimension of:

```text
vertex A
edge [A,B]
face [A,B,C]
tetrahedron [A,B,C,D]
```

Answer check:

```text
0, 1, 2, 3
```

Dimension counts one less than the number of vertices in a simplex.

### Problem 12.9: Wedge analogy

Why does `u wedge u = 0` resemble a degenerate simplex?

Answer check: repeated direction gives no area, just as repeated or collapsed vertices fail to span a genuine higher-dimensional relation.

### Problem 12.10: One hole or filled face?

A triangle has all three boundary edges but no filled face. Does it contain a 1-dimensional loop?

Answer check:

```text
Yes. The boundary cycle is not filled.
```

Adding the 2-simplex fills the loop.

### Problem 12.11: Higher-order dinner bundle

Give one example where three dinner-plan facts work jointly, but no pair alone is enough.

Answer check example:

```text
A group reservation, a shared ride, and one person's allergy constraint together determine the restaurant choice; any two alone leave ambiguity.
```

Higher-order relations prevent pairwise overclaiming.

### Problem 12.12: Failure mode - clique expansion

What can go wrong when every hyperedge is replaced by all pairwise edges?

Answer check:

```text
The model may infer pairwise relations that were never true independently, and it may lose the dependency that all inputs were needed together.
```

Clique expansion is useful but can distort higher-order meaning.
