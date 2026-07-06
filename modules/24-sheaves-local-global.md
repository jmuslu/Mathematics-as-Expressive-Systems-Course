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

## Research Bridge

Justin Curry's sheaf work and applied sheaf theory give tools for consistency over networks.
