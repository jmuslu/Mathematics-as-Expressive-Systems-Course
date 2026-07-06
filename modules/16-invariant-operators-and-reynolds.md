# Module 16: Invariant Operators and Reynolds Averaging

## Lecture Promise

You will understand how invariant subspaces can be constructed by averaging over a group, and why this matters for safe graph features.

## Prerequisites

- Group actions
- Representations
- Linear maps
- Eigenvectors

## Why The Old Object Fails

It is not enough to say a feature should be invariant. You need a construction that guarantees invariance.

This is where G-invariance becomes engineering discipline. Instead of hoping a learned function ignores arbitrary presentation details, you can build an operator whose image is the invariant subspace.

## Base Case

For a finite group G acting on a vector space, define:

```text
R = (1 / |G|) sum_{g in G} rho(g)
```

This is the Reynolds operator.

## Formal Object

The Reynolds operator projects onto the invariant subspace:

```text
W = {v : rho(g)v = v for all g in G}
```

It satisfies:

```text
R^2 = R
rho(h)R = R
```

So it is a projection, and its outputs are invariant.

## Worked Derivation

For any h in G:

```text
rho(h) R
= rho(h) (1/|G|) sum_g rho(g)
= (1/|G|) sum_g rho(hg)
```

As g ranges over G, hg also ranges over G. Therefore:

```text
rho(h)R = R
```

So Rv is invariant.

## Failure Mode

Averaging can erase useful asymmetric information.

If a memory graph needs direction, source, or causal order, forcing invariance may destroy exactly what validation requires.

The design question is therefore:

```text
Should this object be invariant, equivariant, or neither?
```

For a graph-level contradiction score, invariance is often right. For a node-level belief state, equivariance is usually right. For a timestamped causal trace, full permutation invariance may be wrong.

## Problem Ladder

1. Average identity and swap matrices for a two-node permutation group.
2. Find the invariant subspace of the swap action on R^2.
3. Explain when averaging over graph relabelings is desirable.
4. Verify R^2 = R for the two-node swap example.
5. Build an invariant feature from x = (x1, x2, x3) under all coordinate permutations.
6. Give an example where Reynolds averaging would destroy provenance.

## Memory-System Connection

Invariant operators create features that ignore arbitrary graph presentation while preserving structural meaning.

## Research Bridge

The G-invariance tutorial constructs invariant neural weights as an eigenspace of a Reynolds operator.

## Hand Problem Trail

### Problem 16.1: Reynolds operator for a swap

Let C2 act on R2 by identity I and swap S:

```text
S = [0 1]
    [1 0]
```

Compute `R = (I+S)/2`.

Answer check:

```text
R = [1/2 1/2]
    [1/2 1/2]
```

### Problem 16.2: Apply the averaging operator

Compute `R(3,7)`.

Answer check: `R(3,7) = (5,5)`. The output is invariant under swapping.

### Problem 16.3: Projection check

Verify `R^2 = R`.

Answer check:

```text
[1/2 1/2; 1/2 1/2]^2 = [1/2 1/2; 1/2 1/2]
```

### Problem 16.4: What got erased?

What information did Reynolds averaging erase from `(3,7)`?

Answer check: it erased the asymmetric difference. The invariant part is the mean; the anti-invariant part is the contrast.
