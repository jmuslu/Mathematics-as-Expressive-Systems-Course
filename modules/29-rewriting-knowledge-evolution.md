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

## Research Bridge

Graph rewriting and categorical rewriting give formal tools for structured state evolution.

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

### Problem 29.2: Termination question

Rule: `A -> AA`. Starting from `A`, does rewriting terminate?

Answer check: no. It can grow forever.

### Problem 29.3: Confluence question

Rules:

```text
A -> B
A -> C
```

If B and C cannot rewrite further, is the system confluent?

Answer check: no. The same start has two incompatible normal forms.

### Problem 29.4: Memory design

Why do rewrite systems need guards?

Answer check: without guards, memory evolution can create infinite expansion, inconsistent conclusions, or duplicate closure paths.
