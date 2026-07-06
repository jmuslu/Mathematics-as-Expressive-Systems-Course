# Modules 13-16 Bank: Symmetry, Actions, Representations, and Invariants

Source posture: original course problems inspired by public notes and papers on groups, group actions, representation theory, equivariance, and Reynolds averaging. These are reserve candidates, not promoted lecture text.

## Source Anchors

- [Groups and Group Actions Lecture Notes](https://www.maths.ox.ac.uk/system/files/attachments/Groups%20and%20Group%20Actions%20Lecture%20Notes.pdf)
- [Group Actions](https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf)
- [Math 4107: Group Actions](https://austinchristian.math.gatech.edu/teaching/4107-f23/group-actions.pdf)
- [Introduction to Representation Theory](https://math.mit.edu/~etingof/replect.pdf)
- [Representation Theory](https://math.berkeley.edu/~teleman/math/RepThry.pdf)
- [Universal Invariant and Equivariant Graph Neural Networks](https://papers.neurips.cc/paper/8931-universal-invariant-and-equivariant-graph-neural-networks.pdf)
- [Invariant and Equivariant Graph Networks](https://openreview.net/forum?id=Syx72jC9tm)
- [Lecture 16: Reynolds Operator and Finite Generation of Invariant Rings](https://cs.uwaterloo.ca/~r5olivei/courses/2021-winter-cs487/lecture16-post.pdf)

## 13.square.partial-moves.group-failure.a

```text
Module: 13
Topic: closure and inverses
Role: counterexample
Status: promoted in Module 13 Problem 13.7
Source use: original, source-informed
Source note: Inspired by group-as-symmetry examples in group action notes.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A board-game token can be rotated by:

```text
0 degrees, 90 degrees, 180 degrees
```

but the rulebook forgot to include 270 degrees. Under composition of rotations, is this set a group?

## Answer Check

```text
90 + 180 = 270 degrees
```

The result is not in the listed set, so closure fails. Also, the inverse of a 90-degree rotation is 270 degrees, which is missing.

## Intuition

A group is not just a collection of useful moves. It must be closed under doing moves after moves and under undoing them.

## Modeling Implication

If a system claims a class of edits is "safe," it must include all composed and inverse edits required by that claim.

## Reserve Notes

Good early failure case before Cayley tables.

## 13.playlist.symmetry-vs-dynamics.a

```text
Module: 13
Topic: symmetry versus irreversible update
Role: conceptual check
Status: promoted in Module 13 Problem 13.12
Source use: original
Source note: Course-style standalone analogy.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A playlist app allows these operations:

```text
A. reorder songs
B. reverse the order of the whole playlist
C. delete every skipped song
D. rename a playlist without changing songs
```

Which are plausible symmetries of the playlist contents, and which are irreversible dynamics?

## Answer Check

```text
A. symmetry if only order is presentation, not content
B. symmetry if order direction is presentation
C. irreversible dynamic unless skipped songs are recoverable
D. symmetry of contents
```

## Intuition

Some changes preserve the object; others revise it.

## Modeling Implication

The course should not call every transformation a symmetry. Decay, deletion, and consolidation often need different mathematics.

## Reserve Notes

Useful analogy if Module 13 needs a less graph-specific motivation.

## 13.cayley.c3.table.a

```text
Module: 13
Topic: Cayley table
Role: computation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by standard cyclic-group examples.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let:

```text
C3 = {e, r, r^2}
r^3 = e
```

Write the Cayley table for multiplication in `C3`.

## Answer Check

```text
    e   r   r^2
e   e   r   r^2
r   r   r^2 e
r^2 r^2 e   r
```

## Intuition

The exponents add modulo 3.

## Modeling Implication

A table makes composition explicit; it prevents treating transformations as disconnected labels.

## Reserve Notes

Could deepen the current cyclic-group practice.

## 13.permissions.inverse.a

```text
Module: 13
Topic: inverses
Role: modeling interpretation
Status: reserve
Source use: original
Source note: Course-style operational analogy.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A document system has an operation:

```text
toggle read-only mode
```

Applying it twice returns the document to its original permission state. Model this as a two-element group and name the identity and non-identity element.

## Answer Check

```text
Elements: e = do nothing, t = toggle
t^2 = e
```

The group is isomorphic to `C2`.

## Intuition

The toggle is its own inverse.

## Modeling Implication

Reversible state changes can be represented as group elements; irreversible permission loss cannot.

## Reserve Notes

Good standalone operational scenario for inverses.

## 14.seating.orbit-stabilizer.a

```text
Module: 14
Topic: orbit and stabilizer
Role: computation
Status: promoted in Module 14 Problems 14.3-14.5
Source use: original, source-informed
Source note: Inspired by orbit-stabilizer group action notes and the live seating-chart example.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Three dinner seats are labeled 1, 2, 3. A seating profile records dietary preference by seat:

```text
x = (V, M, M)
```

where `V` means vegetarian and `M` means meat. The group `S3` permutes seats. Find the orbit size and stabilizer size of `x`.

## Answer Check

```text
Orbit:
(V,M,M), (M,V,M), (M,M,V)
so |orbit| = 3

Stabilizer:
identity and the swap of the two M seats
so |stabilizer| = 2

3 * 2 = 6 = |S3|
```

## Intuition

Repeated entries create hidden symmetry because swapping equal roles changes nothing.

## Modeling Implication

Orbit-stabilizer separates genuinely different presentations from redundant relabelings.

## Reserve Notes

Natural successor to current `(1,2,2)` orbit examples.

## 14.graph.fixed-points.a

```text
Module: 14
Topic: fixed points under an action
Role: conceptual check
Status: promoted in Module 14 Problem 14.11
Source use: original, source-informed
Source note: Inspired by fixed-point definitions in group-action notes.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let `s` swap nodes 1 and 3 in a three-node graph. Which of these edge sets are fixed by `s`?

```text
A. {1-2, 2-3}
B. {1-2}
C. {1-3}
D. {1-2, 1-3}
```

## Answer Check

```text
A. fixed: edges swap with each other
B. not fixed: 1-2 becomes 2-3
C. fixed: 1-3 remains 3-1, the same undirected edge
D. not fixed: 1-2 becomes 2-3, missing from D
```

## Intuition

Fixed does not mean every part stays in place. It means the whole object returns to itself.

## Modeling Implication

A graph can be symmetric even when individual edge names move.

## Reserve Notes

Good for preventing a common fixed-point misconception.

## 14.order-artifact.failure.a

```text
Module: 14
Topic: permutation artifact
Role: failure mode
Status: promoted in Module 14 Problem 14.12
Source use: original, source-informed
Source note: Inspired by permutation-invariance/equivariance requirements in graph-network papers.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A rule for a node says:

```text
output = feature of the first neighbor in the stored adjacency list
```

A node has neighbors with features:

```text
10, 30
```

What happens if the storage order changes from `(10, 30)` to `(30, 10)`?

## Answer Check

```text
Original output = 10
Reordered output = 30
```

The graph relation did not change, but the rule changed its output.

## Intuition

The rule learned presentation order, not graph structure.

## Modeling Implication

Neighbor aggregation must respect the action of permutation on node order.

## Reserve Notes

Good bridge toward invariant/equivariant graph-network readings.

## 14.coset-style-orbit-count.a

```text
Module: 14
Topic: orbit-stabilizer counting
Role: derivation
Status: reserve
Source use: original, source-informed
Source note: Inspired by orbit-stabilizer theorem notes.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A group of 8 symmetries acts on a set of badges. One badge has stabilizer size 4. How many distinct badges appear in its orbit?

## Answer Check

```text
|orbit| * |stabilizer| = |group|
|orbit| * 4 = 8
|orbit| = 2
```

## Intuition

Large stabilizer means many group moves are redundant for that object, so the orbit is smaller.

## Modeling Implication

Objects with more symmetry generate fewer distinct presentations.

## Reserve Notes

Abstract enough for graduate transition, still hand-checkable.

## 15.sign-representation.a

```text
Module: 15
Topic: one-dimensional representation
Role: computation
Status: promoted in Module 15 Problem 15.5
Source use: original, source-informed
Source note: Inspired by representation theory notes on turning groups into linear maps.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let `C2 = {e, s}` with `s^2 = e`. Define:

```text
rho(e) = [1]
rho(s) = [-1]
```

Verify that this is a representation.

## Answer Check

```text
rho(e) = 1
rho(s)^2 = (-1)^2 = 1 = rho(e)
rho(es) = rho(e)rho(s) = -1
rho(se) = rho(s)rho(e) = -1
```

The group law is respected.

## Intuition

A representation can be as small as a sign flip.

## Modeling Implication

Quantities that change sign predictably are structured, not necessarily invalid.

## Reserve Notes

Pairs well with anti-invariant examples.

## 15.intertwiner.check.a

```text
Module: 15
Topic: equivariant linear maps
Role: derivation
Status: promoted in Module 15 Problem 15.6
Source use: original, source-informed
Source note: Inspired by equivariant linear-layer constraints in graph-network papers.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let `S = [0 1; 1 0]` swap coordinates. A linear map:

```text
F(x) = Mx
M = [a b]
    [c d]
```

is equivariant under the swap when:

```text
MS = SM
```

Find the constraints on `a,b,c,d`.

## Answer Check

```text
MS = [b a; d c]
SM = [c d; a b]

Equate entries:
b = c
a = d
d = a
c = b

So M = [a b; b a]
```

## Intuition

Equivariance forces shared structure in the matrix.

## Modeling Implication

Symmetry can become a parameter-tying rule, not just a slogan.

## Reserve Notes

Graduate-depth bridge to invariant/equivariant neural layers.

## 15.tensor-sign-action.a

```text
Module: 15
Topic: tensor product representation
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Inspired by representation notes on tensor products.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let `C2` act on `V = R` by the sign representation:

```text
s.v = -v
```

and also on `W = R` by the same sign representation. How does `s` act on `v tensor w` in `V tensor W`?

## Answer Check

```text
s.(v tensor w) = (-v) tensor (-w)
               = v tensor w
```

The tensor product of two sign flips is invariant.

## Intuition

Two sign reversals cancel in the tensor product.

## Modeling Implication

Compound features can have different symmetry behavior from their components.

## Reserve Notes

Useful for explaining why products matter in representation theory.

## 15.pooling.invariant-vs-equivariant.a

```text
Module: 15
Topic: invariant and equivariant graph outputs
Role: modeling interpretation
Status: promoted in Module 15 Problem 15.12
Source use: original, source-informed
Source note: Inspired by graph-network invariance/equivariance papers.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A node-feature vector is:

```text
x = (2, 5, 8)
```

Let `P` swap the first and third nodes. Compare:

```text
F(x) = 2x
g(x) = sum of coordinates
```

Which output is equivariant and which is invariant?

## Answer Check

```text
Px = (8,5,2)
F(Px) = (16,10,4)
P F(x) = P(4,10,16) = (16,10,4)
So F is equivariant.

g(Px) = 8+5+2 = 15
g(x) = 2+5+8 = 15
So g is invariant.
```

## Intuition

Node-level outputs move with nodes. Graph-level summaries ignore node names.

## Modeling Implication

The output type determines the right symmetry law.

## Reserve Notes

Good compact bridge to graph learning.

## 16.reynolds.c3.average-function.a

```text
Module: 16
Topic: Reynolds averaging
Role: computation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by finite-group Reynolds averaging notes.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let `C3` cyclically permute variables:

```text
(x,y,z) -> (y,z,x)
```

Reynolds-average:

```text
f(x,y,z) = x
```

over the group.

## Answer Check

```text
orbit of f:
x, y, z

R(f) = (x + y + z)/3
```

This is invariant under cyclic rotation.

## Intuition

Averaging converts a coordinate-dependent function into a symmetric summary for that group.

## Modeling Implication

Invariant construction is an operator, not just a desired behavior.

## Reserve Notes

Good function-level complement to vector averaging.

## 16.reynolds.idempotent-function.a

```text
Module: 16
Topic: idempotence
Role: derivation
Status: promoted in Module 16 Problem 16.11
Source use: original, source-informed
Source note: Inspired by Reynolds-operator projection properties.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Using:

```text
R(f) = (x + y + z)/3
```

from the previous problem, apply `R` again. What is `R(R(f))`?

## Answer Check

```text
R(f) is already invariant.
So R(R(f)) = R(f) = (x+y+z)/3.
```

## Intuition

A projection does nothing after the object is already in its target subspace.

## Modeling Implication

Once a feature is invariant, repeated symmetrization cannot recover erased information.

## Reserve Notes

Good for emphasizing projection behavior.

## 16.reynolds.erases-contrast.a

```text
Module: 16
Topic: invariant projection failure mode
Role: failure mode
Status: lecture candidate
Source use: original
Source note: Course-style analogy aligned to Reynolds averaging.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Two reviewers score the same proposal:

```text
reviewer A = 2
reviewer B = 8
```

The swap-average Reynolds operator sends `(2,8)` to `(5,5)`. What information has been erased?

## Answer Check

```text
The average score 5 is preserved.
The disagreement or contrast (-3,3) is erased.
```

## Intuition

Invariant averaging keeps what is shared under the symmetry and discards what changes.

## Modeling Implication

If disagreement is meaningful evidence, full invariance is too aggressive.

## Reserve Notes

Useful standalone human analogy for the danger of averaging.

## 16.symmetrize-polynomial.a

```text
Module: 16
Topic: invariant polynomial
Role: harder calculation
Status: promoted in Module 16 Problems 16.8-16.9
Source use: original, source-informed
Source note: Inspired by invariant-theory examples using Reynolds operators on polynomials.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let `C2` swap `x` and `y`. Reynolds-average:

```text
f(x,y) = x^2 y
```

Then verify the result is symmetric.

## Answer Check

```text
R(f) = (1/2)(x^2 y + y^2 x)

Swap x and y:
(1/2)(y^2 x + x^2 y)
= R(f)
```

## Intuition

The averaged polynomial keeps the part that survives the swap.

## Modeling Implication

Invariant features can be built from non-invariant ingredients, but the construction changes what distinctions remain visible.

## Reserve Notes

Good graduate-style bridge to invariant rings without requiring full invariant theory.
