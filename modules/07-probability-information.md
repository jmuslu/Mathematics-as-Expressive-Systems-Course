# Module 07: Probability, Information, and Uncertainty

## Lecture Promise

You will understand probability as a language for uncertainty over memories, then connect entropy, Bayes, calibration, and evidence conflict to retrieval-augmented systems.

## Prerequisites

- Scalars and log-odds
- Basic sums and integrals
- Conditional probability

## Why The Old Object Fails

A retrieval system cannot only say:

```text
memory m is closest
```

It often needs to say:

```text
memory m is likely useful, but uncertain
```

Similarity is not probability. A robust memory system needs uncertainty over relevance, correctness, source reliability, and conflict.

## Base Case

Suppose a retriever returns three memories with scores:

```text
s = (4, 2, 1)
```

Softmax converts these into weights:

```text
p_i = exp(s_i) / sum_j exp(s_j)
```

The output is a probability distribution over memories.

## Formal Object

A probability distribution assigns nonnegative mass to events and sums to 1.

Conditional probability:

```text
P(A | B) = P(A and B) / P(B)
```

Bayes rule:

```text
P(H | E) = P(E | H) P(H) / P(E)
```

Entropy:

```text
H(P) = - sum_i p_i log p_i
```

## Legal Operations

Probability allows:

- Marginalization
- Conditioning
- Bayesian updating
- Expected loss
- Entropy measurement
- Calibration analysis

## Worked Derivation: Retrieval As A Latent Variable

Let z be the retrieved document and y be the answer.

RAG-style marginalization:

```text
P(y | x) = sum_z P(y | x, z) P(z | x)
```

The model does not need to commit to one memory. It can average over possible retrieved memories.

This is powerful, but it depends on P(z | x) assigning probability to useful memories.

## Failure Mode

Probabilities can be badly calibrated.

- Softmax weights are not guaranteed to be truthful probabilities.
- High similarity can produce high confidence in a wrong memory.
- Retrieved evidence can conflict with parametric memory.
- Entropy can be low even when the system is wrong.

## Invariants

- Total probability sums to 1
- Conditional probability identities
- KL divergence nonnegativity
- Entropy bounds for finite distributions
- Calibration curves under grouping

## Problem Ladder

### Direct Problems

1. Compute softmax for scores (0, 0) and for scores (2, 0).
2. Compute entropy for (1/2, 1/2) and (0.9, 0.1).
3. Use Bayes rule with P(H)=0.1, P(E|H)=0.9, and P(E|not H)=0.2.

### Transfer Problems

1. Explain why nearest-neighbor similarity is not automatically a probability.
2. Give a case where a low-entropy retrieval distribution is wrong.
3. Give a case where high uncertainty should trigger more retrieval.

### Research-Style Problems

1. In RAG, derive the effect of increasing probability mass on an irrelevant document.
2. Model conflict between retrieved evidence and parametric prior using Bayes rule.
3. Design a calibration test for retrieval confidence.

## Memory-System Connection

Memory systems need uncertainty at every layer:

- Is this memory relevant?
- Is it true?
- Is it stale?
- Does it conflict with other memory?
- Should generation trust it?

Probability gives the language for these questions.

## Research Bridge

- RAG treats retrieved documents as latent variables.
- RAGAS evaluates faithfulness and context relevance.
- Research on faithfulness in RAG studies conflict between retrieved evidence and generated claims.
