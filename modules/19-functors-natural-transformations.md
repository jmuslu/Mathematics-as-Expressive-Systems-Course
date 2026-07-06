# Module 19: Functors, Natural Transformations, and App Translations

## Lecture Promise

You will understand functors as translations between structured worlds and natural transformations as coherent comparisons between translations.

## Prerequisites

- Categories
- Morphisms
- Composition

## Why The Old Object Fails

A structured project may represent the same information as notes, graphs, tables, exported files, and validation traces.

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

Bad translations lose structure. For example, a migration may keep tables while forgetting labels, directions, equations, or consistency constraints.

## Problem Ladder

1. Define a functor from a graph schema to sets of records.
2. Give a translation from notebook notes to flashcard records.
3. Name what structure is lost when a translation forgets labels or equations.

## Representation Design Connection

Functors formalize representation changes: notebook pages to flashcard decks, restaurant labels to fuller menu names, schemas to database instances, and structured records to exported tables.

## Hand Problem Trail

### Problem 19.1: Functor from schema to sets

A notebook schema has objects `Bullet` and `Heading`, and morphism `under: Bullet -> Heading`. An instance sends:

```text
Bullet -> {b1,b2}
Heading -> {h1}
under(b1)=h1, under(b2)=h1
```

Why is this a functor-like assignment?

Answer check: it sends objects to sets and arrows to functions while preserving typed structure.

### Problem 19.2: Object map and arrow map

For the same schema instance, identify:

```text
F(Bullet)
F(Heading)
F(under)
```

Answer check:

```text
F(Bullet) = {b1,b2}
F(Heading) = {h1}
F(under): {b1,b2} -> {h1}
```

A functor translates both objects and arrows.

### Problem 19.3: Preserve identity

What must a functor do to `id_Bullet`?

Answer check:

```text
F(id_Bullet) = id_{F(Bullet)}
```

The identity in the schema becomes the identity function on the bullet set.

### Problem 19.4: Preserve composition

A tiny category has:

```text
A --f--> B --g--> C
```

A functor `F` sends:

```text
F(A) = {1,2}
F(B) = {x,y}
F(C) = {done}

F(f)(1)=x
F(f)(2)=y
F(g)(x)=done
F(g)(y)=done
```

Compute `F(g o f)(1)` and `F(g o f)(2)`.

Answer check:

```text
F(g o f) = F(g) o F(f)

F(g o f)(1) = F(g)(F(f)(1)) = F(g)(x) = done
F(g o f)(2) = F(g)(F(f)(2)) = F(g)(y) = done
```

A functor translates a path into a composed function, not just isolated object names.

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

### Problem 19.7: Restaurant labels as a naturality square

A restaurant has two menu encodings. Encoding `F` uses short names:

```text
F(Dish) = {v}
F(Category) = {veg}
F(type)(v)=veg
```

Encoding `G` uses full names:

```text
G(Dish) = {veggie-bowl}
G(Category) = {vegetarian}
G(type)(veggie-bowl)=vegetarian
```

Let:

```text
eta_Dish(v)=veggie-bowl
eta_Category(veg)=vegetarian
```

Check naturality for `type: Dish -> Category`.

Answer check:

```text
G(type)(eta_Dish(v)) = G(type)(veggie-bowl) = vegetarian
eta_Category(F(type)(v)) = eta_Category(veg) = vegetarian
```

Both paths agree, so the component maps form a coherent comparison between the two menu encodings for this arrow.

### Problem 19.8: Translation test

Explain in words what naturality means for moving notes from a notebook app to a flashcard app.

Answer check: translating a bullet into a card and then asking for its deck should equal first asking which heading the bullet belonged to and then translating that heading into the deck.

### Problem 19.9: Check a naturality square with tiny sets

Let schema arrow `under: Bullet -> Heading`. Encoding F is the notebook app:

```text
F(Bullet) = {b1}
F(Heading) = {h1}
F(under)(b1) = h1
```

Encoding G is the flashcard app:

```text
G(Bullet) = {card-1}
G(Heading) = {deck-1}
G(under)(card-1) = deck-1
```

Let:

```text
eta_Bullet(b1)=card-1
eta_Heading(h1)=deck-1
```

Check naturality for `under`.

Answer check:

```text
G(under)(eta_Bullet(b1)) = G(under)(card-1) = deck-1
eta_Heading(F(under)(b1)) = eta_Heading(h1) = deck-1
```

Both paths agree.

### Problem 19.10: A failed naturality square

Use the same setup as Problem 19.9, but set:

```text
eta_Heading(h1)=deck-2
```

Does naturality hold?

Answer check:

```text
No.
Following under after translation gives deck-1.
Translating the heading after following under gives deck-2.
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

### Problem 19.12: Failure mode - forgetting equations

A typed schema has a path equation:

```text
sourceOrg o madeBy = docOrg o appearsIn
```

A forgetful translation keeps the tables but drops path equations. Name one thing that can go wrong.

Answer check:

```text
Rows can still exist, but the system may no longer check whether the source organization and document organization agree.
```

Forgetting equations can preserve data shape while losing consistency constraints. Translations should say what structure they discard: labels, directions, equations, provenance, or typing.
