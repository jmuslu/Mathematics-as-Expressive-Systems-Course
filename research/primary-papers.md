# Primary Paper Trail

This course uses papers as mathematical pressure, not as a reading list to finish passively. A source belongs here when it forces a new question about how an external memory system should represent, transform, validate, and revise knowledge.

## Symmetry, Invariance, And Equivariance

- [A Complete Beginner's Guide to G-Invariance](https://invariances.org/ginvariance-tutorial/) - the design reference for the website and the most direct bridge from group action to invariant construction.
- [Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges](https://arxiv.org/abs/2104.13478) - a unifying account of representation learning through symmetry, geometry, and domain structure.
- [An Introduction to Tensors and Group Theory for Physicists](https://books.google.com/books/about/An_Introduction_to_Tensors_and_Group_The.html?id=JJuvb8507qQC) - Jeevanjee's tensor and group-theory style is a model for introducing mathematical objects through transformation laws and invariants, even though this course does not follow the physics specialization.
- [Universal Invariant and Equivariant Graph Neural Networks](https://arxiv.org/abs/1905.04943) - graph outputs should be invariant to relabeling; node outputs should be equivariant.
- [Expressive Power of Invariant and Equivariant Graph Neural Networks](https://arxiv.org/abs/2006.15646) - studies which invariant/equivariant functions practical graph networks can express.
- [Provably Powerful Graph Networks](https://arxiv.org/abs/1905.11136) - connects graph neural expressivity to Weisfeiler-Lehman graph distinction.

Problem hooks:

- Prove that a graph-level statistic must satisfy f(PAP^T) = f(A).
- Construct a node-level feature map F with F(PAP^T) = PF(A).
- Compare invariance, equivariance, and covariance on one three-node graph.
- Decide when inner, outer, tensor, wedge, and categorical products are the right way to combine objects.
- Find two non-isomorphic graphs that a weak message passing scheme cannot distinguish.
- Compute an orbit and stabilizer for a small group action.
- Build a Reynolds average over a two-element or three-element group and identify what information it erases.

## Groups, Actions, Representations, And Averaging

- [Groups and Group Actions Lecture Notes](https://www.maths.ox.ac.uk/system/files/attachments/Groups%20and%20Group%20Actions%20Lecture%20Notes.pdf) - group actions, orbits, stabilizers, and orbit-stabilizer as the finite-group backbone for modules 13-14.
- [Group Actions](https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf) - Keith Conrad's compact account of actions, cosets, conjugacy, and stabilizers.
- [Basic Group and Representation Theory](https://people.math.ethz.ch/~wilthoma/rep_theory/master.pdf) - actions, orbit-stabilizer, and representations as linear realizations of abstract symmetry.
- [Universal Invariant and Equivariant Graph Neural Networks](https://papers.neurips.cc/paper/8931-universal-invariant-and-equivariant-graph-neural-networks.pdf) - invariant graph-level outputs and equivariant node-level outputs as design constraints.
- [Invariant and Equivariant Reynolds Networks](https://www.jmlr.org/papers/volume25/22-0891/22-0891.pdf) - Reynolds operators as group averages that convert functions into invariant or equivariant forms.
- [Lecture 16: Reynolds Operator and Finite Generation of Invariant Rings](https://cs.uwaterloo.ca/~r5olivei/courses/2021-winter-cs487/lecture16-post.pdf) - explicit invariant-theory framing of Reynolds averaging.

Problem hooks:

- List the symmetry group of a square or triangle and compute inverses.
- Relabel a graph by `PAP^T` and distinguish invariant graph summaries from equivariant node data.
- Test whether a coordinate function is invariant, anti-invariant, equivariant, or neither.
- Average over a finite group action and verify the result is fixed by the group.
- Give a concrete case where averaging removes direction, provenance, or asymmetry that should have been preserved.

## Linear Algebra, Tensors, And Hermitian Structure

- [MIT OCW 18.06SC Linear Algebra Resource Index](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/) - public linear algebra backbone for vector spaces, subspaces, projection, least squares, determinants, eigenvalues, and diagonalization.
- [Projection Matrices and Least Squares](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/least-squares-determinants-and-eigenvalues/projection-matrices-and-least-squares/) - projection as the geometric foundation of least-squares approximation.
- [Notes on Dual Spaces](https://sites.math.northwestern.edu/scg479/courses/notes/dual-spaces.pdf) - linear functionals, dual spaces, and dual basis language.
- [Multilinear Algebra Notes for 18.101](https://ocw.mit.edu/courses/18-101-analysis-ii-fall-2005/4aa13eec01f3f70bd6eeeb7820d861a9_classnotesfall04.pdf) - public MIT OCW notes for multilinear maps, tensor products, alternating forms, and exterior algebra.
- [Notes on Tensor Products and the Exterior Algebra](https://www.math.uwaterloo.ca/~kpurbhoo/spring2012-math245/tensor.pdf) - a compact tensor/exterior algebra reference that emphasizes different products answering different construction problems.
- [Exterior Powers](https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf) - Keith Conrad's notes on exterior powers as a way to detect linear dependence and study subspace geometry.
- [The Dual of a Vector Space](https://people.math.osu.edu/gerlach.1/math5451/TensorCalculus/DualOfAVectorSpace.pdf) - a useful warning that covariant and contravariant language is about components and transformation laws, not magic kinds of arrays.
- [Lecture Notes on Manifolds, Tangent Vectors and Covectors](https://bohr.physics.berkeley.edu/classes/222/lectures/Lecture.2004.02.24.pdf) - concrete tangent/cotangent transformation laws and the vector/covector pairing.

Problem hooks:

- Convert scalar-system failures into the need for integers, rationals, reals, complex numbers, or log-odds coordinates.
- Compute span, basis, kernel, image, and rank-nullity examples by hand.
- Verify projection residual orthogonality and least-squares normal equations.
- Treat covectors as tests, compute kernels and annihilators, and identify measurement blind spots.
- Turn a bilinear dinner-preference score into a tensor slot problem.
- Compute a wedge product and explain when it vanishes because two directions are dependent.
- Preserve a scalar pairing under a change of units by transforming covector components in the opposite direction.
- Lower a vector index with a metric and explain why this is extra geometric structure.
- Show why complex geometry needs conjugation by producing a nonzero vector with invalid transpose-only length.

## Category Theory, Schemas, And Provenance

- [Seven Sketches in Compositionality](https://arxiv.org/abs/1803.05316) - applied category theory through databases, orders, circuits, dynamical systems, and sheaves.
- [MIT OCW Applied Category Theory](https://ocw.mit.edu/courses/18-s097-applied-category-theory-january-iap-2019/pages/lecture-videos-and-readings/) - public course readings that pair Seven Sketches with database, circuit, operad, and sheaf examples.
- [Chapter 3: Databases: Categories, Functors, and (Co)Limits](https://ocw.mit.edu/courses/18-s097-applied-category-theory-january-iap-2019/pages/lecture-videos-and-readings/chapter-3-databases-categories-functors-and-co-limits/) - schema categories, Set-valued instances, natural transformations, and data migration.
- [Chapter 6: Circuits: Hypergraph Categories and Operads](https://ocw.mit.edu/courses/18-s097-applied-category-theory-january-iap-2019/pages/lecture-videos-and-readings/chapter-6-circuits-hypergraph-categories-and-operads/) - wiring diagrams, hypergraph categories, decorated cospans, and operads.
- [Functorial Data Migration](https://arxiv.org/abs/1009.1166) - database schemas as categories; instances as set-valued functors; schema change as functorial migration.
- [Relational Foundations for Functorial Data Migration](https://arxiv.org/abs/1212.5303) - graph-presented schemas, path equations, and categorical instance categories.
- [Functorial Data Migration: From Theory to Practice](https://arxiv.org/abs/1502.05947) - concrete data migration scenarios and the practical interpretation of schema functors.

Problem hooks:

- Turn a small typed memory schema into a category.
- Interpret a memory instance as a functor into Set.
- Use a natural transformation to describe provenance-preserving memory revision.
- Explain why schema evolution should be functorial rather than an ad hoc migration script.
- Compute product, coproduct, pullback, and pushout examples with tiny sets.
- Check a path equation in a categorical database instance.
- Model typed multi-input validation as an operadic plugging problem.

## Sheaves, Topology, And Local-To-Global Consistency

- [Persistent Homology: Theory and Practice](https://pub.ista.ac.at/~edels/Papers/2012-11-PHTheoryPractice.pdf) - Edelsbrunner and Harer's overview of persistent homology as the algebraic tool for tracking features across filtrations.
- [A User's Guide to Topological Data Analysis](https://learning-analytics.info/index.php/JLA/article/download/5196/6089?inline=1) - accessible TDA framing around persistence diagrams, loops, holes, and mapper-style signatures.
- [A roadmap for the computation of persistent homology](https://link.springer.com/article/10.1140/epjds/s13688-017-0109-5) - computational perspective on persistent homology and its robustness to perturbations.
- [Sheaves, Cosheaves and Applications](https://arxiv.org/abs/1303.3255) - cellular sheaves and cosheaves as computable tools for topological data analysis, networks, and sensor systems.
- [A gentle introduction to sheaves on graphs](https://www.jakobhansen.org/publications/gentleintroduction.pdf) - graph-based sheaf language for local data, restriction maps, and global sections.
- [Discrete Morse Theory for Computing Cellular Sheaf Cohomology](https://arxiv.org/abs/1312.6454) - computational sheaf cohomology and distributed consistency.
- [Toward a Spectral Theory of Cellular Sheaves](https://link.springer.com/article/10.1007/s41468-019-00038-7) - extends spectral graph theory toward sheaf Laplacians and sheaf cohomology.

Problem hooks:

- Build an epsilon-threshold graph and count connected components as epsilon changes.
- Record birth and death intervals for components and loops in a tiny filtration.
- Build a sheaf on a two-source contradiction graph.
- Decide when local sections glue into a global section.
- Compare ordinary graph Laplacians with the idea of a sheaf Laplacian.
- Interpret a failed gluing condition as a memory-system inconsistency rather than a retrieval miss.

## Graphs, Hypergraphs, And Algebraic Structure

- [Graph Theory](https://diestel-graph-theory.com/) - mature graph-theoretic language for paths, connectivity, minors, colorings, and structure.
- [Spectral and Algebraic Graph Theory](https://cs-www.cs.yale.edu/homes/spielman/sagt/sagt.pdf) - Spielman's lecture-note book connecting graph structure to linear algebra, Laplacians, eigenvectors, cuts, and flows.
- [Lectures on Spectral Graph Theory](https://fanchung.ucsd.edu/research/cbms.pdf) - Chung's graph Laplacian and eigenvalue reference for spectral graph invariants.
- [Lecture Notes on Spectral Graph Methods](https://arxiv.org/pdf/1608.04845) - Mahoney's notes on spectral graph methods, graph partitioning, and algorithmic uses of spectra.
- [The Modern Algorithmic Toolbox: Spectral Graph Theory](https://web.stanford.edu/class/cs168/l/l11.pdf) - concise treatment of Laplacian zero eigenvalues and connected components.
- [Spectral Graph Theory](https://people.math.wisc.edu/~roch/grad-prob/grad_prob_devel1/bookch10.pdf) - graph Laplacians, cuts, diffusion, and eigenstructure.
- [Relational inductive biases, deep learning, and graph networks](https://arxiv.org/abs/1806.01261) - why graph-structured computation is a natural inductive bias for relational systems.

Problem hooks:

- Decompose a vector into eigenmodes and interpret growth, decay, and stable graph dynamics.
- Compute incidence, adjacency, degree, and Laplacian matrices for one typed graph.
- Use Laplacian quadratic forms to measure disagreement across edges.
- Use a Laplacian eigenvector to identify a bottleneck in a memory graph.
- Convert a ternary relation into a hyperedge and compare what is lost in pairwise encoding.
- Distinguish graph connectivity from semantic consistency.

## Probability, Message Passing, And Validation

- [Probabilistic Graphical Models: Principles and Techniques](https://mitpress.mit.edu/9780262013192/probabilistic-graphical-models/) - factorization, conditional independence, evidence, and inference.
- [Information, Physics, and Computation](https://academic.oup.com/book/10381) - Mezard and Montanari's message-passing and graphical-model intuition is useful for validation loops, without making the course a statistical physics course.
- [Factor Graphs and the Sum-Product Algorithm](https://www.mit.edu/~6.454/www_fall_2000/chanal/factor.pdf) - concise tutorial on factor graphs and generic sum-product message passing.
- [Belief Propagation and Its Generalizations](https://www.merl.com/publications/docs/TR2001-22.pdf) - message passing as local computation for global inference.
- [Message-Passing Algorithms for Optimization and Inference](https://www.merl.com/publications/docs/TR2011-087.pdf) - connects sum-product, max-product, min-sum, and inference/optimization viewpoints.
- [Correctness of Belief Propagation in Gaussian Graphical Models of Arbitrary Topology](https://merl.com/publications/docs/TR99-33.pdf) - useful reference for why loopy propagation can work but requires care.
- [CS229 Convex Optimization Overview](https://cs229.stanford.edu/section/cs229-cvxopt2.pdf) - Lagrange duality and KKT intuition for constrained optimization.
- [MIT Nonlinear Optimization Lecture 7: Lagrange Multipliers and KKT Conditions](https://ocw.mit.edu/courses/6-7220j-nonlinear-optimization-spring-2025/mit6_7220_s25_lec07.pdf) - current public notes on equality and inequality constrained optimality conditions.
- [Neural Turing Machines](https://arxiv.org/abs/1410.5401) - differentiable read/write memory as an algorithmic learning substrate.

Problem hooks:

- Factor a joint distribution over claim, source, evidence, and context.
- Run one round of belief propagation by hand on a chain.
- Model conflicting evidence as posterior updating instead of nearest-neighbor disagreement.
- Ask which independence assumptions are design choices, not facts.
- Compute variable-to-factor and factor-to-variable messages in a tiny binary factor graph.
- Use Bayes' rule to update a claim after positive or negative evidence.
- Solve a constrained optimization problem by substitution, Lagrange multipliers, and KKT boundary reasoning.

## Retrieval And Long-Term Memory Systems

- [Generalization through Memorization: Nearest Neighbor Language Models](https://arxiv.org/abs/1911.00172) - interpolation between parametric prediction and kNN datastore memory.
- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401) - parametric memory plus non-parametric retrieval.
- [Improving language models by retrieving from trillions of tokens](https://arxiv.org/abs/2112.04426) - chunked retrieval and cross-attention at large scale.
- [Augmenting Language Models with Long-Term Memory](https://arxiv.org/abs/2306.07174) - long-term memory cache for language models.
- [A survey of dynamic graph neural networks](https://arxiv.org/abs/2404.18211) - temporal graph evolution, dynamic graph structure, and update mechanisms.
- [Graph-based Agent Memory: Taxonomy, Techniques, and Applications](https://arxiv.org/html/2602.05665v1) - graph memory as dynamic structured memory with semantic, temporal, causal, and logical edges.
- [An Introduction to Graph Rewriting](https://lig-membres.imag.fr/echahed/ISR-slides1and2.pdf) - graph transformation rules and pushout-style rewriting as controlled graph evolution.
- [A Tutorial on Graph Transformation](https://research.utwente.nl/files/247999750/K_nig2018tutorial.pdf) - double-pushout graph transformation and rule-based graph modification.
- [Lost in the Middle](https://arxiv.org/abs/2307.03172) - positional failure modes in long-context use.
- [Benchmarking Large Language Models in Retrieval-Augmented Generation](https://arxiv.org/abs/2309.01431) - evaluates noise robustness, negative rejection, information integration, and counterfactual robustness in RAG.
- [Evaluation of Retrieval-Augmented Generation: A Survey](https://arxiv.org/html/2405.07437v1) - survey of RAG evaluation challenges and benchmark design.
- [Retrieval Augmented Generation Evaluation in the Era of Large Language Models](https://arxiv.org/html/2504.14891v1) - broad survey of RAG evaluation methods, datasets, and frameworks.

Problem hooks:

- Decompose a failure into representation, retrieval, validation, and synthesis errors.
- Compare vector similarity with graph/path evidence.
- Decide when a new memory should create a node, strengthen an edge, update a schema, or trigger contradiction handling.
- Compute decay and reinforcement updates on nodes, edges, and paths.
- Test termination and confluence of small rewrite systems.
- Build an evaluation panel that includes retrieval metrics, invariance checks, sheaf consistency, calibration, and decay stress tests.
