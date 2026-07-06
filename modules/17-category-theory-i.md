# Module 17: Category Theory I - Objects and Morphisms

## Lecture Promise

You will understand category theory as the language of structure-preserving maps.

## Prerequisites

- Functions
- Sets
- Vector spaces
- Graphs

## Why The Old Object Fails

A second-brain system has many kinds of structures:

- Graphs
- Schemas
- Vector spaces
- Evidence sets
- Belief states
- Validation processes

You need a way to compare systems without pretending they are the same kind of object.

## Base Case

In the category of graphs:

- Objects are graphs.
- Morphisms are structure-preserving graph maps.

In the category of vector spaces:

- Objects are vector spaces.
- Morphisms are linear maps.

## Formal Object

A category has:

- Objects
- Morphisms between objects
- Identity morphisms
- Associative composition

## Worked Derivation

If:

```text
f: A -> B
g: B -> C
h: C -> D
```

then associativity says:

```text
h o (g o f) = (h o g) o f
```

This is the rule that makes multi-step pipelines composable.

## Failure Mode

Category theory becomes empty if you do not specify the morphisms.

The key design question is always:

```text
What structure must the maps preserve?
```

## Problem Ladder

1. Name objects and morphisms in Set, Vect, and Graph.
2. Give a graph map that preserves adjacency.
3. Explain why a memory transform should be a morphism of typed graphs.

## Memory-System Connection

Category theory is the language for comparing memory states, schemas, retrieval strategies, and validation pipelines.

## Research Bridge

Seven Sketches in Compositionality develops applied category theory through databases, circuits, and systems.

## Hand Problem Trail

### Problem 17.1: Small category from a workflow

Objects:

```text
RawMemory, ValidatedClaim, Summary
```

Morphisms:

```text
validate: RawMemory -> ValidatedClaim
summarize: ValidatedClaim -> Summary
```

What composite morphism must exist?

Answer check: `summarize o validate: RawMemory -> Summary`.

### Problem 17.2: Identity morphisms

Write the identity morphism for each object.

Answer check: `id_RawMemory`, `id_ValidatedClaim`, `id_Summary`.

### Problem 17.3: Associativity by example

Suppose also `embed: Summary -> Vector`. Compare `embed o (summarize o validate)` with `(embed o summarize) o validate`.

Answer check: both are the same typed path from `RawMemory` to `Vector`.

### Problem 17.4: Category error

Why is `validate o summarize` not legal in this workflow?

Answer check: summarize outputs `Summary`, but validate expects `RawMemory` as input.
