# Module 28: Dynamical Systems on Graphs

## Lecture Promise

You will understand reinforcement, decay, and consolidation as dynamics on graph states.

## Prerequisites

- Linear maps
- Spectral theory
- Graphs

## Why The Old Object Fails

A memory graph is not static. It evolves.

## Base Case

Let edge weights update by:

```text
w_{t+1} = alpha w_t + reinforcement_t
```

If alpha < 1, unused edges decay.

## Running Example: Playlist Attention

Imagine a playlist that slowly forgets songs you stop playing and strengthens songs you replay after a good dinner with friends.

The song is not simply "liked" or "not liked." Its place in the playlist changes over time:

```text
next attention = decay * old attention + replay reinforcement
```

If a song is replayed every week, it may settle into a stable level. If it is ignored, it fades. If the app blindly boosts whatever was popular yesterday, it can trap you in the same mood forever.

This is the human version of graph dynamics: the state is not a static fact, but a changing pattern of weights.

## Formal Object

A dynamical system updates state by:

```text
x_{t+1} = F(x_t)
```

Linear systems use F(x)=Ax. Nonlinear systems use richer update rules.

## Failure Mode

Dynamics can converge to bad attractors:

- popularity loops
- stale beliefs
- self-reinforcing false paths
- collapsed diversity

## Problem Ladder

1. Compute three steps of w_{t+1}=0.8w_t+1.
2. Find a fixed point of x_{t+1}=0.5x_t+2.
3. Explain reinforcement as path-level, not just node-level.

## Memory-System Connection

Decay and reinforcement should operate on nodes, edges, paths, motifs, and sheaf consistency, not only raw facts.

## Hand Problem Trail

### Problem 28.1: Linear update

A two-node memory state updates by:

```text
x_{t+1} = A x_t, A = [0.8 0.1]
                    [0.2 0.7]
```

Compute one step from `x0=(10,0)`.

Answer check: `x1=(8,2)`.

### Problem 28.2: Two steps of graph diffusion

Using Problem 28.1, compute `x2`.

Answer check:

```text
x1 = (8,2)
x2_1 = 0.8(8) + 0.1(2) = 6.6
x2_2 = 0.2(8) + 0.7(2) = 3.0
x2 = (6.6,3.0)
```

Mass continues to move while some is retained locally.

### Problem 28.3: Decay only

If `x_{t+1}=0.9x_t` and `x0=100`, compute `x3`.

Answer check: `x3 = 0.9^3*100 = 72.9`.

### Problem 28.4: Decay with reinforcement

Let:

```text
w_{t+1} = 0.8 w_t + 1
w_0 = 0
```

Compute `w1`, `w2`, and `w3`.

Answer check:

```text
w1 = 1
w2 = 0.8(1)+1 = 1.8
w3 = 0.8(1.8)+1 = 2.44
```

Reinforcement can counteract decay.

### Problem 28.5: Fixed point

Solve `x = 0.5x + 4`.

Answer check: `0.5x=4`, so `x=8`.

### Problem 28.6: Fixed point of decay with reinforcement

Solve the fixed point of:

```text
w_{t+1} = 0.8w_t + 1
```

Answer check:

```text
w = 0.8w + 1
0.2w = 1
w = 5
```

The update approaches a steady level when reinforcement balances decay.

### Problem 28.7: Stability intuition

For:

```text
x_{t+1} = a x_t
```

what happens when `|a| < 1`, `a = 1`, and `|a| > 1`?

Answer check:

```text
|a| < 1: values decay toward 0
a = 1: values stay fixed
|a| > 1: values grow in magnitude
```

The multiplier controls stability in the one-dimensional case.

### Problem 28.8: Popularity loop

A node's score updates by:

```text
x_{t+1} = 1.2 x_t
```

starting from `x0=10`. Compute `x3`.

Answer check:

```text
x3 = 1.2^3 * 10 = 17.28
```

Unchecked reinforcement can amplify early popularity.

### Problem 28.9: Oversmoothing in a two-node graph

The averaging update is:

```text
x_{t+1} = (mean(x_t), mean(x_t))
```

Starting from `(10,0)`, compute one step.

Answer check:

```text
mean = 5
x1 = (5,5)
```

Averaging creates agreement but erases contrast.

### Problem 28.10: Path-level reinforcement

A path `A -> B -> C` succeeds in validation. Name three possible places reinforcement could be applied.

Answer check:

```text
node A/B/C weights, edge A-B and B-C weights, the whole path motif A-B-C
```

Reinforcement is a design choice about what object gets stronger.

### Problem 28.11: Bad attractor

What is a bad attractor in a memory graph dynamic?

Answer check:

```text
A stable state the system tends to return to even though it is epistemically poor, such as a stale belief or self-reinforcing false path.
```

Convergence is not automatically correctness.

### Problem 28.12: Graph diffusion intuition

In Problem 28.1, what happened to mass at node 1?

Answer check: most stayed at node 1, some moved to node 2. The matrix encodes retention and propagation.
