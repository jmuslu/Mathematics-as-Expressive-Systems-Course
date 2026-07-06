# Module 05: Spectral Structure, Graphs, and Stable Modes

## Lecture Promise

You will understand eigenvectors as stable directions of transformation, then connect spectral structure to similarity graphs, ranking, diffusion, and memory consolidation.

## Prerequisites

- Matrix multiplication
- Determinants at an intuitive level
- SVD and orthogonality
- Basic graph intuition

## Why The Old Object Fails

Projection and SVD tell us which directions matter in a fixed dataset. But memory systems are dynamic:

- Memories link to related memories.
- Retrieval can walk a graph.
- Recency and reinforcement update memory weights.
- Some patterns persist under repeated transformation.

We need to know what survives repeated application of a matrix.

## Base Case

Let a transition matrix be:

```text
A = [0.8 0.1]
    [0.2 0.9]
```

If x stores how much attention is assigned to two memory clusters, then Ax is the next attention distribution before normalization.

The question:

```text
Which direction keeps its shape under A?
```

## Formal Object

An eigenvector v of A satisfies:

```text
A v = lambda v
```

The vector may scale, but it does not rotate into a new direction.

## Legal Operations

Spectral methods allow you to:

- Identify stable modes
- Diagonalize suitable matrices
- Analyze repeated transformations
- Study graph Laplacians
- Rank nodes by stationary behavior
- Separate signal from noise

## Worked Derivation: Repeated Transformation

If:

```text
A v = lambda v
```

then:

```text
A^2 v = A(lambda v) = lambda A v = lambda^2 v
```

By induction:

```text
A^n v = lambda^n v
```

So eigenvectors are the directions whose long-term behavior is easy to predict.

## Worked Numbers

For:

```text
A = [2 0]
    [0 1]
```

we have:

```text
A(1, 0) = (2, 0) = 2(1, 0)
A(0, 1) = (0, 1) = 1(0, 1)
```

The x-direction grows faster than the y-direction under repeated application.

## Failure Mode

Spectral structure can overemphasize globally stable behavior.

In memory systems:

- Popular memories may dominate.
- Rare memories may vanish under diffusion.
- Graph centrality may reward generic hubs.
- Eigenvectors of non-symmetric matrices may be unstable or hard to interpret.

## Invariants

- Eigenvalues under similarity transformations
- Trace as sum of eigenvalues
- Determinant as product of eigenvalues
- Stationary distributions for Markov chains
- Connected components through graph Laplacian zero modes

## Problem Ladder

### Direct Problems

1. Find the eigenvalues and eigenvectors of diag(3, 1).
2. Compute A^5 v when Av = 2v.
3. For a 2-node averaging matrix, find the stable vector.

### Transfer Problems

1. Model three memory topics as a graph. What does a high-degree node represent?
2. Explain why repeated retrieval expansion can drift toward generic topics.
3. Give a graph where the most central node is not the most relevant node.

### Research-Style Problems

1. Compare random-walk retrieval with nearest-neighbor retrieval. What failure modes differ?
2. In HNSW, search navigates a graph. What does graph connectivity buy you over flat search?
3. Design a memory consolidation rule using eigenvectors or stationary distributions, then state one way it could fail.

## Memory-System Connection

Similarity graphs are one way memory becomes more than a bag of vectors. Spectral methods reveal stable clusters, hubs, diffusion behavior, and consolidation candidates.

But stability is not the same as truth. A robust memory system must distinguish persistent structure from persistent bias.

## Research Bridge

- HNSW builds navigable graph structure for approximate nearest neighbor search.
- PageRank-like diffusion ideas appear whenever retrieval expands through links.
- Long-term memory systems must decide which patterns remain stable enough to preserve.
