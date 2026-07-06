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

## Running Example: Seating Chart Relabeling

Suppose a dinner seating chart records who is next to whom. If you rename seat 1 as seat 3 and seat 3 as seat 1, the chart presentation changes.

But the dinner did not change. The same people still sit next to the same neighbors, just under different labels.

A group action is the formal version of this:

```text
abstract symmetry -> concrete relabeling of the data
```

The question is not merely whether the symmetry exists. The question is how it acts on the representation you actually store.

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

## Hand Problem Trail

### Problem 14.1: Action on a vector

Let swap `s` act on `x=(a,b)` by `s.x=(b,a)`. Compute `s.(3,7)` and `s.s.(3,7)`.

Answer check:

```text
s.(3,7) = (7,3)
s.s.(3,7) = (3,7)
```

### Problem 14.2: Check the action rules

Let `s` be the coordinate swap on pairs. Check:

```text
e.x = x
s.(s.x) = x
```

for `x = (5,9)`.

Answer check:

```text
e.(5,9) = (5,9)
s.(5,9) = (9,5)
s.(9,5) = (5,9)
```

The abstract group element becomes an actual transformation of data.

### Problem 14.3: Orbit

Find the orbit of `(1,2,2)` under all coordinate permutations.

Answer check:

```text
{(1,2,2), (2,1,2), (2,2,1)}
```

### Problem 14.4: Stabilizer

For the same vector, which permutations fix it?

Answer check: identity and the swap of the two equal coordinates.

### Problem 14.5: Orbit-stabilizer count

For `(1,2,2)`, the symmetric group `S3` has 6 permutations. Use:

```text
|orbit| * |stabilizer| = |group|
```

to check the orbit and stabilizer sizes.

Answer check:

```text
|orbit| = 3
|stabilizer| = 2
3 * 2 = 6
```

The repeated coordinates create stabilizer symmetry.

### Problem 14.6: Graph relabeling

For adjacency matrix `A = [0 1 0; 1 0 1; 0 1 0]` and P swapping nodes 1 and 3, compute `PAP^T`.

Answer check: it equals A, because the path has that reflection symmetry.

### Problem 14.7: Relabel a path by swapping nodes 1 and 2

Use:

```text
A = [0 1 0]
    [1 0 1]
    [0 1 0]

P = [0 1 0]
    [1 0 0]
    [0 0 1]
```

Compute the edge set after relabeling.

Answer check:

```text
Original edges: {1-2, 2-3}
Swap labels 1 and 2:
1-2 stays 1-2
2-3 becomes 1-3

New edges: {1-2, 1-3}
```

This is the same abstract path, but its adjacency matrix presentation changes.

### Problem 14.8: Degree sequence survives relabeling

For the original 3-node path and the relabeled graph in Problem 14.7, compare degree sequences after sorting.

Answer check:

```text
Original degrees: (1,2,1), sorted: (1,1,2)
Relabeled degrees: (2,1,1), sorted: (1,1,2)
```

Sorted degree sequence is invariant under relabeling.

### Problem 14.9: Raw node features move equivariantly

Let node features be:

```text
x = (10,20,30)
```

Using the same swap of nodes 1 and 2, compute `Px`.

Answer check:

```text
Px = (20,10,30)
```

Node-level data should move with the node labels.

### Problem 14.10: Graph-level feature stays invariant

Let `f(A)` be the number of edges. Compare `f(A)` for the original path and its relabeling from Problem 14.7.

Answer check:

```text
Both graphs have 2 edges.
```

Graph-level features usually ignore arbitrary names.

### Problem 14.11: Find the stabilizer of a labeled triangle shape

A triangle graph has edges `{1-2, 2-3, 1-3}`. Which node permutations preserve adjacency?

Answer check:

```text
All 6 permutations of {1,2,3} preserve adjacency.
```

The complete graph has maximal relabeling symmetry.

### Problem 14.12: Failure mode - learning storage order

A graph rule says "always trust the first listed neighbor more than the second listed neighbor." Why is this not permutation invariant?

Answer check:

```text
Changing the storage order of neighbors can change the output even when the graph is the same.
```

An action tells you which changes are merely presentation changes and should not affect meaning.
