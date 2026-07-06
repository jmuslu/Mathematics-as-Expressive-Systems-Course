# Mathematics as Expressive Systems

A self-paced applied mathematics course for designing robust external memory systems for LLMs.

The guiding question:

> When mathematicians need more expressive power, do they enlarge the space, enrich the scalars, or invent a new operation?

This course treats mathematics as a sequence of construction kits. Each new object exists because an older object could not express something naturally enough. The destination is not quantum mechanics or pure abstraction for its own sake. The destination is memory: representations, retrieval, indexing, compression, uncertainty, and evaluation.

## How This Course Works

Each module follows a source-slide-inspired rhythm:

1. Start from a concrete failure.
2. Work a base case by hand.
3. Introduce the formal object only after the need is visible.
4. Derive the key operation.
5. Study a failure mode.
6. Build a problem ladder.
7. Connect the object to external memory systems.

This is intentionally math-first. There are no programming assignments.

## Start Here

- [Course Map](COURSE_MAP.md)
- [Lecture Lens](LECTURE_LENS.md)
- [Source Pedagogy](SOURCE_PEDAGOGY.md)
- [Primary Paper Trail](research/primary-papers.md)
- [Interactive Course Site](docs/index.html)

## Modules

1. [How To Work This Course](modules/00-orientation.md)
2. [Scalars, Coordinates, and Expressive Power](modules/01-number-systems.md)
3. [Vector Spaces, Reachability, and Memory Slots](modules/02-vectors-and-spaces.md)
4. [Linear Systems, Projection, and Error](modules/03-projection-and-error.md)
5. [Bases, Orthogonality, SVD, and Compression](modules/04-svd-and-compression.md)
6. [Spectral Structure, Graphs, and Stable Modes](modules/05-spectral-structure.md)
7. [Complex Scalars, Phase, Fourier Features, and Kernels](modules/06-complex-fourier-kernels.md)
8. [Probability, Information, and Uncertainty](modules/07-probability-information.md)
9. [Optimization, Duality, and Constraints](modules/08-optimization-duality.md)
10. [Metric Geometry and Embedding Spaces](modules/09-metric-geometry.md)
11. [Nearest Neighbor Search and Vector Indexes](modules/10-nearest-neighbor-indexes.md)
12. [Attention as Soft Retrieval](modules/11-attention-soft-retrieval.md)
13. [Contrastive Learning and Dense Retrieval](modules/12-contrastive-dense-retrieval.md)
14. [Memory-Augmented Models and Non-Parametric Memory](modules/13-memory-augmented-models.md)
15. [RAG, RETRO, and Retrieval-Conditioned Generation](modules/14-rag-and-retro.md)
16. [Long Context, Recency, Consolidation, and Forgetting](modules/15-long-context-memory.md)
17. [Robustness, Evaluation, and Memory System Design](modules/16-robustness-evaluation.md)

## Format Notes

The structure is inspired by the supplied ML mathematics lecture PDFs: prerequisites, motivating problems, worked base cases, derivations, and problem ladders. The topic direction is now specific: applied math for external memory in LLM systems.

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

Then run a simple static server:

```powershell
python -m http.server 4173 -d _site
```

Then visit `http://localhost:4173`.
