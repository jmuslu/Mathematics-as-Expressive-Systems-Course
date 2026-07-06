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
Status: reserve
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
