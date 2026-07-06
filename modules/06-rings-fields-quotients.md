# Module 06: Rings, Fields, and Quotients - Algebraic Construction Rules

## Core Question

What rules of arithmetic are actually needed?

## Limitation

Number systems are too specific. We need a language for arithmetic-like behavior across polynomials, matrices, functions, and modular systems.

## New Object

Rings and fields.

- A ring has addition, subtraction, and multiplication.
- A field also has division by nonzero elements.
- A quotient identifies objects according to an equivalence relation compatible with the operations.

## Legal Operations

- Add and multiply abstract elements.
- Factor polynomials.
- Work modulo an ideal.
- Build new systems from old systems.

## Invariants

- Units
- Ideals
- Zero divisors
- Characteristic
- Irreducibility
- Field extensions

## Concrete Example

The complex numbers can be constructed as

```text
R[x] / (x^2 + 1)
```

This means: start with real polynomials, then impose the rule x^2 = -1.

## Hand Exercises

1. In Z/6Z, find two nonzero elements whose product is 0.
2. In Z/5Z, list the multiplicative inverse of each nonzero element.
3. Explain how a quotient can be understood as adding a rule to a system.

## Depends On

Number systems and polynomial algebra.

## Supports Later

Algebraic structures, field extensions, representation theory, algebraic geometry, and category theory.
