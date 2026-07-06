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
Member, Team, Captain
```

Arrows:

```text
team: Member -> Team
captain: Team -> Captain
```

Draw the schema and identify the object sets an instance must provide.

Answer check: an instance provides sets of members, teams, and captains, plus functions for `team` and `captain`.

### Problem 20.2: One concrete instance

Let:

```text
Member = {jo, kai}
Team = {debate, robotics}
Captain = {ana, ben}
team(jo)=debate
team(kai)=robotics
captain(debate)=ana
captain(robotics)=ben
```

Which table does `team` behave like?

Answer check:

```text
It behaves like a foreign-key column from Member rows to Team rows.
```

In a categorical instance, arrows become functions between row sets.

### Problem 20.3: Path equation

Suppose also:

```text
captainEmail: Captain -> Email
teamContact: Team -> Email
```

Write a path equation saying a member's team captain email should match the official team contact email.

Answer check: `captainEmail o captain o team = teamContact o team`.

### Problem 20.4: Find violation

Given:

```text
team(jo)=debate
captain(debate)=ana
captainEmail(ana)=ana@northeastern.edu
teamContact(debate)=debate-club@northeastern.edu
```

does the path equation hold for `jo`?

Answer check:

```text
(captainEmail o captain o team)(jo) = captainEmail(captain(debate)) = captainEmail(ana) = ana@northeastern.edu
(teamContact o team)(jo) = teamContact(debate) = debate-club@northeastern.edu
```

No. The two paths return different email addresses.

### Problem 20.5: Find satisfaction

Given:

```text
team(jo)=debate
captain(debate)=ana
captainEmail(ana)=debate-club@northeastern.edu
teamContact(debate)=debate-club@northeastern.edu
```

does the path equation hold?

Answer check:

```text
(captainEmail o captain o team)(jo) = debate-club@northeastern.edu
(teamContact o team)(jo) = debate-club@northeastern.edu
```

Yes. The equation is checkable row by row.

### Problem 20.6: Schema design

Why are path equations stronger than informal field names?

Answer check: they make consistency constraints explicit and checkable.

### Problem 20.7: Add a contradiction relation

Extend the roster schema with a scheduling conflict relation between members:

```text
memberA: Conflict -> Member
memberB: Conflict -> Member
```

Why use a separate `Conflict` object instead of a single edge label?

Answer check:

```text
The conflict can carry its own metadata, such as meeting time, severity, resolution status, or who reported it.
```

Turning an edge into an object lets the relation have attributes.

### Problem 20.8: Instance category intuition

Two database instances on the same schema can be connected by a natural transformation. What does its component at `Member` do?

Answer check:

```text
It maps member rows in the first instance to member rows in the second instance.
```

The components must also respect schema arrows like `team`.

### Problem 20.9: Naturality for a database migration

Two database instances share the schema:

```text
Ticket -> Event
```

Instance `F` has:

```text
Ticket = {t1}
Event = {e1}
event(t1)=e1
```

Instance `G` has:

```text
Ticket = {ticket-001}
Event = {concert-A}
event(ticket-001)=concert-A
```

A migration has components:

```text
eta_Ticket(t1)=ticket-001
eta_Event(e1)=concert-A
```

Check naturality for `event`.

Answer check:

```text
G(event)(eta_Ticket(t1)) = G(event)(ticket-001) = concert-A
eta_Event(F(event)(t1)) = eta_Event(e1) = concert-A
```

Both paths agree. Migrating a ticket and then asking for its event matches asking for the event first and then migrating that event.

### Problem 20.10: Pullback query

A schema has:

```text
Member -> Team <- PaymentForm
```

What does the pullback query return?

Answer check:

```text
pairs (member, payment_form) with the same team.
```

Many joins are pullbacks in disguise.

### Problem 20.11: Schema migration direction

Old schema:

```text
Claim -> Source
Claim -> Topic
Claim -> Confidence
```

New schema:

```text
Claim -> Source
Claim -> Topic
```

Is moving old data to the new schema mainly forgetting information or adding information?

Answer check:

```text
It forgets information: Confidence is dropped.
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
