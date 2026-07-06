# Mathematics as Expressive Systems

A self-paced applied mathematics course for designing expressive systems: structured representations, transformations, invariants, constraints, uncertainty, and dynamics.

The guiding idea:

> A mathematical object becomes useful when you know what it can express, what operations it makes legal, what it preserves, and how it fails.

## What This Course Is For

This course is for building mathematical taste around:

- Graphs and hypergraphs
- Transformations and symmetries
- Group actions and equivariance
- Tensors and typed relations
- Category theory and compositionality
- Topology, persistence, and sheaves
- Probabilistic modeling and message passing
- Decay, reinforcement, consolidation, and graph evolution

The examples move through friendship profiles, dinner plans, dating standards, playlists, study notes, rosters, debate boards, and recommendation graphs. External memory, RAG, and vector search remain useful applications, but the course is not forced around them.

## Start Here

- [Course Map](COURSE_MAP.md)
- [Lecture Lens](LECTURE_LENS.md)
- [Source Pedagogy](SOURCE_PEDAGOGY.md)
- [Website Design Notes](WEBSITE_DESIGN_NOTES.md)
- [Course QA](COURSE_QA.md)
- [Problem Trail Style](PROBLEM_TRAIL_STYLE.md)
- [Primary Paper Trail](research/primary-papers.md)
- [Question Bank Source Policy](QUESTION_BANK_SOURCE_POLICY.md)
- [Question Bank](question-bank/README.md)
- [Interactive Course Site](docs/index.html)

## Modules

There are 32 modules, grouped into seven parts:

1. Foundations of representation
2. Structure and invariance
3. Graphs as systems
4. Composition and typing
5. Topology of local structure
6. Uncertainty and validation
7. Dynamics and design

See [Course Map](COURSE_MAP.md) for the full sequence.

## Course Style

The course should stay close to the supplied ML math slide decks:

```text
concrete problem -> base case -> operation -> definition -> derivation -> failure mode -> design implication
```

No coding assignments are required. Problems are mathematical and architectural.

Each module currently has a 12-problem hand trail with answer checks. The central question bank can grow much larger, but lecture modules should only promote the problems that teach the local idea cleanly.

## License And Source Use

This repository is released under the [MIT License](LICENSE).

Question-bank development should follow the [Question Bank Source Policy](QUESTION_BANK_SOURCE_POLICY.md): use public and institutional sources for orientation, track provenance, and write original course problems unless a source license clearly allows direct reuse.

## Local Website Preview

Stage the same static artifact GitHub Pages receives:

```powershell
Remove-Item -Recurse -Force _site -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force _site | Out-Null
Copy-Item -Recurse -Force docs\* _site\
Copy-Item -Recurse -Force modules _site\modules
Copy-Item -Recurse -Force research _site\research
New-Item -ItemType File -Force _site\.nojekyll | Out-Null
```

Then run:

```powershell
python -m http.server 4173 -d _site
```

Visit `http://localhost:4173`.
