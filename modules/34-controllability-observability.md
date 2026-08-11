# Module 34: Controllability, Observability, and the Outside Judge

## Lecture Promise

You will understand two separate questions that stability cannot answer: whether your inputs can reach the state you want, and whether your measurements can tell you which state you are in.

## Prerequisites

- Spectral theory
- Feedback, gain, and stability
- Graphs and incidence

## Why The Old Object Fails

Module 33 chose a gain and checked that the closed loop settles. That check silently assumed two things.

It assumed the control input could actually move every part of the state. It also assumed the state used in the control law was known. Both assumptions fail routinely, and when they fail, a loop can look perfectly healthy from the outside while a hidden part of it runs away.

Stability is a statement about a matrix. Reachability and visibility are statements about how that matrix connects to the input and the output, and they need their own tests.

## Base Case

Write the system with an input and an output kept separate:

```text
x_{t+1} = A x_t + B u_t
y_t     = C x_t
```

`B` says where you can push. `C` says what you can see. Neither is determined by `A`.

## Running Example: The Outside Judge

Imagine a debate evidence board that tracks two things: a long-lived claim about a source's credibility, and a fast-moving claim about a specific recent quote.

The team can only edit one of them directly, because the credibility judgment is inherited from earlier rounds and nobody rewrites it. That is `B`.

An outside judge never sees the board. The judge sees only the team's final argument score, which mixes both claims into one number. That is `C`.

Two questions follow immediately, and they are different questions. Can the team's edits eventually move the credibility claim at all? And can the judge, watching only the score over time, work out what the board actually believes? Neither is answered by knowing that the board's scores converge.

## Formal Object

For an `n`-dimensional state, the controllability matrix is:

```text
[ B  AB  A^2 B  ...  A^{n-1} B ]
```

and the observability matrix is:

```text
[ C ; CA ; CA^2 ; ... ; CA^{n-1} ]
```

The system is controllable when the first has rank `n`, and observable when the second has rank `n`. For `n = 2` both are square, so a nonzero determinant is the whole test.

## Legal Operations

The legal moves are rank moves:

- build the controllability or observability matrix column by column or row by row
- compute its rank, or its determinant in the square case
- identify the unreachable or invisible directions from the nullspace
- add an input channel to `B`, or a sensor row to `C`, and recheck
- convert an observability question into a controllability question by transposing

The rank is a property of the pair, not of `A` alone. Changing what you can push, or what you can see, changes the answer without changing the dynamics at all.

## Worked Derivation

Take the outside-judge board with a persistent claim and a fading claim:

```text
A = [1  0 ]     B = [1]     C = [1  1]
    [0 0.5]         [0]
```

Controllability first. Compute `AB`:

```text
AB = [1(1) + 0(0)]   = [1]
     [0(1) + 0.5(0)]   [0]
```

so the controllability matrix is:

```text
[B  AB] = [1  1]
          [0  0]
```

Its second row is zero, so the rank is `1`, not `2`. The second coordinate is unreachable: no sequence of edits ever changes the fading claim.

Observability next. Compute `CA`:

```text
CA = [1(1)+1(0)   1(0)+1(0.5)] = [1  0.5]
```

so the observability matrix is:

```text
[C ; CA] = [1  1  ]
           [1  0.5]

det = (1)(0.5) - (1)(1) = -0.5
```

The determinant is nonzero, so the rank is `2` and the system is observable. The judge, watching the score across two rounds, can reconstruct both claims exactly.

This system is therefore observable but not controllable. The two properties are independent, and a design can have either one without the other.

## Invariants

- Controllability and observability rank are unchanged by a change of basis
- Relabeling the nodes of a board permutes `A`, `B`, and `C` together and preserves both ranks
- Observability of `(A, C)` is exactly controllability of `(A^T, C^T)`

That last statement is the duality of this module: the two tests are one test applied to a system and its transpose.

## Failure Mode

The dangerous case is an unobservable mode that is also unstable.

If a growing internal state contributes nothing to the output, every measurement looks calm while the state diverges. Nothing in the observed record contains the evidence, so no amount of monitoring the outputs will catch it. This is the precise form of the worry that a system can confidently reinforce a belief that never surfaces in anything it reports.

The other failure is quieter: an uncontrollable unstable mode cannot be fixed by any gain, so tuning the controller is wasted effort. Module 33's stable gain range only exists for the part of the state that `B` can reach.

## Problem Ladder

1. Build a controllability matrix and take its rank.
2. Build an observability matrix and take its determinant.
3. Explain why a stable-looking output can hide a diverging state.

## Representation Design Connection

An external validator is useful only if the system is observable through what the validator can actually see. Choosing which quantities a system exposes is choosing `C`, and that choice decides in advance whether outside checking is even possible. Adding a sensor row is a design act with a testable consequence.

## Hand Problem Trail

### Problem 34.1: Controllability of the board

For `A = [[1,0],[0,0.5]]` and `B = (1,0)`, build the controllability matrix and give its rank.

Answer check:

```text
AB = (1, 0)
[B  AB] = [1  1]
          [0  0]
rank = 1
```

Not controllable. The second coordinate is untouched no matter how long the input runs.

### Problem 34.2: A second input channel

Change to `B = (1,1)` and repeat.

Answer check:

```text
AB = (1, 0.5)
[B  AB] = [1  1  ]
          [1  0.5]
det = 0.5 - 1 = -0.5
rank = 2
```

Controllable. The dynamics did not change; only where you can push changed.

### Problem 34.3: Observability with one reading

For the same `A`, take `C = (1, 0)`. Build the observability matrix and give its rank.

Answer check:

```text
CA = (1, 0)
[C ; CA] = [1  0]
           [1  0]
rank = 1
```

Not observable. The second coordinate never reaches the output.

### Problem 34.4: Observability with a mixed reading

Repeat with `C = (1, 1)`.

Answer check:

```text
CA = (1, 0.5)
[C ; CA] = [1  1  ]
           [1  0.5]
det = -0.5
rank = 2
```

Observable. A single number per round is enough, provided it mixes the two claims with different weights across time.

### Problem 34.5: Two states, one reading

With `C = (1, 0)`, find two different states that produce the same output.

Answer check:

```text
x  = (0, 1)   gives y = 0
x' = (0, 7)   gives y = 0
```

Any two states differing only in the second coordinate are indistinguishable. The unobservable direction is the nullspace of the observability matrix, here spanned by `(0,1)`.

### Problem 34.6: Silent divergence

Take `A = [[0.5,0],[0,1.5]]`, `C = (1,0)`, and `x_0 = (1,1)`. Compute `y_0`, `y_1`, `y_2`, and the full state `x_2`.

Answer check:

```text
x_1 = (0.5, 1.5)
x_2 = (0.25, 2.25)
y_0 = 1
y_1 = 0.5
y_2 = 0.25
```

The output decays toward zero and looks entirely healthy. The second coordinate has grown from `1` to `2.25` and will keep growing. This is the failure mode in three lines of arithmetic.

### Problem 34.7: Duality

For `A = [[1,2],[0,0.5]]` and `C = (1,0)`, build the observability matrix. Then build the controllability matrix of `(A^T, C^T)` and compare.

Answer check:

```text
CA = (1, 2)
observability  = [1  0]
                 [1  2]

A^T = [1  0]      C^T = (1,0)
      [2 0.5]
A^T C^T = (1, 2)
controllability = [1  1]
                  [0  2]
```

The two matrices are transposes of each other, so their ranks always agree. One theorem covers both tests.

### Problem 34.8: Rank survives relabeling

Swapping the two claims on the board replaces `A` by `PAP^T`, `B` by `PB`, and `C` by `CP^T`, where `P` is a permutation. Does the controllability rank change?

Answer check:

```text
[PB  PAP^T PB] = P [B  AB]
rank(P M) = rank(M) since P is invertible
```

No. The rank is a property of the system, not of the order the claims happen to be written in. This is the Module 14 relabeling invariance applied to a control pair.

### Problem 34.9: Adding a sensor

For the diverging system of Problem 34.6, choose a `C` that makes it observable, and verify.

Answer check:

```text
C = (0, 1)
CA = (0, 1.5)
[C ; CA] = [0  1  ]
           [0  1.5]
rank = 1, still not observable

C = (1, 1)
CA = (0.5, 1.5)
[C ; CA] = [1    1  ]
           [0.5  1.5]
det = 1.5 - 0.5 = 1
rank = 2, observable
```

Watching only the growing coordinate is not enough for a two-dimensional state. A reading that mixes both coordinates is.

### Problem 34.10: Which fix applies

A loop has an unstable mode that is controllable but not observable. Can a better gain fix it? Can better monitoring detect it?

Answer check:

```text
controllable: yes, a gain can move that mode
not observable: no, output monitoring cannot detect it
```

The two properties license two different repairs. Confusing them leads to tuning a controller you cannot evaluate.

### Problem 34.11: What the judge can anchor

Explain, in terms of `C`, what it means for an outside judge to be able to validate the board.

Answer check:

```text
The judge can validate the board exactly when the observability matrix
built from what the judge is shown has full rank. Anything in its
nullspace is a belief the judge can never rule out or confirm.
```

External validation is not a matter of the judge trying harder. It is a property of what the system exposes.

### Problem 34.12: Failure mode - stable outputs, unstable system

Someone argues a system is safe because its reported scores have been flat for many rounds. Using Problem 34.6, explain why this argument is invalid.

Answer check:

```text
In Problem 34.6 the output falls from 1 to 0.25 while the hidden
coordinate rises from 1 to 2.25. Flat or shrinking outputs are
consistent with a diverging state whenever an unstable mode is
unobservable.
```

Output behavior only certifies the observable part of the state. The claim needs a rank check, not a longer flat record.
