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

## Running Example: Moving Notes Between Apps

Suppose you move class notes from a notebook app into a flashcard app.

The notebook has:

```text
page -> heading -> bullet
```

The flashcard app has:

```text
deck -> card -> prompt
```

A good translation does not merely copy words. It preserves relationships: bullets under the same heading should become cards in the same deck, and following a page-to-heading link before translating should agree with translating first and then following the corresponding deck relation.

That is the functor/naturality idea in ordinary clothes: structure-preserving translation, not loose export.

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

## Hand Problem Trail

### Problem 19.1: Functor from schema to sets

A schema has objects `Claim` and `Source`, and morphism `citedBy: Claim -> Source`. An instance sends:

```text
Claim -> {c1,c2}
Source -> {s1}
citedBy(c1)=s1, citedBy(c2)=s1
```

Why is this a functor-like assignment?

Answer check: it sends objects to sets and arrows to functions while preserving typed structure.

### Problem 19.2: Object map and arrow map

For the same schema instance, identify:

```text
F(Claim)
F(Source)
F(citedBy)
```

Answer check:

```text
F(Claim) = {c1,c2}
F(Source) = {s1}
F(citedBy): {c1,c2} -> {s1}
```

A functor translates both objects and arrows.

### Problem 19.3: Preserve identity

What must a functor do to `id_Claim`?

Answer check:

```text
F(id_Claim) = id_{F(Claim)}
```

The identity in the schema becomes the identity function on the claim set.

### Problem 19.4: Preserve composition

If category C has `A -> B -> C`, what must a functor F do to the composite?

Answer check: `F(g o f) = F(g) o F(f)`.

### Problem 19.5: Forgetful functor

A typed graph has nodes and typed edges. A forgetful functor sends it to an untyped graph by forgetting edge labels. Name one structure it loses.

Answer check:

```text
It loses edge type, such as supports, contradicts, cites, or depends-on.
```

Forgetful functors are useful, but they are honest about what they discard.

### Problem 19.6: Free construction intuition

A construction sends a set of generators `{a,b}` to the free monoid of strings built from them. Give three elements of the result.

Answer check:

```text
empty string, a, b, aa, ab, ba are all examples.
```

Free constructions add the structure required by the target category without adding extra equations.

### Problem 19.7: Natural transformation square

Suppose F and G are two memory encodings of the same schema. A natural transformation gives maps from F(X) to G(X). What condition must hold for every arrow `f: X -> Y`?

Answer check: `G(f) o eta_X = eta_Y o F(f)`.

### Problem 19.8: Translation test

Explain in words what naturality means for migrating memories.

Answer check: translating before following a relationship should equal following the relationship before translating.

### Problem 19.9: Check a naturality square with tiny sets

Let schema arrow `madeBy: Claim -> Source`. Encoding F has:

```text
F(Claim) = {c1}
F(Source) = {s1}
F(madeBy)(c1) = s1
```

Encoding G has:

```text
G(Claim) = {claim-1}
G(Source) = {source-1}
G(madeBy)(claim-1) = source-1
```

Let:

```text
eta_Claim(c1)=claim-1
eta_Source(s1)=source-1
```

Check naturality for `madeBy`.

Answer check:

```text
G(madeBy)(eta_Claim(c1)) = G(madeBy)(claim-1) = source-1
eta_Source(F(madeBy)(c1)) = eta_Source(s1) = source-1
```

Both paths agree.

### Problem 19.10: A failed naturality square

Use the same setup as Problem 19.9, but set:

```text
eta_Source(s1)=source-2
```

Does naturality hold?

Answer check:

```text
No.
Following madeBy after translation gives source-1.
Translating the source after following madeBy gives source-2.
```

The object-level maps exist, but they do not coherently preserve the relationship.

### Problem 19.11: Functor or not?

A translation sends every graph to its number of nodes and every graph morphism to the identity function on natural numbers. Is this a functor from Graph to Set as stated?

Answer check:

```text
No. If a graph has n nodes and another has m nodes, the arrow should become a function between sets representing n and m.
Saying "the identity function on natural numbers" ignores the source and target types.
```

A functor must map each arrow to a correctly typed arrow.

### Problem 19.12: Structure lost in vectorization

When a typed graph is embedded as one vector, name two structures that may be lost unless explicitly encoded.

Answer check:

```text
Possible answers: edge direction, edge type, node type, path equations, provenance, timestamps, validation status.
```

Functors can translate structure, but not every translation is faithful.
