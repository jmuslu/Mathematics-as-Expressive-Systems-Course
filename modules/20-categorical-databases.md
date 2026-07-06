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

## Running Example: Club Roster Rules

A club roster might record:

```text
Member -> Team
Team -> Captain
Member -> PaymentStatus
```

If Jo belongs to the debate team, the roster should not treat "debate team" as a free-floating phrase in one table and a different object in another. The schema says which arrows are legal, and an instance fills those arrows with actual members, teams, captains, and payment states. The mathematical advantage is that consistency becomes structural: bad data is not merely a typo, but a failure to respect the declared pattern of relationships.

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

### Problem 20.2: One concrete instance

Let:

```text
Claim = {c1,c2}
Source = {s1}
Document = {d1,d2}
madeBy(c1)=s1
madeBy(c2)=s1
appearsIn(c1)=d1
appearsIn(c2)=d2
```

Which table does `appearsIn` behave like?

Answer check:

```text
It behaves like a foreign-key column from Claim rows to Document rows.
```

In a categorical instance, arrows become functions between row sets.

### Problem 20.3: Path equation

Suppose also:

```text
sourceOrg: Source -> Organization
docOrg: Document -> Organization
```

Write a path equation saying a claim's source organization should match the document organization.

Answer check: `sourceOrg o madeBy = docOrg o appearsIn`.

### Problem 20.4: Find violation

Given `madeBy(c)=s`, `appearsIn(c)=d`, `sourceOrg(s)=OpenAI`, and `docOrg(d)=MIT`, does the path equation hold?

Answer check:

```text
(sourceOrg o madeBy)(c) = sourceOrg(s) = OpenAI
(docOrg o appearsIn)(c) = docOrg(d) = MIT
```

No. The two paths return different organizations.

### Problem 20.5: Find satisfaction

Given:

```text
madeBy(c)=s
appearsIn(c)=d
sourceOrg(s)=Northeastern
docOrg(d)=Northeastern
```

does the path equation hold?

Answer check:

```text
(sourceOrg o madeBy)(c) = sourceOrg(s) = Northeastern
(docOrg o appearsIn)(c) = docOrg(d) = Northeastern
```

Yes. The equation is checkable row by row.

### Problem 20.6: Schema design

Why are path equations stronger than informal field names?

Answer check: they make consistency constraints explicit and checkable.

### Problem 20.7: Add a contradiction relation

Extend the schema with a contradiction relation between claims:

```text
contradicts: Contradiction -> Claim
contradictedBy: Contradiction -> Claim
```

Why use a separate `Contradiction` object instead of a single edge label?

Answer check:

```text
The contradiction can carry its own metadata, such as source, time, severity, or resolution status.
```

Turning an edge into an object lets the relation have attributes.

### Problem 20.8: Instance category intuition

Two database instances on the same schema can be connected by a natural transformation. What does its component at `Claim` do?

Answer check:

```text
It maps claim rows in the first instance to claim rows in the second instance.
```

The components must also respect schema arrows like `madeBy`.

### Problem 20.9: Naturality for a database migration

Let `eta_Claim(c)=c'` and `eta_Source(s)=s'`. If `madeBy(c)=s`, what must hold in the target instance?

Answer check:

```text
madeBy(c') = s'
```

Migrating a claim and then looking up its source must agree with looking up the source and then migrating it.

### Problem 20.10: Pullback query

A schema has:

```text
Claim -> Topic <- Document
```

What does the pullback query return?

Answer check:

```text
pairs (claim, document) with the same topic.
```

Many joins are pullbacks in disguise.

### Problem 20.11: Migration as pullback along a schema map

Suppose a new schema forgets `ValidationState` and keeps only `Claim -> Source`. Is this migration adding information or forgetting information?

Answer check:

```text
It is forgetting information.
```

Schema maps can induce data migration, but the direction and information flow must be tracked carefully.

### Problem 20.12: Failure mode - loose schema

What can go wrong if every record is stored as:

```text
key, value, note
```

with no typed arrows or path equations?

Answer check:

```text
The system may be flexible, but consistency constraints become informal.
It becomes harder to check source compatibility, provenance, contradiction, and schema migration.
```

Loose data is easy to ingest and hard to reason about.
