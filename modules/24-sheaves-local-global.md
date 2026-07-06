# Module 24: Sheaves and Local-to-Global Consistency

## Lecture Promise

You will understand sheaves as the natural language for patching local information into global consistency.

## Prerequisites

- Topology or graphs
- Functions
- Basic category intuition

## Why The Old Object Fails

Graph traversal can move information, but validation requires consistency:

```text
Do local claims agree when they overlap?
```

This is a sheaf question.

A graph says which pieces touch. A sheaf says what data lives on each piece and how that data must agree when pieces overlap. That distinction matters because a memory system can retrieve many locally plausible fragments that fail to form a coherent global belief.

## Base Case

Two nodes hold local claims about the same entity. An edge stores the overlap condition. If the claims agree on the overlap, they can be glued.

## Running Example: Witness Stories

Two witnesses describe the same dinner.

```text
Witness A: Rae ordered pasta.
Witness B: Rae sat by the window.
```

If the overlap only asks who both stories mention, the reports agree on `Rae` and can be patched together. If the overlap asks for the exact dish, then Witness B has no dish information to compare. If Witness B says "Rae ordered soup," then a dish-level overlap exposes disagreement.

The sheaf lesson is that agreement is not vague. The restriction maps decide which part of each local story must match on the overlap.

## Formal Object

A sheaf assigns data to local regions and restriction maps to overlaps, satisfying gluing and locality conditions.

On a graph-like space, this can be made concrete:

- Each node receives a set or vector space of local states.
- Each edge receives an overlap space.
- Restriction maps send node states to the edge overlap.
- A global section is a choice of node states whose restrictions agree on every edge.

For an edge e connecting nodes u and v:

```text
res_{u -> e}(x_u) = res_{v -> e}(x_v)
```

when the local data are compatible.

## Worked Example

If node A says "source S supports claim C" and node B says "source S contradicts claim C," their overlap exposes inconsistency.

If the overlap only tracks the source identity, the two claims may glue. If the overlap tracks both source identity and stance, they do not. The sheaf is therefore part of the model design: it declares which agreements matter.

## Failure Mode

Local consistency does not guarantee truth. It only guarantees compatibility across the chosen restrictions.

Bad restriction maps create false peace. Overly strict restriction maps create false contradiction.

## Problem Ladder

1. Draw a two-node sheaf with an overlap.
2. Give compatible and incompatible local sections.
3. Explain global section as coherent belief state.
4. Design two different restriction maps for the same two-source example and compare the contradictions they detect.
5. Explain why vector retrieval can find related passages while sheaf consistency can still fail.
6. Describe how decay or reinforcement might act on a global section rather than on isolated chunks.

## Memory-System Connection

Sheaves are the mature model for multi-hop validation: local contexts patch into global belief only when restrictions agree.

## Hand Problem Trail

### Problem 24.1: Two-node sheaf

Witness A records:

```text
(person=Rae, dish=pasta)
```

Witness B records:

```text
(person=Rae, seat=window)
```

The edge overlap records only `person`. Do the local sections glue?

Answer check:

```text
A restricts to person=Rae.
B restricts to person=Rae.
```

Yes, they glue with respect to the person-only overlap.

### Problem 24.2: Write the restriction equation

Let `x_A` and `x_B` be the two local values and `e` be the overlap edge. Write the compatibility equation.

Answer check:

```text
res_{A -> e}(x_A) = res_{B -> e}(x_B)
```

A global section is a set of local choices satisfying all such equations.

### Problem 24.3: Contradiction on overlap

Now Witness A records:

```text
(person=Rae, dish=pasta)
```

Witness B records:

```text
(person=Rae, dish=soup)
```

The edge overlap records `(person, dish)`. Do they glue?

Answer check:

```text
A restricts to (Rae, pasta).
B restricts to (Rae, soup).
```

No. The restrictions disagree on the dish.

### Problem 24.4: Change the restriction map

Use the same two reports from Problem 24.3, but change the edge overlap so it records only `person`, not dish. Do they glue under this weaker sheaf?

Answer check: yes with respect to person identity, because both reports restrict to `person=Rae`. This may be a bad model if the dish matters.

### Problem 24.5: Global section

A graph has three nodes with local values `x1=2`, `x2=2`, `x3=5`. Edges require equality on overlaps: `(1,2)` and `(2,3)`. Is this a global section?

Answer check: no, because edge `(2,3)` sees `2 != 5`.

### Problem 24.6: Nontrivial restriction map

Two sensors store local values:

```text
x_A = 10
x_B = 5
```

The overlap compares `A` directly but doubles `B`:

```text
res_{A -> e}(x) = x
res_{B -> e}(y) = 2y
```

Do the local values glue?

Answer check:

```text
res_{A -> e}(10) = 10
res_{B -> e}(5) = 2(5) = 10
```

Yes. Local values do not need to be numerically equal if the restriction maps translate them into the same overlap language.

### Problem 24.7: Sheaf disagreement residual

Use the same restriction maps:

```text
res_{A -> e}(x) = x
res_{B -> e}(y) = 2y
```

Now let:

```text
x_A = 9
x_B = 5
```

Compute the edge disagreement:

```text
res_{A -> e}(x_A) - res_{B -> e}(x_B)
```

and its squared residual.

Answer check:

```text
disagreement = 9 - 2(5) = -1
squared residual = 1
```

Approximate consistency can be measured by how far overlap restrictions disagree.

### Problem 24.8: Two restriction designs

Two nodes store:

```text
A: (s1, support)
B: (s1, contradict)
```

Do they glue if the overlap records only source? Do they glue if it records `(source, stance)`?

Answer check:

```text
Source-only overlap: yes, both restrict to s1.
Source-and-stance overlap: no, the stances differ.
```

The sheaf is part of the model, not an afterthought.

### Problem 24.9: Local agreement does not mean truth

Three nodes all agree that a claim is `support`. Does the existence of a global section prove the claim is true?

Answer check:

```text
No. It proves compatibility under the chosen restrictions, not truth.
```

Sheaf consistency is coherence, not omniscience.

### Problem 24.10: Retrieval versus sheaf failure

What is the difference between retrieval failure and sheaf failure?

Answer check: retrieval failure means the relevant local pieces were not found. Sheaf failure means local pieces were found but do not consistently glue.

### Problem 24.11: Global section on a triangle

A triangle graph has node values:

```text
x1 = red
x2 = red
x3 = red
```

Every edge requires equality. Is this a global section?

Answer check:

```text
edge (1,2): red = red
edge (2,3): red = red
edge (1,3): red = red

Yes.
```

Every local pair is compatible, so the whole assignment glues.

### Problem 24.12: Failure mode - false peace

A sheaf overlap records only document title, not publication date. Two notes cite the same title but different editions with conflicting claims. What can go wrong?

Answer check:

```text
The local sections may glue because the title agrees, even though the edition/date distinction matters.
```

Bad restriction maps can hide contradictions that the model needed to expose.
