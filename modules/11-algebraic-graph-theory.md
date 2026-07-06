# Module 11: Algebraic Graph Theory

## Lecture Promise

You will understand graph structure through spectra, automorphisms, and algebraic invariants.

## Prerequisites

- Graph Laplacians
- Groups
- Spectral theory

## Why The Old Object Fails

Ordinary graph theory can describe paths. Algebraic graph theory reveals hidden symmetry and structural constraints.

## Base Case

Two graph drawings may look different but be isomorphic. Algebraic invariants help detect sameness.

## Formal Object

Algebraic graph theory studies graphs using matrices, eigenvalues, automorphism groups, and related algebraic structure.

## Invariants

- Spectrum
- Automorphism group
- Connectivity
- Regularity

## Problem Ladder

1. Find automorphisms of a triangle graph.
2. Compare spectra of simple graphs.
3. Explain why graph automorphisms matter for memory node relabeling.

## Memory-System Connection

Your memory graph should not depend on arbitrary presentation.

## Hand Problem Trail

### Problem 11.1: Automorphism check

For path `1 - 2 - 3`, which nontrivial node relabeling preserves adjacency?

Answer check: swap nodes `1` and `3`, keep `2` fixed.

### Problem 11.2: Permutation matrix

Write P for the swap `1 <-> 3`.

Answer check:

```text
P = [0 0 1]
    [0 1 0]
    [1 0 0]
```

### Problem 11.3: Verify graph symmetry

Using the adjacency matrix of the path, verify `P A P^T = A`.

Answer check: direct multiplication returns the same adjacency matrix, so P is an automorphism.

### Problem 11.4: Spectral invariant

Explain why eigenvalues of A are unchanged by relabeling.

Answer check: relabeling gives `PAP^T`, which is similar to A because `P^T = P^{-1}`. Similar matrices have the same eigenvalues.
