# Module 01: Numbers - Extending What One Coordinate Can Say

## Core Question

What can a single coordinate express?

## Limitation

Natural numbers count, but they do not express debt. Integers express debt, but they do not express division. Rationals express ratios, but they do not express all limits. Reals express limits, but they do not solve equations like x^2 + 1 = 0.

## New Object

A chain of scalar systems:

```text
N -> Z -> Q -> R -> C -> H
```

Each step changes the expressive power of one coordinate.

## Legal Operations

- Z makes subtraction closed.
- Q makes division by nonzero numbers closed.
- R supports limits, order, continuity, and geometry.
- C supports algebraic closure for polynomial equations.
- H supports richer rotation-like multiplication, but loses commutativity.

## Invariants

- Closure: do operations stay inside the system?
- Order: can values be compared?
- Completeness: do Cauchy sequences converge?
- Commutativity: does ab = ba?
- Solvability: which equations always have solutions?

## Concrete Example

The equation 2x = 1 has no integer solution, so Q is forced if division is meant to be legal.

The equation x^2 + 1 = 0 has no real solution, so C is forced if every polynomial equation of positive degree should have a root.

## Hand Exercises

1. For each equation, name the smallest familiar number system where it has a solution: x + 5 = 2, 3x = 1, x^2 = 2, x^2 = -1.
2. Explain why complex numbers enrich scalars instead of merely adding another spatial dimension.
3. Give an example where quaternion multiplication is not commutative.

## Depends On

Algebra, equations, and basic function notation.

## Supports Later

Complex geometry, Hermitian operators, algebras, representation theory, and quantum-mechanics-adjacent mathematics.
