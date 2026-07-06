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

## Hand Problem Trail

### Problem 20.1: Schema as category

Objects:

```text
Claim, Source, Document
```

Arrows:

```text
madeBy: Claim -> Source
appearsIn: Claim -> Document
```

Draw the schema and identify the object sets an instance must provide.

Answer check: an instance provides sets of claims, sources, and documents, plus functions for `madeBy` and `appearsIn`.

### Problem 20.2: Path equation

Suppose also:

```text
sourceOrg: Source -> Organization
docOrg: Document -> Organization
```

Write a path equation saying a claim's source organization should match the document organization.

Answer check: `sourceOrg o madeBy = docOrg o appearsIn`.

### Problem 20.3: Find violation

Given `madeBy(c)=s`, `appearsIn(c)=d`, `sourceOrg(s)=OpenAI`, and `docOrg(d)=MIT`, does the path equation hold?

Answer check: no. The two paths return different organizations.

### Problem 20.4: Schema design

Why are path equations stronger than informal field names?

Answer check: they make consistency constraints explicit and checkable.
