# Source Pedagogy

This course should stay close to the teaching pattern in the supplied ML mathematics slide decks.

The old course was effective because it did not merely define objects. It created a reason to need each object, then forced the learner to reason through small examples before moving upward.

## What The Source Lectures Do Well

## 1. They Start With A Human Or Operational Problem

The lecture titles are not generic topic names. They use a motivating frame:

- Self-discovery for Gaussian elimination
- Misunderstanding for projection and error
- Friendship for row, column, and null spaces
- Love for eigendecomposition
- Social media influence for SVD
- Prediction for low-rank approximation
- Decision making for derivatives and optimization
- Constraints for Lagrangians and KKT

The metaphor is not decoration. It gives the learner a reason to care about the formal object.

## 2. They Use Base Cases Before Abstraction

The lectures repeatedly begin with small concrete cases:

- A two-variable ticket problem before Gaussian elimination
- A 2D vector graph before projection
- A diagonal or simple matrix before determinant and inverse
- Small vector spaces before rank, nullity, and SVD
- One-variable derivatives before matrix calculus

The new course should follow this rule:

> No definition appears before a base case has made the limitation visible.

## 3. They Make Operations Visible

The source material often treats math as manipulation:

- Combine truths with row operations.
- Move vectors with matrices.
- Measure error with projection.
- Change perspective with bases.
- Compress data with SVD.
- Optimize by setting derivatives to zero.
- Add constraints with multipliers.

This course should use the same operational style. Every lecture should ask: what can I now legally do?

## 4. They Build Vertical Depth

The source lectures do not stop at intuition. They move from example to derivation:

```text
concrete case -> formula -> properties -> edge cases -> practice
```

For this course, each module should include:

- A base case
- A formal definition
- A worked derivation
- A failure case
- A problem ladder
- A research-level extension

## 5. They Keep Prerequisites Explicit

Each lecture begins by naming what must already be mastered. The new course should keep that, because this is a self-paced path.

## The New Lecture Contract

Each module in this repo should follow this structure:

1. Lecture promise
2. Prerequisites
3. Why the old object fails
4. Base case
5. Formal object
6. Legal operations
7. Worked derivation
8. Failure mode
9. Invariants
10. Problem ladder
11. Memory-system connection
12. Research bridge

The goal is not to be shorter. The goal is to make the learner reason.
