# Module 32: Feedback, Gain, and Study-Group Workload

## Lecture Promise

You will understand how to steer a dynamical system toward a target by choosing a feedback gain, and how to tell in advance whether that gain stabilizes or destroys the loop.

## Prerequisites

- Spectral theory
- Dynamical systems on graphs
- Transforms and operator spectra

## Why The Old Object Fails

Module 28 gave the update rule `x_{t+1} = F(x_t)` and asked whether it converges. That is analysis: the rule is handed to you and you report its fate.

Design is the opposite direction. You want the system to end up somewhere specific, and you get to choose part of the rule. A model with no input has nothing to choose. The old object can tell you a playlist collapses into a stale mood; it cannot tell you what to change so it does not.

## Base Case

Split the update into a part you inherit and a part you choose:

```text
x_{t+1} = a x_t + b u_t
```

Here `u_t` is the control input. Setting `u_t = 0` recovers Module 28. Feedback means choosing `u_t` by looking at the current state:

```text
u_t = -k (x_t - r)
```

where `r` is the target and `k` is the gain. Substituting gives the closed loop:

```text
x_{t+1} = (a - bk) x_t + bkr
```

The whole design problem is now visible in one number: `a - bk`.

## Running Example: Study-Group Workload

Imagine a study group that meets weekly and keeps assigning itself work.

Left alone, the workload grows: last week's unfinished reading rolls into this week, plus whatever is newly assigned. That is `a > 1`, the open-loop drift.

Each week the group can also adjust: if the pile is bigger than what they think is sustainable, they cut back; if it is smaller, they take on more. That adjustment is `u_t`, and how strongly they react is the gain `k`.

A group with `k` too small never corrects and drowns. A group with `k` too large overcorrects every week, swinging between panic and idleness. Somewhere in between is a gain that settles.

## Formal Object

A linear feedback loop is:

```text
plant:      x_{t+1} = a x_t + b u_t
controller: u_t = -k (x_t - r)
closed loop: x_{t+1} = (a - bk) x_t + bkr
```

The closed-loop factor `c = a - bk` decides stability. In the vector case `x_{t+1} = (A - BK)x_t + BKr`, and the test is the spectral radius of `A - BK` from Module 09.

## Legal Operations

The legal moves are loop-shaping moves:

- form the closed-loop factor or matrix by substituting the control law
- test stability with `|c| < 1`, or spectral radius less than one
- solve for the range of gains that keeps the loop stable
- compute the closed-loop fixed point and the steady-state error
- exhibit a decreasing quantity to certify convergence
- add an integral term when a constant offset must be removed

You may not change `a` or `b`. Those describe the system you were given. Feedback design is the discipline of only touching what you actually control.

## Worked Derivation

Take `a = 1.2`, `b = 1`, and target `r = 5`. Open loop is unstable, since `1.2 > 1`.

The closed-loop factor is:

```text
c = a - bk = 1.2 - k
```

Stability requires `|1.2 - k| < 1`, which gives:

```text
-1 < 1.2 - k < 1
0.2 < k < 2.2
```

Now choose `k = 1`, so `c = 0.2`. The fixed point satisfies:

```text
x* = 0.2 x* + (1)(1)(5)
0.8 x* = 5
x* = 6.25
```

The loop is stable and settles, but it settles at `6.25` rather than at the target `5`. The steady-state error is:

```text
6.25 - 5 = 1.25
```

This offset is not a mistake in the arithmetic. Proportional feedback needs a nonzero error to generate any control action at all, so whenever the plant drifts on its own it must hold a permanent error to keep pushing back. Raising `k` shrinks the offset but moves `c` toward the unstable edge. Removing the offset entirely requires a different control law, not a bigger number.

## Invariants

- The plant parameters `a` and `b` are fixed by the system, not by the designer
- The target `r` is held constant while the loop is analyzed
- The closed-loop spectrum, not the open-loop spectrum, decides stability
- Stability is preserved under a change of basis, since spectral radius is

## Failure Mode

Loops fail in recognizable ways:

- gain too low: the correction never overcomes the drift
- gain too high: `c` passes `-1` and the loop oscillates with growing amplitude
- wrong sign: positive feedback accelerates the drift instead of opposing it
- proportional-only control on a drifting plant: a permanent offset that no amount of tuning removes

The Module 28 popularity loop is the wrong-sign failure with the target left out entirely. Reinforcement with no reference is a feedback loop whose only setting is "more."

## Problem Ladder

1. Compute the closed-loop factor for a given gain.
2. Find the range of gains that keeps a loop stable.
3. Explain why proportional feedback leaves a steady-state offset.

## Representation Design Connection

Every decay-and-reinforcement rule in this course is a loop with the gain chosen implicitly. Making the gain explicit turns "we tuned the update until it looked right" into a claim that can be checked before running anything: here is the closed-loop factor, here is the stable range, here is where the loop settles.

## Hand Problem Trail

### Problem 32.1: The open loop drifts

With no control, `x_{t+1} = 1.2 x_t` and `x_0 = 2`. Compute `x_3` and state whether the loop is stable.

Answer check:

```text
x_1 = 2.4
x_2 = 2.88
x_3 = 3.456
```

Since `1.2 > 1`, the workload grows without bound. This is the plant before any feedback is added.

### Problem 32.2: Close the loop

With `a = 1.2`, `b = 1`, and `k = 0.5`, compute the closed-loop factor and classify it.

Answer check:

```text
c = 1.2 - 0.5 = 0.7
|0.7| < 1, stable
```

A single subtraction converts an unstable plant into a stable loop.

### Problem 32.3: Stable gain range

For `a = 1.2` and `b = 1`, find every gain `k` that stabilizes the loop.

Answer check:

```text
|1.2 - k| < 1
-1 < 1.2 - k < 1
0.2 < k < 2.2
```

Both bounds matter. Too little reaction and too much reaction both fail.

### Problem 32.4: Where the loop settles

With `k = 1` and `r = 5`, find the closed-loop fixed point and the steady-state error.

Answer check:

```text
x* = 0.2 x* + 5
0.8 x* = 5
x* = 6.25
error = 6.25 - 5 = 1.25
```

The loop is stable but does not reach the target.

### Problem 32.5: More gain, less offset

Repeat Problem 32.4 with `k = 2`. Report the fixed point, the error, and the closed-loop factor.

Answer check:

```text
c = 1.2 - 2 = -0.8
x* = -0.8 x* + (1)(2)(5)
1.8 x* = 10
x* = 5.5556
error = 0.5556
```

The offset shrank, but `c` is now negative, so the approach alternates above and below the target instead of arriving from one side.

### Problem 32.6: Too much gain

Repeat with `k = 2.5`, starting from an error of `1`. Compute three steps of the error and classify.

Answer check:

```text
c = 1.2 - 2.5 = -1.3
e_1 = -1.3
e_2 = 1.69
e_3 = -2.197
```

The error flips sign every week and grows. Overcorrection is a distinct failure from undercorrection, and it looks like instability plus oscillation.

### Problem 32.7: Wrong sign

Use `u_t = +k(x_t - r)` with `k = 0.5` instead of the negative sign. Compute the closed-loop factor.

Answer check:

```text
c = 1.2 + 0.5 = 1.7
```

The loop is worse than doing nothing. Positive feedback adds to the drift, which is why the sign convention is part of the definition rather than a detail.

### Problem 32.8: A decreasing quantity certifies convergence

Let `V(x) = (x - x*)^2`. Show how `V` changes in one step of the closed loop, and state the condition for it to decrease.

Answer check:

```text
x_{t+1} - x* = c (x_t - x*)
V(x_{t+1}) = c^2 V(x_t)
decreases whenever c^2 < 1, that is |c| < 1
```

The squared distance to the fixed point shrinks by a fixed ratio each step. Exhibiting such a quantity is a proof of convergence, not an observation about a simulation.

### Problem 32.9: When the offset disappears

Suppose the plant does not drift, so `a = 1`, with `b = 1` and gain `k`. Find the fixed point.

Answer check:

```text
c = 1 - k
x* = (1-k)x* + kr
k x* = k r
x* = r
```

With `a = 1` the offset vanishes for every valid gain. The offset in Problem 32.4 came from the drift, not from proportional control being wrong in general.

### Problem 32.10: Three weeks of the loop

Using `a = 1.2`, `b = 1`, `k = 1`, `r = 5`, and `x_0 = 0`, compute `x_1`, `x_2`, and `x_3`.

Answer check:

```text
x_1 = 0.2(0) + 5 = 5
x_2 = 0.2(5) + 5 = 6
x_3 = 0.2(6) + 5 = 6.2
```

The values climb toward the fixed point `6.25` found in Problem 32.4.

### Problem 32.11: Naming the parts

For the study group, identify what `a`, `b`, `k`, and `r` each represent.

Answer check:

```text
a: how much of last week's workload rolls into this week
b: how much a decision to adjust actually changes next week's load
k: how strongly the group reacts to the gap
r: the workload level the group is aiming for
```

Naming these separately is what makes the design checkable. A single "we adjust as needed" collapses four different commitments into one word.

### Problem 32.12: Failure mode - reinforcement with no target

The popularity loop `x_{t+1} = 1.2 x_t` from Problem 28.8 is a feedback loop with a missing piece. Name the missing piece and the minimum change that stabilizes it.

Answer check:

```text
missing: a reference r and a negative feedback term
fix: x_{t+1} = 1.2 x_t - k(x_t - r) with 0.2 < k < 2.2
```

A rule that only knows how to increase has no way to express "enough." Adding a target converts an amplifier into a regulator.
