# Module 12: Contrastive Learning and Dense Retrieval

## Lecture Promise

You will understand how retrieval keys are learned, why contrastive losses create embedding geometry, and how false negatives and domain shift damage memory systems.

## Prerequisites

- Probability and softmax
- Embedding geometry
- Optimization
- Attention as retrieval

## Why The Old Object Fails

A vector space is not useful unless relevant things are close. Dense retrieval requires learned geometry.

The training problem:

```text
query close to useful memory
query far from unhelpful memory
```

Contrastive learning is one way to impose that geometry.

## Base Case

One query q has one positive memory m+ and two negatives m1, m2.

Scores:

```text
s+ = q^T m+
s1 = q^T m1
s2 = q^T m2
```

The loss should be small when s+ is larger than the negative scores.

## Formal Object

InfoNCE-style loss:

```text
L = - log( exp(q^T m+ / tau) / sum_j exp(q^T m_j / tau) )
```

where tau is temperature and the denominator includes positive and negative candidates.

## Legal Operations

Contrastive learning allows:

- Pulling positives together
- Pushing negatives apart
- Training dual encoders
- Using in-batch negatives
- Temperature control
- Weak supervision over pairs

## Worked Derivation: Two-Candidate Loss

Suppose there is one positive and one negative.

```text
L = -log( exp(s+) / (exp(s+) + exp(s-)) )
```

Divide numerator and denominator by exp(s+):

```text
L = -log( 1 / (1 + exp(s- - s+)) )
  = log(1 + exp(s- - s+))
```

The loss decreases as the margin s+ - s- increases.

## Failure Mode

Contrastive learning can create brittle geometry:

- False negatives push related memories apart.
- Easy negatives do not teach fine distinctions.
- Domain shift changes what should be close.
- Embedding collapse destroys useful neighborhoods.
- Training relevance may not match generation usefulness.

## Invariants

- Relative score margins
- Neighborhood rankings
- Temperature-scaled probability distribution
- Positive-negative separation
- Recall metrics under a fixed index

## Problem Ladder

### Direct Problems

1. Compute the two-candidate contrastive loss when s+ = 3 and s- = 1.
2. Recompute when s+ = 1 and s- = 3.
3. Explain how decreasing temperature changes softmax sharpness.

### Transfer Problems

1. Give an example of a false negative in document retrieval.
2. Explain why in-batch negatives are computationally attractive.
3. Compare dual-encoder scoring with cross-encoder scoring.

### Research-Style Problems

1. In Dense Passage Retrieval, identify the query encoder, passage encoder, and training signal.
2. In ColBERT, derive why max over token similarities can preserve fine-grained matching.
3. Design a contrastive batch for memory retrieval that includes hard negatives.

## Memory-System Connection

The embedding model is the memory system's geometry engine. If the loss teaches the wrong geometry, no index can repair it. Robust memory starts at representation learning.

## Research Bridge

- Dense Passage Retrieval uses dual encoders for open-domain QA.
- ColBERT uses late interaction for richer matching.
- Contriever studies unsupervised contrastive dense retrieval.
- E5 studies weakly supervised contrastive pretraining for text embeddings.
