# Module 00: How To Work This Course

## Lecture Promise

By the end of this module, you should know how to read every later lecture: not as a topic summary, but as a sequence of mathematical pressure points that force new objects to exist.

## Prerequisites

- Comfort with algebraic manipulation
- Basic vectors and matrices
- Willingness to work examples by hand before naming the abstraction

## Why This Method Matters

Mathematical maturity comes from seeing why an object had to be invented. A definition should arrive after a concrete pressure point, not before it.

The working rhythm is:

1. Start from a concrete problem.
2. Find the smallest case where intuition breaks.
3. Manipulate the object until the definition feels earned.

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

The modules that follow build the mathematical judgment underneath those decisions.

## Hand Problem Trail

### Problem 0.1: Diagnose the object

For each situation, name the mathematical object you would reach for first.

1. A memory item has two scores: relevance and confidence.
2. A claim is transformed by a rewrite rule.
3. A graph is relabeled but should mean the same thing.
4. Three pieces of evidence only support a claim when taken together.
5. Two local summaries agree on their overlap and should be glued.

Answer check:

```text
1. vector
2. function or linear map
3. group action / invariance
4. tensor, hyperedge, or operad
5. sheaf
```

### Problem 0.2: Concrete before formal

A student begins a solution with:

```text
Let (X,d) be a metric space...
```

but the problem only asks which of three vectors is closest to `q=(1,2)`. What should they compute first?

Answer check:

```text
Compute the actual distances or similarities to the three candidate vectors.
Name the metric-space abstraction only after the concrete comparison is clear.
```

The course rhythm is numbers first, abstraction second.

### Problem 0.3: Use the object worksheet

Pick the object `projection`. Fill this in by hand:

```text
Old limitation:
New object:
New legal operation:
Invariant:
Failure mode:
Later dependency:
```

Answer check:

```text
Old limitation: exact representation is unavailable.
New object: best approximation in a subspace.
New legal operation: decompose into fitted part plus residual.
Invariant: residual is orthogonal to the subspace.
Failure mode: projection can erase meaningful out-of-subspace signal.
Later dependency: least squares, SVD, regression, compression.
```

### Problem 0.4: Decide vertical versus horizontal

For the object `group action`, classify each question.

1. What is the formal definition?
2. How does node relabeling act on an adjacency matrix?
3. What is an invariant?
4. What would break if the graph summary changed under relabeling?

Answer check: 1 and 3 are vertical. 2 and 4 are horizontal/application questions.

### Problem 0.5: Base case for matrix multiplication

Give a base case that forces matrix multiplication to exist.

Answer check example:

```text
One transformation sends x -> Bx.
A second transformation sends y -> Ay.
Doing B first and then A sends x -> A(Bx), so the composite transformation is AB.
```

Matrix multiplication is composition of linear transformations.

### Problem 0.6: Find the invariant

A graph is relabeled by a permutation. Which should stay invariant?

```text
A. number of edges
B. raw node label "node 1"
C. triangle count
D. adjacency matrix entries in the same order
```

Answer check:

```text
A and C should stay invariant.
B and D can change under relabeling.
```

An invariant is what survives the allowed transformation.

### Problem 0.7: Find the failure mode

Nearest-neighbor retrieval returns the vector closest to the query. Name two ways this can still fail.

Answer check:

```text
Possible answers: embedding geometry may not match meaning, relevant item may be missing, top result may conflict with other evidence, approximation may miss the true nearest neighbor.
```

A mathematical operation always comes with a failure mode.

### Problem 0.8: Normalize and compare

Let:

```text
q = (3,4)
m = (6,8)
```

Normalize both vectors.

Answer check:

```text
||q|| = 5
||m|| = 10
qhat = (3/5,4/5)
mhat = (3/5,4/5)
```

The vectors differ in magnitude but not direction.

### Problem 0.9: Cosine after normalization

Using Problem 0.8, compute `qhat dot mhat`.

Answer check:

```text
qhat dot mhat = (3/5)(3/5) + (4/5)(4/5)
              = 9/25 + 16/25
              = 1
```

For normalized vectors, cosine similarity is just dot product.

### Problem 0.10: Pick the next object

A scalar confidence score cannot tell whether two pieces of evidence agree or contradict. Which later object is likely needed first?

Answer check:

```text
A vector or typed relation, because the state needs multiple coordinates or slots rather than one number.
```

When an old object cannot express the distinction, the next object is forced.

### Problem 0.11: Mini lecture template

Fill in the missing parts for the object `dual vector`.

```text
Base case:
Operation:
Invariant:
Failure mode:
```

Answer check example:

```text
Base case: a state vector needs to be scored by a linear test.
Operation: apply covector to vector.
Invariant: scalar pairing under legal coordinate change.
Failure mode: treating every row of numbers as the same kind of object.
```

This template is how later modules should be read.

### Problem 0.12: Research-paper reading drill

When reading a paper abstract, list four things to extract before getting lost in details.

Answer check:

```text
mathematical object, operation, invariant, failure mode
```

The goal is not to memorize papers. The goal is to identify the mathematical pressure point.
