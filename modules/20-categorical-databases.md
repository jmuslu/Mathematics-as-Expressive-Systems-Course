# Module 20: Categorical Databases and Schemas

## Lecture Promise

You will understand schemas as categories and data instances as structure-preserving assignments.

## Prerequisites

- Categories
- Functors
- Basic databases

## Why The Old Object Fails

Plain graph memory can become semantically loose. You need types:

- Claim
- Evidence
- Source
- Agent
- Time
- Validation
- Contradiction

Categorical databases give a mathematical way to treat schema as structure.

## Base Case

A tiny schema:

```text
Claim -> Source
Claim -> Topic
Claim -> ValidationState
```

This is not just a table. It is a typed structure of relationships.

## Formal Object

A schema can be modeled as a category. An instance is a functor from the schema category to Set.

## Worked Example

If a claim maps to a source and a topic, then every concrete claim record must carry compatible source and topic data.

## Failure Mode

Overly rigid schemas block discovery. Overly loose schemas make validation impossible.

## Problem Ladder

1. Draw a schema for Claim, Evidence, Source, and Validation.
2. Add a contradiction relation.
3. Explain what a schema migration should preserve.

## Memory-System Connection

Typed memory is the difference between a pile of facts and an epistemic graph.

## Research Bridge

David Spivak's categorical database work gives a formal language for schemas, data migration, and compositional data integration.
