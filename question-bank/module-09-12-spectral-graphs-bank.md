# Modules 09-12 Bank: Spectral Modes, Graph Laplacians, and Higher-Order Relations

Source posture: original course problems inspired by the local friendship/eigendecomposition/SVD/low-rank lecture PDFs and public spectral graph and higher-order network sources. These are reserve candidates, not promoted lecture text.

## Source Anchors

- Local lecture PDFs sampled: `10. The mathematics of Friendship (row, column, Null Spaces).pdf`, `11. Mathematics of Love (Eigendecomposition).pdf`, `12. How does Social Media Brain Wash Us__ creating orthonormal basis via SVD.pdf`, `13. Mathematics of Prediction (Low rank approximation).pdf`.
- [MIT OCW 18.06SC Linear Algebra Resource Index](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)
- [A Vision of Linear Algebra: Singular Values and Singular Vectors](https://ocw.mit.edu/courses/res-18-010-a-2020-vision-of-linear-algebra-spring-2020/resources/singular-values-and-singular-vectors/)
- [Spectral and Algebraic Graph Theory](https://cs-www.cs.yale.edu/homes/spielman/sagt/sagt.pdf)
- [Lectures on Spectral Graph Theory](https://fanchung.ucsd.edu/research/cbms.pdf)
- [Lecture Notes on Spectral Graph Methods](https://arxiv.org/pdf/1608.04845)
- [The Modern Algorithmic Toolbox: Spectral Graph Theory](https://web.stanford.edu/class/cs168/l/l11.pdf)
- [What Are Higher-Order Networks?](https://ora.ox.ac.uk/objects/uuid%3Aacfb9de6-9299-4b7b-86ed-51038304a9d7/files/rws859g36t)
- [Higher-Order Networks Representation and Learning: A Survey](https://arxiv.org/html/2402.19414v1)

## 09.love.eigenmode.stable-view.a

```text
Module: 09
Topic: eigenvectors as stable directions
Role: warm-up computation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by local eigendecomposition/love framing and standard eigenvector checks.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A simple "how someone sees you" transformation acts on two traits:

```text
confidence, calm
```

Let:

```text
A = [2 0]
    [0 1]
```

Compute `A(1,0)`, `A(0,1)`, and `A(1,1)`. Which inputs keep their direction?

## Answer Check

```text
A(1,0) = (2,0) = 2(1,0)
A(0,1) = (0,1) = 1(0,1)
A(1,1) = (2,1)
```

`(1,0)` and `(0,1)` keep their direction. `(1,1)` does not, because `(2,1)` is not a scalar multiple of `(1,1)`.

## Intuition

An eigenvector is a direction the transformation recognizes as a mode: it may stretch or shrink, but it does not turn.

## Modeling Implication

Stable modes are not automatically "important." They are directions the update rule treats coherently.

## Reserve Notes

Good low-friction entry if Module 09 needs a more direct echo of the original love/eigenvector lecture.

## 09.social-media.svd.rank-one.a

```text
Module: 09
Topic: rank-one approximation and SVD intuition
Role: guided derivation
Status: reserve
Source use: original, source-informed
Source note: Inspired by local SVD/social-media and low-rank-approximation lectures plus public SVD resources.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A tiny recommendation table records how strongly two users engage with two topics:

```text
M = [4 0]
    [0 1]
```

If you keep only the strongest rank-one spectral pattern, what matrix do you get? What user/topic behavior is erased?

## Answer Check

For this diagonal matrix, the singular values are `4` and `1`, with coordinate directions as singular vectors. Keeping only the strongest component gives:

```text
M_1 = [4 0]
      [0 0]
```

The second user/topic pattern is erased.

## Intuition

Low-rank approximation keeps dominant structure and discards weaker directions.

## Modeling Implication

Compression is a mathematical choice about which patterns count as signal and which become residual.

## Reserve Notes

Could later be expanded into a full SVD trail for the social-media recommendation analogy.

## 09.eigenmode.long-run-growth.a

```text
Module: 09
Topic: repeated powers and dominant eigenmodes
Role: slightly harder hand calculation
Status: promoted variant in Module 09 Problems 9.5-9.6
Source use: original, source-informed
Source note: Inspired by spectral decomposition as repeated transformation and MIT OCW's diagonalization-and-powers framing.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let:

```text
A = [2 1]
    [1 2]
```

The eigenvectors are:

```text
u = (1,1), eigenvalue 3
v = (1,-1), eigenvalue 1
```

Write `x=(2,0)` as `alpha u + beta v`, then compute `A^3 x`.

## Answer Check

Solve:

```text
alpha(1,1) + beta(1,-1) = (2,0)
alpha + beta = 2
alpha - beta = 0
```

So:

```text
alpha = 1
beta = 1
x = u + v
```

Apply powers:

```text
A^3 x = 3^3 u + 1^3 v
      = 27(1,1) + (1,-1)
      = (28,26)
```

## Intuition

Repeated transformations amplify the large-eigenvalue mode.

## Modeling Implication

Long-run behavior may reveal the dominant update mode, not necessarily the most truthful or desirable feature.

## Reserve Notes

Good bridge from eigendecomposition to graph dynamics.

## 10.party.laplacian.tension.a

```text
Module: 10
Topic: Laplacian quadratic form
Role: computation
Status: promoted in Module 10 Problems 10.6 and 10.9
Source use: original, source-informed
Source note: Inspired by spectral graph theory sources on the Laplacian quadratic form and the live party-introduction running example.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Three friends are in a path:

```text
1 - 2 - 3
```

Their dinner preferences are:

```text
x = (0, 2, 5)
```

Compute the total edge disagreement:

```text
(x1 - x2)^2 + (x2 - x3)^2
```

Then write the Laplacian `L` and verify that this equals `x^T L x`.

## Answer Check

Edge disagreement:

```text
(0-2)^2 + (2-5)^2 = 4 + 9 = 13
```

For the path:

```text
L = [ 1 -1  0]
    [-1  2 -1]
    [ 0 -1  1]
```

Compute:

```text
Lx = (-2, -1, 3)
x^T Lx = 0(-2) + 2(-1) + 5(3) = 13
```

## Intuition

The Laplacian turns neighbor disagreement into a quadratic energy.

## Modeling Implication

Graph smoothness is not a vague preference; it has a checkable algebraic form.

## Reserve Notes

Useful as a slightly more concrete replacement for any abstract Laplacian-energy exercise.

## 10.components.zero-eigenvectors.a

```text
Module: 10
Topic: Laplacian zero modes and connected components
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Inspired by spectral graph theory sources where zero-eigenvalue multiplicity counts connected components.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A graph has two disconnected components:

```text
1 - 2     3 - 4
```

Write two independent vectors in the null space of its Laplacian.

## Answer Check

A Laplacian kills vectors that are constant on each connected component. Two basis choices are:

```text
u = (1,1,0,0)
v = (0,0,1,1)
```

Both have zero difference across every existing edge, so `Lu=0` and `Lv=0`.

## Intuition

Disconnected pieces can each choose their own constant value.

## Modeling Implication

The multiplicity of zero modes tells the system how many independent islands of propagation it has.

## Reserve Notes

Good bridge from hand graph matrices to spectral graph theory.

## 11.detective.relabeling.spectrum.a

```text
Module: 11
Topic: relabeling invariance of spectrum
Role: conceptual check
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by algebraic graph theory and the live detective-board running example.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Two detectives draw the same two-person connection, but swap the labels `A` and `B`.

Original adjacency:

```text
A = [0 1]
    [1 0]
```

Relabeling matrix:

```text
P = [0 1]
    [1 0]
```

Compute `P A P^T`. Did the adjacency matrix change? What does this suggest about eigenvalues under relabeling?

## Answer Check

Here `P=P^T` and `A=P`, so:

```text
P A P^T = P P P = P = A
```

The matrix does not change in this tiny case. More generally, relabeling gives `PAP^T`, which is similar to `A`, so eigenvalues are preserved.

## Intuition

Relabeling changes names, not structure.

## Modeling Implication

Graph features used for evaluation should not depend on arbitrary node IDs.

## Reserve Notes

Could be promoted if Module 11 needs a smaller warm-up before nontrivial automorphisms.

## 11.cospectral.warning.a

```text
Module: 11
Topic: spectral invariants and failure modes
Role: counterexample / failure mode
Status: reserve
Source use: original, source-informed
Source note: Inspired by standard algebraic graph theory warnings about cospectral non-isomorphic graphs.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A graph comparison tool says:

```text
same adjacency eigenvalues => same graph
```

Is this rule valid? Explain the failure mode without constructing a large example.

## Answer Check

No. Eigenvalues are graph invariants, so isomorphic graphs have the same spectrum, but the converse can fail. Non-isomorphic graphs can be cospectral.

## Intuition

An invariant can be useful without being complete.

## Modeling Implication

A system should treat spectral agreement as evidence of similarity, not proof of identity.

## Reserve Notes

This is a conceptual reserve problem; promote only if the module needs a sharper warning against overtrusting invariants.

## 12.group-chat.hyperedge.a

```text
Module: 12
Topic: hyperedges versus pairwise edges
Role: conceptual check
Status: promoted in Module 12 Problems 12.1-12.3
Source use: original, source-informed
Source note: Inspired by higher-order network sources on multiway interactions and the live group-chat running example.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

In a group chat, the statement:

```text
Ari, Bea, and Cy made one dinner reservation together
```

is encoded in two ways.

Model 1 uses three pairwise edges:

```text
Ari-Bea, Bea-Cy, Ari-Cy
```

Model 2 uses one hyperedge:

```text
{Ari, Bea, Cy}
```

What information does Model 1 fail to distinguish?

## Answer Check

Model 1 only says each pair is connected. It cannot distinguish:

```text
three pairwise friendships
```

from:

```text
one joint three-person commitment
```

Model 2 records the group relation directly.

## Intuition

Pairwise edges can imitate the shadow of a group event without representing the event itself.

## Modeling Implication

Higher-order relations are needed when the meaning belongs to the whole tuple, not just to its pairs.

## Reserve Notes

Strong candidate if Module 12's live problem trail needs another ordinary human example.

## 12.simplicial.closure.failure.a

```text
Module: 12
Topic: simplicial closure under faces
Role: counterexample
Status: reserve
Source use: original, source-informed
Source note: Inspired by higher-order network and simplicial-complex sources.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A structure contains the filled triangle:

```text
{A, B, C}
```

but does not contain the edge:

```text
{A, B}
```

Can this be a simplicial complex? Can it be a hypergraph?

## Answer Check

It cannot be a simplicial complex, because every face of a simplex must also be included. The face `{A,B}` is missing.

It can be a hypergraph, because a hypergraph can include a three-way edge without requiring all pairwise edges.

## Intuition

Simplicial complexes and hypergraphs make different commitments about what a group relation implies.

## Modeling Implication

Choosing a representation changes the legal inferences. A filled triangle may force pairwise faces in one model but not another.

## Reserve Notes

Good failure-mode problem for preventing students from treating all higher-order structures as interchangeable.
