# Module 29: Rewriting Systems and Knowledge Evolution

## Lecture Promise

You will understand graph evolution as a controlled rewriting process.

## Prerequisites

- Graphs
- Categories
- Rules and constraints

## Why The Old Object Fails

Memory updates are graph edits:

- add claim
- merge duplicate
- weaken edge
- split concept
- mark contradiction

Without rewrite rules, evolution becomes ad hoc.

## Base Case

A rewrite rule:

```text
two equivalent claims with same source -> one merged claim with reinforced support
```

## Running Example: Cleaning Study Notes

Suppose two friends are preparing for an exam and both write:

```text
"Eigenvectors keep direction."
```

One note came from lecture, the other from a textbook. A careless cleanup rule might merge them and keep only one source. A better rewrite rule says:

```text
same normalized claim + compatible meaning -> merged claim with both sources preserved
```

The operation is not just deletion. It is a legal edit with a guard and a provenance rule. If another rule marks one version as contradicted before the merge, the order of edits matters. That is why rewriting needs termination, confluence, and critical-pair thinking.

## Formal Object

A rewriting system specifies legal transformations from one structured state to another.

## Failure Mode

Rewrite rules can fail to terminate, fail to be confluent, or erase important distinctions.

## Problem Ladder

1. Write a rule for merging duplicate claims.
2. Write a rule for contradiction insertion.
3. Explain confluence in terms of memory update order.

## Memory-System Connection

Knowledge evolution needs legal graph edits, not just append-only memory.

## Hand Problem Trail

### Problem 29.1: Rewrite rule

Rule:

```text
(A cites B) and (B supports C) -> (A indirectly supports C)
```

Apply it to:

```text
Paper1 cites Paper2
Paper2 supports ClaimX
```

Answer check: `Paper1 indirectly supports ClaimX`.

### Problem 29.2: Apply a merge rule

Rule:

```text
two notes with same normalized claim and compatible meaning -> one merged note preserving both sources
```

Apply it to:

```text
n1: "Eigenvectors keep direction.", source lecture, support 0.6
n2: "eigenvectors keep direction", source textbook, support 0.7
```

Answer check:

```text
Merge n1 and n2 into one normalized note:
"eigenvectors keep direction"
sources = {lecture, textbook}
support is reinforced by the chosen update rule.
```

The exact reinforcement formula must be specified separately.

### Problem 29.3: Guarded rewrite

Add a guard to the merge rule in Problem 29.2 to prevent bad merges.

Answer check example:

```text
Only merge if normalized text matches, the mathematical meaning is compatible, and neither note has a contradiction or version tag that should remain separate.
```

Guards prevent rules from firing in contexts where they would erase meaning.

### Problem 29.4: Termination question

Rule: `A -> AA`. Starting from `A`, does rewriting terminate?

Answer check: no. It can grow forever.

### Problem 29.5: Termination measure

A cleanup rule merges two duplicate note nodes into one note node:

```text
DuplicatePair -> SingleNode
```

Assume the rule never creates new nodes. Give a simple measure that proves repeated merging must terminate on a finite graph.

Answer check:

```text
Use number of note nodes as the measure.
Each merge reduces node count by 1.
A finite nonnegative integer cannot decrease forever.
```

Termination is not a feeling that cleanup "should finish." It is a proof that some well-founded quantity strictly decreases.

### Problem 29.6: Confluence question

Rules:

```text
A -> B
A -> C
```

If B and C cannot rewrite further, is the system confluent?

Answer check: no. The same start has two incompatible normal forms.

### Problem 29.7: Confluent-looking system

Rules:

```text
A -> B
B -> C
A -> C
```

Starting from A, can both paths reach the same normal form?

Answer check:

```text
Path 1: A -> C
Path 2: A -> B -> C

Both paths reach C.
```

Different rewrite orders can still agree if they join.

### Problem 29.8: Critical pair intuition

A claim `c` matches two rewrite rules:

```text
R1: merge duplicate claims
R2: mark contradicted claims
```

If applying `R1` first removes the duplicate node that `R2` would have marked, what must be checked?

Answer check:

```text
Check whether the two rewrite orders can be joined to compatible final states.
```

If not, the system has an order-dependent critical pair: two locally reasonable edits conflict because their matches overlap.

### Problem 29.9: Provenance-preserving rewrite

A rule merges two claims. Name one piece of provenance the output should keep.

Answer check:

```text
Possible answers: original claim IDs, sources, timestamps, confidence history, contradiction links.
```

Merging should not mean forgetting why the merged node exists.

### Problem 29.10: Delete rule failure

Rule:

```text
delete any claim below confidence 0.2
```

Name one danger.

Answer check:

```text
The system may delete rare but important minority evidence or remove a weak signal needed for later contradiction detection.
```

Rewrite rules need epistemic safeguards, not only thresholds.

### Problem 29.11: Normal form

What is a normal form in a rewriting system?

Answer check:

```text
A state where no rewrite rule applies.
```

Normal form does not automatically mean true or good; it only means no rule can currently change it.

### Problem 29.12: Memory design

Why do rewrite systems need guards?

Answer check: without guards, memory evolution can create infinite expansion, inconsistent conclusions, or duplicate closure paths.
