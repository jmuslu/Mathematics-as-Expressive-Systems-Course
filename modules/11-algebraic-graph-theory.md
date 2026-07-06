# Module 11: Algebraic Graph Theory and Detective Boards

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

## Running Example: Detective Boards

Two detectives draw the same case board differently. One puts the witness at the top and the suspect on the left. The other puts the suspect at the center and the witness on the right.

If the same connections are present, the boards may be the same graph under relabeling. If one board has a hidden symmetry, like two interchangeable witnesses with identical connections, an automorphism exposes it.

Algebraic graph theory asks which features survive the drawing:

```text
same structure, different names or layout
```

The point is to detect structure, not handwriting.

## Formal Object

Algebraic graph theory studies graphs using matrices, eigenvalues, automorphism groups, and related algebraic structure.

## Legal Operations

The legal moves in algebraic graph theory are structure-preserving graph moves:

- relabel vertices by a permutation matrix
- test automorphisms with `P A P^T = A`
- compare spectra under graph relabeling
- compute degree, regularity, and connectivity invariants
- use algebraic invariants to rule out isomorphism
- avoid treating a drawing layout as graph structure

For detective boards, the question is whether two boards encode the same case relation after renaming the pins.

## Worked Derivation

For the path graph `1-2-3`, the adjacency matrix is:

```text
A = [0 1 0]
    [1 0 1]
    [0 1 0]
```

The swap of the two endpoints is:

```text
P = [0 0 1]
    [0 1 0]
    [1 0 0]
```

Then:

```text
P A P^T = A
```

so the endpoint swap is an automorphism. In the detective-board story, the two endpoint witnesses are interchangeable relative to the relation pattern.

Because `P^T=P^{-1}`, the relabeled matrix is similar to `A`:

```text
P A P^T = P A P^{-1}
```

so it has the same eigenvalues. The spectrum is an invariant of relabeling.

## Invariants

- Spectrum
- Automorphism group
- Connectivity
- Regularity

## Failure Mode

Algebraic invariants can prove two graphs are different, but many invariants are not complete. Two non-isomorphic graphs can share a spectrum.

The safe use is: different invariant values rule out sameness; equal invariant values invite more tests rather than proving identity automatically.

## Problem Ladder

1. Find automorphisms of a triangle graph.
2. Compare spectra of simple graphs.
3. Explain why graph automorphisms matter for detective-board relabeling.

## Design Connection

A graph-level conclusion should not depend on arbitrary names, drawing choices, or presentation.

## Hand Problem Trail

### Problem 11.1: Automorphism check

For path `1 - 2 - 3`, which nontrivial node relabeling preserves adjacency?

Answer check: swap nodes `1` and `3`, keep `2` fixed.

### Problem 11.2: Automorphisms of a triangle

How many node relabelings preserve adjacency in a triangle graph?

Answer check:

```text
All 6 permutations of the three nodes preserve adjacency.
```

The triangle is maximally symmetric among 3-node simple connected graphs.

### Problem 11.3: Permutation matrix

Write P for the swap `1 <-> 3`.

Answer check:

```text
P = [0 0 1]
    [0 1 0]
    [1 0 0]
```

### Problem 11.4: Verify graph symmetry

Using the adjacency matrix of the path, verify `P A P^T = A`. Interpret this as swapping two interchangeable witness labels on the detective board.

Answer check:

```text
A = [0 1 0]
    [1 0 1]
    [0 1 0]

P = [0 0 1]
    [0 1 0]
    [1 0 0]

P A P^T = [0 1 0]
          [1 0 1]
          [0 1 0]
        = A
```

The board changes names, but not structure. So P is an automorphism.

### Problem 11.5: Non-automorphism

For path `1-2-3`, does swapping nodes `1` and `2` preserve adjacency?

Answer check:

```text
No. Edge 2-3 would become edge 1-3, which is not present in the path.
```

Not every permutation is a graph symmetry.

### Problem 11.6: Spectral invariant

Explain why eigenvalues of A are unchanged by relabeling.

Answer check:

```text
relabeling gives P A P^T
P^T = P^{-1}
so P A P^T is similar to A
similar matrices have the same eigenvalues
```

The spectrum sees the detective-board structure, not the arbitrary node names.

### Problem 11.7: Regular graph check

Is the 3-node path regular?

Answer check:

```text
No. Degrees are 1,2,1.
```

A regular graph has every node with the same degree.

### Problem 11.8: Triangle regularity

Is the triangle graph regular? If yes, what degree?

Answer check:

```text
Yes. Every node has degree 2.
```

Regularity is an algebraic/combinatorial invariant.

### Problem 11.9: Adjacency eigenvalue for regular graph

For a 2-regular graph on 3 nodes, show that the all-ones vector is an eigenvector of the adjacency matrix.

Answer check:

```text
Each row has two 1s, so A(1,1,1)=(2,2,2)=2(1,1,1).
```

For a d-regular graph, the all-ones vector has adjacency eigenvalue d.

### Problem 11.10: Isomorphism invariant

Two graphs have different numbers of edges. Can they be isomorphic?

Answer check:

```text
No. An isomorphism preserves adjacency, so it preserves edge count.
```

Simple invariants can rule out sameness.

### Problem 11.11: Cospectral warning

If two graphs have the same adjacency eigenvalues, must they be isomorphic?

Answer check:

```text
No. Some non-isomorphic graphs are cospectral.
```

Spectra are powerful invariants, but not complete invariants.

### Problem 11.12: Presentation interpretation

Why do automorphisms matter for graph-level evaluation?

Answer check:

```text
If two node labelings represent the same graph structure, graph-level evaluations should not change under the automorphism or relabeling.
```

Algebraic graph theory separates structure from presentation.
