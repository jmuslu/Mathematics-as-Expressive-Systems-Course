# Module 29: Rewriting Systems and Structured Edits

## Lecture Promise

You will understand graph evolution as a controlled rewriting process for structured edits.

## Prerequisites

- Graphs
- Categories
- Rules and constraints

## Why The Old Object Fails

Shared study-sheet cleanup uses graph edits:

- add note
- merge duplicate
- weaken edge
- split concept
- mark contradiction or correction

Without rewrite rules, evolution becomes ad hoc.

## Base Case

A rewrite rule:

```text
two equivalent notes with compatible meaning -> one merged note with both origins preserved
```

## Running Example: Cleaning Study Notes

Suppose two friends are preparing for an exam and both write:

```text
"Eigenvectors keep direction."
```

One note came from lecture, the other from a textbook. A careless cleanup rule might merge them and erase where each version came from. A better rewrite rule says:

```text
same normalized statement + compatible meaning -> merged note with both origins preserved
```

The operation is not just deletion. It is a legal edit with a guard and a provenance rule. If another rule marks one version as contradicted before the merge, the order of edits matters. That is why rewriting needs termination, confluence, and critical-pair thinking.

## Formal Object

A rewriting system specifies legal transformations from one structured state to another.

## Failure Mode

Rewrite rules can fail to terminate, fail to be confluent, or erase important distinctions.

## Problem Ladder

1. Write a rule for merging duplicate study-sheet entries.
2. Write a rule for inserting a correction without erasing the older version.
3. Explain confluence in terms of shared-note cleanup order.

## Representation Design Connection

Shared notes need legal graph edits, not just append-only accumulation or casual deletion.

## Hand Problem Trail

### Problem 29.1: Rewrite rule

Rule:

```text
(A cites B) and (B supports C) -> (A indirectly supports C)
```

Apply it to:

```text
Paper1 cites Paper2
Paper2 supports TheoremX
```

Answer check: `Paper1 indirectly supports TheoremX`.

### Problem 29.2: Apply a merge rule

Rule:

```text
two notes with same normalized statement and compatible meaning -> one merged note preserving both origins
```

Apply it to:

```text
n1: "Eigenvectors keep direction.", origin lecture, support 0.6
n2: "eigenvectors keep direction", origin textbook, support 0.7
```

Answer check:

```text
Merge n1 and n2 into one normalized note:
"eigenvectors keep direction"
origins = {lecture, textbook}
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

A note `n` matches two rewrite rules:

```text
R1: merge duplicate notes
R2: mark corrected notes
```

If applying `R1` first removes the duplicate note that `R2` would have marked, what must be checked?

Answer check:

```text
Check whether the two rewrite orders can be joined to compatible final states.
```

If not, the system has an order-dependent critical pair: two locally reasonable edits conflict because their matches overlap.

### Problem 29.9: Provenance-preserving rewrite

A rule merges two notes. Name one piece of provenance the output should keep.

Answer check:

```text
Possible answers: original note IDs, origins, timestamps, support history, correction links.
```

Merging should not mean forgetting why the merged node exists.

### Problem 29.10: Delete rule failure

Rule:

```text
delete any note below confidence 0.2
```

Name one danger.

Answer check:

```text
The cleanup may delete a rare but important warning or remove a weak signal needed for later correction detection.
```

Rewrite rules need safety guards, not only thresholds.

### Problem 29.11: Normal form

What is a normal form in a rewriting system?

Answer check:

```text
A state where no rewrite rule applies.
```

Normal form does not automatically mean true or good; it only means no rule can currently change it.

### Problem 29.12: Guard design

Why do rewrite systems need guards?

Answer check: without guards, note cleanup can create infinite expansion, inconsistent conclusions, unsafe merges, or duplicate closure paths.
