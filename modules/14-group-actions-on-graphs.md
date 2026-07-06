# Module 14: Group Actions on Sets and Graphs

## Lecture Promise

You will understand group actions as the bridge between abstract symmetries and actual transformations of nodes, edges, tensors, and graph states.

## Prerequisites

- Groups
- Vectors and matrices
- Graph adjacency matrices

## Why The Old Object Fails

Saying "the symmetric group exists" is not enough. You need to know how a permutation acts on your graph representation.

For graph memory, this matters because node IDs should often be arbitrary. Relabeling nodes should not change the system's meaning.

## Base Case

Let:

```text
A = [0 1]
    [1 0]
```

Swap the two node labels using:

```text
P = [0 1]
    [1 0]
```

The relabeled adjacency matrix is:

```text
A' = P A P^T
```

For this graph, A' = A. The graph is invariant to swapping labels.

## Formal Object

A group action of G on X assigns each g in G a transformation:

```text
x -> g.x
```

such that:

```text
e.x = x
(gh).x = g.(h.x)
```

## Worked Derivation

For adjacency matrices, a permutation matrix P acts by:

```text
A -> P A P^T
```

This changes names of nodes but preserves graph structure.

## Failure Mode

If a graph algorithm depends on arbitrary node ordering, it is learning an artifact.

For memory graphs, that means a validation rule could accidentally depend on storage order instead of relational structure.

## Problem Ladder

1. Relabel a 3-node path graph using a permutation matrix.
2. Show that degree sequence survives relabeling.
3. Give a memory-graph feature that should be permutation invariant.

## Memory-System Connection

Node identities often carry implementation details. Group actions separate real structure from naming accidents.

## Research Bridge

Permutation invariance and equivariance are central in graph neural networks and G-invariant architectures.
