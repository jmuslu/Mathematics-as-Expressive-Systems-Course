# Module 09: Metric Geometry and Embedding Spaces

## Lecture Promise

You will understand embedding spaces as geometries with design choices, then connect norms, cosine similarity, inner product search, and high-dimensional failure modes to memory retrieval.

## Prerequisites

- Vectors and norms
- Projection and dot products
- Probability intuition

## Why The Old Object Fails

An embedding model does not only produce vectors. It produces a geometry. Retrieval depends on that geometry.

If the geometry is wrong, the memory system can confidently return the wrong thing.

## Base Case

Let:

```text
q  = (1, 0)
m1 = (2, 0)
m2 = (0.8, 0.8)
```

By dot product:

```text
q^T m1 = 2
q^T m2 = 0.8
```

m1 wins.

By cosine similarity:

```text
cos(q, m1) = 1
cos(q, m2) = 0.8 / sqrt(0.8^2 + 0.8^2) about 0.707
```

m1 still wins, but magnitude has been removed. In other examples, normalization changes the ranking.

## Formal Object

A metric d satisfies:

- d(x, y) >= 0
- d(x, y) = 0 iff x = y
- d(x, y) = d(y, x)
- d(x, z) <= d(x, y) + d(y, z)

Common retrieval scores:

```text
L2 distance: ||q - m||
inner product: q^T m
cosine: (q^T m)/(||q|| ||m||)
```

Inner product is a similarity, not a metric.

## Legal Operations

Metric geometry allows:

- Nearest-neighbor queries
- Clustering
- Covering arguments
- Lipschitz reasoning
- Distortion analysis
- Ranking by distance or similarity

## Worked Derivation: Cosine To Inner Product

If all vectors are normalized:

```text
||q|| = 1
||m|| = 1
```

then:

```text
cos(q, m) = q^T m
```

So cosine retrieval over normalized vectors becomes maximum inner product search.

For normalized vectors:

```text
||q - m||^2 = ||q||^2 + ||m||^2 - 2 q^T m
           = 2 - 2 q^T m
```

Minimizing L2 distance is equivalent to maximizing inner product.

## Failure Mode

High-dimensional geometry is strange:

- Distances can concentrate.
- Hubs can appear.
- Nearest neighbors can be unstable under small perturbations.
- Semantic similarity may not be transitive.
- One metric may hide the task-relevant dimension.

## Invariants

- Norms
- Pairwise distances
- Angles
- Metric distortion
- Neighborhood structure

## Problem Ladder

### Direct Problems

1. Compute L1, L2, and L-infinity distance between (1, 2) and (4, 6).
2. Show that cosine similarity is unchanged if one vector is multiplied by a positive scalar.
3. For normalized q and m, derive ||q - m||^2 = 2 - 2q^T m.

### Transfer Problems

1. Give an example where dot product and cosine choose different nearest memories.
2. Explain why high magnitude document vectors can dominate MIPS.
3. Explain why "closest" may not mean "most useful."

### Research-Style Problems

1. In Dense Passage Retrieval, identify the geometry induced by dual encoders.
2. Design a toy example where two semantically different memories become nearest neighbors after projection.
3. Propose a metric for freshness-aware retrieval and state whether it satisfies the triangle inequality.

## Memory-System Connection

Every vector index has a geometry. Robust memory design requires choosing and testing that geometry, not assuming the embedding model got it right.

## Research Bridge

- Dense Passage Retrieval uses maximum inner product retrieval.
- BEIR shows retrieval geometry can fail under domain shift.
- ColBERT changes the geometry by using token-level late interaction.
