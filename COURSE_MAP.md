# Course Map

## Destination

The course is aimed at one applied research goal:

> Build the mathematical judgment needed to design robust external memory systems for LLMs.

That requires more than "vectors plus cosine similarity." It requires linear algebra, spectral methods, probability, information theory, optimization, metric geometry, approximate nearest neighbor search, attention, dense retrieval, and evaluation under failure.

## The Two Axes

### Vertical Depth

For each object, go from base case to formalism:

```text
small example -> operation -> derivation -> invariant -> failure mode -> harder example
```

### Horizontal Application

For each object, ask how it appears in memory systems:

```text
representation -> retrieval -> indexing -> compression -> update -> evaluation
```

## Route Through The Course

| Module | Mathematical object | Memory-system question |
| --- | --- | --- |
| 00 | Lecture method | How should I learn this without turning it into buzzwords? |
| 01 | Scalars and coordinate systems | What can one coordinate express? |
| 02 | Vector spaces | What is a memory slot allowed to contain? |
| 03 | Projection and error | What does it mean for retrieved context to be the closest available approximation? |
| 04 | Orthogonality and SVD | How can memory be compressed without losing the important directions? |
| 05 | Spectral structure and graphs | What are the stable modes of a similarity graph or transition system? |
| 06 | Complex scalars and kernels | How do phase, frequency, and feature maps enrich similarity? |
| 07 | Probability and information | How should uncertainty over memory contents be represented? |
| 08 | Optimization and duality | How do constraints shape retrieval and ranking? |
| 09 | Metric geometry | What geometry does an embedding model impose? |
| 10 | Approximate nearest neighbor search | What must be sacrificed to retrieve fast at scale? |
| 11 | Attention | How is soft retrieval different from hard lookup? |
| 12 | Contrastive learning | How are useful memory keys learned? |
| 13 | Memory-augmented models | What changes when memory is explicit rather than parametric? |
| 14 | RAG and RETRO | How should generation condition on retrieved evidence? |
| 15 | Long-context memory | What should be stored, forgotten, consolidated, or refreshed? |
| 16 | Robustness and evaluation | How do we detect and reduce memory failure? |

## Study Output

For every module, produce:

- A worked base case
- A derivation page
- A failure-mode page
- A problem ladder with at least three solved problems
- A memory-system design note

The goal is not to finish quickly. The goal is to build taste: knowing which mathematical object is the right tool for a memory failure.
