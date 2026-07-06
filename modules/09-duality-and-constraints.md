# Module 09: Duality and Constraints - What Measures What

## Core Question

What does it mean to measure a vector?

## Limitation

Vectors describe directions and states. Constraints, gradients, prices, and measurements often behave like objects that eat vectors and return scalars.

## New Object

The dual space V*: the space of linear functionals from V to the scalar field.

## Legal Operations

- Evaluate a covector on a vector.
- Represent constraints as level sets.
- Interpret gradients as local measurement devices.
- Use adjoints to move maps between spaces.
- Pair primal and dual problems.

## Invariants

- Dimension of V* equals dimension of V in finite dimensions.
- Kernel of a functional
- Annihilator of a subspace
- Dual pairing
- Constraint qualification in optimization contexts

## Concrete Example

The functional f(x, y) = 2x - y measures the vector (x, y) by returning a scalar. The constraint 2x - y = 3 is a line: all vectors with the same measurement.

## Hand Exercises

1. Find the kernel of f(x, y) = 2x - y.
2. Write the line 3x + 4y = 12 as a dual measurement.
3. Explain why a Lagrange multiplier can be interpreted as the price of a constraint.

## Depends On

Vector spaces, matrices, inner products, and basic optimization.

## Supports Later

Lagrangians, KKT conditions, differential forms, adjoints, category theory, and functional analysis.
