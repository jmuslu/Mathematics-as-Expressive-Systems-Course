# Module 00: How To Work This Course

## Lecture Promise

By the end of this module, you should know how to read every later lecture: not as a topic summary, but as a sequence of mathematical pressure points that force new objects to exist.

## Prerequisites

- Comfort with algebraic manipulation
- Basic vectors and matrices
- Willingness to work examples by hand before naming the abstraction

## Why The First Scaffold Failed

The first version of this course correctly identified the organizing question:

> Do mathematicians enlarge the space, enrich the scalars, or invent a new operation?

But it was too horizontal. It named many objects without making you struggle through the base cases that give those objects meaning.

The source ML math lectures were better because they did three things:

1. They started from a concrete problem.
2. They showed the smallest case where intuition breaks.
3. They made the learner manipulate the object until the definition felt earned.

This course now follows that pattern.

## The Course Method

For each lecture, make three pages of your own notes.

### Page 1: The Base Case

Write the smallest concrete problem where the new object becomes necessary.

Example:

```text
Problem: I have a query vector q and three memory vectors m1, m2, m3.
Question: Which memory is closest, and what does "closest" mean?
```

Do not start with "metric space." Start with numbers.

### Page 2: The Derivation

Derive one operation by hand.

Example:

```text
cos(q, m) = (q^T m) / (||q|| ||m||)
```

Then ask what changes if all vectors are normalized.

```text
cos(q, m) = q^T m
```

Now cosine retrieval has become maximum inner product search.

### Page 3: The Failure Mode

Ask when the object becomes dangerous.

Example:

- The nearest vector may be semantically wrong.
- Approximate search may miss the true neighbor.
- A retrieved memory may be correct but irrelevant to the current reasoning step.
- A long context may contain the answer but the model may ignore it.

## The Vertical And Horizontal Axes

Vertical depth means:

```text
base case -> formal object -> derivation -> invariant -> failure mode
```

Horizontal application means:

```text
representation -> retrieval -> indexing -> compression -> update -> evaluation
```

Every module should touch both axes.

## What Counts As Understanding

You understand a mathematical object when you can answer:

- What problem forced it to exist?
- What operation did it make legal?
- What invariant does it preserve?
- What failure mode does it introduce?
- Where does it appear in an external memory system?

## Problem Ladder

### Direct Problems

1. Pick one object you know, such as matrix multiplication. Write the base case that forces it to exist.
2. For cosine similarity, compute the score between q = (1, 2) and m = (3, 4).
3. Normalize q and m, then recompute the inner product.

### Transfer Problems

1. Explain how "projection error" and "retrieval error" are related.
2. Explain why a vector database is not just a storage table but a geometric object.
3. Explain how attention can be interpreted as soft retrieval.

### Research-Style Problems

1. Read the abstract of a retrieval paper and identify its mathematical object, operation, invariant, and failure mode.
2. Design a two-memory example where nearest-neighbor retrieval returns the wrong memory.
3. Design a two-evidence example where the retrieved evidence conflicts with the model's parametric prior.

## Memory-System Connection

A robust LLM memory system must decide:

- What to store
- How to represent it
- How to retrieve it
- How to rank it
- How to compress it
- How to update it
- How to evaluate whether it helped

This course is the math underneath those decisions.
