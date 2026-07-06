# Module 21: Operads and Compositional Systems

## Lecture Promise

You will understand operads as a way to model operations with many inputs and one output, which is essential for composing validation and reasoning steps.

## Prerequisites

- Categories
- Functions
- Trees or expression graphs

## Why The Old Object Fails

Categories handle one-input one-output arrows well. Reasoning systems often combine many inputs:

```text
evidence_1, evidence_2, rule -> validated claim
```

## Base Case

A validation operation might take:

```text
claim, source, counterclaim -> status
```

This is not just an edge. It is a typed multi-input process.

## Running Example: Dinner Plans As Plug-In Rules

Suppose a group is planning dinner. One operation takes:

```text
guest preferences, budget, neighborhood -> restaurant shortlist
```

Another operation takes:

```text
restaurant shortlist, reservation time, transportation -> dinner plan
```

The second operation cannot accept just any output; it needs a shortlist in the right role. Operads keep track of this plug-in discipline. They ask not only "what things are related?" but "which multi-input procedure can be inserted into which slot of a larger procedure?"

## Formal Object

An operad describes operations with multiple inputs and one output, plus rules for composing operations.

## Products Versus Composition

Not every way of combining things is the same.

```text
tensor product: build a joint space
wedge product: build an antisymmetric oriented joint object
cartesian product: build paired data
categorical product: build a universal pairing object
operadic composition: plug operations into operation slots
matrix composition: apply one transformation after another
```

When designing memory architecture, "combine evidence" can mean concatenate, multiply, contract, average, compose, glue, join, or validate. Those are different mathematical commitments.

## Worked Example

If one operation validates a claim and another consolidates validated claims into a summary, operad composition describes the combined process.

## Failure Mode

If multi-input operations are flattened into pairwise edges, the system can lose dependency structure.

## Problem Ladder

1. Draw a binary operation tree for combining two pieces of evidence.
2. Model a three-input validation rule.
3. Explain why hyperedges and operads are related but not identical.
4. Classify a memory operation as product, contraction, composition, or gluing.
5. Explain why "combine two retrieved passages" is underspecified until the operation is named.
6. Design a typed validation operation whose output can feed another operation.

## Memory-System Connection

Validation loops are compositional operations, not merely graph traversals.

## Hand Problem Trail

### Problem 21.1: Operation with slots

A validation operation has type `validate: Claim x Source x Evidence -> Status`. Name the three input slots and the output type.

Answer check: inputs are Claim, Source, Evidence; output is Status.

### Problem 21.2: Slot order matters

Compare:

```text
validate: Claim x Source x Evidence -> Status
validate': Source x Claim x Evidence -> Status
```

Are these automatically the same operation?

Answer check:

```text
No. The same input types appear, but the first two slots have different meanings.
```

Operadic typing tracks slots, not just a bag of inputs.

### Problem 21.3: Compose operations

Suppose:

```text
validate: Claim x Evidence -> ValidatedClaim
summarize: ValidatedClaim x Context -> Summary
```

Write the composite operation type after plugging validate into summarize's first slot.

Answer check: `Claim x Evidence x Context -> Summary`.

### Problem 21.4: Draw the operation tree

For the composite in Problem 21.3, describe the tree in words.

Answer check:

```text
Claim and Evidence feed into validate.
The output ValidatedClaim and Context feed into summarize.
The final output is Summary.
```

Operads remember dependency shape, not merely input count.

### Problem 21.5: Product or composition?

Classify each as product-like or composition-like.

1. Pair a claim with a source.
2. Run validation, then summarization.
3. Build a joint feature space from text and graph features.
4. Plug one reasoning operation into another.

Answer check:

```text
1 product
2 composition
3 tensor/product
4 operadic composition
```

### Problem 21.6: Dependency loss

Why is flattening `Claim x Evidence x Rule -> Status` into pairwise edges dangerous?

Answer check: it can hide that the status depends on all three inputs jointly.

### Problem 21.7: Binary operation associativity is extra structure

Let `combine(a,b)` mean "average two scores." Compute:

```text
combine(combine(2,10), 10)
combine(2, combine(10,10))
```

Answer check:

```text
combine(2,10) = 6
combine(6,10) = 8

combine(10,10) = 10
combine(2,10) = 6
```

The operation is not associative. Parentheses matter.

### Problem 21.8: Associative operation example

Let `combine(a,b)=a+b`. Compare:

```text
combine(combine(2,10), 10)
combine(2, combine(10,10))
```

Answer check:

```text
(2+10)+10 = 22
2+(10+10) = 22
```

Some operations allow parentheses to be ignored; others do not.

### Problem 21.9: Typed output must match typed slot

Suppose:

```text
extractEvidence: Passage -> Evidence
validate: Claim x Evidence -> ValidatedClaim
```

Can `extractEvidence` be plugged into the Evidence slot of `validate`?

Answer check:

```text
Yes. Its output type is Evidence, which matches the second input slot of validate.
```

Operadic composition is type-checked plugging.

### Problem 21.10: Failed plugging

Suppose:

```text
extractTopic: Passage -> Topic
validate: Claim x Evidence -> ValidatedClaim
```

Can `extractTopic` be plugged into the Evidence slot of `validate`?

Answer check:

```text
No. Topic is not Evidence.
```

The operation may be useful elsewhere, but this slot does not accept it.

### Problem 21.11: Hyperedge versus operation

A hyperedge connects:

```text
Claim, Evidence, Rule
```

An operation has type:

```text
Claim x Evidence x Rule -> Status
```

What does the operation add beyond the hyperedge?

Answer check:

```text
It specifies an output type and a process that transforms the inputs into that output.
```

Hyperedges say "these inputs are related." Operations say "these inputs produce this result."

### Problem 21.12: Failure mode - unnamed combine

A pipeline step says:

```text
combine retrieved passages
```

Name three mathematically different things this could mean.

Answer check:

```text
Possible answers: concatenate, average embeddings, take a product, apply attention, vote, intersect claims, union evidence, run a validation operation.
```

"Combine" is not a mathematical operation until its type and rule are named.
