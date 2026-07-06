# Module 27: Energy, Constraints, and Optimization

## Lecture Promise

You will understand memory validation as constrained optimization over graph states.

## Prerequisites

- Optimization
- Graphs
- Probability

## Why The Old Object Fails

Validation is not just checking facts. It balances evidence, consistency, cost, and uncertainty.

## Base Case

Define an energy:

```text
E(state) = inconsistency penalty + uncertainty penalty + complexity penalty
```

The system seeks low-energy belief states.

## Formal Object

Optimization chooses states that minimize an objective subject to constraints.

## Failure Mode

The objective may reward the wrong behavior: overconfidence, oversmoothing, or suppressing minority evidence.

## Problem Ladder

1. Write an energy for two contradictory claims.
2. Add a constraint that trusted sources count more.
3. Explain how a local minimum could trap validation.

## Memory-System Connection

Energy functions make validation rules explicit and debuggable.

## Hand Problem Trail

### Problem 27.1: Simple energy minimum

Minimize `E(x) = (x - 3)^2`.

Answer check: derivative `2(x-3)=0`, so `x=3`.

### Problem 27.2: Convexity check

For:

```text
E(x) = (x - 3)^2
```

compute the second derivative and decide whether the critical point is a minimum.

Answer check:

```text
E'(x)=2(x-3)
E''(x)=2 > 0
```

The critical point is a minimum.

### Problem 27.3: Gradient descent step

For `E(x)=(x-3)^2`, start at `x0=0` with step size `eta=0.1`. Compute one gradient descent step.

Answer check:

```text
gradient at 0 = 2(0-3) = -6
x1 = x0 - eta * gradient = 0 - 0.1(-6) = 0.6
```

The update moves toward the minimizer at 3.

### Problem 27.4: Add constraint by substitution

Minimize `x^2 + y^2` subject to `x + y = 1`.

Answer check:

```text
y=1-x
E=x^2+(1-x)^2=2x^2-2x+1
E'=4x-2=0, x=1/2, y=1/2
```

### Problem 27.5: Lagrange multiplier

Solve the same problem with `L=x^2+y^2+lambda(x+y-1)`.

Answer check:

```text
2x+lambda=0
2y+lambda=0
x+y=1
x=y=1/2, lambda=-1
```

### Problem 27.6: Interpret the multiplier

For Problem 27.5, the multiplier is `lambda=-1` under the convention:

```text
L = objective + lambda(constraint)
```

What does the multiplier roughly measure?

Answer check:

```text
It measures sensitivity to the constraint under the chosen sign convention.
Changing the required value in x+y=1 changes the optimal objective at a rate related to the multiplier.
```

Multipliers are shadow prices for constraints.

### Problem 27.7: Inequality constraint by inspection

Minimize:

```text
E(x) = (x - 3)^2
```

subject to:

```text
x <= 2
```

What is the minimizer?

Answer check:

```text
The unconstrained minimizer is x=3, but it violates x<=2.
The best feasible point is x=2.
```

Constraints can move the optimum to a boundary.

### Problem 27.8: KKT complementary slackness intuition

For the constraint `x <= 2`, write it as:

```text
g(x) = x - 2 <= 0
```

At the solution `x=2`, is the constraint active?

Answer check:

```text
g(2)=0, so the constraint is active.
```

Complementary slackness says inactive constraints should have zero multiplier.

### Problem 27.9: Inactive constraint

Minimize:

```text
E(x) = (x - 3)^2
```

subject to:

```text
x <= 5
```

What is the minimizer, and is the constraint active?

Answer check:

```text
The minimizer is x=3.
The constraint is inactive because 3 < 5.
```

The constraint exists but does not shape the optimum.

### Problem 27.10: Penalty method

Instead of enforcing `x=1`, minimize:

```text
E_mu(x) = (x-3)^2 + mu(x-1)^2
```

For `mu=1`, find the minimizer.

Answer check:

```text
E_mu'(x)=2(x-3)+2(x-1)=4x-8
4x-8=0
x=2
```

A penalty trades off the original objective against constraint violation.

### Problem 27.11: Wrong objective failure

A validation system minimizes only:

```text
number of contradictions
```

Name one bad behavior this can reward.

Answer check:

```text
It may delete minority evidence, ignore uncertain claims, or merge incompatible claims just to reduce visible contradiction.
```

An explicit objective is debuggable, but only if it represents the right values.

### Problem 27.12: Memory interpretation

What is the constraint in a validation objective?

Answer check: it is a condition the memory state must satisfy, such as consistency, budget, provenance, or trust threshold.
