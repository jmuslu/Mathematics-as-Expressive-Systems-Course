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

### Problem 15.2: Invariant function

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

### Problem 15.3: Equivariant map

Let `F(x,y)=(2x,2y)`. Is F equivariant under coordinate swap?

Answer check:

```text
F(s.(x,y)) = F(y,x) = (2y,2x)
s.F(x,y) = s.(2x,2y) = (2y,2x)
```

Yes.

### Problem 15.4: Tensor product representation

If g acts by `rho(g)` on V and by `tau(g)` on W, write how it acts on `v tensor w`.

Answer check: `g.(v tensor w) = rho(g)v tensor tau(g)w`.
