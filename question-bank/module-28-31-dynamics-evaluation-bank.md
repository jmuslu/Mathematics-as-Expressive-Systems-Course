# Modules 28-31 Bank: Dynamics, Rewriting, Evaluation, and Architecture

Source posture: original course problems inspired by public sources on dynamic graphs, graph rewriting, RAG evaluation, and graph-based agent memory. These are reserve candidates, not promoted lecture text.

## Source Anchors

- [A survey of dynamic graph neural networks](https://arxiv.org/abs/2404.18211)
- [Graph-based Agent Memory: Taxonomy, Techniques, and Applications](https://arxiv.org/abs/2602.05665)
- [An Introduction to Graph Rewriting](https://lig-membres.imag.fr/echahed/ISR-slides1and2.pdf)
- [A Tutorial on Graph Transformation](https://research.utwente.nl/files/247999750/K_nig2018tutorial.pdf)
- [Confluence of Graph Rewriting with Interfaces](https://eprints.soton.ac.uk/406231/1/main.pdf)
- [Evaluation of Retrieval-Augmented Generation: A Survey](https://arxiv.org/html/2405.07437v1)
- [Retrieval Augmented Generation Evaluation in the Era of Large Language Models](https://arxiv.org/html/2504.14891v1)

## 28.decay-reinforcement.closed-form.a

```text
Module: 28
Topic: decay with constant reinforcement
Role: derivation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by dynamic graph update models and discrete-time systems.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

An edge weight updates by:

```text
w_{t+1} = 0.6w_t + 2
w_0 = 0
```

Compute `w1`, `w2`, `w3`, and the fixed point.

## Answer Check

```text
w1 = 2
w2 = 0.6(2)+2 = 3.2
w3 = 0.6(3.2)+2 = 3.92

Fixed point:
w = 0.6w + 2
0.4w = 2
w = 5
```

## Intuition

Reinforcement raises the weight, while decay prevents unbounded growth.

## Modeling Implication

A memory update rule should state both its transient behavior and its limiting behavior.

## Reserve Notes

Good follow-up to the current fixed-point problem.

## 28.two-node-stability.a

```text
Module: 28
Topic: two-node linear dynamics
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Inspired by dynamic graph state evolution examples.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A two-topic attention state updates by:

```text
x_{t+1} = A x_t
A = [0.5 0.5]
    [0.5 0.5]
x0 = (8, 2)
```

Compute `x1` and `x2`.

## Answer Check

```text
x1 = (5,5)
x2 = (5,5)
```

The state reaches the average after one step and then stays there.

## Intuition

This update is a projection onto the equal-coordinate subspace.

## Modeling Implication

Fast agreement can be useful, but it may erase meaningful contrast.

## Reserve Notes

Connects dynamics to Reynolds averaging and oversmoothing.

## 28.threshold-event.a

```text
Module: 28
Topic: threshold event under decay
Role: computation
Status: lecture candidate
Source use: original
Source note: Original decay stress-test problem.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

An edge starts at weight `1.0` and decays by:

```text
w_{t+1} = 0.7w_t
```

The system drops edges below `0.4`. After how many updates is the edge first dropped?

## Answer Check

```text
w1 = 0.7
w2 = 0.49
w3 = 0.343
```

It is first below `0.4` after 3 updates.

## Intuition

Continuous decay can create discrete topology changes when thresholds are applied.

## Modeling Implication

Decay rules should be tested for when they break paths, not just how they change scalar weights.

## Reserve Notes

Good bridge from Module 28 to evaluation stress tests.

## 28.playlist-attention.recurrence.a

```text
Module: 28
Topic: decay with replay reinforcement
Role: warm-up / computation
Status: promoted
Source use: original, source-informed
Source note: Inspired by discrete-time dynamic graph/state update examples where state evolves by decay plus new input.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A song's playlist attention decays between weeks, but replaying it after dinner adds reinforcement:

```text
w_{t+1} = 0.8w_t + 1
w_0 = 0
```

Compute `w1`, `w2`, and `w3`, then find the fixed point.

## Answer Check

```text
w1 = 1
w2 = 0.8(1)+1 = 1.8
w3 = 0.8(1.8)+1 = 2.44

w = 0.8w + 1
0.2w = 1
w = 5
```

## Intuition

Decay pulls the attention weight down, while repeated replay pushes it up toward a steady level.

## Modeling Implication

Dynamic systems should report both transient updates and long-run behavior.

## Reserve Notes

Promoted into Module 28 to align the recurrence arithmetic with the playlist-attention running example.

## 28.attractor.bad-loop.a

```text
Module: 28
Topic: bad attractor
Role: failure mode
Status: reserve
Source use: original
Source note: Original course-style dynamics failure problem.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A recommendation score updates by:

```text
x_{t+1} = 1.1x_t + click_t
```

where high `x_t` causes more clicks. Name the dynamical failure mode.

## Answer Check

```text
This can create a self-reinforcing popularity loop.
```

The system may converge toward what was initially boosted, not what is best supported.

## Intuition

Feedback can amplify historical accident.

## Modeling Implication

Reinforcement needs safeguards, diversity checks, or counter-evidence channels.

## Reserve Notes

Useful everyday analogy for attractor failure.

## 29.rewrite-critical-pair.a

```text
Module: 29
Topic: critical pair
Role: conceptual check
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by graph rewriting confluence and critical-pair discussions.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A claim `c` matches two rewrite rules:

```text
R1: merge duplicate claims
R2: mark contradicted claims
```

If applying `R1` first removes the duplicate node that `R2` would have marked, what must be checked?

## Answer Check

```text
Check whether the two rewrite orders can be joined to compatible final states.
```

If not, the system has an order-dependent critical pair.

## Intuition

Two locally reasonable edits can conflict when they overlap.

## Modeling Implication

Memory evolution needs rewrite-order audits, not only individual rule tests.

## Reserve Notes

Good bridge from term rewriting to graph rewriting.

## 29.termination-measure.a

```text
Module: 29
Topic: termination measure
Role: derivation
Status: reserve
Source use: original, source-informed
Source note: Inspired by rewriting termination arguments.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A rewrite rule merges two duplicate nodes into one node:

```text
DuplicatePair -> SingleNode
```

Assume the rule never creates new nodes. Give a simple measure that proves repeated merging must terminate on a finite graph.

## Answer Check

```text
Use number of nodes as the measure.
Each merge reduces node count by 1.
A finite nonnegative integer cannot decrease forever.
```

## Intuition

Termination can be proven by finding a quantity that strictly decreases.

## Modeling Implication

Rewrite rules should come with a progress measure when possible.

## Reserve Notes

Graduate-style reasoning without heavy formalism.

## 29.provenance-guard.a

```text
Module: 29
Topic: guarded rewrite
Role: modeling interpretation
Status: lecture candidate
Source use: original
Source note: Original guarded-rewrite design problem.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A rule says:

```text
same title -> merge document nodes
```

Give two guards that make this safer.

## Answer Check

```text
Possible guards:
same author or source ID
same edition/version/date
compatible content hash or quote overlap
preserve both original IDs as provenance
```

## Intuition

The title alone may be too weak an overlap condition.

## Modeling Implication

Rewrite rules should specify both match conditions and what provenance survives.

## Reserve Notes

Pairs naturally with sheaf false-peace examples.

## 29.normal-form-not-truth.a

```text
Module: 29
Topic: normal form limitation
Role: failure mode
Status: reserve
Source use: original
Source note: Original conceptual guardrail.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A knowledge graph reaches a normal form: no rewrite rule applies. Does that mean the graph is correct?

## Answer Check

```text
No. It only means no current rule can change it.
The rules may be incomplete, too weak, or wrong.
```

## Intuition

Normal form is a property of the rewrite system, not a guarantee of truth.

## Modeling Implication

Rule coverage and evaluation still matter after normalization.

## Reserve Notes

Useful conceptual check for Module 29.

## 30.retrieval-metric-panel.a

```text
Module: 30
Topic: retrieval metric panel
Role: computation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by RAG evaluation survey discussions of retrieval and generation components.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A system retrieves 4 chunks. Relevant chunks are at ranks 2 and 4. There are 5 relevant chunks in the corpus. Compute precision@4 and recall@4.

## Answer Check

```text
precision@4 = 2/4 = 0.5
recall@4 = 2/5 = 0.4
```

## Intuition

Precision asks how clean the retrieved set is. Recall asks how much of the relevant set was found.

## Modeling Implication

Retrieval evaluation and generation evaluation should be separated before being recombined.

## Reserve Notes

Small variant for the existing metrics sequence.

## 30.faithfulness-context-test.a

```text
Module: 30
Topic: faithfulness evaluation
Role: conceptual check
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by RAG evaluation metrics such as relevance, accuracy, and faithfulness.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Retrieved context says:

```text
The meeting was moved from Tuesday to Thursday.
```

The answer says:

```text
The meeting is on Tuesday.
```

Which evaluation dimension should flag this?

## Answer Check

```text
Faithfulness or context-grounded correctness should flag it.
```

The answer contradicts the retrieved context.

## Intuition

The final answer can be fluent and relevant while failing to respect evidence.

## Modeling Implication

Evaluation should separately test retrieval, grounding, synthesis, and structural consistency.

## Reserve Notes

Good non-mathematical but essential evaluation check.

## 30.component-panel.rag-eval.a

```text
Module: 30
Topic: component-wise RAG evaluation
Role: conceptual check
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by RAGAS and ARES decomposition of context relevance, answer faithfulness, and answer relevance.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A RAG-style memory system receives:

```text
query: What day is the lab meeting?
retrieved context: The lab meeting moved from Tuesday to Thursday.
answer: The lab meeting is Thursday.
```

Classify which component each question evaluates:

```text
A. Did the retrieved context address the query?
B. Did the answer stay supported by the retrieved context?
C. Did the answer respond to the user's query?
```

## Answer Check

```text
A. context relevance
B. answer faithfulness
C. answer relevance
```

## Intuition

A correct final answer can hide which component succeeded. Component-wise evaluation separates retrieval, grounding, and response quality.

## Modeling Implication

Second-brain evaluation should not collapse every failure into one accuracy score; it should locate the broken map in the pipeline.

## Reserve Notes

Good bridge from standard RAG evaluation frameworks to the course's structural evaluation panel.

## 30.calibration.ece.two-bin.a

```text
Module: 30
Topic: calibration and expected calibration error
Role: computation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by calibration papers using reliability diagrams and expected calibration error.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A validation system makes 10 predictions grouped into two confidence bins:

```text
bin 1: 4 predictions, average confidence 0.60, accuracy 0.50
bin 2: 6 predictions, average confidence 0.90, accuracy 0.75
```

Compute the expected calibration error:

```text
ECE = sum_bins (bin_size / total_size) * |accuracy - confidence|
```

## Answer Check

```text
bin 1 contribution = (4/10)|0.50 - 0.60| = 0.4 * 0.10 = 0.04
bin 2 contribution = (6/10)|0.75 - 0.90| = 0.6 * 0.15 = 0.09

ECE = 0.04 + 0.09 = 0.13
```

## Intuition

Calibration asks whether confidence means what it claims statistically. A model can rank answers well and still be overconfident.

## Modeling Implication

Memory validation should evaluate belief scores as probabilities, not just as ordering signals.

## Reserve Notes

Strong candidate for Module 30 if the calibration problem needs a more quantitative answer check.

## 30.invariance-regression-test.a

```text
Module: 30
Topic: invariance regression test
Role: derivation
Status: reserve
Source use: original
Source note: Original evaluation test design problem.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A graph-level score should be invariant under node relabeling. On graph `A`, the score is `0.62`. On relabeled graph `PAP^T`, the score is `0.62`. On a second relabeling, it is `0.58`. What should the test report?

## Answer Check

```text
The first relabeling passes.
The second relabeling fails because 0.58 != 0.62.
```

## Intuition

Invariance must hold for every legal relabeling, not just one sampled case.

## Modeling Implication

Evaluation should include repeated transformation tests, not a single happy-path check.

## Reserve Notes

Reinforces invariance as an audit, not a claim.

## 30.decay-path-break.a

```text
Module: 30
Topic: decay stress test
Role: computation
Status: reserve
Source use: original
Source note: Original decay evaluation problem.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A reasoning path has four edge weights:

```text
0.95, 0.75, 0.55, 0.45
```

After one month, each decays by factor `0.8`. The system drops edges below `0.4`. Does the path survive?

## Answer Check

```text
decayed weights:
0.76, 0.60, 0.44, 0.36
```

The last edge drops below `0.4`, so the path breaks.

## Intuition

A path is only as stable as the weakest edge under the update rule.

## Modeling Implication

Decay evaluation should test multi-hop structure, not isolated edge averages.

## Reserve Notes

Good integration problem linking Modules 28 and 30.

## 31.architecture-math-contract.a

```text
Module: 31
Topic: architecture specification
Role: modeling interpretation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by graph-based agent memory lifecycle and evaluation sources.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A design spec says:

```text
We store claims in a graph and retrieve useful memories.
```

Name five mathematical commitments missing from this spec.

## Answer Check

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

## Intuition

An architecture is not mathematically specified until its objects, operations, and invariants are explicit.

## Modeling Implication

The final design document should test the course's whole vocabulary, not just name a graph.

## Reserve Notes

Good capstone diagnostic.

## 31.evaluation-alignment.a

```text
Module: 31
Topic: evaluation alignment
Role: conceptual check
Status: reserve
Source use: original
Source note: Original architecture-studio audit problem.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

An architecture promises:

```text
permutation-invariant graph scores
sheaf-based consistency
decay-aware retrieval paths
```

Name one evaluation test for each promise.

## Answer Check

```text
permutation-invariant graph scores: relabel nodes and compare graph-level score
sheaf-based consistency: test whether local restrictions agree on overlaps
decay-aware retrieval paths: decay edge weights and check whether valid paths survive
```

## Intuition

Every mathematical promise needs a matching test.

## Modeling Implication

Architecture and evaluation should be co-designed.

## Reserve Notes

Useful final-module bridge from specification to QA.

## 31.rewrite-dynamics-conflict.a

```text
Module: 31
Topic: architecture conflict
Role: failure mode
Status: reserve
Source use: original
Source note: Original integration problem across rewrite and dynamics.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A system has:

```text
decay rule: delete edges below 0.2
rewrite rule: if a contradiction edge exists, preserve its provenance
```

What conflict should the architecture resolve?

## Answer Check

```text
The decay rule might delete a weak contradiction edge whose provenance the rewrite policy says should be preserved.
```

The architecture must specify priority, exceptions, or archival behavior.

## Intuition

Local rules can conflict even when each rule is reasonable alone.

## Modeling Implication

The final spec should include rule precedence or conflict-resolution policy.

## Reserve Notes

Good capstone failure-mode exercise.
