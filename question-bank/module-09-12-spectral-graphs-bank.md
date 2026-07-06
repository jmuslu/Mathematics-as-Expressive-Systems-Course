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
- [CS1961 Lecture 14: Spectral Graph Theory](https://chihaozhang.com/teaching/Comb2023/lec14/lec14.pdf)
- [MAT 280 Lecture 4: Laplacians of Graphs](https://www.math.ucdavis.edu/~saito/courses/HarmGraph/lecture04.pdf)
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
Status: promoted variant in Module 11 Problems 11.4 and 11.6
Source use: original, source-informed
Source note: Inspired by algebraic graph theory sources on permutation similarity and the live detective-board running example.
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

## 09.spectral-radius.stability.a

```text
Module: 09
Topic: spectral radius and repeated updates
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Inspired by local eigendecomposition framing and public spectral graph/linear algebra sources.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A two-mood friendship dynamic has eigenmodes:

```text
shared excitement: lambda = 1.2
contrast tension: lambda = 0.7
```

If the starting state is:

```text
3(shared excitement) + 2(contrast tension)
```

what is the state after two updates in eigenmode coordinates?

## Answer Check

Each eigenmode is scaled by its eigenvalue at every step:

```text
shared coefficient after two steps = 3(1.2)^2 = 4.32
contrast coefficient after two steps = 2(0.7)^2 = 0.98
```

So the state is:

```text
4.32(shared excitement) + 0.98(contrast tension)
```

## Intuition

The larger eigenvalue dominates repeated updates.

## Modeling Implication

Spectral radius identifies which mode controls long-run behavior, but the meaning of that mode still has to be interpreted.

## Reserve Notes

Good bridge from eigenvector computation to dynamics in Module 28.

## 09.friendship.rayleigh.mood-score.a

```text
Module: 09
Topic: Rayleigh quotient as directional score
Role: guided derivation
Status: reserve
Source use: original, source-informed
Source note: Inspired by public spectral graph notes on Rayleigh quotients and the local friendship/eigendecomposition framing.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A friendship-feedback map is:

```text
A = [2 1]
    [1 2]
```

Trait vector `x=(1,0)` means "confidence only." Trait vector `u=(1,1)` means "confidence and calm together."

Compute the Rayleigh scores:

```text
R_A(x) = (x^T A x)/(x^T x)
R_A(u) = (u^T A u)/(u^T u)
```

Which direction is more strongly reinforced?

## Answer Check

For `x=(1,0)`:

```text
Ax = (2,1)
x^T A x = 2
x^T x = 1
R_A(x) = 2
```

For `u=(1,1)`:

```text
Au = (3,3)
u^T A u = 6
u^T u = 2
R_A(u) = 3
```

The shared direction `(1,1)` has the larger score.

## Intuition

The Rayleigh quotient asks how much a transformation reinforces a chosen direction before requiring that direction to be an exact eigenvector.

## Modeling Implication

Directional scores let a model compare candidate modes even before solving the full eigenvalue problem.

## Reserve Notes

Good candidate if Module 09 needs a more graduate-flavored bridge from eigenvectors to variational characterizations.

## 09.svd.residual.preference-table.a

```text
Module: 09
Topic: singular values and approximation error
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Inspired by local SVD/social-media framing and public SVD/low-rank approximation resources.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A small recommendation system has already been rotated into its singular-pattern coordinates:

```text
Sigma = [5 0 0]
        [0 2 0]
        [0 0 1]
```

If the model keeps only the first two patterns, what is the squared Frobenius error of the approximation? What pattern was treated as residual?

## Answer Check

For a diagonal singular-value matrix, the squared Frobenius error after keeping the first two singular values is the sum of squares of the discarded singular values:

```text
error^2 = 1^2 = 1
```

The third pattern, with singular value `1`, is treated as residual.

## Intuition

Low-rank approximation discards energy, not named rows or columns.

## Modeling Implication

When a recommendation model compresses taste, the erased part may still be meaningful to a small group even if it is spectrally weak.

## Reserve Notes

Useful as a compact answer-check problem before discussing why compression can wash out minority taste patterns.

## 10.incidence.edge-differences.a

```text
Module: 10
Topic: incidence matrices and edge disagreement
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Inspired by public spectral graph sources and the live party-tension example.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

For the path:

```text
1 - 2 - 3
```

orient edges as:

```text
e1: 1 -> 2
e2: 2 -> 3
```

Use the incidence matrix:

```text
B = [-1  1  0]
    [ 0 -1  1]
```

For dinner-preference values:

```text
x = (0,2,5)
```

compute `Bx`.

## Answer Check

```text
Bx = [-1  1  0][0]   [2]
     [ 0 -1  1][2] = [3]
                 [5]
```

The edge differences are:

```text
x_2 - x_1 = 2
x_3 - x_2 = 3
```

## Intuition

The incidence matrix turns node values into edge differences.

## Modeling Implication

Graph tension can be measured by first moving from node states to edge disagreements.

## Reserve Notes

Pairs naturally with Laplacian quadratic-form problems.

## 10.laplacian.psd.dinner-tension.a

```text
Module: 10
Topic: Laplacian positive semidefiniteness
Role: derivation
Status: reserve
Source use: original, source-informed
Source note: Inspired by public graph Laplacian notes where Laplacian energy is a sum of squared edge differences.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Three people sit in a line:

```text
1 - 2 - 3
```

Their preferred dinner start times are:

```text
x = (1,4,2)
```

Compute:

```text
(x_1 - x_2)^2 + (x_2 - x_3)^2
```

Then explain why this makes `x^T L x` nonnegative for every `x` on this graph.

## Answer Check

The edge tension is:

```text
(1-4)^2 + (4-2)^2 = 9 + 4 = 13
```

For this path, `x^T L x` equals the same sum of squared edge differences:

```text
x^T L x = 13 >= 0
```

Because every term is a square, the expression cannot be negative for any vector `x`.

## Intuition

The Laplacian is positive semidefinite because it measures disagreement energy.

## Modeling Implication

If a proposed "graph tension" can be negative, it is not behaving like ordinary Laplacian smoothness energy.

## Reserve Notes

Good graduate-depth step because it turns the hand calculation into a structural proof.

## 10.incidence.orientation.invariance.a

```text
Module: 10
Topic: incidence orientation and Laplacian invariance
Role: invariance check
Status: reserve
Source use: original, source-informed
Source note: Inspired by public graph Laplacian sources that build the Laplacian from oriented incidence matrices.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

For the path:

```text
1 - 2 - 3
```

compare two incidence matrices that differ only by reversing the first edge:

```text
B_1 = [-1  1  0]
      [ 0 -1  1]

B_2 = [ 1 -1  0]
      [ 0 -1  1]
```

Explain why `B_1^T B_1 = B_2^T B_2`.

## Answer Check

The first row of `B_2` is `-1` times the first row of `B_1`; the second row is unchanged.

When forming `B^T B`, each row contributes an outer product:

```text
r^T r
```

Replacing `r` by `-r` gives:

```text
(-r)^T(-r) = r^T r
```

So the Laplacian is unchanged by the arbitrary orientation choice.

## Intuition

Orientation is bookkeeping for edge differences; the final disagreement energy should not depend on that bookkeeping.

## Modeling Implication

A graph feature meant for an undirected relationship should survive arbitrary choices made during computation.

## Reserve Notes

Good bridge from incidence matrices to invariant construction.

## 10.laplacian.components.two-groups.a

```text
Module: 10
Topic: Laplacian nullspace and connected components
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Inspired by public spectral graph sources on Laplacian zero eigenvectors.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A party graph has two disconnected friend groups:

```text
1 - 2

3 - 4
```

Write two independent vectors that should be killed by the graph Laplacian.

## Answer Check

Each connected component can carry a constant value:

```text
u = (1,1,0,0)
v = (0,0,1,1)
```

On each edge, the endpoint values agree, so edge disagreement is zero. Therefore:

```text
Lu = 0
Lv = 0
```

## Intuition

The number of independent zero-tension constant patterns equals the number of connected components.

## Modeling Implication

The Laplacian nullspace detects disconnected social regions.

## Reserve Notes

Good companion to Module 10 connected-component problems.

## 11.degree-sequence.isomorphism-filter.a

```text
Module: 11
Topic: degree sequence as graph invariant
Role: warm-up
Status: reserve
Source use: original, source-informed
Source note: Inspired by algebraic graph theory sources and detective-board relabeling examples.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Detective Board A is a path on four nodes:

```text
1 - 2 - 3 - 4
```

Detective Board B is a star with one center connected to three leaves.

Compute the degree sequence of each graph. Can they be isomorphic?

## Answer Check

For the path:

```text
degrees = 1,2,2,1
sorted degree sequence = (2,2,1,1)
```

For the star:

```text
degrees = 3,1,1,1
sorted degree sequence = (3,1,1,1)
```

The degree sequences differ, so the graphs cannot be isomorphic.

## Intuition

Relabeling can move degrees to different node names, but it cannot change the multiset of degrees.

## Modeling Implication

Simple invariants can quickly rule out sameness before using heavier algebra.

## Reserve Notes

Good early algebraic-graph reserve before spectra.

## 11.automorphism.fixed-center.a

```text
Module: 11
Topic: automorphisms and fixed nodes
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Inspired by algebraic graph theory sources and detective-board symmetry examples.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

In the path:

```text
1 - 2 - 3
```

explain why every automorphism must send node `2` to itself.

## Answer Check

Node `2` has degree `2`, while nodes `1` and `3` each have degree `1`.

An automorphism preserves adjacency and therefore preserves degree. Since node `2` is the only degree-2 node, it must map to itself.

## Intuition

Symmetry can swap indistinguishable parts, but it cannot move a structurally unique node into a different role.

## Modeling Implication

Automorphisms reveal which labels are arbitrary and which positions are structurally forced.

## Reserve Notes

Good detective-board symmetry explanation problem.

## 11.trace.closed-walks.detective.a

```text
Module: 11
Topic: trace powers and closed walks
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Inspired by algebraic graph theory sources connecting powers of adjacency matrices to walk counts.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A detective board has three suspects in a path:

```text
1 - 2 - 3
```

Its adjacency matrix is:

```text
A = [0 1 0]
    [1 0 1]
    [0 1 0]
```

Compute `trace(A^2)`. Interpret the answer as a count of length-2 closed walks.

## Answer Check

First compute the diagonal of `A^2`.

```text
(A^2)_{11} = 1
(A^2)_{22} = 2
(A^2)_{33} = 1
```

So:

```text
trace(A^2) = 1 + 2 + 1 = 4
```

Each undirected edge contributes two length-2 closed walks: go across the edge and come back. The path has two edges, so the total is `4`.

## Intuition

Matrix powers count walks; traces count walks that return to where they started.

## Modeling Implication

Spectral quantities can encode structural counts, but the interpretation depends on which matrix the model powers.

## Reserve Notes

Good concrete entry into algebraic graph theory before using eigenvalues as compressed walk information.

## 11.symmetry.average.orbit-signal.a

```text
Module: 11
Topic: automorphism averaging
Role: guided derivation
Status: reserve
Source use: original, source-informed
Source note: Inspired by algebraic graph theory sources on graph automorphisms and invariant subspaces.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

On the path:

```text
1 - 2 - 3
```

the reflection symmetry swaps nodes `1` and `3` while fixing node `2`.

A clue-score vector is:

```text
x = (3,0,1)
```

Average `x` with its reflected copy. What part of the signal survives the symmetry average?

## Answer Check

The reflected copy is:

```text
Px = (1,0,3)
```

Average:

```text
(x + Px)/2 = ((3,0,1) + (1,0,3))/2
           = (2,0,2)
```

The endpoints become equal; the middle stays fixed.

## Intuition

Averaging over symmetries removes distinctions the graph itself cannot justify.

## Modeling Implication

Invariant graph features should not preserve label-specific differences between structurally interchangeable positions.

## Reserve Notes

Useful if Module 11 needs a more operational bridge from automorphisms to invariant operators.

## 12.clique-expansion.false-group.a

```text
Module: 12
Topic: clique expansion failure
Role: counterexample
Status: reserve
Source use: original, source-informed
Source note: Inspired by higher-order network sources on pairwise shadows of multiway relations.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A model converts every three-person dinner reservation into three pairwise friendship edges.

Give one reason this can create a false story.

## Answer Check

One three-person reservation:

```text
{Ari, Bea, Cy}
```

becomes:

```text
Ari-Bea, Ari-Cy, Bea-Cy
```

The pairwise graph now looks like three pairwise relationships, even if the only true fact was one joint reservation.

## Intuition

Clique expansion preserves a shadow of the group relation but not its source as one event.

## Modeling Implication

When provenance of a group event matters, hyperedges are safer than pairwise expansion.

## Reserve Notes

Good warning before using ordinary graph algorithms on higher-order data.

## 12.simplex.dimension.check.a

```text
Module: 12
Topic: simplex dimension and faces
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Inspired by higher-order network and simplicial-complex sources.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A filled simplex contains four people:

```text
[Ari, Bea, Cy, Dev]
```

What is its dimension? How many three-person faces does it have?

## Answer Check

A simplex on four vertices has dimension:

```text
4 - 1 = 3
```

Its three-person faces are obtained by leaving out one vertex:

```text
[Bea,Cy,Dev]
[Ari,Cy,Dev]
[Ari,Bea,Dev]
[Ari,Bea,Cy]
```

So it has `4` three-person faces.

## Intuition

Dimension counts independent slots in the joint relation, not the number of vertices.

## Modeling Implication

Simplicial complexes force lower-dimensional faces to exist, so the representation carries more commitments than a raw hyperedge.

## Reserve Notes

Good hand calculation for distinguishing hyperedges from simplices.

## 12.boundary.of.group-commitment.a

```text
Module: 12
Topic: simplicial boundary
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Inspired by standard simplicial-complex boundary computations and higher-order relation examples.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A three-person group commitment is represented as an oriented filled triangle:

```text
[Ari, Bea, Cy]
```

Using the boundary rule:

```text
d[A,B,C] = [B,C] - [A,C] + [A,B]
```

compute the boundary of `[Ari, Bea, Cy]`.

## Answer Check

Substitute the names into the rule:

```text
d[Ari,Bea,Cy] = [Bea,Cy] - [Ari,Cy] + [Ari,Bea]
```

The boundary is the signed collection of pairwise faces around the group commitment.

## Intuition

A filled triangle has an edge boundary; the group event has pairwise interfaces.

## Modeling Implication

Boundary maps let a system move from higher-order relations to the lower-order relations they expose, while preserving orientation signs.

## Reserve Notes

Good bridge from hypergraph/simplicial vocabulary toward chain-complex style calculations.

## 12.hypergraph.degree.group-chat.a

```text
Module: 12
Topic: hypergraph degree versus graph degree
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Inspired by higher-order network sources distinguishing multiway events from pairwise graph shadows.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A group chat has hyperedges:

```text
{Ari, Bea, Cy}
{Ari, Dev}
```

Compute Ari's hypergraph degree if degree means "number of hyperedges containing the person." Then compute Ari's degree after clique-expanding each hyperedge into pairwise edges.

## Answer Check

Ari belongs to two hyperedges:

```text
{Ari, Bea, Cy}
{Ari, Dev}
```

So Ari's hypergraph degree is `2`.

After clique expansion, Ari is connected to:

```text
Bea, Cy, Dev
```

So Ari's pairwise graph degree is `3`.

## Intuition

Hypergraph degree counts events; pairwise graph degree counts neighbors.

## Modeling Implication

Changing representations can change what a simple statistic means, even when it uses the same word "degree."

## Reserve Notes

Good failure-mode reserve for students who expect graph intuitions to transfer unchanged to higher-order data.
