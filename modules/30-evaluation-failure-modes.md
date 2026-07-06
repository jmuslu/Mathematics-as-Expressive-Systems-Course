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
