# Module 10: Nearest Neighbor Search and Vector Indexes

## Lecture Promise

You will understand exact and approximate nearest-neighbor search as a mathematical tradeoff among recall, latency, memory, and distortion.

## Prerequisites

- Metric geometry
- Vectors and inner products
- Basic probability
- Graph intuition

## Why The Old Object Fails

Exact search is simple:

```text
compare q with every memory
return top k
```

But with a billion vectors, exact search can be too slow. Approximate nearest neighbor methods are forced by scale.

## Base Case

Suppose a memory bank has 1,000,000 vectors of dimension 768.

Exact search requires about:

```text
1,000,000 * 768
```

multiply-add comparisons per query.

If the system has to answer in milliseconds, exact search may be impossible.

## Formal Object

Approximate nearest neighbor search returns a point m such that:

```text
d(q, m) <= c * d(q, m*)
```

where m* is the true nearest neighbor and c >= 1 is an approximation factor.

In practice, systems often measure:

```text
recall@k = retrieved true neighbors / true top-k neighbors
```

## Legal Operations

ANN indexes allow:

- Hashing
- Quantization
- Graph navigation
- Clustering
- Beam search over graph layers
- Recall-latency tuning

## Worked Derivation: Product Quantization Memory Savings

A 768-dimensional float32 vector uses:

```text
768 * 4 = 3072 bytes
```

One billion such vectors use:

```text
3072 GB = about 3 TB
```

If product quantization stores 96 one-byte codes per vector:

```text
96 bytes per vector
```

One billion vectors use:

```text
96 GB
```

The price is distortion: the stored code approximates the original vector.

## Failure Mode

ANN errors are not neutral.

- The missed neighbor may contain the needed fact.
- Quantization may erase rare distinctions.
- Graph search may get trapped in a local region.
- Recall@k may look good while answer quality falls.

## Invariants

- Approximation factor
- Recall@k
- Quantization distortion
- Graph degree
- Search beam width
- Latency distribution

## Problem Ladder

### Direct Problems

1. Compute memory use for 10 million 384-dimensional float32 vectors.
2. If recall@10 is 0.8, how many of the true top 10 are retrieved on average?
3. If a scalar quantizer rounds 1.37 to 1.4, compute squared error.

### Transfer Problems

1. Explain why approximate search can reduce factual accuracy even when average recall is high.
2. Compare LSH, quantization, and graph navigation in one sentence each.
3. Give a case where exact top-k is unnecessary.

### Research-Style Problems

1. In HNSW, what does increasing efSearch likely do to recall and latency?
2. In product quantization, why split dimensions into subspaces?
3. Design an ANN evaluation table with recall, latency, memory, and downstream answer quality.

## Memory-System Connection

Vector indexes are where mathematical ideals meet hardware and latency. A robust memory system must know what approximation it is buying.

## Research Bridge

- HNSW studies robust graph-based approximate nearest-neighbor search.
- FAISS studies billion-scale similarity search and GPU k-selection.
- Product quantization studies compression for nearest-neighbor search.
- LSH gives probabilistic indexing guarantees.
