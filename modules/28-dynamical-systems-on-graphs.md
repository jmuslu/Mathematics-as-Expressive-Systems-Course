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

## Research Bridge

Dynamical systems and spectral graph theory explain convergence, stability, and attractors.

## Hand Problem Trail

### Problem 28.1: Linear update

A two-node memory state updates by:

```text
x_{t+1} = A x_t, A = [0.8 0.1]
                    [0.2 0.7]
```

Compute one step from `x0=(10,0)`.

Answer check: `x1=(8,2)`.

### Problem 28.2: Decay only

If `x_{t+1}=0.9x_t` and `x0=100`, compute `x3`.

Answer check: `x3 = 0.9^3*100 = 72.9`.

### Problem 28.3: Fixed point

Solve `x = 0.5x + 4`.

Answer check: `0.5x=4`, so `x=8`.

### Problem 28.4: Graph diffusion intuition

In Problem 28.1, what happened to mass at node 1?

Answer check: most stayed at node 1, some moved to node 2. The matrix encodes retention and propagation.
