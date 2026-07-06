# Module 10: Graphs, Incidence, and Laplacians

## Lecture Promise

You will understand graphs through matrices that expose flow, cuts, connectivity, and diffusion.

## Prerequisites

- Matrices
- Spectral theory

## Why The Old Object Fails

An adjacency list tells you connections. Incidence and Laplacian matrices tell you how information flows.

## Base Case

For a graph, the Laplacian is:

```text
L = D - A
```

where D is degree matrix and A is adjacency.

## Formal Object

The graph Laplacian measures disagreement across edges.

## Invariants

- Number of connected components
- Laplacian spectrum
- Cuts and flows

## Problem Ladder

1. Compute L for a 3-node path.
2. Find its zero eigenvector.
3. Explain why diffusion smooths node values.

## Memory-System Connection

Validation, propagation, and decay are graph flows.

## Hand Problem Trail

### Problem 10.1: Build the adjacency matrix

For path graph `1 - 2 - 3`, write A.

Answer check:

```text
A = [0 1 0]
    [1 0 1]
    [0 1 0]
```

### Problem 10.2: Degree and Laplacian

Compute the degree matrix D and Laplacian `L = D - A`.

Answer check:

```text
D = [1 0 0]
    [0 2 0]
    [0 0 1]

L = [ 1 -1  0]
    [-1  2 -1]
    [ 0 -1  1]
```

### Problem 10.3: Smoothness energy

For node values `x=(1,2,4)`, compute `x^T L x` by edge differences.

Answer check:

```text
(1-2)^2 + (2-4)^2 = 1 + 4 = 5
```

### Problem 10.4: Incidence matrix

Orient edges `1->2` and `2->3`. Write incidence B with rows edges and columns nodes.

Answer check:

```text
B = [-1  1  0]
    [ 0 -1  1]
```

Then `B^T B = L`.
