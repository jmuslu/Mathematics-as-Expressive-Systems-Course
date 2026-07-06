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

## Running Example: Group Project Workflow

In a group project, you might have:

```text
Idea -> Draft -> Slides -> Presentation
```

Each arrow is a process that preserves enough structure to keep the work meaningful. Turning an idea into a draft should preserve the topic. Turning a draft into slides should preserve the argument. Turning slides into a presentation should preserve the order of claims.

Category theory asks the simple but strict question:

```text
what kind of thing is each stage, and what must each arrow preserve?
```

Without that, a "workflow" is just a list of verbs.

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

## Hand Problem Trail

### Problem 17.1: Small category from a workflow

Objects:

```text
Idea, Draft, Slides
```

Morphisms:

```text
draft: Idea -> Draft
outline: Draft -> Slides
```

What composite morphism must exist?

Answer check:

```text
outline o draft: Idea -> Slides
```

Composition says the two-step workflow is itself a typed arrow.

### Problem 17.2: Identity morphisms

Write the identity morphism for each object.

Answer check:

```text
id_Idea: Idea -> Idea
id_Draft: Draft -> Draft
id_Slides: Slides -> Slides
```

An identity morphism is the "do nothing but keep the type" map.

### Problem 17.3: Identity laws

Using `draft: Idea -> Draft`, simplify:

```text
draft o id_Idea
id_Draft o draft
```

Answer check:

```text
draft o id_Idea = draft
id_Draft o draft = draft
```

Identity maps should not change a pipeline.

### Problem 17.4: Associativity by example

Suppose also:

```text
present: Slides -> Presentation
```

Compare:

```text
present o (outline o draft)
(present o outline) o draft
```

Answer check:

```text
outline o draft: Idea -> Slides
present o (outline o draft): Idea -> Presentation

present o outline: Draft -> Presentation
(present o outline) o draft: Idea -> Presentation
```

Both composites are the same legal typed path. Associativity means parentheses do not change a legal chain of composition.

### Problem 17.5: Category error

Why is `draft o outline` not legal in this workflow?

Answer check:

```text
outline outputs Slides, but draft expects Idea as input.
```

Category theory catches type errors before computation begins.

### Problem 17.6: Objects and morphisms in Set

In the category `Set`, identify the objects and morphisms.

Answer check:

```text
Objects: sets
Morphisms: functions between sets
```

The same categorical grammar can describe ordinary functions.

### Problem 17.7: Objects and morphisms in Vect

In the category `Vect`, identify the objects and morphisms.

Answer check:

```text
Objects: vector spaces
Morphisms: linear maps
```

The morphisms are not arbitrary functions. They must preserve vector-space structure.

### Problem 17.8: A friendship graph morphism test

Let a small friendship graph `G` have one edge `Ari-Bea`. Let a role graph `H` have one edge `Planner-Designer`. Define:

```text
f(Ari)=Planner
f(Bea)=Designer
```

Does `f` preserve adjacency?

Answer check:

```text
Yes. The friendship edge Ari-Bea maps to the allowed collaboration edge Planner-Designer.
```

A graph morphism must send structure to structure.

### Problem 17.9: A failed graph morphism

Let `G` still have friendship edge `Ari-Bea`, but let `H` have roles `Planner, Designer` and no collaboration edge between them. Define:

```text
f(Ari)=Planner
f(Bea)=Designer
```

Is `f` a graph morphism if adjacency must be preserved?

Answer check:

```text
No. The friendship edge Ari-Bea would map to a missing collaboration edge Planner-Designer.
```

The function on nodes exists, but it does not preserve the graph structure.

### Problem 17.10: Free category from a tiny diagram

A diagram has arrows:

```text
A --f--> B --g--> C
```

List the non-identity paths in the free category.

Answer check:

```text
f: A -> B
g: B -> C
g o f: A -> C
```

A free category adds formal composites of paths.

### Problem 17.11: Isomorphism versus ordinary morphism

A morphism `f: A -> B` is an isomorphism if there is a morphism `g: B -> A` such that:

```text
g o f = id_A
f o g = id_B
```

Which workflow map is more likely to be an isomorphism: relabeling a graph, or summarizing a long document?

Answer check:

```text
Relabeling a graph is more likely to be an isomorphism.
Summarization usually loses information, so it usually has no inverse.
```

Not every useful morphism is reversible.

### Problem 17.12: Choose the morphisms before using the word category

A student says, "My objects are documents, claims, and topics." What is missing before this becomes a category?

Answer check:

```text
The morphisms must be specified, along with identities and a rule for composition.
```

Category theory is not just naming objects. The maps carry the mathematical commitment.
