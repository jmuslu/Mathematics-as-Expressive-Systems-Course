# Module 01: Scalars, Coordinates, and Friendship Intensity

## Lecture Promise

You will understand number systems as changes in what one coordinate can express, then connect that idea to embedding coordinates, similarity scores, probabilities, and dynamic weights.

## Prerequisites

- Algebra with equations
- Familiarity with integers, rationals, reals, and complex numbers
- Basic vector notation

## Why The Old Object Fails

Natural numbers count objects, but expressive systems do not merely count. They score relevance, uncertainty, distance, confidence, decay, and interpolation. One coordinate may need to express:

- A count
- A signed difference
- A fraction
- A continuous score
- A probability
- A phase or frequency component
- A log-odds value

The scalar system determines which operations are legal.

## Base Case

Suppose a debate-board ranker assigns a relevance score to each evidence card:

```text
c1: 7
c2: 2
c3: 0
```

Natural numbers are enough if scores are only counts. But now suppose a feedback step says c2 should be penalized by 3.

```text
2 - 3 = -1
```

Natural numbers fail. Integers are forced.

Now suppose a ranker interpolates two scores:

```text
new_score = 0.7 * retriever_score + 0.3 * recency_score
```

Integers fail. Real scalars are forced.

## Running Example: Friendship Intensity Versus Pattern

Suppose two people describe the kind of friendship they want using three coordinates:

```text
loyalty, humor, shared routines
```

One profile is:

```text
a = (3, 4, 0)
```

Another is:

```text
b = (6, 8, 0)
```

The second profile is twice as intense, but it points in the same direction. After normalization, both become:

```text
(3/5, 4/5, 0)
```

That means the scalar system is already doing design work. If magnitude matters, `a` and `b` are different. If only direction matters, they are the same pattern. Scalars are not just numbers attached to a vector; they decide which comparisons are legal and meaningful.

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

## Expressive-System Connection

Expressive systems are scalar systems everywhere:

- Similarity scores
- Ranking probabilities
- Attention weights
- Recency decay
- Confidence estimates
- Calibration curves

Before choosing an algorithm, ask what each coordinate is allowed to mean.

## Hand Problem Trail

### Problem 1.1: Closure pressure

For each set, decide whether the operation stays inside the set.

```text
integers under addition
integers under division
positive reals under subtraction
nonzero reals under multiplication
complex numbers under square root of negative reals
```

Answer check:

```text
closed, not closed, not closed, closed, closed
```

### Problem 1.2: Natural numbers fail under penalty

An evidence-card score is `2`. A penalty subtracts `5`. Can natural numbers represent the result?

Answer check:

```text
2 - 5 = -3
```

Natural numbers fail. Integers are forced.

### Problem 1.3: Why invent a richer scalar?

Solve or explain why there is no solution in the stated number system.

```text
x + 3 = 1 over N
2x = 1 over Z
x^2 = 2 over Q
x^2 + 1 = 0 over R
```

Answer check:

```text
need integers; need rationals; need reals; need complex numbers
```

### Problem 1.4: Interpolation forces real scalars

Compute:

```text
0.7(10) + 0.3(4)
```

Answer check:

```text
7 + 1.2 = 8.2
```

Weighted interpolation naturally lives in real scalars.

### Problem 1.5: Odds

Convert `p=0.8` into odds.

Answer check:

```text
odds = p/(1-p) = 0.8/0.2 = 4
```

Odds compare success probability with failure probability.

### Problem 1.6: Log-odds update

Suppose prior log-odds are `log(2)` and evidence log-likelihood ratio is `log(3)`. Compute posterior log-odds.

Answer check:

```text
log(2) + log(3) = log(6)
```

Multiplicative evidence becomes additive in log space.

### Problem 1.7: Softmax shift invariance

For scores `(1,2)`, softmax probabilities are proportional to:

```text
e^1, e^2
```

For shifted scores `(4,5)`, show the probabilities are the same.

Answer check:

```text
shifted weights are e^4, e^5 = e^3(e^1), e^3(e^2)
The common factor e^3 cancels during normalization.
```

Softmax is invariant under adding the same constant to every score.

### Problem 1.8: Normalization changes ranking

Compare dot products with query `q=(1,0)`:

```text
a=(10,1)
b=(2,0)
```

Which has larger raw dot product? Which has larger cosine similarity?

Answer check:

```text
raw: q dot a = 10, q dot b = 2, so a wins.
cos(a,q)=10/sqrt(101)
cos(b,q)=1
so b wins by cosine.
```

Changing scalar normalization can change retrieval behavior.

### Problem 1.9: Scalar capability table

Complete this table by hand.

| Scalar system | New capability | Cost |
| --- | --- | --- |
| Z -> Q | ? | ? |
| Q -> R | ? | ? |
| R -> C | ? | ? |
| C -> H | ? | ? |

Answer check:

```text
Z -> Q: division by nonzero integers; lose discreteness.
Q -> R: limits and continuity; lose countability.
R -> C: phase/roots of all polynomials; lose order compatibility.
C -> H: 3D rotation algebra; lose commutativity.
```

### Problem 1.10: Probability versus score

Can the numbers `(2, 3, 5)` be a probability distribution as written?

Answer check:

```text
No. They are nonnegative but sum to 10, not 1.
Normalized probabilities would be (0.2,0.3,0.5).
```

Not every nonnegative score is already a probability.

### Problem 1.11: Complex magnitude and phase

For `z = 3 + 4i`, compute the magnitude.

Answer check:

```text
|z| = sqrt(3^2 + 4^2) = 5
```

Complex scalars carry magnitude and phase in one coordinate.

### Problem 1.12: Scalar design reflection

Suppose a confidence score is stored as a complex number `r e^{i theta}`. What could magnitude and phase represent?

Answer check: magnitude could encode strength while phase could encode delay, polarity, cyclic state, or relation orientation.
