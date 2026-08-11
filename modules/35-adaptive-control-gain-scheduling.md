# Module 35: Adaptive Control, Gain Scheduling, and Selective Plasticity

## Lecture Promise

You will understand a gain that changes with context, and why a schedule built from individually safe settings can still destroy the loop.

## Prerequisites

- Feedback, gain, and stability
- Controllability and observability
- Dynamical systems on graphs

## Why The Old Object Fails

Module 33 chose one gain and kept it. That single number has to serve two conflicting jobs: react fast enough to track real change, and react slowly enough to ignore noise. One constant cannot do both, so a fixed gain is always a compromise struck at a single operating point.

The obvious repair is to let the gain depend on context. That repair introduces a problem with no counterpart in the fixed-gain case: the system is now a different system at different times, and stability of each version separately does not imply stability of the whole.

## Base Case

Replace the constant `k` with a gain that varies in time:

```text
x_{t+1} = (a - b k_t) x_t + b k_t r
```

If `k_t` is chosen from a small table indexed by an observable context, this is gain scheduling. If `k_t` is updated from the system's own recent behavior, this is adaptive control.

## Running Example: Selective Plasticity in Shared Notes

Imagine a shared notes page a study group keeps across a semester.

Some sections should change fast. The reading list for next week is meant to be overwritten whenever the schedule moves, so a correction should take effect almost immediately.

Other sections should change slowly. The summary of what the course is actually about should not swing every time one person has a confusing week.

A single update rate for the whole page is wrong in both directions at once: fast enough for the summary is far too slow for the reading list, and fast enough for the reading list turns the summary into a record of the most recent mood. Selective plasticity is the decision to run different gains in different contexts, and it is a control design, not a preference.

## Formal Object

A scheduled loop is a family of closed loops indexed by a scheduling variable `p`:

```text
c(p) = a - b k(p)
```

together with a rule assigning `p` at each step. Two separate conditions matter:

```text
frozen condition:   |c(p)| < 1 for every p in the schedule
switched condition: the loop is stable when p actually changes over time
```

The frozen condition is a family of one-step checks. The switched condition is a statement about products of the resulting factors, and it is strictly stronger.

## Legal Operations

The legal moves are scheduling moves:

- evaluate the closed-loop factor at each frozen operating point
- take the product of the step matrices along an actual switching sequence
- test the product's spectral radius rather than each factor's
- look for one quantity that decreases under every mode in the schedule
- bound the schedule inside the stable gain range
- limit how fast the gain itself is allowed to move

Freezing the schedule and checking each setting is a necessary test, never a sufficient one.

## Worked Derivation

Take the plant from Module 33, with `a = 1.2` and `b = 1`, and a two-entry schedule:

```text
quiet context:    k = 0.3, c = 1.2 - 0.3 = 0.9
volatile context: k = 1.5, c = 1.2 - 1.5 = -0.3
```

Both satisfy the frozen condition, since `|0.9| < 1` and `|-0.3| < 1`. In the scalar case that is enough, because the product of numbers smaller than one in magnitude is smaller than one.

The scalar case is misleading. Move to two coordinates, where the two contexts also route information differently:

```text
A1 = [0.5  2  ]     A2 = [0.5  0  ]
     [0    0.5]          [2    0.5]
```

Each is triangular with both diagonal entries `0.5`, so each has spectral radius `0.5`. Both are comfortably stable on their own.

Now alternate them. One full cycle applies `A1` then `A2`:

```text
A2 A1 = [0.5(0.5)+0(0)      0.5(2)+0(0.5)  ]
        [2(0.5)+0.5(0)      2(2)+0.5(0.5)  ]

      = [0.25  1   ]
        [1     4.25]
```

The trace is `4.5` and the determinant is `0.0625`. For a two-by-two matrix the trace is the sum of the eigenvalues, so if both eigenvalues had magnitude below one the trace could not exceed `2`. A trace of `4.5` therefore forces an eigenvalue larger than one, and the alternating schedule diverges.

Two stable modes, switched between, produce an unstable system. Nothing was wrong with either setting.

## Invariants

- Each frozen closed loop keeps its own spectrum while the context is held
- The stable gain range from Module 33 still bounds every admissible schedule entry
- If one quantity decreases under every mode, the switched loop is stable regardless of switching order

The last item is the useful positive result. A quantity that shrinks under all modes at once is a common certificate, and it converts a hard question about every possible schedule into a single check.

## Failure Mode

Adaptation fails in three ways:

- switching between individually stable modes, as in the worked derivation
- a gain driven by noise, which raises plasticity when nothing real has changed
- a schedule indexed by a variable the loop itself controls, which closes a second feedback loop nobody designed

The third is the subtlest. If the system raises its own learning rate whenever it is uncertain, and its own updates raise its uncertainty, the scheduler and the plant form a loop with its own stability question.

## Problem Ladder

1. Evaluate the closed-loop factor at each entry of a schedule.
2. Multiply two stable step matrices and test the product.
3. Explain why a frozen-point check is not sufficient.

## Representation Design Connection

Selective plasticity is usually described as a policy: some things should update fast, some slow. Stated as a schedule with a gain range, a switching rule, and a common certificate, it becomes something a designer can be wrong about in a checkable way.

## Hand Problem Trail

### Problem 35.1: Frozen check, quiet context

With `a = 1.2`, `b = 1`, and `k = 0.3`, compute the closed-loop factor and classify it.

Answer check:

```text
c = 1.2 - 0.3 = 0.9
|0.9| < 1, stable
```

Slow correction, but the drift is still overcome.

### Problem 35.2: Frozen check, volatile context

Repeat with `k = 1.5`.

Answer check:

```text
c = 1.2 - 1.5 = -0.3
|-0.3| < 1, stable
```

Stable and faster, but the negative factor means the error alternates in sign as it shrinks.

### Problem 35.3: One scheduled step

The schedule sets `k = 0.3` in a quiet week and `k = 1.5` in a volatile week. With `r = 5` and `x_t = 9`, compute the next value in each context.

Answer check:

```text
quiet:    x = 0.9(9) + (1)(0.3)(5) = 8.1 + 1.5 = 9.6
volatile: x = -0.3(9) + (1)(1.5)(5) = -2.7 + 7.5 = 4.8
```

The same state produces very different next steps. The schedule is doing real work.

### Problem 35.4: Product of two stable matrices

For the `A1` and `A2` of the worked derivation, compute the product `A2 A1`.

Answer check:

```text
A2 A1 = [0.25  1   ]
        [1     4.25]
```

Each factor has spectral radius `0.5`. The product does not.

### Problem 35.5: Trace argument

Using the product from Problem 35.4, decide whether the alternating schedule is stable without computing eigenvalues exactly.

Answer check:

```text
trace = 0.25 + 4.25 = 4.5
sum of the two eigenvalues = 4.5
if both had magnitude below 1 the sum could not exceed 2
so at least one eigenvalue exceeds 1: unstable
```

The trace alone settles it. Two stable modes switched in alternation produce divergence.

### Problem 35.6: Watch it diverge

Starting from `x_0 = (1, 0)`, apply `A1` then `A2`, then `A1` then `A2` again.

Answer check:

```text
A1 x_0 = (0.5, 0)
A2 (0.5, 0) = (0.25, 1)
A1 (0.25, 1) = (2.125, 0.5)
A2 (2.125, 0.5) = (1.0625, 4.5)
```

The state grows steadily even though every single step was a stable map.

### Problem 35.7: A candidate certificate fails

Test whether the squared length `V(x) = x_1^2 + x_2^2` decreases under `A1` alone, using `x = (0, 1)`.

Answer check:

```text
A1 (0,1) = (2, 0.5)
V before = 0 + 1 = 1
V after  = 4 + 0.25 = 4.25
```

It increases. A stable matrix need not shrink the ordinary squared length at every step, so this `V` is not a certificate for `A1`, let alone a common one for the schedule.

### Problem 35.8: A gain that chases noise

The schedule sets `k_t = 0.3 + 0.5 * d_t`, where `d_t` is the size of the last observed change. The true state is constant at `4`, but the measurement alternates between `4.4` and `3.6`. Compute `d_t` and `k_t`.

Answer check:

```text
d_t = |4.4 - 3.6| = 0.8
k_t = 0.3 + 0.5(0.8) = 0.7
```

The gain more than doubles although the underlying state never moved. Adaptation driven by raw measurement change cannot distinguish a real shift from noise.

### Problem 35.9: Bounding the schedule

Every entry of the schedule must keep its frozen loop stable for `a = 1.2` and `b = 1`. Give the admissible range, and decide whether an entry of `k = 2.4` is allowed.

Answer check:

```text
|1.2 - k| < 1 gives 0.2 < k < 2.2
k = 2.4 gives c = -1.2, magnitude above 1
not allowed
```

This is the Module 33 range reused as a constraint on the whole table.

### Problem 35.10: Rate limiting the gain

The gain may move by at most `0.2` per step. How many steps are needed to go from `k = 0.3` to `k = 1.5`?

Answer check:

```text
1.5 - 0.3 = 1.2
1.2 / 0.2 = 6 steps
```

Rate limiting is a second design choice on top of the table. It restricts which switching sequences can occur at all, which is one practical way to rule out the alternation in Problem 35.6.

### Problem 35.11: Assigning plasticity

For the shared notes page, decide which sections should get a high gain and which a low gain, and justify each with a property of the underlying quantity.

Answer check:

```text
high gain: next week's reading list, because the true value
           changes often and a stale value is immediately wrong

low gain:  the course summary, because the true value changes
           rarely and most observed variation is noise
```

The right gain follows from how fast the underlying quantity actually moves relative to the noise, not from how important the section feels.

### Problem 35.12: Failure mode - the scheduler inside the loop

A system raises its learning rate whenever its recent updates have been large. Explain what feedback loop this creates and what must be checked.

Answer check:

```text
large updates -> higher gain -> larger updates
This is positive feedback from the plant into the scheduler.
The scheduler and plant must be analyzed as one combined system,
and its stability checked, not each piece separately.
```

Scheduling on a variable the loop controls is not scheduling. It is an extra feedback path, and it needs the same treatment as any other loop in Module 33.
