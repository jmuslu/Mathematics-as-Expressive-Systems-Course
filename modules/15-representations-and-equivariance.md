# Module 15: Representations and Equivariance

## Lecture Promise

You will understand representation theory as the mechanism that turns symmetry into linear computation.

## Prerequisites

- Groups
- Group actions
- Linear maps

## Why The Old Object Fails

An abstract group tells you legal transformations. A system needs matrices or operators that actually act on data.

Representation theory asks:

```text
How can symmetry become computation?
```

## Base Case

The cyclic group C4 acts on R^2 by rotations:

```text
rho(r) = [0 -1]
         [1  0]
```

Applying rho(r) four times gives the identity.

## Running Example: Dance Moves As Matrices

A dance routine can have an abstract move:

```text
turn 90 degrees
```

But a dancer needs that move as an actual body transformation. In coordinates, the turn becomes a matrix. Doing the move twice should match the matrix for a 180-degree turn. Doing it four times should return to the starting pose.

Representation theory turns the abstract rulebook of moves into linear actions on a space where computation can happen.

## Formal Object

A representation of G on V is a map:

```text
rho: G -> GL(V)
```

such that:

```text
rho(gh) = rho(g) rho(h)
rho(e) = I
```

## G-Invariance and Equivariance

A map f is invariant if:

```text
f(g.x) = f(x)
```

A map f is equivariant if:

```text
f(g.x) = g.f(x)
```

Invariant means the output ignores the transformation. Equivariant means the output transforms predictably.

## Graph Relabeling Example

Let A be an adjacency matrix and P be a permutation matrix. Relabeling graph nodes sends:

```text
A -> P A P^T
```

A graph-level memory summary should usually be invariant:

```text
f(P A P^T) = f(A)
```

A node-level memory embedding should usually be equivariant:

```text
H(P A P^T) = P H(A)
```

The summary does not care what arbitrary node IDs were used. The node embeddings still move with the nodes.

## Product Compatibility

Representations also tell you how products should transform. If V and W carry group actions, then `V tensor W` carries the product action:

```text
rho_{V tensor W}(g)(v tensor w) = rho_V(g)v tensor rho_W(g)w
```

This is one reason tensor products show up everywhere in mature symmetry arguments. They let you build compound representations from simpler ones.

Tensor product representations, symmetric and antisymmetric tensor powers, direct sums, irreducibility, and complexification all ask the same structural question: how does compound structure transform, and can it decompose into simpler invariant pieces?

## Failure Mode

Invariance can erase information. Equivariance can preserve too much structure.

For memory systems, you must decide:

- Should relabeling nodes change the output? No.
- Should changing evidence direction change belief state? Usually yes, but predictably.

## Problem Ladder

1. Verify that a 90-degree rotation matrix represents C4.
2. Give one invariant graph output and one equivariant graph output.
3. Explain why graph node embeddings should be permutation equivariant.
4. Compute P A P^T for a relabeled three-node path.
5. Decide whether degree, triangle count, eigenvalues, and raw node ID are invariant or equivariant.
6. Explain how a tensor product representation acts on a pair of features.

## Memory-System Connection

Equivariance is the mature version of "safe transformation." It tells you how memory states should change when the underlying graph changes.

## Hand Problem Trail

### Problem 15.1: Matrix representation of C4

Let `R = [0 -1; 1 0]`. Compute `R^2`, `R^3`, and `R^4`.

Answer check:

```text
R^2 = [-1  0; 0 -1]
R^3 = [0 1; -1 0]
R^4 = I
```

### Problem 15.2: Representation law check

For the same `R`, verify:

```text
rho(r^2) = rho(r) rho(r)
```

Answer check:

```text
rho(r)rho(r) = R^2 = [-1 0; 0 -1]
rho(r^2) = R^2
```

A representation respects the group multiplication table.

### Problem 15.3: Apply a rotation to a point

Compute `R(2,1)` for:

```text
R = [0 -1]
    [1  0]
```

Answer check:

```text
R(2,1) = (-1,2)
```

The abstract 90-degree rotation becomes a matrix acting on coordinates.

### Problem 15.4: Invariant function

Let C2 swap coordinates. Test whether each function is invariant.

```text
f1(x,y)=x+y
f2(x,y)=x-y
f3(x,y)=xy
```

Answer check:

```text
f1 invariant, f2 not invariant, f3 invariant
```

### Problem 15.5: Anti-invariant function

Let `s` swap coordinates. Show that:

```text
f(x,y) = x - y
```

is not invariant, but changes sign under the swap.

Answer check:

```text
f(s.(x,y)) = f(y,x) = y - x = -(x-y)
```

Some quantities are not mistakes just because they change. They may transform predictably.

### Problem 15.6: Equivariant map

Let `F(x,y)=(2x,2y)`. Is F equivariant under coordinate swap?

Answer check:

```text
F(s.(x,y)) = F(y,x) = (2y,2x)
s.F(x,y) = s.(2x,2y) = (2y,2x)
```

Yes.

### Problem 15.7: A non-equivariant map

Let C2 swap coordinates and let:

```text
F(x,y) = (x+y, 0)
```

Is `F` equivariant under the swap?

Answer check:

```text
F(s.(x,y)) = F(y,x) = (x+y,0)
s.F(x,y) = s.(x+y,0) = (0,x+y)
```

These are not equal in general, so F is not equivariant.

### Problem 15.8: Graph-level invariant

For an adjacency matrix `A`, let:

```text
f(A) = trace(A^2)
```

If relabeling sends `A` to `PAP^T`, explain why `f` is invariant.

Answer check:

```text
trace((PAP^T)^2)
= trace(P A P^T P A P^T)
= trace(P A^2 P^T)
= trace(A^2)
```

This counts closed length-2 walks, so names of nodes do not matter.

### Problem 15.9: Node-level equivariance

Let a node feature vector be:

```text
x = (1,4,9)
```

and let `P` swap nodes 1 and 3. A layer is:

```text
F(x) = 2x
```

Check equivariance:

```text
F(Px) = P F(x)
```

Answer check:

```text
Px = (9,4,1)
F(Px) = (18,8,2)

F(x) = (2,8,18)
P F(x) = (18,8,2)
```

The output moves with the relabeled nodes.

### Problem 15.10: Tensor product representation

If g acts by `rho(g)` on V and by `tau(g)` on W, write how it acts on `v tensor w`.

Answer check: `g.(v tensor w) = rho(g)v tensor tau(g)w`.

### Problem 15.11: Tensor product dimension

If `V` is 2-dimensional and `W` is 3-dimensional, what is the dimension of `V tensor W`?

Answer check:

```text
dim(V tensor W) = 2 * 3 = 6
```

Tensor products build compound spaces by pairing basis slots.

### Problem 15.12: Invariant or equivariant?

Classify each output type for a graph with arbitrary node labels:

```text
A. total number of triangles
B. embedding vector for each node
C. sorted degree sequence
D. raw feature of node 1
```

Answer check:

```text
A. invariant
B. equivariant
C. invariant
D. neither, unless node 1 has semantic identity beyond its label
```

The question is not "does it change?" The question is "how should it change?"
