const modules = [
  ["00", "How To Work This Course", "modules/00-orientation.md", "Learn by base cases, operations, invariants, and failure modes."],
  ["01", "Scalars and Closure", "modules/01-number-systems.md", "What can one coordinate express, and which operations stay valid?"],
  ["02", "Vectors, Bases, and State Spaces", "modules/02-vectors-and-spaces.md", "Represent memory states and reachable combinations."],
  ["03", "Linear Maps and Change", "modules/03-linear-maps-and-change.md", "Treat update, propagation, and rewrite rules as transformations."],
  ["04", "Projection, Error, and Approximation", "modules/04-projection-error-approximation.md", "Measure best available representation and residual error."],
  ["05", "Duality and Measurement", "modules/05-duality-and-measurement.md", "Understand scores, constraints, and validation tests as covectors."],
  ["06", "Tensors and Typed Relations", "modules/06-tensors-typed-relations.md", "Represent multi-way relations and typed evidence bundles."],
  ["07", "Covariance and Contravariance", "modules/07-covariance-contravariance.md", "Track how states, measurements, and tensors transform under coordinate change."],
  ["08", "Inner Products and Hermitian Structure", "modules/08-hermitian-structure.md", "Preserve geometry over complex scalars and phase-aware representations."],
  ["09", "Spectral Theory", "modules/09-spectral-theory.md", "Find stable modes, attractors, and directions that survive transformation."],
  ["10", "Graphs, Incidence, and Laplacians", "modules/10-graphs-incidence-laplacians.md", "Move from connected nodes to flows, cuts, and diffusion."],
  ["11", "Algebraic Graph Theory", "modules/11-algebraic-graph-theory.md", "Use spectra and automorphisms to reason about graph structure."],
  ["12", "Hypergraphs and Simplicial Complexes", "modules/12-hypergraphs-simplicial-complexes.md", "Represent higher-order relations beyond pairwise edges."],
  ["13", "Groups and Symmetry", "modules/13-groups-and-symmetry.md", "Identify legal transformations and what they preserve."],
  ["14", "Group Actions on Sets and Graphs", "modules/14-group-actions-on-graphs.md", "Make abstract symmetry act on graph states."],
  ["15", "Representations and Equivariance", "modules/15-representations-and-equivariance.md", "Turn symmetry into computation through linear representations."],
  ["16", "Invariant Operators and Reynolds Averaging", "modules/16-invariant-operators-and-reynolds.md", "Construct invariant subspaces by averaging over a group."],
  ["17", "Category Theory I: Objects and Morphisms", "modules/17-category-theory-i.md", "Study structure-preserving maps across mathematical worlds."],
  ["18", "Category Theory II: Universal Properties", "modules/18-universal-properties.md", "Define objects by their mapping behavior."],
  ["19", "Functors and Natural Transformations", "modules/19-functors-natural-transformations.md", "Translate between structured systems coherently."],
  ["20", "Categorical Databases and Schemas", "modules/20-categorical-databases.md", "Treat typed knowledge schemas as categories."],
  ["21", "Operads and Compositional Systems", "modules/21-operads-compositional-systems.md", "Compose multi-input validation and reasoning operations."],
  ["22", "Topology, Neighborhoods, and Continuity", "modules/22-topology-neighborhoods-continuity.md", "Study structure that survives deformation."],
  ["23", "Persistent Homology", "modules/23-persistent-homology.md", "Track what survives across thresholds, decay, and scale."],
  ["24", "Sheaves and Local-to-Global Consistency", "modules/24-sheaves-local-global.md", "Patch local claims into coherent global belief."],
  ["25", "Message Passing and Belief Propagation", "modules/25-message-passing-belief-propagation.md", "Model validation loops as local graph updates."],
  ["26", "Probabilistic Graphical Models", "modules/26-probabilistic-graphical-models.md", "Represent uncertainty over structured memory."],
  ["27", "Energy, Constraints, and Optimization", "modules/27-energy-constraints-optimization.md", "Design explicit validation objectives."],
  ["28", "Dynamical Systems on Graphs", "modules/28-dynamical-systems-on-graphs.md", "Study decay, reinforcement, convergence, and attractors."],
  ["29", "Rewriting Systems and Knowledge Evolution", "modules/29-rewriting-knowledge-evolution.md", "Control legal graph edits and closure."],
  ["30", "Evaluation and Failure Modes", "modules/30-evaluation-failure-modes.md", "Test invariants, coherence, and transformation safety."],
  ["31", "Architecture Studio", "modules/31-architecture-studio.md", "Assemble the math into a second-brain design specification."]
];

const tocList = document.querySelector("#tocList");
const lectureList = document.querySelector("#lectureList");

tocList.innerHTML = modules.map(([id, title]) => `
  <li><a href="#module-${id}">${id}. ${title}</a></li>
`).join("");

lectureList.innerHTML = modules.map(([id, title, file, summary]) => `
  <article id="module-${id}" class="lecture">
    <h3>${id}. ${title}</h3>
    <p>${summary}</p>
    <p><a href="${file}">Open lecture notes</a></p>
  </article>
`).join("<hr />");
