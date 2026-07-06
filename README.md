# Mathematics as Expressive Systems

A self-paced mathematics course about why new mathematical objects are invented.

The guiding question:

> When mathematicians need more expressive power, do they enlarge the space, enrich the scalars, or invent a new operation?

This course treats mathematics as a sequence of construction kits. Each new object exists because an older object could not express something naturally enough.

## How This Course Works

Each module follows the same rhythm:

1. What limitation forced this object to exist?
2. What is the new object?
3. What operations are now legal?
4. What new invariants appear?
5. What concrete examples make the object feel natural?
6. Which later theories depend on this object?

This is intentionally math-first. There are no programming assignments.

## Start Here

- [Course Map](COURSE_MAP.md)
- [Lecture Lens](LECTURE_LENS.md)
- [Interactive Course Site](docs/index.html)

## Modules

1. [Orientation: Mathematics as Expressive Design](modules/00-orientation.md)
2. [Numbers: Extending What One Coordinate Can Say](modules/01-number-systems.md)
3. [Vectors and Spaces: Direction, Combination, Reachability](modules/02-vectors-and-spaces.md)
4. [Matrices: Machines That Move Vectors](modules/03-linear-maps-and-matrices.md)
5. [Invariants: What Survives Transformation](modules/04-invariants.md)
6. [Complex Geometry: Scaling with Phase](modules/05-complex-geometry.md)
7. [Rings, Fields, and Quotients: Algebraic Construction Rules](modules/06-rings-fields-quotients.md)
8. [Algebras: When Objects Multiply](modules/07-algebras.md)
9. [Tensors: Several Inputs at Once](modules/08-tensors.md)
10. [Duality and Constraints: What Measures What](modules/09-duality-and-constraints.md)
11. [Groups: The Legal Moves](modules/10-groups.md)
12. [Representation Theory: Symmetry as Computation](modules/11-representation-theory.md)
13. [Category Theory: Structure-Preserving Systems](modules/12-category-theory.md)
14. [Capstone: Design a Mathematical Object](modules/13-capstone.md)

## Format Notes

The structure is inspired by the supplied ML mathematics lecture PDFs: short conceptual lectures, a motivating metaphor, concrete hand calculations, and a clear dependency chain. The topic direction is different: instead of preparing for machine learning, this course follows the expansion of mathematical expressiveness.

## Local Website Preview

Open `docs/index.html` directly in a browser, or run a simple static server from the repo root:

```powershell
python -m http.server 4173 -d docs
```

Then visit `http://localhost:4173`.
