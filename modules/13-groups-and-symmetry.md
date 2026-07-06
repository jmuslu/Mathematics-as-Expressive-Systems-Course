# Module 13: Groups, Symmetry, and Party-Game Moves

## Lecture Promise

You will understand groups as legal transformations that preserve some structure, and why this is the first serious language for reversible change.

## Prerequisites

- Functions and composition
- Matrix multiplication
- Basic graph vocabulary

## Why The Old Object Fails

A state description can tell you who sits where or which songs are present. It does not automatically tell you which transformations preserve meaning.

For any structured representation, you need to ask:

- Can I relabel nodes without changing the system?
- Can I rename, reorder, or rotate a representation safely?
- Which moves preserve the rules?
- Which transformations break the state space?

That is symmetry.

## Base Case

Let a square have rotations:

```text
e, r, r^2, r^3
```

where r is a 90-degree rotation. Composition stays inside the set:

```text
r^2 r^3 = r^5 = r
```

Closure is what makes this a transformation system rather than a list of moves.

## Running Example: Party-Game Moves

In a party game, a legal move might rotate the seating chart one seat clockwise. If you can rotate once, rotate twice, rotate three times, and do nothing, then doing legal moves after legal moves stays legal.

You can also undo every rotation:

```text
clockwise once is undone by clockwise three times
```

But "remove a player from the game" is different. It may be useful, but it is not a symmetry if the removed player cannot be recovered from the new state.

Groups are the math of reversible legal moves, not the math of every possible update.

## Formal Object

A group G is a set with an operation satisfying:

- Closure
- Associativity
- Identity
- Inverses

The design translation:

```text
safe transformations should compose, undo, and stay valid
```

## Worked Derivation

If g has inverse g^-1, then applying g and then g^-1 preserves the original object:

```text
g^-1(g(x)) = x
```

This is the simplest mathematical form of reversible structured transformation.

## Failure Mode

Not every useful operation is a group operation.

- Decay may not be invertible.
- Summarization may lose information.
- Consolidation may merge nodes irreversibly.

Some useful operations are not symmetries. Reversible transformations and irreversible dynamics must be distinguished.

## Problem Ladder

1. List the group table for rotations of a square.
2. Give a party-game move that has an inverse and one that does not.
3. Explain why relabeling seats should preserve the seating pattern.

## Representation Design Connection

Groups answer: which transformations preserve the object, and which transformations actually change it?

## Hand Problem Trail

### Problem 13.1: Is it a group?

For each set and operation, decide if it is a group.

```text
integers under addition
positive reals under multiplication
integers under multiplication
nonzero reals under multiplication
```

Answer check:

```text
yes, yes, no, yes
```

### Problem 13.2: Why integers under multiplication fail

Explain which group rule fails for the integers under multiplication.

Answer check:

```text
Most integers do not have integer multiplicative inverses.
For example, 2 would need 1/2, but 1/2 is not an integer.
```

Closure holds and associativity holds, but inverses fail.

### Problem 13.3: Rotation closure for a square

Let `r` be a 90-degree rotation. Simplify:

```text
r^2 r^3
r^3 r^3
r^5
```

Answer check:

```text
r^2 r^3 = r^5 = r
r^3 r^3 = r^6 = r^2
r^5 = r
```

All exponents are reduced modulo 4.

### Problem 13.4: Inverse rotations

For the square rotation group `{e, r, r^2, r^3}`, find the inverse of each element.

Answer check:

```text
e^{-1} = e
r^{-1} = r^3
(r^2)^{-1} = r^2
(r^3)^{-1} = r
```

The inverse is the move that undoes the rotation.

### Problem 13.5: Symmetries of a two-node edge

A graph has nodes `{1,2}` and one edge between them. List all node permutations that preserve adjacency.

Answer check: identity and swap. This group is isomorphic to C2.

### Problem 13.6: Cayley table for C2

Let elements be `e` and `s`, where `s^2=e`. Write the multiplication table.

Answer check:

```text
   e s
 e e s
 s s e
```

### Problem 13.7: Partial moves are not a group

A board-game token can be rotated by:

```text
0 degrees, 90 degrees, 180 degrees
```

but the rulebook forgot to include `270 degrees`. Under composition of rotations, is this set a group?

Answer check:

```text
No.

90 + 180 = 270 degrees
```

The result is not in the listed set, so closure fails. Also, the inverse of a 90-degree rotation is a 270-degree rotation, which is missing.

A group is not just a collection of useful moves. It must be closed under doing moves after moves and under undoing them.

### Problem 13.8: A reversible relabeling

A graph operation swaps node labels 1 and 2. Is this operation invertible?

Answer check:

```text
Yes. Applying the same swap again restores the original labels.
```

Relabeling is a symmetry when labels are names rather than content.

### Problem 13.9: Invariant question

A feature returns the number of edges in a graph. Is it invariant under node relabeling?

Answer check: yes. Relabeling changes names, not the number of edges.

### Problem 13.10: Non-invariant question

A feature returns "the degree of node 1." Is it invariant under arbitrary node relabeling?

Answer check:

```text
No. If node labels are swapped, the old node 1 may now have a different name.
```

The feature may be meaningful only if node 1 has semantic identity beyond its storage label.

### Problem 13.11: Rotation table for an equilateral triangle

The rotational symmetries of an equilateral triangle are:

```text
e, r, r^2
```

where `r` is a 120-degree rotation and `r^3=e`. Write the Cayley table.

Answer check:

```text
      e    r    r^2
e     e    r    r^2
r     r    r^2  e
r^2   r^2  e    r
```

There are 3 rotational symmetries. Multiplication is exponent addition modulo 3. If reflections are included, the full symmetry group has 6 elements.

### Problem 13.12: Playlist symmetry versus dynamics

A playlist app allows these operations:

```text
A. reorder songs
B. reverse the order of the whole playlist
C. delete every skipped song
D. rename a playlist without changing songs
```

Answer check:

```text
A. symmetry if only order is presentation, not content
B. symmetry if order direction is presentation
C. irreversible dynamic unless skipped songs are recoverable
D. symmetry of contents
```

Groups are for legal reversible transformations. Deletion, decay, and consolidation may be useful, but they are not symmetries unless the lost state can be recovered.
