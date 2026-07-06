# Mathematics as Expressive Systems

A self-paced applied mathematics course for designing dynamic epistemic graphs and LLM second-brain systems.

The guiding idea:

> External memory is not just retrieval. It is a structured evolving knowledge system whose transformations, invariants, validations, and failure modes should be mathematically legible.

## What This Course Is For

This course is for building mathematical taste around:

- Graphs and hypergraphs
- Transformations and symmetries
- Group actions and equivariance
- Tensors and typed relations
- Category theory and compositionality
- Topology, persistence, and sheaves
- Probabilistic validation and message passing
- Decay, reinforcement, consolidation, and graph evolution

The destination is broader than RAG or vector search. Those are applications. The deeper target is the design of an external cognitive architecture: a living graph of claims, context, evidence, validations, and transformations.

## Start Here

- [Course Map](COURSE_MAP.md)
- [Lecture Lens](LECTURE_LENS.md)
- [Source Pedagogy](SOURCE_PEDAGOGY.md)
- [Website Design Notes](WEBSITE_DESIGN_NOTES.md)
- [Course QA](COURSE_QA.md)
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
5. Topology of memory
6. Uncertainty and validation
7. Dynamics and design

See [Course Map](COURSE_MAP.md) for the full sequence.

## Course Style

The course should stay close to the supplied ML math slide decks:

```text
concrete problem -> base case -> operation -> definition -> derivation -> failure mode -> design implication
```

No coding assignments are required. Problems are mathematical and architectural.

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
