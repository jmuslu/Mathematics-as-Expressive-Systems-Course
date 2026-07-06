# Module 01: Scalars, Coordinates, and Expressive Power

## Lecture Promise

You will understand number systems as changes in what one coordinate can express, then connect that idea to embedding coordinates, similarity scores, probabilities, and memory weights.

## Prerequisites

- Algebra with equations
- Familiarity with integers, rationals, reals, and complex numbers
- Basic vector notation

## Why The Old Object Fails

Natural numbers count objects, but memory systems do not merely count. They score relevance, uncertainty, distance, confidence, decay, and interpolation. One coordinate may need to express:

- A count
- A signed difference
- A fraction
- A continuous score
- A probability
- A phase or frequency component
- A log-odds value

The scalar system determines which operations are legal.

## Base Case

Suppose a memory retriever assigns a score to each memory:

```text
m1: 7
m2: 2
m3: 0
```

Natural numbers are enough if scores are only counts. But now suppose a feedback step says m2 should be penalized by 3.

```text
2 - 3 = -1
```

Natural numbers fail. Integers are forced.

Now suppose a ranker interpolates two scores:

```text
new_score = 0.7 * retriever_score + 0.3 * recency_score
```

Integers fail. Real scalars are forced.

## Formal Object

A scalar field is a system where addition, subtraction, multiplication, and division by nonzero elements are legal. Common examples:

```text
Q: rational numbers
R: real numbers
C: complex numbers
```

Not every useful scalar system is a field. Integers are not a field because division is not always legal. Quaternions enrich multiplication but lose commutativity.

## Legal Operations

With richer scalars, you can:

- Interpolate scores
- Normalize vectors
- Take limits
- Define inner products
- Represent phase
- Express uncertainty with probabilities or log-probabilities

## Worked Derivation: Log-Odds As A Coordinate Change

Probabilities live in [0, 1]. That interval is awkward for additive evidence. Define odds:

```text
odds(p) = p / (1 - p)
```

Then define log-odds:

```text
logit(p) = log(p / (1 - p))
```

If p = 0.8:

```text
odds = 0.8 / 0.2 = 4
logit = log(4)
```

Why is this useful? Because evidence often adds more naturally in log space than in probability space.

```text
posterior_log_odds = prior_log_odds + evidence_log_likelihood_ratio
```

This is a scalar enrichment: the coordinate has changed from probability to additive evidence.

## Failure Mode

The wrong scalar representation can make a simple operation hard or misleading.

- Raw probabilities saturate near 0 and 1.
- Dot products are scale-sensitive unless norms are controlled.
- Cosine similarity throws away magnitude.
- Complex phase is powerful, but interpreting it as ordinary 2D geometry can hide the scalar role.

## Invariants

- Field closure
- Order, when available
- Norm or magnitude
- Sign
- Phase
- Monotonic transformations of scores

## Problem Ladder

### Direct Problems

1. Find the smallest familiar number system where each equation has a solution: x + 5 = 2, 3x = 1, x^2 = 2, x^2 = -1.
2. Convert p = 0.2, 0.5, and 0.8 into odds and log-odds.
3. If q and m are normalized, prove that cosine similarity equals q^T m.

### Transfer Problems

1. Explain why a probability is not the same kind of scalar as an embedding coordinate.
2. Explain why taking logs turns multiplication of probabilities into addition.
3. Give an example where normalizing vectors changes the retrieval ranking.

### Research-Style Problems

1. In kNN-LM, probabilities from a language model are interpolated with probabilities from a datastore. Write the interpolation formula and identify the scalar system.
2. In attention, softmax turns arbitrary real scores into a probability distribution. Show by example that adding the same constant to every score does not change the softmax output.
3. Suppose a retriever score and a recency score use different scales. Design a normalization rule and state what invariant it preserves.

## Memory-System Connection

External memory systems are scalar systems everywhere:

- Similarity scores
- Retrieval probabilities
- Attention weights
- Recency decay
- Confidence estimates
- Calibration curves

Before choosing an algorithm, ask what each coordinate is allowed to mean.

## Research Bridge

- kNN-LM uses scalar interpolation between parametric and non-parametric probability estimates.
- RAG marginalizes over retrieved documents using probability weights.
- Attention uses real-valued compatibility scores and softmax probabilities.
