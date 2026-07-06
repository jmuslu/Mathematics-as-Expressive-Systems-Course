# Modules 17-21 Bank: Categories, Functors, Schemas, and Operads

Source posture: original course problems inspired by public applied category theory sources. These are reserve candidates, not promoted lecture text.

## Source Anchors

- [Seven Sketches in Compositionality](https://arxiv.org/abs/1803.05316)
- [An Invitation to Applied Category Theory](https://brendanfong.com/fong_spivak_an_invitation.pdf)
- [MIT OCW Applied Category Theory](https://ocw.mit.edu/courses/18-s097-applied-category-theory-january-iap-2019/pages/lecture-videos-and-readings/)
- [Chapter 3: Databases: Categories, Functors, and (Co)Limits](https://ocw.mit.edu/courses/18-s097-applied-category-theory-january-iap-2019/pages/lecture-videos-and-readings/chapter-3-databases-categories-functors-and-co-limits/)
- [Functorial Data Migration](https://arxiv.org/abs/1009.1166)
- [Operads for Complex System Design Specification, Analysis and Synthesis](https://arxiv.org/pdf/2101.11115)
- [Using Category Theory to Organize and Operate on Information](https://dspivak.net/talks/pdfs/20171002-mcgill.pdf)

## 17.workflow.associativity.a

```text
Module: 17
Topic: associativity of composition
Role: computation
Status: promoted in Module 17 Problem 17.4
Source use: original, source-informed
Source note: Inspired by basic category composition laws and applied-category emphasis on compositional workflows.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A classroom workflow has typed arrows:

```text
draft: Idea -> Paragraph
revise: Paragraph -> Essay
submit: Essay -> Portfolio
```

Write the source and target of:

```text
submit o (revise o draft)
(submit o revise) o draft
```

## Answer Check

```text
revise o draft: Idea -> Essay
submit o (revise o draft): Idea -> Portfolio

submit o revise: Paragraph -> Portfolio
(submit o revise) o draft: Idea -> Portfolio
```

Both parenthesizations give the same typed composite.

## Intuition

Associativity says legal pipelines do not depend on where you put parentheses.

## Modeling Implication

When a process is typed correctly, multi-step composition can be treated as one arrow.

## Reserve Notes

Good replacement for memory-specific workflow examples if Module 17 needs a more ordinary first pass.

## 17.morphism.preservation.table.a

```text
Module: 17
Topic: structure-preserving maps
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Inspired by category examples contrasting Set, Graph, and Vect morphisms.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

For each proposed map, decide what structure it must preserve to be a morphism in the named category.

```text
A. Set: f: A -> B
B. Graph: f: G -> H
C. Vect: T: V -> W
D. Poset: f: P -> Q
```

## Answer Check

```text
A. functions preserve only element assignment and typing
B. graph morphisms preserve adjacency or incidence, depending on convention
C. linear maps preserve addition and scalar multiplication
D. monotone maps preserve order: x <= y implies f(x) <= f(y)
```

## Intuition

The word "map" is incomplete until the category says what structure matters.

## Modeling Implication

Typed memory transforms should state their preservation rule, not just their input and output format.

## Reserve Notes

Useful for graduate-level precision about morphism choice.

## 17.friendship-graph-morphism.a

```text
Module: 17
Topic: graph morphisms as structure-preserving maps
Role: computation / conceptual check
Status: promoted
Source use: original, source-informed
Source note: Inspired by applied category theory examples that compare categories by their chosen morphisms.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A friendship graph has one edge:

```text
Ari -- Bea
```

A role graph has one collaboration edge:

```text
Planner -- Designer
```

Define:

```text
f(Ari)=Planner
f(Bea)=Designer
```

Does `f` preserve adjacency? What changes if the role graph has the same two nodes but no collaboration edge?

## Answer Check

```text
With the Planner-Designer edge: yes, the edge Ari-Bea maps to an edge.
Without that edge: no, the edge Ari-Bea maps to a non-edge.
```

The same node assignment can be a graph morphism in one target graph and fail in another.

## Intuition

A morphism is not just a renaming. It must preserve the structure the category cares about.

## Modeling Implication

When translating one relational system into another, the target must contain the relationships that the source promises to preserve.

## Reserve Notes

Promoted into Module 17 as the ordinary human version of the graph morphism/failure-mode pair.

## 17.isomorphism.lost-information.a

```text
Module: 17
Topic: isomorphism versus lossy morphism
Role: failure mode
Status: lecture candidate
Source use: original
Source note: Course-style operational analogy.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A restaurant reservation system has two operations:

```text
renameTable: TableLabel -> TableLabel
summarizeParty: FullGuestList -> PartySize
```

Which is more likely to be an isomorphism, and why?

## Answer Check

```text
renameTable is likely invertible if labels are changed one-to-one.
summarizeParty usually loses guest identities, so it is not invertible.
```

## Intuition

Both are useful maps, but only one preserves enough information to be undone.

## Modeling Implication

Do not model lossy compression as symmetry or isomorphism.

## Reserve Notes

Simple human analogy for reversible versus irreversible morphisms.

## 18.product.ticket-fields.a

```text
Module: 18
Topic: product universal property
Role: warm-up
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by products in Set from applied category theory sources.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A theater ticket must expose both:

```text
seat: Ticket -> Seat
show: Ticket -> Show
```

If a product-like ticket is represented as `(seat, show)`, what is the unique map from a purchase record `P` with maps:

```text
s: P -> Seat
t: P -> Show
```

into `Seat x Show`?

## Answer Check

```text
<s,t>: P -> Seat x Show
p -> (s(p), t(p))
```

The projections recover the original maps:

```text
pi_Seat o <s,t> = s
pi_Show o <s,t> = t
```

## Intuition

The product is the canonical object for holding both fields at once.

## Modeling Implication

Products are not just pairs; they are pairs with the right projection behavior.

## Reserve Notes

Good everyday alternative to memory metadata examples.

## 18.pullback.roster-join.a

```text
Module: 18
Topic: pullback as join
Role: computation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by Seven Sketches database/pullback examples.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A club has:

```text
Students = {ana, ben, cy}
Teams = {red, blue}
Forms = {f1, f2, f3}
```

with:

```text
studentTeam(ana)=red
studentTeam(ben)=blue
studentTeam(cy)=red

formTeam(f1)=red
formTeam(f2)=red
formTeam(f3)=blue
```

List the pullback pairs `(student, form)` that have the same team.

## Answer Check

```text
(ana,f1), (ana,f2), (cy,f1), (cy,f2), (ben,f3)
```

## Intuition

The pullback keeps compatible pairs over the shared target.

## Modeling Implication

Many joins are pullbacks: matching is a universal construction, not a one-off query trick.

## Reserve Notes

Good candidate for Module 18 or Module 20 depending on whether the lesson is universal property or database join.

## 18.pullback.lunch-consistency.a

```text
Module: 18
Topic: pullback as consistency object
Role: computation
Status: promoted
Source use: original, source-informed
Source note: Inspired by applied category theory examples of pullbacks as matching/compatibility objects.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A lunch coordinator has:

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

List the pullback pairs `(ticket, meal)` whose two paths land on the same person.

## Answer Check

```text
(t1,m1), (t1,m2), (t2,m3)
```

For example:

```text
t1 -> ari and m1 -> ari
t2 -> bea and m3 -> bea
```

## Intuition

The pullback keeps only the compatible ticket-meal pairs.

## Modeling Implication

A consistency join is not just a table trick. It is the canonical object that makes two projections agree over a shared target.

## Reserve Notes

Promoted into Module 18 to keep the universal-property trail aligned with the lunch-order running example.

## 18.pushout.shared-name.a

```text
Module: 18
Topic: pushout as gluing
Role: computation
Status: promoted
Source use: original, source-informed
Source note: Inspired by applied category theory colimit/gluing examples.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Two contact lists share the same person under a common ID:

```text
List A = {id7, ana}
List B = {id7, phone}
Shared = {id7}
```

If the lists are glued along `Shared`, what elements remain after identifying the two copies of `id7`?

## Answer Check

```text
{id7, ana, phone}
```

## Intuition

Pushout-like gluing merges the agreed shared part and keeps the nonshared additions.

## Modeling Implication

Gluing requires knowing what is truly shared. Otherwise, systems duplicate or collapse the wrong things.

## Reserve Notes

Promoted into Module 18 as a concrete pushout/gluing computation.

## 18.coproduct.food-order.a

```text
Module: 18
Topic: coproduct as tagged alternative
Role: conceptual check
Status: lecture candidate
Source use: original
Source note: Course-style ordinary alternative example.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A lunch order is either:

```text
SandwichOrder = {turkey, veggie}
SaladOrder = {caesar}
```

List the elements of the coproduct `SandwichOrder + SaladOrder`.

## Answer Check

```text
(Sandwich, turkey)
(Sandwich, veggie)
(Salad, caesar)
```

## Intuition

Tags prevent confusing alternatives just because their fields might overlap.

## Modeling Implication

Alternatives should not be forced into product fields that pretend every item has every type of data.

## Reserve Notes

Small base-case candidate for coproducts.

## 19.functor.composition.check.a

```text
Module: 19
Topic: functor preserving composition
Role: computation
Status: promoted in Module 19 Problem 19.4
Source use: original, source-informed
Source note: Inspired by functor definitions in applied category theory sources.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A tiny category has:

```text
A --f--> B --g--> C
```

A functor `F` sends:

```text
F(A) = {1,2}
F(B) = {x,y}
F(C) = {done}
F(f)(1)=x, F(f)(2)=y
F(g)(x)=done, F(g)(y)=done
```

Compute `F(g o f)(1)` and `F(g o f)(2)`.

## Answer Check

```text
F(g o f) = F(g) o F(f)

F(g o f)(1) = F(g)(x) = done
F(g o f)(2) = F(g)(y) = done
```

## Intuition

The functor translates a path into a composed function.

## Modeling Implication

Structure-preserving translation must preserve multi-step relationships, not just individual objects.

## Reserve Notes

Good direct computation for Module 19.

## 19.naturality.menu-labels.a

```text
Module: 19
Topic: naturality square
Role: derivation
Status: reserve
Source use: original, source-informed
Source note: Inspired by natural transformations as coherent maps between functors.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

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

## Answer Check

```text
G(type)(eta_Dish(v)) = G(type)(veggie-bowl) = vegetarian
eta_Category(F(type)(v)) = eta_Category(veg) = vegetarian
```

Both paths agree.

## Intuition

Translate first, then follow the relationship; or follow the relationship, then translate. Naturality says the result is the same.

## Modeling Implication

Schema migration must preserve relationships coherently, not just rename rows.

## Reserve Notes

Standalone analogy for natural transformations.

## 19.naturality.notes-to-flashcards.a

```text
Module: 19
Topic: naturality square
Role: derivation / computation
Status: promoted
Source use: original, source-informed
Source note: Inspired by functorial data migration sources where schemas are categories, instances are Set-valued functors, and coherent instance maps are natural transformations.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A notebook app encoding `F` has:

```text
F(Bullet) = {b1}
F(Heading) = {h1}
F(under)(b1) = h1
```

A flashcard app encoding `G` has:

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

Check naturality for `under: Bullet -> Heading`.

## Answer Check

```text
G(under)(eta_Bullet(b1)) = G(under)(card-1) = deck-1
eta_Heading(F(under)(b1)) = eta_Heading(h1) = deck-1
```

Both paths agree.

## Intuition

Move the bullet first and then find its deck, or find its heading first and then move that heading. A coherent translation makes those paths match.

## Modeling Implication

Data migration should preserve relationships between records, not just rename records one object at a time.

## Reserve Notes

Promoted into Module 19 to align the naturality computation with the notebook-to-flashcards running example.

## 19.forgetful.lost-equations.a

```text
Module: 19
Topic: forgetful functor failure mode
Role: failure mode
Status: reserve
Source use: original, source-informed
Source note: Inspired by database/schema functor examples.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A typed schema has a path equation:

```text
sourceOrg o madeBy = docOrg o appearsIn
```

A forgetful translation keeps the tables but drops path equations. Name one thing that can go wrong.

## Answer Check

```text
Rows can still exist, but the system may no longer check whether the source organization and document organization agree.
```

## Intuition

Forgetting equations can preserve data shape while losing consistency constraints.

## Modeling Implication

Translations should say what structure they discard: labels, directions, equations, provenance, or typing.

## Reserve Notes

Good bridge from Module 19 to Module 20.

## 20.path-equation.check.a

```text
Module: 20
Topic: database path equation
Role: computation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by categorical database path-equation examples.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A schema has:

```text
Order -> Customer -> City
Order -> DeliveryAddress -> City
```

The intended path equation says:

```text
customerCity o madeBy = addressCity o shipsTo
```

For order `o1`:

```text
madeBy(o1)=c1
shipsTo(o1)=a1
customerCity(c1)=Boston
addressCity(a1)=Boston
```

Does the equation hold for `o1`?

## Answer Check

```text
Left path: customerCity(madeBy(o1)) = customerCity(c1) = Boston
Right path: addressCity(shipsTo(o1)) = addressCity(a1) = Boston
```

Yes, both paths agree.

## Intuition

Path equations are row-level consistency checks.

## Modeling Implication

Categorical schemas make hidden assumptions explicit and testable.

## Reserve Notes

Good ordinary database example for Module 20.

## 20.roster-path-equation.a

```text
Module: 20
Topic: categorical database path equation
Role: computation / consistency check
Status: promoted
Source use: original, source-informed
Source note: Inspired by categorical database examples where schemas are categories with path equations and instances are Set-valued functors.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A club roster schema has:

```text
Member -> Team -> Captain -> Email
Member -> Team -> Email
```

with arrows:

```text
team: Member -> Team
captain: Team -> Captain
captainEmail: Captain -> Email
teamContact: Team -> Email
```

Write the path equation saying a member's team captain email agrees with the team's official contact email. Then check it for:

```text
team(jo)=debate
captain(debate)=ana
captainEmail(ana)=debate-club@northeastern.edu
teamContact(debate)=debate-club@northeastern.edu
```

## Answer Check

```text
captainEmail o captain o team = teamContact o team

(captainEmail o captain o team)(jo) = debate-club@northeastern.edu
(teamContact o team)(jo) = debate-club@northeastern.edu
```

The equation holds for `jo`.

## Intuition

A path equation says that two legal ways of walking through the schema must return the same row-level value.

## Modeling Implication

Categorical schemas turn consistency into a checkable structural requirement rather than an informal naming convention.

## Reserve Notes

Promoted into Module 20 to align the path-equation calculation with the club-roster running example.

## 20.path-equation.violation.a

```text
Module: 20
Topic: database constraint violation
Role: counterexample
Status: reserve
Source use: original, source-informed
Source note: Inspired by categorical database path-equation examples.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Use the same schema as `20.path-equation.check.a`, but now:

```text
customerCity(c1)=Boston
addressCity(a1)=Providence
```

Does the path equation hold?

## Answer Check

```text
Left path returns Boston.
Right path returns Providence.
```

No. The order violates the path equation.

## Intuition

The same row can look complete while failing a schema-level relationship.

## Modeling Implication

Typed arrows plus equations give stronger validation than field presence alone.

## Reserve Notes

Pairs with the previous problem.

## 20.instance-morphism.naturality.a

```text
Module: 20
Topic: natural transformation between instances
Role: derivation
Status: promoted in Module 20 Problem 20.9
Source use: original, source-informed
Source note: Inspired by instances as Set-valued functors and natural transformations between instances.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Two database instances share schema:

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

A migration maps:

```text
eta_Ticket(t1)=ticket-001
eta_Event(e1)=concert-A
```

Check naturality for `event`.

## Answer Check

```text
G(event)(eta_Ticket(t1)) = G(event)(ticket-001) = concert-A
eta_Event(F(event)(t1)) = eta_Event(e1) = concert-A
```

Both paths agree.

## Intuition

Migrating a ticket and then asking for its event matches asking first and migrating the event.

## Modeling Implication

Data migration should preserve foreign-key relationships coherently.

## Reserve Notes

Useful direct example of instances as functors.

## 20.schema-map.forget-column.a

```text
Module: 20
Topic: schema migration direction
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Inspired by functorial data migration.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

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

## Answer Check

```text
It forgets information: Confidence is dropped.
```

## Intuition

Schema migration has direction. Dropping structure is not the same as enriching structure.

## Modeling Implication

Every migration should state what it preserves and what it discards.

## Reserve Notes

Good reserve for source-policy style: original but anchored in functorial migration.

## 21.operation-tree.menu.a

```text
Module: 21
Topic: operation tree
Role: warm-up
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by operads and wiring diagrams as typed multi-input composition.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A dinner plan uses operations:

```text
chooseMain: Guest x Budget -> MainDish
pairDrink: MainDish x Preference -> DrinkPairing
```

Plug `chooseMain` into the first slot of `pairDrink`. What is the composite operation type?

## Answer Check

```text
Guest x Budget x Preference -> DrinkPairing
```

## Intuition

The output of one operation fills a typed input slot of another.

## Modeling Implication

Operadic composition remembers dependency shape and slot types.

## Reserve Notes

Natural analogy for Module 21 without forcing memory-system framing.

## 21.nonassociative.combine.a

```text
Module: 21
Topic: parenthesization matters
Role: computation
Status: lecture candidate
Source use: original
Source note: Course-style operation example.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let:

```text
combine(a,b) = 0.75a + 0.25b
```

Compute:

```text
combine(combine(0, 8), 8)
combine(0, combine(8, 8))
```

## Answer Check

```text
combine(0,8) = 2
combine(2,8) = 0.75(2) + 0.25(8) = 3.5

combine(8,8) = 8
combine(0,8) = 2
```

The results differ.

## Intuition

Some multi-input operations depend on tree shape.

## Modeling Implication

Pipelines should record composition structure when operations are not associative.

## Reserve Notes

Alternative to the current average example, slightly richer because weights make order matter.

## 21.wiring.type-check.a

```text
Module: 21
Topic: typed plugging
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Inspired by wiring-diagram and operad sources.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Available operations:

```text
extractQuote: Passage -> Quote
checkQuote: Claim x Quote -> Status
extractTopic: Passage -> Topic
```

Which operation can be plugged into the second slot of `checkQuote`?

## Answer Check

```text
extractQuote can be plugged in because its output type is Quote.
extractTopic cannot be plugged in because its output type is Topic.
```

## Intuition

Wiring diagrams are type-checked. A wire must feed a compatible port.

## Modeling Implication

Typed composition prevents semantically plausible but invalid pipeline connections.

## Reserve Notes

Good operational bridge from operads to validation pipelines.

## 21.dinner-wiring.type-check.a

```text
Module: 21
Topic: typed plugging
Role: conceptual check / failure mode
Status: promoted
Source use: original, source-informed
Source note: Inspired by operads and wiring diagrams as typed port-and-slot composition.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Available operations:

```text
findReservation: Restaurant -> Reservation
estimateCost: Restaurant -> Cost
planDinner: Shortlist x Reservation x Transportation -> DinnerPlan
```

Which operation can be plugged into the Reservation slot of `planDinner`, and which cannot?

## Answer Check

```text
findReservation can be plugged in because its output type is Reservation.
estimateCost cannot be plugged in because its output type is Cost.
```

The valid composite has type:

```text
planDinner(Shortlist, findReservation(Restaurant), Transportation):
Shortlist x Restaurant x Transportation -> DinnerPlan
```

## Intuition

A useful output is not automatically a compatible output. The slot decides what type can be wired in.

## Modeling Implication

Typed wiring prevents plausible but invalid process compositions.

## Reserve Notes

Promoted into Module 21 to keep the type-checking problems inside the dinner-planning running example.

## 21.hyperedge.operation.distinction.a

```text
Module: 21
Topic: hyperedge versus operation
Role: conceptual check
Status: promoted
Source use: original, source-informed
Source note: Inspired by the distinction between relations, hypergraphs, and typed operations in applied category theory.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A hyperedge connects:

```text
Guest, Ingredient, Allergy
```

An operation has type:

```text
Guest x Ingredient x Allergy -> SafeDishDecision
```

What does the operation specify that the hyperedge alone does not?

## Answer Check

```text
The operation specifies an output type and a rule/process for producing it.
The hyperedge only says the inputs are related.
```

## Intuition

Relation is not the same as computation.

## Modeling Implication

Validation should distinguish "these things are connected" from "these things produce this conclusion."

## Reserve Notes

Good reserve problem for preventing flattening of multi-input processes.
