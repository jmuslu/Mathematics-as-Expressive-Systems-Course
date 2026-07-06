# Module 04: Bases, Orthogonality, SVD, and Compression

## Lecture Promise

You will understand orthonormal bases and SVD as ways to reveal the most important directions in data, then connect low-rank approximation to memory compression.

## Prerequisites

- Projection
- Matrix multiplication
- Eigenvectors at an intuitive level
- Norms and dot products

## Why The Old Object Fails

A memory store can contain millions or billions of vectors. Keeping every coordinate with full precision is expensive. We need a way to ask:

- Which directions matter most?
- Which directions are noise?
- How much error is introduced if we compress?

SVD is forced by this compression question.

## Base Case

Suppose memory vectors in R^2 lie near a line:

```text
(1, 1), (2, 2), (3, 3), (4, 4.1)
```

The second dimension is not independent. A one-dimensional summary might preserve most structure.

## Formal Object

For a matrix A, the singular value decomposition is:

```text
A = U Sigma V^T
```

where:

- Columns of U are orthonormal left singular vectors.
- Columns of V are orthonormal right singular vectors.
- Sigma stores nonnegative singular values.

The best rank-k approximation in Frobenius norm is:

```text
A_k = U_k Sigma_k V_k^T
```

## Legal Operations

SVD lets you:

- Build orthonormal coordinates from data
- Compress matrices
- Identify dominant directions
- Compute low-rank approximations
- Analyze reconstruction error

## Worked Derivation: Why Singular Values Measure Energy

The Frobenius norm satisfies:

```text
||A||_F^2 = sum over all entries A_ij^2
```

For the SVD:

```text
||A||_F^2 = sigma_1^2 + sigma_2^2 + ... + sigma_r^2
```

If we keep only the first k singular values, the squared reconstruction error is:

```text
||A - A_k||_F^2 = sigma_{k+1}^2 + ... + sigma_r^2
```

This gives a precise compression budget.

## Worked Numbers

Let:

```text
A = [3 0]
    [0 1]
```

The singular values are 3 and 1. The rank-1 approximation keeps the x-direction:

```text
A_1 = [3 0]
      [0 0]
```

Squared error:

```text
1^2 = 1
```

## Failure Mode

Low-rank approximation can erase rare but critical information.

In memory systems, the highest-variance direction is not always the most useful direction. A rare fact may have low global variance but high task value.

## Invariants

- Rank
- Singular values
- Frobenius norm
- Orthogonality of singular vectors
- Reconstruction error

## Problem Ladder

### Direct Problems

1. Compute the rank of a diagonal matrix with diagonal entries 5, 2, 0.
2. For singular values 10, 4, 1, compute the squared error of rank-1 and rank-2 approximations.
3. Explain why orthonormal bases make projection coefficients easy to compute.

### Transfer Problems

1. If a vector index compresses 768 dimensions to 128, what kinds of information might be lost?
2. Give an example where low-rank compression improves retrieval by removing noise.
3. Give an example where low-rank compression hurts retrieval by removing a rare distinction.

### Research-Style Problems

1. Product quantization divides vectors into subspaces. Compare this with low-rank approximation.
2. In a memory store, define a reconstruction error and a retrieval error. Are they always correlated?
3. Design a toy matrix where the best rank-1 approximation preserves frequent memories but loses the rare correct memory.

## Memory-System Connection

Memory compression is not merely storage engineering. It is a mathematical decision about which directions of variation deserve to survive.

SVD gives one clean answer: preserve directions with largest singular values. Robust memory design asks when that answer is not enough.

## Research Bridge

- FAISS and product quantization address billion-scale vector storage and search.
- RETRO and long-memory systems depend on storing huge memory banks efficiently.
- Low-rank methods reappear in model compression, adapters, and approximate attention.
