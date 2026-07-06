# Module 30: Evaluating Arguments and Failure Modes

## Lecture Promise

You will learn to evaluate an evidence pipeline by invariants, coherence, transformation safety, and validation quality.

## Prerequisites

- Graphs
- Probability
- Invariance
- Sheaves

## Why The Old Object Fails

Accuracy alone is not enough. An argument can reach the right answer while its support structure is incoherent.

## Base Case

Two paths support the same conclusion. One is valid, the other contains a contradiction. A scalar score may miss this; path validation should catch it.

## Running Example: Debate Team Evaluation

Imagine judging a debate team. It is not enough to ask whether the final answer sounded right.

You would check:

- Did they cite the right evidence?
- Did their supporting path contradict itself?
- Did they ignore an important counterexample?
- Would the argument still work if speaker order changed?
- Did confidence match past accuracy?

That is the spirit of this module. Evaluation is not one grade. It is a panel of tests matched to the promises an argument pipeline made.

## Formal Object

Evaluation dimensions:

- retrieval usefulness
- path coherence
- local-to-global consistency
- transformation invariance
- update stability
- decay behavior
- contradiction handling
- calibration of confidence

## Failure Mode

Benchmarks can reward shallow retrieval and miss structural collapse.

## Problem Ladder

1. Design a test for node relabeling invariance.
2. Design a test for path contradiction.
3. Design a test for decay disconnecting a reasoning path.

## Design Connection

Evaluation should test the mathematical promises of the evidence pipeline, not just the final answer string.

## Hand Problem Trail

### Problem 30.1: Retrieval metrics

A system returns 5 memories. Relevant items are at ranks 1, 3, and 5. Compute precision@5, recall@5, and F1@5 if there are 6 relevant items total.

Answer check:

```text
precision@5 = 3/5
recall@5 = 3/6 = 1/2

F1@5 = 2PR/(P+R)
     = 2(3/5)(1/2)/(3/5 + 1/2)
     = (3/5)/(11/10)
     = 6/11
```

### Problem 30.2: Precision versus recall interpretation

In Problem 30.1, is the bigger weakness precision or recall?

Answer check:

```text
precision@5 = 0.6
recall@5 = 0.5
Recall is lower.
```

The system found only half of all relevant items.

### Problem 30.3: MRR

For three queries, the first relevant results appear at ranks 1, 4, and 10. Compute MRR.

Answer check:

```text
MRR = (1 + 1/4 + 1/10)/3 = 1.35/3 = 0.45
```

### Problem 30.4: NDCG by hand

A retrieval system returns three evidence cards with graded relevance scores:

```text
rank 1: relevance 3
rank 2: relevance 0
rank 3: relevance 2
```

Using:

```text
DCG@3 = rel_1/log2(2) + rel_2/log2(3) + rel_3/log2(4)
NDCG@3 = DCG@3 / IDCG@3
```

compute `DCG@3` and approximate `NDCG@3`. The ideal order is `(3,2,0)`, and `log2(3) ~~ 1.585`.

Answer check:

```text
DCG@3 = 3/1 + 0/1.585 + 2/2 = 4
IDCG@3 = 3/1 + 2/1.585 + 0/2
       ~~ 3 + 1.262
       = 4.262

NDCG@3 ~~ 4/4.262 ~~ 0.938
```

NDCG rewards placing stronger evidence earlier while still giving partial credit to useful evidence found lower in the ranking.

### Problem 30.5: Invariance test

You relabel every card in a debate evidence graph. A graph-level contradiction score changes from 0.7 to 0.4. What failure occurred?

Answer check: the score is not permutation invariant, so it depends on representation artifacts.

### Problem 30.6: Equivariance test

A node-level embedding matrix `H` should satisfy:

```text
H(PAP^T) = P H(A)
```

If the rows do not permute with the nodes, what failure occurred?

Answer check:

```text
The node-level representation is not permutation equivariant.
```

Graph-level and node-level outputs have different symmetry requirements.

### Problem 30.7: Path contradiction test

A reasoning path says:

```text
Evidence card S supports conclusion C
Evidence card S contradicts conclusion C
```

What should an evaluation test flag?

Answer check:

```text
It should flag a local-to-global consistency or contradiction-handling failure.
```

Correct final text is not enough if the supporting path is incoherent.

### Problem 30.8: Sheaf consistency test

Two retrieved passages agree on source identity but disagree on stance. If the sheaf overlap tracks stance, should they glue?

Answer check:

```text
No. Their restrictions disagree on stance.
```

Evaluation should test the actual restriction maps the architecture claims to use.

### Problem 30.9: Decay stress test

A reasoning path has edge weights:

```text
0.9, 0.8, 0.4
```

If the system drops edges below `0.5`, what happens to the path?

Answer check:

```text
The edge with weight 0.4 is dropped, so the path breaks.
```

Decay can destroy global reasoning even when most local edges look strong.

### Problem 30.10: Calibration test with ECE

A validation system makes 10 predictions grouped into two confidence bins:

```text
bin 1: 4 predictions, average confidence 0.60, accuracy 0.50
bin 2: 6 predictions, average confidence 0.90, accuracy 0.75
```

Compute the expected calibration error:

```text
ECE = sum_bins (bin_size / total_size) * |accuracy - confidence|
```

Answer check:

```text
bin 1 contribution = (4/10)|0.50 - 0.60| = 0.4 * 0.10 = 0.04
bin 2 contribution = (6/10)|0.75 - 0.90| = 0.6 * 0.15 = 0.09

ECE = 0.04 + 0.09 = 0.13
```

Confidence should mean something statistically testable. A model can rank answers well and still be overconfident.

### Problem 30.11: Debate-card component evaluation

A debate assistant receives:

```text
judge question: When did the lab meeting move?
retrieved evidence card: The lab meeting moved from Tuesday to Thursday.
answer: The lab meeting is Thursday.
```

Name the component being tested by each question:

```text
A. Did the retrieved evidence card address the judge question?
B. Did the answer stay supported by the evidence card?
C. Did the answer respond to the judge question?
```

Answer check:

```text
A. context relevance
B. answer faithfulness
C. answer relevance
```

A correct-looking final answer can hide which part of the pipeline succeeded. Component-wise evaluation separates evidence selection, grounding, and response quality.

### Problem 30.12: Benchmark failure mode

A benchmark only checks final answer strings. Name one structural failure it might miss.

Answer check:

```text
Possible answers: incoherent reasoning path, broken provenance, non-invariant graph score, failed sheaf gluing, overconfident posterior, unstable decay behavior.
```

The evaluation should test the mathematical promises of the argument pipeline, not only the final sentence.
