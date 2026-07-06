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

### Problem 10.2: Degree sequence

For path graph `1 - 2 - 3`, list the degree of each node.

Answer check:

```text
deg(1)=1
deg(2)=2
deg(3)=1
```

The middle node touches both edges.

### Problem 10.3: Degree and Laplacian

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

### Problem 10.4: Row sums of the Laplacian

Compute the row sums of the Laplacian in Problem 10.3.

Answer check:

```text
row 1: 1-1+0=0
row 2: -1+2-1=0
row 3: 0-1+1=0
```

The constant vector is always killed by the graph Laplacian.

### Problem 10.5: Zero eigenvector

Verify that `L(1,1,1)=0` for the path Laplacian.

Answer check:

```text
Each row sum is zero, so L(1,1,1)=(0,0,0).
```

Connected components support constant zero-energy modes.

### Problem 10.6: Smoothness energy

For node values `x=(1,2,4)`, compute `x^T L x` by edge differences.

Answer check:

```text
(1-2)^2 + (2-4)^2 = 1 + 4 = 5
```

### Problem 10.7: Smoothness energy for a constant signal

For `x=(5,5,5)`, compute `x^T L x` by edge differences on the path.

Answer check:

```text
(5-5)^2 + (5-5)^2 = 0
```

No disagreement across edges means zero Laplacian energy.

### Problem 10.8: Incidence matrix

Orient edges `1->2` and `2->3`. Write incidence B with rows edges and columns nodes.

Answer check:

```text
B = [-1  1  0]
    [ 0 -1  1]
```

Then `B^T B = L`.

### Problem 10.9: Incidence as edge difference

Using the incidence matrix from Problem 10.8 and `x=(1,2,4)`, compute `Bx`.

Answer check:

```text
Bx = (2-1, 4-2) = (1,2)
```

The incidence matrix turns node values into edge differences.

### Problem 10.10: Cut size

For path `1-2-3`, let `S={1}` and `T={2,3}`. How many edges cross the cut?

Answer check:

```text
1 edge crosses: 1-2.
```

Cuts measure separation between node sets.

### Problem 10.11: Disconnected graph Laplacian

A graph has two disconnected edges:

```text
1-2    3-4
```

How many independent zero eigenvectors should its Laplacian have?

Answer check:

```text
2, one constant vector on each connected component.
```

The multiplicity of eigenvalue 0 counts connected components.

### Problem 10.12: Diffusion interpretation

Why does Laplacian smoothing tend to make neighboring node values more similar?

Answer check:

```text
The Laplacian measures disagreement across edges. Dynamics that reduce Laplacian energy penalize neighbor differences.
```

Graph flow turns local adjacency into a smoothing operation.
