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
two claims with same normalized text and same source -> one claim with reinforced support
```

Apply it to:

```text
c1: "Aspirin reduces fever", source s1, support 0.6
c2: "aspirin reduces fever", source s1, support 0.7
```

Answer check:

```text
Merge c1 and c2 into one normalized claim with source s1 and reinforced support.
```

The exact reinforcement formula must be specified separately.

### Problem 29.3: Guarded rewrite

Add a guard to the merge rule in Problem 29.2 to prevent bad merges.

Answer check example:

```text
Only merge if normalized text matches, source matches, and timestamps are within the same edition/version window.
```

Guards prevent rules from firing in contexts where they would erase meaning.

### Problem 29.4: Termination question

Rule: `A -> AA`. Starting from `A`, does rewriting terminate?

Answer check: no. It can grow forever.

### Problem 29.5: Terminating rule

Rule:

```text
AA -> A
```

Starting from `AAAA`, apply the rule until no more rewrites are possible.

Answer check:

```text
AAAA -> AAA -> AA -> A
```

This sequence terminates at normal form `A`.

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
Yes. A -> C directly, and A -> B -> C.
```

Different rewrite orders can still agree if they join.

### Problem 29.8: Critical pair intuition

Two rules both match the same claim:

```text
R1: mark as contradicted
R2: merge with duplicate
```

What question should you ask before allowing both?

Answer check:

```text
Do the two rewrite orders lead to compatible final states?
```

Critical pairs expose order-dependence.

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
