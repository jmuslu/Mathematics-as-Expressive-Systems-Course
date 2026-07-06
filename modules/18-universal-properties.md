# Module 18: Category Theory II - Universal Properties

## Lecture Promise

You will understand universal properties as the mature way to define constructions by what they do, not by how they are implemented.

## Prerequisites

- Categories
- Functions
- Basic products and quotients

## Why The Old Object Fails

Concrete definitions can hide the reason an object exists.

For structured models, implementation details change. The universal role should survive.

## Base Case

The product A x B is characterized by projections:

```text
pi_A: A x B -> A
pi_B: A x B -> B
```

and the fact that any object X with maps to A and B factors uniquely through A x B.

## Running Example: Lunch Orders

A lunch ticket that records both a person and a meal is product-like:

```text
Ticket -> Person
Ticket -> Meal
```

It is useful because every ticket can be inspected in two legal ways: who ordered and what they ordered.

But a lunch choice that is either a sandwich or a salad is not product-like. It is a tagged alternative:

```text
SandwichOrder + SaladOrder
```

Universal properties help you avoid confusing "both fields at once" with "one of several typed options." The construction is defined by the role it plays, not by the database layout you happened to use.

## Formal Object

A universal property defines an object by a unique mapping behavior.

## Worked Example

If a project record must expose both:

```text
owner
deadline status
```

then a product-like construction packages both while preserving projections.

## Failure Mode

Universal properties are precise but abstract. If you skip examples, they become symbols without design force.

## Problem Ladder

1. Draw the universal property of a product.
2. Explain coproduct as tagged alternative.
3. Model a ticket as a product of fields and an order as a coproduct of alternatives.

## Representation Design Connection

Universal properties help identify canonical constructions: products, sums, pullbacks, pushouts, limits, and colimits.

## Hand Problem Trail

### Problem 18.1: Product object intuition

Given objects A and B, a product `A x B` has projections:

```text
pi_A: A x B -> A
pi_B: A x B -> B
```

For a pair `(a,b)`, compute both projections.

Answer check:

```text
pi_A(a,b)=a
pi_B(a,b)=b
```

The product packages two pieces while keeping legal ways to inspect each one.

### Problem 18.2: Pairing map

A theater ticket must expose both:

```text
seat: Ticket -> Seat
show: Ticket -> Show
```

If a purchase record `P` has maps:

```text
s: P -> Seat
t: P -> Show
```

what unique map into `Seat x Show` is forced by the product property?

Answer check:

```text
<s,t>: P -> Seat x Show
p -> (s(p), t(p))
```

The product is the canonical place where both outputs can live together.

### Problem 18.3: Check the projections of a pairing

For the pairing map `<f,g>`, compute:

```text
pi_A o <f,g>
pi_B o <f,g>
```

Answer check:

```text
pi_A o <f,g> = f
pi_B o <f,g> = g
```

The product property says the combined map remembers exactly the two original maps.

### Problem 18.4: Uniqueness of the pairing

Suppose `h: X -> A x B` satisfies:

```text
pi_A o h = f
pi_B o h = g
```

What must `h(x)` be?

Answer check:

```text
h(x) = (f(x), g(x))
```

So `h = <f,g>`. The product map is not just available; it is forced.

### Problem 18.5: Lunch order as tagged alternative

A lunch order is either:

```text
SandwichOrder = {turkey, veggie}
SaladOrder = {caesar}
```

List the elements of the coproduct `SandwichOrder + SaladOrder`.

Answer check:

```text
(Sandwich, turkey)
(Sandwich, veggie)
(Salad, caesar)
```

Tags prevent confusing alternatives just because their fields might overlap.

### Problem 18.6: Product or coproduct?

Classify each construction:

```text
A. a student record with both name and grade
B. a search result that is either a paper or a video
C. a point with x and y coordinates
D. an error that is either parse error or network error
```

Answer check:

```text
A. product
B. coproduct
C. product
D. coproduct
```

Products combine simultaneous fields. Coproducts represent typed alternatives.

### Problem 18.7: Pullback as consistency object

Let:

```text
Ticket -> Person <- Meal
```

Explain what the pullback contains.

Answer check:

```text
Pairs (ticket, meal) that refer to the same person.
```

A pullback is a matching object.

### Problem 18.8: Compute a pullback in sets

Let:

```text
Tickets = {t1, t2}
Meals = {m1, m2, m3}
People = {ari, bea}

ticketPerson(t1)=ari
ticketPerson(t2)=bea

mealPerson(m1)=ari
mealPerson(m2)=ari
mealPerson(m3)=bea
```

List the pullback pairs `(ticket, meal)` with matching person.

Answer check:

```text
(t1,m1), (t1,m2), (t2,m3)
```

Check the two projection paths:

```text
(t1,m1) -> t1 -> ari
(t1,m1) -> m1 -> ari

(t1,m2) -> t1 -> ari
(t1,m2) -> m2 -> ari

(t2,m3) -> t2 -> bea
(t2,m3) -> m3 -> bea
```

The pullback keeps only compatible pairs, and its projections certify the compatibility.

### Problem 18.9: Pushout as gluing

Two contact lists share the same person under a common ID:

```text
List A = {id7, ana}
List B = {id7, phone}
Shared = {id7}
```

If the lists are glued along `Shared`, what elements remain after identifying the two copies of `id7`?

Answer check:

```text
{id7, ana, phone}
```

The two copies of `id7` are identified, while the nonshared information is kept.

### Problem 18.10: Initial and terminal objects in Set

In `Set`, identify an initial object and a terminal object.

Answer check:

```text
Initial object: empty set, because there is exactly one function empty -> X for every set X.
Terminal object: any singleton set, because there is exactly one function X -> {*} for every set X.
```

Universal properties define objects by mapping behavior.

### Problem 18.11: Universal property versus implementation

Why is a universal property better than choosing one arbitrary implementation?

Answer check:

```text
It characterizes the object by how all legal maps interact with it, so equivalent implementations can be recognized as the same construction.
```

The object is defined by role, not by incidental representation.

### Problem 18.12: Failure mode - product when coproduct was intended

A system stores "paper or video" as a product:

```text
PaperFields x VideoFields
```

What goes wrong?

Answer check:

```text
It forces every item to carry both paper fields and video fields, even when only one type is present.
A tagged coproduct is the cleaner model for alternatives.
```

Choosing the wrong universal construction creates fake data requirements.
