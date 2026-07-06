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
