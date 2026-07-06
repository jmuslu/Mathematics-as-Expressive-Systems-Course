# Module 19: Functors and Natural Transformations

## Lecture Promise

You will understand functors as translations between structured worlds and natural transformations as coherent comparisons between translations.

## Prerequisites

- Categories
- Morphisms
- Composition

## Why The Old Object Fails

A second-brain system may represent knowledge as text, graph, vector embedding, database row, and validation trace.

You need translations that preserve structure.

## Base Case

A functor from Graph to Set can send:

```text
graph -> set of nodes
graph map -> function between node sets
```

It preserves identity and composition.

## Formal Object

A functor F: C -> D maps:

- Objects of C to objects of D
- Morphisms of C to morphisms of D

while preserving identities and composition.

## Natural Transformation

Given functors F, G: C -> D, a natural transformation compares F and G in a way compatible with every morphism in C.

## Failure Mode

Bad translations lose structure. For example, embedding a typed graph into vectors may lose edge type, direction, or validation status.

## Problem Ladder

1. Define a functor from a graph schema to sets of records.
2. Give a translation from text memory to graph memory.
3. Name what structure is lost when graph memory becomes a single vector.

## Memory-System Connection

Functors formalize representation changes: text to graph, graph to embedding, schema to database, local evidence to global belief.

## Research Bridge

Seven Sketches uses functors and natural transformations to describe compositional structure across applied systems.
