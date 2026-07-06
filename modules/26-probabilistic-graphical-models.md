# Module 26: Probabilistic Graphical Models

## Lecture Promise

You will understand graphical models as structured probability distributions over claims, evidence, and hidden states.

## Prerequisites

- Probability
- Graphs
- Conditional independence

## Why The Old Object Fails

A typed graph tells you relationships. It does not tell you uncertainty.

## Base Case

Let:

```text
Claim truth -> Evidence observation
Source reliability -> Evidence observation
```

The evidence depends on both truth and source reliability.

## Running Example: Two Friends, One Source

Two friends recommend the same restaurant. At first this sounds like two independent signals.

But if both friends read the same viral review, their recommendations share a hidden cause:

```text
ViralReview -> FriendARecommendation
ViralReview -> FriendBRecommendation
```

A graphical model makes that dependency explicit. Without the hidden source, the model may treat copied enthusiasm as independent confirmation.

## Formal Object

A graphical model factorizes a joint distribution according to graph structure.

For example:

```text
P(A, B, C) = P(A) P(B | A) P(C | B)
```

## Failure Mode

Conditional independence assumptions can be wrong. A graph may understate hidden common causes.

## Problem Ladder

1. Factorize a 3-node chain.
2. Draw a hidden-source variable for two claims.
3. Explain how correlated evidence breaks naive validation.

## Memory-System Connection

Graphical models give math for belief, uncertainty, source reliability, and evidence conflict.

## Hand Problem Trail

### Problem 26.1: Factorization

For the hidden-source recommendation graph:

```text
ViralReview -> FriendARecommendation
ViralReview -> FriendBRecommendation
```

write the joint distribution factorization.

Answer check:

```text
P(V,A,B)=P(V)P(A|V)P(B|V)
```

where `V` is the viral review, `A` is Friend A's recommendation, and `B` is Friend B's recommendation.

### Problem 26.2: Naive independence factorization

A naive model omits `ViralReview` and treats the recommendations as independent:

```text
FriendARecommendation
FriendBRecommendation
```

write the joint distribution factorization.

Answer check:

```text
P(A,B)=P(A)P(B)
```

This is a much stronger assumption than merely saying two people recommended the same restaurant.

### Problem 26.3: Conditional independence

In the hidden-source graph from Problem 26.1, what independence does the graph suggest after conditioning on `ViralReview`?

Answer check:

```text
FriendARecommendation is independent of FriendBRecommendation given ViralReview.
```

The shared cause explains the correlation between the two recommendations.

### Problem 26.4: Marginalization in a tiny joint table

Suppose:

```text
P(A=0,B=0)=0.1
P(A=0,B=1)=0.2
P(A=1,B=0)=0.3
P(A=1,B=1)=0.4
```

Compute `P(A=1)`.

Answer check:

```text
P(A=1)=P(A=1,B=0)+P(A=1,B=1)=0.3+0.4=0.7
```

Marginalization sums out variables you are not asking about.

### Problem 26.5: Numeric posterior

Suppose:

```text
P(Claim true)=0.6
P(Evidence positive | true)=0.8
P(Evidence positive | false)=0.3
```

Compute `P(true | positive)`.

Answer check:

```text
numerator = 0.8*0.6 = 0.48
denominator = 0.48 + 0.3*0.4 = 0.60
posterior = 0.8
```

### Problem 26.6: Posterior with negative evidence

Using the same model as Problem 26.5, compute `P(true | evidence negative)`.

Answer check:

```text
P(negative | true)=0.2
P(negative | false)=0.7

numerator = 0.2*0.6 = 0.12
denominator = 0.12 + 0.7*0.4 = 0.40
posterior = 0.12/0.40 = 0.3
```

Evidence changes belief by likelihood, not by slogan.

### Problem 26.7: Explaining away

Two causes can explain one observation:

```text
Rain -> WetGrass <- Sprinkler
```

If you learn the grass is wet, are Rain and Sprinkler generally independent after conditioning on WetGrass? Use this toy comparison:

```text
P(Rain | WetGrass) = 0.6
P(Rain | WetGrass, Sprinkler on) = 0.2
```

Answer check:

```text
No. The probability of Rain changes after learning Sprinkler is on:

0.6 != 0.2
```

Graphical models encode subtle conditional independence patterns.

If sprinkler is known to be on, rain becomes less necessary as an explanation.

### Problem 26.8: Hidden common cause

Two claims both cite similar evidence. A hidden variable `SharedSource` influences both pieces of evidence. What goes wrong if the model omits `SharedSource`?

Answer check:

```text
The evidence may be treated as independent when it is actually correlated through the shared source.
```

Hidden common causes are a major source of false confidence.

### Problem 26.9: Markov blanket intuition

In a Bayesian network, a node's Markov blanket consists of its parents, children, and co-parents of its children. For:

```text
Weather -> PatioChoice
Budget -> RestaurantChoice
PatioChoice -> Satisfaction
RestaurantChoice -> Satisfaction
Mood -> Satisfaction
```

What is the Markov blanket of `RestaurantChoice`?

Answer check:

```text
Parent: Budget
Child: Satisfaction
Co-parents of child Satisfaction: PatioChoice, Mood

Markov blanket = {Budget, Satisfaction, PatioChoice, Mood}
```

The Markov blanket is the local information boundary for a node.

### Problem 26.10: Factor graph translation

The joint distribution factorizes as:

```text
P(A,B,C) proportional to f1(A,B) f2(B,C) f3(C)
```

List the factor nodes and which variables each touches.

Answer check:

```text
f1 touches A and B
f2 touches B and C
f3 touches C
```

Factor graphs make the product structure explicit.

### Problem 26.11: Naive Bayes assumption

A classifier assumes:

```text
P(E1,E2 | Class) = P(E1 | Class) P(E2 | Class)
```

What assumption is being made?

Answer check:

```text
E1 and E2 are conditionally independent given Class.
```

This assumption may be useful even when imperfect, but it is still a modeling commitment.

### Problem 26.12: Design assumption

What does an edge absence mean in a graphical model?

Answer check: it encodes an independence assumption, not ignorance. This is a modeling commitment.
