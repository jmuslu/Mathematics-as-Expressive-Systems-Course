# Module 14: RAG, RETRO, and Retrieval-Conditioned Generation

## Lecture Promise

You will understand retrieval-augmented generation as conditional probability with retrieved latent evidence, then compare document retrieval, chunk retrieval, and cross-attention over retrieved memories.

## Prerequisites

- Probability and marginalization
- Dense retrieval
- Attention
- Memory-augmented models

## Why The Old Object Fails

Nearest-neighbor memory can predict tokens, but many tasks need evidence:

- Question answering
- Citation-grounded generation
- Personal memory
- Domain knowledge
- Updatable facts

The model needs to condition generation on retrieved content.

## Base Case

Question:

```text
Where was Ada Lovelace born?
```

Retriever returns:

```text
z1: a biography passage with the answer
z2: a passage about Charles Babbage
z3: an unrelated passage about London
```

The generator must combine the query with retrieved evidence, not merely choose the nearest vector.

## Formal Object

RAG-style generation:

```text
P(y | x) = sum_z P(y | x, z) P(z | x)
```

where:

- x is the prompt or question
- z is a retrieved document or chunk
- y is the generated answer

RETRO-style models retrieve chunks from a large database and use cross-attention to condition generation on those chunks.

## Legal Operations

Retrieval-conditioned generation allows:

- Retrieve evidence
- Marginalize over documents
- Condition on retrieved chunks
- Cross-attend to external context
- Update knowledge by changing the datastore
- Attribute answers to evidence

## Worked Derivation: Bad Retrieval Lowers Correct Answer Probability

Suppose only z1 supports the correct answer.

```text
P(correct | x, z1) = 0.9
P(correct | x, z2) = 0.2
P(correct | x, z3) = 0.1
```

If retrieval probabilities are:

```text
P(z1|x)=0.7, P(z2|x)=0.2, P(z3|x)=0.1
```

then:

```text
P(correct|x)=0.7(0.9)+0.2(0.2)+0.1(0.1)=0.68
```

If retrieval shifts mass away from z1:

```text
P(z1|x)=0.2, P(z2|x)=0.5, P(z3|x)=0.3
```

then:

```text
P(correct|x)=0.2(0.9)+0.5(0.2)+0.3(0.1)=0.31
```

Generation quality is mathematically tied to retrieval distribution.

## Failure Mode

RAG can fail in several distinct places:

- Retrieval miss: the right evidence is not retrieved.
- Ranking error: the evidence is retrieved but buried.
- Context placement error: evidence appears where the model underuses it.
- Faithfulness error: model ignores or contradicts evidence.
- Conflict error: retrieved documents disagree.

## Invariants

- Evidence distribution P(z|x)
- Conditional generation P(y|x,z)
- Context budget
- Attribution relation between answer and evidence
- Retrieval metrics versus generation metrics

## Problem Ladder

### Direct Problems

1. Compute P(correct|x) for three retrieved documents with given probabilities.
2. Given recall@5 and MRR for a toy ranking, compute both by hand.
3. Construct an example where recall@3 is high but generation fails.

### Transfer Problems

1. Explain why retrieving more documents can hurt generation.
2. Explain why context order matters for long prompts.
3. Separate retrieval failure from faithfulness failure in a toy example.

### Research-Style Problems

1. Compare RAG and RETRO in terms of retrieval unit, conditioning mechanism, and update path.
2. Derive a simple reranking objective that balances relevance and diversity.
3. Design an evaluation set that detects evidence conflict.

## Memory-System Connection

RAG is the most common practical form of external memory for LLMs. The math is not only vector search. It is a coupled system:

```text
retriever distribution -> context construction -> conditional generation -> evaluation
```

Robustness requires testing every arrow.

## Research Bridge

- RAG formalizes retrieval-augmented generation for knowledge-intensive tasks.
- REALM trains retrieval during language model pretraining.
- RETRO retrieves from trillions of tokens and conditions generation through cross-attention.
- Lost in the Middle studies failures in using retrieved evidence inside long contexts.
