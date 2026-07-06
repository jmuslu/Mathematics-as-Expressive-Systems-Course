# Module 11: Attention as Soft Retrieval

## Lecture Promise

You will understand transformer attention as differentiable content-addressed memory, then compare soft retrieval with hard nearest-neighbor lookup.

## Prerequisites

- Vectors and dot products
- Softmax and probability
- Matrix multiplication
- Metric geometry

## Why The Old Object Fails

Hard retrieval chooses a small set of memories. But inside a transformer, each token can softly retrieve from many previous token representations.

We need a differentiable retrieval operation.

## Base Case

Let a query q compare against two keys:

```text
k1 = (1, 0)
k2 = (0, 1)
q  = (2, 1)
```

Scores:

```text
s1 = q^T k1 = 2
s2 = q^T k2 = 1
```

Softmax turns scores into weights:

```text
alpha_i = exp(s_i) / (exp(s1) + exp(s2))
```

The output is:

```text
alpha_1 v1 + alpha_2 v2
```

## Formal Object

Scaled dot-product attention:

```text
Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) V
```

The keys decide compatibility. The values supply retrieved content.

## Legal Operations

Attention allows:

- Soft retrieval
- Differentiable memory access
- Context-dependent weighting
- Multi-head subspace retrieval
- Backpropagation through retrieval weights

## Worked Derivation: Why Scale By sqrt(d)

Assume q and k have independent entries with mean 0 and variance 1.

Then:

```text
q^T k = sum_{i=1}^d q_i k_i
```

Each product has variance about 1, so:

```text
Var(q^T k) = d
```

The standard deviation grows like sqrt(d). Dividing by sqrt(d) keeps scores from becoming too large as dimension grows, which prevents softmax from saturating too early.

## Failure Mode

Attention is not guaranteed to retrieve the needed evidence.

- Softmax can spread probability over irrelevant tokens.
- Long contexts can bury relevant information.
- Attention weights are not always explanations.
- Quadratic attention cost limits memory length.

## Invariants

- Attention weights sum to 1 along the retrieval axis.
- Value output is a weighted combination.
- Permutation equivariance before positional information.
- Dot-product compatibility structure.

## Problem Ladder

### Direct Problems

1. Compute softmax attention for two keys with scores 2 and 1.
2. Show that adding the same constant to all scores does not change softmax.
3. Compute QK^T for two queries and three keys.

### Transfer Problems

1. Compare attention with nearest-neighbor retrieval.
2. Explain why attention over all previous tokens is a memory system.
3. Give a case where soft retrieval is better than hard retrieval.

### Research-Style Problems

1. Derive the memory cost of storing the full QK^T matrix for sequence length n.
2. Explain how FlashAttention changes computation without changing exact attention.
3. In linear attention, identify the algebraic rearrangement that avoids forming QK^T.

## Memory-System Connection

Attention is the internal memory mechanism of transformers. External memory systems often imitate, extend, or bypass attention:

- RAG retrieves external documents.
- RETRO adds retrieved chunks through cross-attention.
- Memorizing Transformers add kNN memory over hidden states.

## Research Bridge

- Attention Is All You Need defines scaled dot-product attention.
- FlashAttention studies IO-aware exact attention.
- Linear attention papers study kernelized approximations.
