# Module 31: Architecture Studio

## Lecture Promise

You will assemble the mathematical objects into a design specification for a dynamic epistemic graph.

## Prerequisites

- All previous modules

## Design Target

Specify:

- Node types
- Edge types
- Hyperedges
- Validation operations
- Symmetry requirements
- Invariants
- Sheaf restrictions
- Decay and reinforcement dynamics
- Rewrite rules
- Evaluation tests

## Base Case

Design a tiny graph with:

```text
3 claims
2 evidence nodes
1 contradiction
1 validation loop
1 decay rule
```

## Deliverable

Write a mathematical architecture document:

```text
state space
legal transformations
invariants
local-to-global consistency rule
update dynamics
failure tests
```

## Failure Mode

If the architecture cannot state what it preserves, it cannot be trusted as a second brain.

## Problem Ladder

1. Define the state space.
2. Define legal graph transformations.
3. Define one invariant and one equivariant output.
4. Define one sheaf consistency test.
5. Define one decay/reinforcement dynamic.

## Memory-System Connection

This is where the mathematics becomes design practice.

## Hand Problem Trail

### Problem 31.1: Specify a memory object

Define a memory node type with at least five fields. Mark which fields are scalars, vectors, labels, or references.

Answer check example:

```text
claim_text: text label
embedding: vector
confidence: scalar
source_id: reference
timestamp: scalar or ordered label
stance: finite label
```

### Problem 31.2: Specify an edge type

Define a typed edge for support. Include source type, target type, and at least two fields.

Answer check example:

```text
supports: Evidence -> Claim
fields:
  confidence: scalar
  extraction_method: label
  timestamp: ordered label
```

An edge type is a mathematical commitment about what relation is allowed.

### Problem 31.3: Specify a hyperedge

Define a hyperedge or multi-input relation for validation.

Answer check example:

```text
validation_event: Claim x Evidence x Rule -> Status
fields:
  status: finite label
  score: scalar
  reviewer_or_model: reference
```

Some relations cannot be faithfully represented as independent pairwise edges.

### Problem 31.4: Specify legal transformations

For your memory graph, list three transformations that should preserve meaning and three that should change meaning.

Answer check examples:

```text
preserve: node relabeling, equivalent schema migration, reordering retrieved candidates
change: reversing support edge, deleting provenance, changing timestamp order
```

### Problem 31.5: Pick invariants

Name five invariants your architecture should test.

Answer check examples:

```text
permutation-invariant graph scores
schema path equations
source provenance preservation
local-to-global sheaf consistency
calibrated posterior under evidence update
```

### Problem 31.6: Define one equivariant output

Give an output that should move with node relabeling rather than stay fixed.

Answer check example:

```text
node-level belief embeddings should satisfy H(PAP^T)=P H(A)
```

Node-level objects usually transform with the nodes.

### Problem 31.7: Define one invariant output

Give an output that should stay fixed under node relabeling.

Answer check example:

```text
global contradiction score f(A) should satisfy f(PAP^T)=f(A)
```

Graph-level summaries usually ignore arbitrary node names.

### Problem 31.8: Define a sheaf consistency test

Write a local-to-global consistency rule for two nodes sharing an overlap.

Answer check example:

```text
res_{u -> e}(x_u) = res_{v -> e}(x_v)
```

The restriction maps specify what agreement means.

### Problem 31.9: Define a decay rule

Write one decay/reinforcement update for an edge weight.

Answer check example:

```text
w_{t+1} = 0.9 w_t + reinforcement_t
```

The architecture should say what decays and what can reinforce it.

### Problem 31.10: Define a rewrite rule

Write one guarded rewrite rule for duplicate claims.

Answer check example:

```text
If two claims have same normalized text, same source, and compatible timestamps,
merge them and preserve both original IDs as provenance.
```

Rewrite rules should include guards and provenance behavior.

### Problem 31.11: Define an evaluation panel

Name five evaluation tests for the architecture.

Answer check example:

```text
retrieval recall
path contradiction test
permutation invariance test
sheaf gluing test
decay stress test
```

Evaluation should match the mathematical promises in the design.

### Problem 31.12: Audit the mathematical contract

A design spec says:

```text
We store claims in a graph and retrieve useful memories.
```

Name five mathematical commitments missing from this spec.

Answer check:

```text
Possible answers:
node and edge types
state space
legal transformations
invariants
restriction maps or consistency rules
decay and reinforcement dynamics
rewrite rules and guards
evaluation tests
```

The final design document should test the course's whole vocabulary, not just name a graph.
