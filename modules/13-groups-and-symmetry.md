# Module 13: Groups and Symmetry

## Lecture Promise

You will understand groups as legal transformations that preserve some structure, and why this is the first serious language for safe graph evolution.

## Prerequisites

- Functions and composition
- Matrix multiplication
- Basic graph vocabulary

## Why The Old Object Fails

Graph theory can tell you what is connected. It does not automatically tell you which transformations preserve meaning.

For a second-brain system, you need to ask:

- Can I relabel nodes without changing the system?
- Can I merge or rotate a representation safely?
- Which edits preserve validation?
- Which transformations break the state space?

That is symmetry.

## Base Case

Let a square have rotations:

```text
e, r, r^2, r^3
```

where r is a 90-degree rotation. Composition stays inside the set:

```text
r^2 r^3 = r^5 = r
```

Closure is what makes this a transformation system rather than a list of moves.

## Formal Object

A group G is a set with an operation satisfying:

- Closure
- Associativity
- Identity
- Inverses

The design translation:

```text
safe transformations should compose, undo, and stay valid
```

## Worked Derivation

If g has inverse g^-1, then applying g and then g^-1 preserves the original object:

```text
g^-1(g(x)) = x
```

This is the simplest mathematical form of reversible graph transformation.

## Failure Mode

Not every useful operation is a group operation.

- Decay may not be invertible.
- Summarization may lose information.
- Consolidation may merge nodes irreversibly.

That means some memory operations are not symmetries. The course will distinguish reversible transformations from irreversible dynamics.

## Problem Ladder

1. List the group table for rotations of a square.
2. Give a graph edit that has an inverse and one that does not.
3. Explain why node relabeling should preserve graph meaning.

## Memory-System Connection

Groups answer: what transformations preserve the meaning of the memory graph?

## Research Bridge

The G-invariance tutorial uses groups to define transformations under which a neural representation should be invariant or equivariant.

## Hand Problem Trail

### Problem 13.1: Is it a group?

For each set and operation, decide if it is a group.

```text
integers under addition
positive reals under multiplication
integers under multiplication
nonzero reals under multiplication
```

Answer check:

```text
yes, yes, no, yes
```

### Problem 13.2: Symmetries of a two-node edge

A graph has nodes `{1,2}` and one edge between them. List all node permutations that preserve adjacency.

Answer check: identity and swap. This group is isomorphic to C2.

### Problem 13.3: Cayley table for C2

Let elements be `e` and `s`, where `s^2=e`. Write the multiplication table.

Answer check:

```text
   e s
 e e s
 s s e
```

### Problem 13.4: Invariant question

A feature returns the number of edges in a graph. Is it invariant under node relabeling?

Answer check: yes. Relabeling changes names, not the number of edges.
