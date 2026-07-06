# Module 30: Evaluation and Failure Modes

## Lecture Promise

You will learn to evaluate a second-brain system by invariants, coherence, transformation safety, and validation quality.

## Prerequisites

- Graphs
- Probability
- Invariance
- Sheaves

## Why The Old Object Fails

Accuracy alone is not enough. A memory system can answer correctly while its structure is incoherent.

## Base Case

Two paths support the same conclusion. One is valid, the other contains a contradiction. A scalar score may miss this; path validation should catch it.

## Formal Object

Evaluation dimensions:

- retrieval usefulness
- path coherence
- local-to-global consistency
- transformation invariance
- update stability
- decay behavior
- contradiction handling

## Failure Mode

Benchmarks can reward shallow retrieval and miss structural collapse.

## Problem Ladder

1. Design a test for node relabeling invariance.
2. Design a test for path contradiction.
3. Design a test for decay disconnecting a reasoning path.

## Memory-System Connection

Evaluation should test the mathematical promises of the architecture, not just the final answer string.

## Research Bridge

GraphRAG-style systems, RAG evaluation, and knowledge graph reasoning all need stronger structural evaluation.

## Hand Problem Trail

### Problem 30.1: Retrieval metrics

A system returns 5 memories. Relevant items are at ranks 1, 3, and 5. Compute precision@5 and recall@5 if there are 6 relevant items total.

Answer check:

```text
precision@5 = 3/5
recall@5 = 3/6 = 1/2
```

### Problem 30.2: MRR

For three queries, the first relevant results appear at ranks 1, 4, and 10. Compute MRR.

Answer check:

```text
MRR = (1 + 1/4 + 1/10)/3 = 1.35/3 = 0.45
```

### Problem 30.3: Invariance test

You relabel every node in a memory graph. A graph-level contradiction score changes from 0.7 to 0.4. What failure occurred?

Answer check: the score is not permutation invariant, so it depends on representation artifacts.

### Problem 30.4: Failure decomposition

A model answers incorrectly even though the right document was retrieved. Name two possible non-retrieval failures.

Answer check: ranking/placement failure, synthesis failure, contradiction handling failure, prompt integration failure, or validation failure.
