# Module 16: Robustness, Evaluation, and Memory System Design

## Lecture Promise

You will learn to decompose external-memory failures mathematically and design evaluations that reveal whether memory is actually helping.

## Prerequisites

- Retrieval metrics
- Probability and calibration
- RAG failure modes
- Optimization tradeoffs

## Why The Old Object Fails

A demo can look good while the memory system is fragile. Robustness requires measuring the right failure.

The system can fail even when:

- Retrieval returns plausible context.
- The answer sounds fluent.
- The nearest vectors look close.
- The benchmark average is high.

## Base Case

Suppose the correct evidence is at rank 3.

Retrieved list:

```text
1. irrelevant but similar
2. partially related
3. correct evidence
4. distractor
5. duplicate
```

Recall@5 says success. But if the model only uses the first two documents, generation fails.

## Formal Objects

Retrieval metrics:

```text
precision@k = relevant retrieved / k
recall@k = relevant retrieved / relevant total
MRR = 1 / rank_of_first_relevant
DCG = sum_i relevance_i / log2(i + 1)
```

Memory-system failure decomposition:

```text
representation error
index error
retrieval error
ranking error
context construction error
generation faithfulness error
update error
evaluation error
```

## Legal Operations

Evaluation allows:

- Compare retrieval systems
- Stress-test domain shift
- Measure faithfulness
- Estimate calibration
- Audit failure modes
- Optimize system components separately

## Worked Example: MRR And nDCG

If the first relevant document is at rank 3:

```text
MRR = 1/3
```

For graded relevance:

```text
rank 1 relevance = 0
rank 2 relevance = 1
rank 3 relevance = 3
```

DCG@3:

```text
0/log2(2) + 1/log2(3) + 3/log2(4)
= 0 + 1/log2(3) + 3/2
```

The metric rewards high relevance near the top.

## Failure Mode

Metrics can be gamed or misaligned:

- Recall@k ignores whether generation used evidence.
- Exact match may punish valid paraphrases.
- Faithfulness metrics can miss subtle contradictions.
- Benchmarks may not match personal memory use.
- Average metrics hide rare catastrophic failures.

## Invariants

- Ground-truth relevance labels
- Ranking order
- Evidence-answer attribution
- Calibration bins
- Distribution shift slices
- Worst-case failure rate

## Problem Ladder

### Direct Problems

1. Compute precision@3, recall@3, and MRR for a toy ranking.
2. Compute DCG@3 for relevance scores 3, 0, 1.
3. Given 10 predictions with confidence 0.8 and 6 correct, compute calibration error for that bin.

### Transfer Problems

1. Explain why retrieval success does not imply answer faithfulness.
2. Design a test where the retriever finds the right document but the generator ignores it.
3. Design a test where memory update creates a stale contradiction.

### Research-Style Problems

1. Build a failure matrix for a RAG system with rows as failure modes and columns as metrics.
2. Propose a benchmark for robust personal memory in an LLM assistant.
3. Define a "memory usefulness" metric that includes answer quality, citation support, latency, and privacy risk.

## Memory-System Connection

Robustness is the final design layer. A memory system is not robust because it stores more, retrieves faster, or answers fluently. It is robust when its failures are understood, measured, and reduced.

## Research Bridge

- BEIR evaluates retrieval under heterogeneous domain shift.
- RAGAS proposes automated evaluation dimensions for RAG.
- Lost in the Middle tests whether models use relevant context depending on position.
- Faithfulness research studies when generated answers follow retrieved evidence.
