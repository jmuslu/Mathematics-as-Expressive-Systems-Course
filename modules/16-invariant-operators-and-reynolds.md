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

## Running Example: Reviewer Averaging

Two reviewers score the same project:

```text
reviewer A = 3
reviewer B = 7
```

If the reviewers are supposed to be interchangeable, the invariant summary is the average:

```text
(3,7) -> (5,5)
```

That is useful if only the shared score matters. It is dangerous if the disagreement matters. Reynolds averaging creates invariance by removing the part that changes under the swap.

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

### Problem 16.4: Find the invariant subspace

For the swap action on `R^2`, solve:

```text
Sx = x
```

where:

```text
S = [0 1]
    [1 0]
```

Answer check:

```text
S(x,y) = (y,x)
(y,x) = (x,y) means x = y
```

The invariant subspace is all vectors `(t,t)`.

### Problem 16.5: Decompose into mean and contrast

Write `(3,7)` as:

```text
invariant part + anti-invariant part
```

under the coordinate swap.

Answer check:

```text
R(3,7) = (5,5)
(3,7) - (5,5) = (-2,2)

(3,7) = (5,5) + (-2,2)
```

The mean survives averaging. The contrast changes sign.

### Problem 16.6: What got erased?

What information did Reynolds averaging erase from `(3,7)`?

Answer check: it erased the asymmetric difference. The invariant part is the mean; the anti-invariant part is the contrast.

### Problem 16.7: Average over three cyclic rotations

Let C3 act on `R^3` by cyclically rotating coordinates:

```text
(x1,x2,x3) -> (x2,x3,x1)
```

Compute the Reynolds average of `(1,4,7)`.

Answer check:

```text
orbit vectors:
(1,4,7)
(4,7,1)
(7,1,4)

average = ((1+4+7)/3, (4+7+1)/3, (7+1+4)/3)
        = (4,4,4)
```

The invariant subspace under cyclic rotation is the constant-coordinate line.

### Problem 16.8: Symmetrize a two-variable function

Let C2 swap `x` and `y`. Reynolds-average:

```text
f(x,y) = x^2 y
```

Answer check:

```text
R f = (1/2)(f(x,y) + f(y,x))
    = (1/2)(x^2 y + y^2 x)
```

The result is symmetric in `x` and `y`.

### Problem 16.9: Verify the symmetrized function is invariant

Using Problem 16.8, check that `R f(x,y) = R f(y,x)`.

Answer check:

```text
R f(y,x) = (1/2)(y^2 x + x^2 y)
          = R f(x,y)
```

Averaging built the invariance instead of hoping for it.

### Problem 16.10: Graph feature averaging

A graph-level model gives two scores for two labelings of the same two-node graph:

```text
f(A) = 8
f(SAS^T) = 10
```

What is the averaged invariant score over the swap group?

Answer check:

```text
(8 + 10)/2 = 9
```

This fixes label sensitivity by averaging over the label symmetry, though it may be expensive for large groups.

### Problem 16.11: Idempotence as "averaging twice changes nothing"

Explain why applying Reynolds averaging twice to `(3,7)` gives the same result as applying it once.

Answer check:

```text
R(3,7) = (5,5)
R(5,5) = (5,5)
```

Once an object is in the invariant subspace, more averaging does not move it.

### Problem 16.12: Failure mode - averaging away direction

Suppose `(3,7)` means:

```text
left-to-right evidence = 3
right-to-left evidence = 7
```

Why might Reynolds averaging be a bad idea?

Answer check:

```text
Averaging gives (5,5), which removes the directional imbalance.
If direction is meaningful, invariance destroys information the model needs.
```

Invariant construction is powerful only after deciding which differences are allowed to disappear.
