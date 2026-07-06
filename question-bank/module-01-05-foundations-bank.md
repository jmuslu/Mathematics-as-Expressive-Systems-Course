# Modules 01-05 Bank: Foundations, Spaces, Maps, Projection, and Measurement

Source posture: original course problems inspired by the local foundation lecture PDFs and public linear algebra sources. These are reserve candidates, not promoted lecture text.

## Source Anchors

- Local lecture PDFs sampled: `1. Vectors and their norms.pdf`, `3. The mathematics of Self-Discovery _ Gaussian Elimination.pdf`, `8. The mathematics of misunderstandings (Projection, error).pdf`, `11. Mathematics of Love (Eigendecomposition).pdf`, `12. How does Social Media Brain Wash Us__ creating orthonormal basis via SVD.pdf`, `15. The Mathematics of Decision Making (Derivative of multivariate functions).pdf`.
- [MIT OCW 18.06SC Linear Algebra Resource Index](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)
- [Projection Matrices and Least Squares](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/least-squares-determinants-and-eigenvalues/projection-matrices-and-least-squares/)
- [Introduction to Applied Linear Algebra](https://vmls-book.stanford.edu/)
- [The Matrix Cookbook](https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf)
- [MIT OCW Matrix Calculus for Machine Learning and Beyond](https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/pages/lecture-notes/)

## 01.norms.friendship.profile.a

```text
Module: 01
Topic: vector norms and normalization
Role: warm-up
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by local vector/norm lecture framing and public applied linear algebra sources.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Two people describe what they want from a friendship using three features:

```text
loyalty, humor, shared routines
```

Let:

```text
a = (3, 4, 0)
b = (6, 8, 0)
c = (3, 0, 4)
```

Compute the L2 norm of each vector. Which two profiles have the same direction after normalization?

## Answer Check

```text
||a||_2 = sqrt(3^2 + 4^2) = 5
||b||_2 = sqrt(6^2 + 8^2) = 10
||c||_2 = sqrt(3^2 + 4^2) = 5

a_hat = (3/5,4/5,0)
b_hat = (6/10,8/10,0) = (3/5,4/5,0)
c_hat = (3/5,0,4/5)
```

`a` and `b` have the same normalized direction.

## Intuition

Magnitude answers "how intense?" Direction answers "what pattern?"

## Modeling Implication

Normalization can preserve preference shape while removing intensity.

## Reserve Notes

Good early human analogy for Module 01 if the current scalar-number framing needs a more familiar entry point.

## 02.span.ticket.combinations.a

```text
Module: 02
Topic: span and linear combinations
Role: computation
Status: promoted in Module 02 Problem 2.6
Source use: original, source-informed
Source note: Inspired by local Gaussian-elimination lecture use of ticket-count word problems.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A club sells adult tickets for 20 dollars and student tickets for 10 dollars. Instead of solving the full story, read it as a vector question.

Let one adult ticket contribute:

```text
a = (1 ticket, 20 dollars)
```

and one student ticket contribute:

```text
s = (1 ticket, 10 dollars)
```

Can the club reach:

```text
t = (8 tickets, 130 dollars)
```

using a nonnegative integer combination of `a` and `s`?

## Answer Check

Solve:

```text
x + y = 8
20x + 10y = 130
```

Subtract `10(x+y)=80` from the second equation:

```text
10x = 50
x = 5
y = 3
```

So:

```text
5a + 3s = (8,130)
```

## Intuition

Span asks whether a target can be built from allowed moves.

## Modeling Implication

A representation system should distinguish "not reachable" from "reachable but with constraints on coefficients."

## Reserve Notes

This is a cleaner bank version of the classic ticket setup, rewritten for the course's vector-object language.

## 03.elimination.self-discovery.a

```text
Module: 03
Topic: Gaussian elimination as constraint revelation
Role: guided derivation
Status: promoted in Module 03 Problem 3.3
Source use: original, source-informed
Source note: Inspired by local self-discovery/Gaussian-elimination lecture framing.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Someone says their weekly energy has two hidden causes:

```text
x = sleep quality
y = social overload
```

Three observations give:

```text
x + y = 7
2x + y = 11
x - y = 1
```

Use elimination to decide whether these observations are mutually consistent.

## Answer Check

Subtract the first equation from the second:

```text
x = 4
```

Then the first equation gives:

```text
y = 3
```

Check the third:

```text
x - y = 4 - 3 = 1
```

All three equations are consistent.

## Intuition

Elimination is not just a mechanical solver. It exposes whether different claims can live in the same state.

## Modeling Implication

A system that stores multiple observations should detect when they define one compatible hidden explanation.

## Reserve Notes

Could be promoted if Module 03 needs a human scenario before kernels/images.

## 03.elimination.inconsistent.story.a

```text
Module: 03
Topic: inconsistent linear systems
Role: counterexample
Status: reserve
Source use: original
Source note: Course-style variant of the consistency check.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Use the same hidden variables:

```text
x = sleep quality
y = social overload
```

Now the observations are:

```text
x + y = 7
2x + 2y = 16
```

Explain the failure without solving for both variables.

## Answer Check

The first equation implies:

```text
2x + 2y = 14
```

but the second equation says:

```text
2x + 2y = 16
```

So no pair `(x,y)` satisfies both.

## Intuition

Inconsistency can appear when two observations ask for the same measurement to have two different values.

## Modeling Implication

Contradiction detection is a structural task, not merely a confidence-ranking task.

## Reserve Notes

Good failure-mode companion to the previous problem.

## 03.fixed-point.projection.a

```text
Module: 03
Topic: fixed points of a projection map
Role: computation
Status: promoted
Source use: original, source-informed
Source note: Inspired by standard linear-map checks for image, kernel, and fixed subspaces.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let:

```text
A = [1 0]
    [0 0]
```

Solve `Ax = x`.

## Answer Check

```text
A(x,y) = (x,0)
(x,0) = (x,y) means y = 0
```

So every vector `(t,0)` is fixed.

## Intuition

The projection keeps the visible coordinate and deletes the invisible coordinate. A state is fixed exactly when it already has nothing in the deleted direction.

## Modeling Implication

Fixed points reveal which states survive an update unchanged.

## Reserve Notes

Promoted into Module 03 to correct and document the projection fixed-point calculation.

## 04.projection.misunderstood.request.a

```text
Module: 04
Topic: projection and residual error
Role: computation
Status: promoted in Module 04 Problem 4.5
Source use: original, source-informed
Source note: Inspired by the local projection/misunderstanding lecture and MIT OCW projection material.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A friend asks for a place that is:

```text
quiet = 3
cheap = 1
```

Your simple recommender only understands the combined direction:

```text
u = (1,1)
```

Project `d=(3,1)` onto `span(u)` and compute the residual.

## Answer Check

```text
proj_u(d) = ((d dot u)/(u dot u))u
          = ((3+1)/(1+1))(1,1)
          = 2(1,1)
          = (2,2)

residual = d - proj_u(d) = (3,1) - (2,2) = (1,-1)
```

Check:

```text
residual dot u = (1,-1) dot (1,1) = 0
```

## Intuition

The best available answer still misses "more quiet, less cheap" because the model only has one blended direction.

## Modeling Implication

Approximation should report residual structure, not only nearest-neighbor score.

## Reserve Notes

This matches the live Module 04 running example and can support variants with non-unit directions.

## 04.least-squares.answer-check.a

```text
Module: 04
Topic: least squares and normal equations
Role: guided derivation
Status: reserve
Source use: original, source-informed
Source note: Inspired by public least-squares projection sources.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Fit the line through the origin `y = ax` to the three data points:

```text
(1,1), (2,2), (3,2)
```

Use the normal equation:

```text
a = (x dot y)/(x dot x)
```

Then compute the residual vector.

## Answer Check

```text
x = (1,2,3)
y = (1,2,2)

x dot y = 1 + 4 + 6 = 11
x dot x = 1 + 4 + 9 = 14
a = 11/14
```

Predicted vector:

```text
a x = (11/14, 22/14, 33/14)
```

Residual:

```text
y - ax = (3/14, 6/14, -5/14)
```

Check orthogonality:

```text
x dot residual = 3/14 + 12/14 - 15/14 = 0
```

## Intuition

Least squares makes the leftover error orthogonal to the space of adjustable predictions.

## Modeling Implication

The answer check is not just the fitted coefficient. The residual orthogonality is the certificate that no available adjustment improves the fit.

## Reserve Notes

Useful as a harder Module 04 problem or bridge toward regression.

## 05.dating.standards.functional.a

```text
Module: 05
Topic: covectors as measurements
Role: conceptual check
Status: promoted
Source use: original
Source note: Course-style dating-standards analogy.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A dating profile is represented by:

```text
v = (kindness, ambition, humor) = (4,2,5)
```

One person's standard is the covector:

```text
f = [2, -1, 1]
```

Compute `f(v)`. Then describe one nonzero change `w` that this standard cannot detect.

## Answer Check

```text
f(v) = 2(4) - 1(2) + 1(5) = 11
```

A change `w=(1,2,0)` is invisible because:

```text
f(w) = 2(1) - 2 + 0 = 0
```

So `v` and `v+w` receive the same score from this measurement.

## Intuition

A covector is a test. Its kernel is the set of changes it ignores.

## Modeling Implication

Every measurement has blind spots; a high score under one test is not full knowledge of the object.

## Reserve Notes

Promoted into Module 05 as the opening covector computation.

## 05.annihilator.group-chat.a

```text
Module: 05
Topic: annihilators and blind spots
Role: slightly harder hand calculation
Status: promoted in Module 05 Problem 5.9
Source use: original
Source note: Course-style measurement analogy.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A group-chat mood vector has coordinates:

```text
serious, playful, chaotic
```

Suppose a moderator only cares about the total balance:

```text
f = [1,1,1]
```

Find two linearly independent mood changes that are invisible to `f`.

## Answer Check

We need:

```text
f(w) = w_1 + w_2 + w_3 = 0
```

Two independent choices are:

```text
w1 = (1,-1,0)
w2 = (1,0,-1)
```

Check:

```text
f(w1)=0
f(w2)=0
```

They are not scalar multiples, so they span a two-dimensional blind spot.

## Intuition

The measurement sees only total mood, not redistribution among coordinates.

## Modeling Implication

A one-dimensional score can erase many distinct changes in the underlying representation.

## Reserve Notes

Useful if Module 05 later expands annihilators beyond one-line examples.

## 01.scalar.system.choice.a

```text
Module: 01
Topic: choosing a scalar system
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Inspired by local vector/norm lecture framing and public applied linear algebra sources.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A friendship-intensity app stores one score `s`.

For each interpretation below, choose a reasonable scalar system:

```text
A. number of times two people studied together
B. signed change in trust after a disagreement
C. normalized compatibility score between 0 and 1
D. phase-coded playlist timing for when the friendship feels most active
```

Possible systems:

```text
natural numbers, integers, real interval [0,1], complex numbers
```

## Answer Check

```text
A -> natural numbers
B -> integers or real numbers
C -> real interval [0,1]
D -> complex numbers
```

The exact choice for B depends on whether changes are discrete or continuous. The important point is that different meanings require different scalar systems.

## Intuition

A scalar is not just a number. It is a number with legal operations and a meaning.

## Modeling Implication

Choosing the wrong scalar system can make ordinary operations impossible, misleading, or too coarse.

## Reserve Notes

Good warm-up for Module 01 before norms or coordinate systems.

## 01.normalization.loses.intensity.a

```text
Module: 01
Topic: normalization and lost magnitude
Role: counterexample
Status: reserve
Source use: original, source-informed
Source note: Inspired by local vector/norm lecture framing and public applied linear algebra sources.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Two friendship profiles are:

```text
a = (1,2)
b = (10,20)
```

Normalize both vectors using the L2 norm. What information survives, and what information is erased?

## Answer Check

```text
||a|| = sqrt(1^2+2^2) = sqrt(5)
||b|| = sqrt(10^2+20^2) = sqrt(500) = 10sqrt(5)

a_hat = (1/sqrt(5), 2/sqrt(5))
b_hat = (10/(10sqrt(5)), 20/(10sqrt(5)))
      = (1/sqrt(5), 2/sqrt(5))
```

The normalized vectors are equal.

## Intuition

Normalization preserves direction but erases intensity.

## Modeling Implication

If intensity matters, normalized similarity alone is not enough.

## Reserve Notes

Useful companion to `01.norms.friendship.profile.a`.

## 02.basis.coordinates.friendship.a

```text
Module: 02
Topic: basis coordinates
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Inspired by local vector-space and Gaussian-elimination lecture framing.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A friendship profile is expressed using two basis directions:

```text
r = (1,0)  reliable routines
s = (1,1)  shared spontaneity
```

Write:

```text
v = (5,2)
```

as:

```text
v = ar + bs
```

## Answer Check

```text
ar + bs = a(1,0) + b(1,1) = (a+b,b)
```

Set:

```text
a+b = 5
b = 2
```

So:

```text
b=2
a=3
v = 3r + 2s
```

## Intuition

Coordinates depend on the basis directions used to describe the profile.

## Modeling Implication

A representation should state its basis or feature grammar; otherwise the same vector may be misread.

## Reserve Notes

Good bridge from span to coordinate systems.

## 02.rank.redundant.traits.a

```text
Module: 02
Topic: rank and redundant features
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Inspired by local span/rank lecture framing.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A profile model uses three feature directions:

```text
u = (1,0)
v = (0,1)
w = (2,2)
```

Is `w` adding a new dimension to the span of `u` and `v`?

## Answer Check

```text
w = 2u + 2v
```

So `w` is already in `span(u,v)` and does not add a new dimension.

## Intuition

More features do not automatically mean more expressive directions.

## Modeling Implication

Rank detects whether a representation has genuinely new directions or redundant labels.

## Reserve Notes

Useful before rank-nullity or feature compression.

## 03.kernel.lost-distinction.a

```text
Module: 03
Topic: kernel and lost information
Role: counterexample
Status: reserve
Source use: original, source-informed
Source note: Inspired by local Gaussian-elimination and linear-map lectures.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A perspective update sends:

```text
A = [1 1]
    [0 0]
```

so:

```text
A(x,y) = (x+y,0)
```

Find one nonzero vector in the kernel. What distinction does the update erase?

## Answer Check

Solve:

```text
x+y=0
0=0
```

One nonzero solution is:

```text
(1,-1)
```

Check:

```text
A(1,-1) = (0,0)
```

## Intuition

The map keeps only the total `x+y` and erases the contrast between the two coordinates.

## Modeling Implication

A nontrivial kernel is a precise warning that different states collapse to the same output.

## Reserve Notes

Good failure-mode problem for Module 03.

## 04.projection.wrong-subspace.a

```text
Module: 04
Topic: projection residual
Role: modeling interpretation
Status: reserve
Source use: original, source-informed
Source note: Inspired by local projection/misunderstanding lecture and public projection references.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A friend asks for a restaurant that is:

```text
quiet, cheap = (4,1)
```

The recommendation model can only represent the direction:

```text
u = (1,1)
```

Project the request onto `span(u)` and compute the residual.

## Answer Check

```text
c = ((4,1) dot (1,1))/((1,1) dot (1,1))
  = 5/2

projection = (5/2)(1,1) = (2.5,2.5)
residual = (4,1) - (2.5,2.5) = (1.5,-1.5)
```

Check:

```text
residual dot u = 1.5 - 1.5 = 0
```

## Intuition

The model can answer along the quiet-and-cheap-together direction, but it misses the asymmetry of "very quiet, only mildly cheap."

## Modeling Implication

Projection can be optimal inside a bad subspace while still misunderstanding the request.

## Reserve Notes

Useful variant of the existing misunderstanding example.

## 04.normal-equation.two-feature.a

```text
Module: 04
Topic: least squares normal equations
Role: derivation
Status: reserve
Source use: original, source-informed
Source note: Inspired by public projection and least-squares references.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A tiny model predicts a request vector using one feature direction:

```text
u = (1,2)
y = (4,1)
```

Find the best scalar `c` minimizing:

```text
||y - cu||^2
```

using the normal equation:

```text
u^T u c = u^T y
```

## Answer Check

```text
u^T u = 1^2 + 2^2 = 5
u^T y = 1(4) + 2(1) = 6

5c = 6
c = 6/5
```

So:

```text
cu = (6/5, 12/5)
```

## Intuition

The normal equation makes the residual orthogonal to the feature direction.

## Modeling Implication

Least squares is projection onto the model's expressible directions.

## Reserve Notes

Good for adding more derivation depth to Module 04 if needed.

## 05.two-tests.same-profile.a

```text
Module: 05
Topic: multiple covector measurements
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Inspired by local duality and measurement framing.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A dating profile is:

```text
v = (kindness, humor, availability) = (3,4,2)
```

Two standards are:

```text
f = [1,1,0]
g = [2,-1,3]
```

Compute `f(v)` and `g(v)`. What do the two tests see differently?

## Answer Check

```text
f(v)=3+4=7
g(v)=2(3)-4+3(2)=6-4+6=8
```

`f` ignores availability. `g` rewards kindness and availability but penalizes humor under this particular standard.

## Intuition

The same vector can score differently under different covectors because the questions are different.

## Modeling Implication

Changing the measurement changes the claim being made about the object.

## Reserve Notes

Good warm-up before kernels and annihilators.

## 05.constraint.as.covector.a

```text
Module: 05
Topic: constraints as covectors
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Inspired by local decision-making and duality lecture framing.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A dinner plan vector is:

```text
v = (cost, travel_time, spice_level)
```

A hard budget-and-travel test is:

```text
phi = [1,2,0]
```

The rule says:

```text
phi(v) <= 20
```

For:

```text
v = (12,3,5)
w = (8,7,1)
```

which plan passes the test?

## Answer Check

```text
phi(v)=12+2(3)+0(5)=18
phi(w)=8+2(7)+0(1)=22
```

So `v` passes and `w` fails.

## Intuition

A linear constraint is a covector plus a threshold.

## Modeling Implication

Duality turns scoring and feasibility tests into explicit mathematical objects.

## Reserve Notes

Good bridge from duality to constrained optimization.

## 01.log-odds.friendship-update.a

```text
Module: 01
Topic: log-odds as scalar coordinate
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Inspired by local scalar/vector lecture framing and public applied linear algebra sources.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A friendship-trust model stores probability `p`, but updates are easier in log-odds:

```text
logit(p) = log(p/(1-p))
```

Compute the odds and log-odds for:

```text
p = 0.8
```

Then add evidence worth `log(2)` in log-odds coordinates. What are the new odds and new probability?

## Answer Check

Initial odds:

```text
p/(1-p) = 0.8/0.2 = 4
```

Initial log-odds:

```text
log(4)
```

Adding `log(2)` gives:

```text
log(4) + log(2) = log(8)
```

So the new odds are `8`, and:

```text
p_new = 8/(1+8) = 8/9
```

## Intuition

Multiplying odds becomes adding log-odds.

## Modeling Implication

A coordinate system can make the legal update rule simpler without changing the underlying claim.

## Reserve Notes

Good reserve problem for Module 01's coordinate-change theme.

## 02.nullspace.invisible-profile-change.a

```text
Module: 02
Topic: nullspace and invisible changes
Role: counterexample
Status: reserve
Source use: original, source-informed
Source note: Inspired by local friendship/null-space and span/rank lecture framing.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A friendship-profile dashboard reports only two totals from three traits:

```text
care, humor, reliability
```

The reporting map is:

```text
A = [1 1 0]
    [0 1 1]
```

Find one nonzero change `w` such that:

```text
Aw = 0
```

## Answer Check

Let:

```text
w = (a,b,c)
```

The equations are:

```text
a + b = 0
b + c = 0
```

Choose `b=1`. Then:

```text
a=-1
c=-1
```

So:

```text
w=(-1,1,-1)
```

Check:

```text
Aw = [0,0]
```

## Intuition

The dashboard cannot see this redistribution of profile traits.

## Modeling Implication

The nullspace tells you which changes your representation erases.

## Reserve Notes

Good bridge from vector spaces to kernels in Module 03.
