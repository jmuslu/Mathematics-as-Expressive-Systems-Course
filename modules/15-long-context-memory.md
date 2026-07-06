# Module 15: Long Context, Recency, Consolidation, and Forgetting

## Lecture Promise

You will understand memory over time as a mathematical problem of selection, decay, consolidation, and retrieval under context limits.

## Prerequisites

- Attention
- RAG and retrieval-conditioned generation
- Probability
- Optimization under constraints

## Why The Old Object Fails

Adding more context does not solve memory.

A model may:

- Ignore information in the middle
- Overweight recent text
- Attend to distractors
- Lose rare details
- Exceed computational budget

Long context is not the same as robust memory.

## Base Case

Suppose a context window can hold 4 memories, but 8 memories are available:

```text
m1, m2, m3, m4, m5, m6, m7, m8
```

Each memory has:

```text
relevance r_i
recency t_i
trust c_i
length l_i
```

The memory system must choose a subset, not merely append everything.

## Formal Object

A simple memory selection objective:

```text
maximize sum_i x_i utility_i
subject to sum_i x_i length_i <= B
x_i in {0, 1}
```

Utility may combine:

```text
semantic relevance + recency + trust + novelty - redundancy
```

For decay:

```text
weight(age) = exp(-gamma * age)
```

For consolidation:

```text
new_summary = weighted combination of related memories
```

## Legal Operations

Long-term memory systems require:

- Write
- Refresh
- Summarize
- Merge
- Forget
- Rehearse
- Retrieve
- Re-rank

## Worked Derivation: Exponential Decay Half-Life

Let memory weight be:

```text
w(t) = exp(-gamma t)
```

The half-life h satisfies:

```text
w(h) = 1/2
exp(-gamma h) = 1/2
```

Take logs:

```text
-gamma h = log(1/2) = -log 2
h = log 2 / gamma
```

So gamma directly controls forgetting speed.

## Failure Mode

Forgetting can be harmful or necessary:

- Forgetting rare facts hurts recall.
- Keeping everything increases noise.
- Summaries can distort details.
- Recency bias can override importance.
- Consolidation can merge incompatible memories.

## Invariants

- Context budget
- Memory age
- Decay rate
- Redundancy
- Coverage
- Retention error

## Problem Ladder

### Direct Problems

1. Compute half-life for gamma = 0.1.
2. Given five memories with utility and length, choose the best subset under budget 10 by hand.
3. Compute decayed weights for ages 0, 1, 5, and 10.

### Transfer Problems

1. Give an example where the newest memory should not be retrieved.
2. Give an example where summarization destroys a crucial detail.
3. Explain why long context can increase distractor risk.

### Research-Style Problems

1. Design a memory consolidation rule that preserves rare high-confidence facts.
2. Model forgetting as constrained optimization over storage cost and expected future utility.
3. Create a benchmark example for "lost in the middle" memory failure.

## Memory-System Connection

External memory is temporal. The central design question becomes:

```text
What should survive from past interactions, and in what form?
```

This module gives the math vocabulary for survival, decay, compression, and refresh.

## Research Bridge

- LongMem studies long-term memory for language models.
- Lost in the Middle shows that having evidence in context does not guarantee use.
- Memorizing Transformers show one path for augmenting attention with stored hidden states.
