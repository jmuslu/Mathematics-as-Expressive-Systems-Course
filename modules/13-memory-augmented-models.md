# Module 13: Memory-Augmented Models and Non-Parametric Memory

## Lecture Promise

You will understand what changes mathematically when a model has explicit memory outside its parameters, then compare differentiable memory, kNN memory, and long-term cache systems.

## Prerequisites

- Attention as soft retrieval
- Nearest-neighbor search
- Probability and interpolation
- Optimization tradeoffs

## Why The Old Object Fails

A parametric model stores knowledge in weights. That makes memory hard to inspect, update, delete, or verify.

External memory changes the question:

```text
Instead of only asking what the weights know,
ask what can be retrieved, written, updated, and trusted.
```

## Base Case

Suppose a language model predicts:

```text
P_LM(next token = "Paris") = 0.40
P_LM(next token = "Lyon")  = 0.10
```

A memory lookup over similar contexts predicts:

```text
P_kNN("Paris") = 0.20
P_kNN("Lyon")  = 0.60
```

How should the system combine them?

## Formal Object

kNN-LM interpolation:

```text
P(y | x) = lambda P_kNN(y | x) + (1 - lambda) P_LM(y | x)
```

where lambda controls reliance on external memory.

For "Paris" with lambda = 0.5:

```text
P = 0.5(0.20) + 0.5(0.40) = 0.30
```

For "Lyon":

```text
P = 0.5(0.60) + 0.5(0.10) = 0.35
```

The memory changes the preferred token.

## Legal Operations

Explicit memory allows:

- Lookup
- Write
- Delete
- Refresh
- Interpolate with parametric predictions
- Audit retrieved evidence
- Separate memory updates from model training

## Worked Derivation: kNN Distribution

Given query representation q and datastore keys k_i with values v_i, define distances:

```text
d_i = ||q - k_i||^2
```

A soft kNN distribution over retrieved neighbors can be:

```text
w_i = exp(-d_i / T) / sum_j exp(-d_j / T)
```

Then:

```text
P_kNN(y | x) = sum_{i: v_i = y} w_i
```

Temperature T controls how sharply the nearest neighbors dominate.

## Failure Mode

External memory is not automatically better:

- Retrieved memory can be stale.
- Nearest examples can encode spurious correlations.
- Large datastores can leak private or unsafe data.
- Interpolation can override correct parametric knowledge.
- Non-differentiable lookup can be hard to train end-to-end.

## Invariants

- Datastore key-value relation
- Interpolation weights sum to 1
- Retrieval neighborhood under chosen metric
- Update policy
- Auditability of external entries

## Problem Ladder

### Direct Problems

1. Compute interpolated probabilities for lambda = 0.2, 0.5, and 0.8.
2. Given distances 0, 1, and 2 with T = 1, compute soft kNN weights.
3. Show that as T approaches 0, the nearest neighbor dominates.

### Transfer Problems

1. Explain how explicit memory differs from model weights.
2. Give an example where deleting a memory should be easier than retraining a model.
3. Give an example where kNN memory hurts prediction.

### Research-Style Problems

1. Compare Neural Turing Machines, kNN-LM, and Memorizing Transformers by read operation, write operation, and training signal.
2. Design a policy for deciding whether a new interaction should be written to long-term memory.
3. Formalize the cost of stale memory as expected loss.

## Memory-System Connection

This module is the turning point from "math that supports memory" to "models that contain external memory." The design space opens:

- Differentiable memory
- Non-differentiable vector memory
- Short-term cache
- Long-term persistent memory
- Retrieved-document memory

Each choice changes the legal operations.

## Research Bridge

- Neural Turing Machines and Differentiable Neural Computers study differentiable external memory.
- kNN-LM studies nearest-neighbor datastore interpolation.
- Memorizing Transformers add kNN memory over hidden states.
- LongMem studies long-term memory through cached representations and side networks.
