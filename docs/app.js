const modules = [
  {
    id: "00",
    title: "How To Work This Course",
    object: "Lecture method",
    phase: "foundations",
    file: "modules/00-orientation.md",
    promise: "Learn the base-case, derivation, failure-mode rhythm that every later lecture uses.",
    baseCase: "A query and a few memory vectors force you to ask what closest means.",
    operations: ["Write base-case notes", "Derive one formula", "Name one failure mode"]
  },
  {
    id: "01",
    title: "Scalars, Coordinates, and Expressive Power",
    object: "Scalar systems",
    phase: "foundations",
    file: "modules/01-number-systems.md",
    promise: "See how changing the scalar changes what one coordinate can express.",
    baseCase: "A memory score moves from counts to signed penalties to real-valued interpolation.",
    operations: ["Interpolate", "Normalize", "Use log-odds", "Apply softmax"]
  },
  {
    id: "02",
    title: "Vector Spaces, Reachability, and Memory Slots",
    object: "Vector spaces",
    phase: "foundations",
    file: "modules/02-vectors-and-spaces.md",
    promise: "Understand memory vectors as representational slots in a reachable space.",
    baseCase: "Semantic relevance and recency form a two-coordinate memory representation.",
    operations: ["Add vectors", "Scale vectors", "Form spans", "Choose bases"]
  },
  {
    id: "03",
    title: "Linear Systems, Projection, and Error",
    object: "Projection",
    phase: "geometry",
    file: "modules/03-projection-and-error.md",
    promise: "Treat retrieval as best available approximation plus residual error.",
    baseCase: "Project d = (3, 1) onto span of u = (1, 1).",
    operations: ["Project", "Measure residuals", "Derive least squares"]
  },
  {
    id: "04",
    title: "Bases, Orthogonality, SVD, and Compression",
    object: "SVD",
    phase: "geometry",
    file: "modules/04-svd-and-compression.md",
    promise: "Use singular values to reason about compression and reconstruction error.",
    baseCase: "Memory vectors near a line invite a one-dimensional approximation.",
    operations: ["Build orthonormal bases", "Compress", "Compute reconstruction error"]
  },
  {
    id: "05",
    title: "Spectral Structure, Graphs, and Stable Modes",
    object: "Eigenvectors",
    phase: "geometry",
    file: "modules/05-spectral-structure.md",
    promise: "Find stable modes in transformations, similarity graphs, and memory diffusion.",
    baseCase: "A two-cluster transition matrix reveals directions that survive repetition.",
    operations: ["Diagonalize", "Iterate transformations", "Analyze graph stability"]
  },
  {
    id: "06",
    title: "Complex Scalars, Phase, Fourier Features, and Kernels",
    object: "Complex phase and feature maps",
    phase: "geometry",
    file: "modules/06-complex-fourier-kernels.md",
    promise: "Use enriched scalars to understand phase, relative position, and kernelized similarity.",
    baseCase: "Multiplication by i rotates a coordinate rather than merely scaling it.",
    operations: ["Use phase", "Conjugate", "Build Fourier features", "Reason about kernels"]
  },
  {
    id: "07",
    title: "Probability, Information, and Uncertainty",
    object: "Probability distributions",
    phase: "foundations",
    file: "modules/07-probability-information.md",
    promise: "Represent uncertainty over retrieved memories, evidence, and generated answers.",
    baseCase: "Softmax converts three retrieval scores into a distribution over memories.",
    operations: ["Condition", "Marginalize", "Compute entropy", "Update with Bayes"]
  },
  {
    id: "08",
    title: "Optimization, Duality, and Constraints",
    object: "Constrained optimization",
    phase: "foundations",
    file: "modules/08-optimization-duality.md",
    promise: "Model memory design as choosing under budget, latency, trust, and context constraints.",
    baseCase: "Maximize relevance subject to a context budget.",
    operations: ["Form Lagrangians", "Use KKT logic", "Interpret dual variables"]
  },
  {
    id: "09",
    title: "Metric Geometry and Embedding Spaces",
    object: "Embedding geometry",
    phase: "retrieval",
    file: "modules/09-metric-geometry.md",
    promise: "Understand how norms, cosine, and inner product define retrieval neighborhoods.",
    baseCase: "A query and two memories rank differently depending on the chosen geometry.",
    operations: ["Compute distances", "Normalize", "Compare rankings", "Study distortion"]
  },
  {
    id: "10",
    title: "Nearest Neighbor Search and Vector Indexes",
    object: "Approximate nearest neighbor search",
    phase: "retrieval",
    file: "modules/10-nearest-neighbor-indexes.md",
    promise: "Analyze recall, latency, memory, and distortion in vector indexes.",
    baseCase: "Exact search over one million 768-dimensional vectors is too expensive.",
    operations: ["Approximate top-k", "Quantize", "Navigate graphs", "Measure recall"]
  },
  {
    id: "11",
    title: "Attention as Soft Retrieval",
    object: "Scaled dot-product attention",
    phase: "retrieval",
    file: "modules/11-attention-soft-retrieval.md",
    promise: "Interpret transformer attention as differentiable content-addressed memory.",
    baseCase: "One query softly retrieves from two keys and mixes two values.",
    operations: ["Compute QK^T", "Apply softmax", "Mix values", "Scale by sqrt(d)"]
  },
  {
    id: "12",
    title: "Contrastive Learning and Dense Retrieval",
    object: "InfoNCE and dual encoders",
    phase: "retrieval",
    file: "modules/12-contrastive-dense-retrieval.md",
    promise: "See how training losses create retrieval geometry.",
    baseCase: "One query, one positive memory, and two negatives define a contrastive loss.",
    operations: ["Pull positives", "Push negatives", "Tune temperature", "Mine hard negatives"]
  },
  {
    id: "13",
    title: "Memory-Augmented Models and Non-Parametric Memory",
    object: "Explicit memory",
    phase: "memory",
    file: "modules/13-memory-augmented-models.md",
    promise: "Compare parametric weights with explicit read/write memory.",
    baseCase: "Interpolate language-model probabilities with kNN datastore probabilities.",
    operations: ["Lookup", "Write", "Delete", "Interpolate", "Audit"]
  },
  {
    id: "14",
    title: "RAG, RETRO, and Retrieval-Conditioned Generation",
    object: "Retrieved latent evidence",
    phase: "memory",
    file: "modules/14-rag-and-retro.md",
    promise: "Connect retrieval distributions to generation quality and evidence use.",
    baseCase: "Three retrieved passages produce different probabilities of a correct answer.",
    operations: ["Retrieve evidence", "Marginalize", "Cross-attend", "Attribute answers"]
  },
  {
    id: "15",
    title: "Long Context, Recency, Consolidation, and Forgetting",
    object: "Temporal memory policy",
    phase: "memory",
    file: "modules/15-long-context-memory.md",
    promise: "Reason about what should survive, decay, merge, or be forgotten.",
    baseCase: "A context window can hold four memories, but eight are available.",
    operations: ["Decay", "Select", "Summarize", "Merge", "Forget"]
  },
  {
    id: "16",
    title: "Robustness, Evaluation, and Memory System Design",
    object: "Failure decomposition",
    phase: "evaluation",
    file: "modules/16-robustness-evaluation.md",
    promise: "Measure whether memory actually helps under realistic failure modes.",
    baseCase: "Correct evidence is retrieved at rank 3, but generation ignores it.",
    operations: ["Compute metrics", "Slice failures", "Test faithfulness", "Audit updates"]
  }
];

const moduleGrid = document.querySelector("#moduleGrid");
const tocList = document.querySelector("#tocList");
const activeModule = document.querySelector("#activeModule");
const searchInput = document.querySelector("#searchInput");
const phaseTabs = document.querySelectorAll(".phase-tab");
const cardForm = document.querySelector("#cardForm");
const cardOutput = document.querySelector("#cardOutput");
const copyCard = document.querySelector("#copyCard");

let activePhase = "all";

function progressKey(moduleId) {
  return `expressive-systems-progress-${moduleId}`;
}

function renderToc() {
  tocList.innerHTML = modules.map((module) => `
    <a href="#module-${module.id}" data-open="${module.id}">
      <span>${module.id}</span>
      ${module.title}
    </a>
  `).join("");
}

function renderModules() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = modules.filter((module) => {
    const matchesPhase = activePhase === "all" || module.phase === activePhase;
    const haystack = `${module.title} ${module.object} ${module.promise} ${module.baseCase} ${module.operations.join(" ")}`.toLowerCase();
    return matchesPhase && haystack.includes(query);
  });

  moduleGrid.innerHTML = filtered.map((module) => {
    const checked = localStorage.getItem(progressKey(module.id)) === "done" ? "checked" : "";
    return `
      <article id="module-${module.id}" class="module-card" data-phase="${module.phase}">
        <div class="module-number">${module.id}</div>
        <div class="module-body">
          <p class="eyebrow">${module.phase}</p>
          <h3>${module.title}</h3>
          <p><strong>Object:</strong> ${module.object}</p>
          <p>${module.promise}</p>
          <p class="base-case"><strong>Base case:</strong> ${module.baseCase}</p>
          <div class="module-actions">
            <label>
              <input type="checkbox" data-progress="${module.id}" ${checked} />
              Done
            </label>
            <button class="open-module" type="button" data-open="${module.id}">Preview</button>
            <a href="${module.file}">Open lecture</a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll("[data-progress]").forEach((box) => {
    box.addEventListener("change", (event) => {
      const id = event.currentTarget.dataset.progress;
      if (event.currentTarget.checked) {
        localStorage.setItem(progressKey(id), "done");
      } else {
        localStorage.removeItem(progressKey(id));
      }
    });
  });

  document.querySelectorAll("[data-open]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const module = modules.find((item) => item.id === event.currentTarget.dataset.open);
      showModule(module);
    });
  });
}

function showModule(module) {
  activeModule.innerHTML = `
    <p class="eyebrow">Module ${module.id} - ${module.phase}</p>
    <h3>${module.title}</h3>
    <p><strong>Mathematical object:</strong> ${module.object}</p>
    <p>${module.promise}</p>
    <p><strong>Base case:</strong> ${module.baseCase}</p>
    <p><strong>Legal operations:</strong></p>
    <ul>${module.operations.map((operation) => `<li>${operation}</li>`).join("")}</ul>
    <p><a href="${module.file}">Open full Markdown lecture</a></p>
  `;
}

function renderCard() {
  const values = Object.fromEntries(new FormData(cardForm).entries());
  const markdown = `# Lecture Worksheet: ${values.object || "[lecture or object]"}

## Concrete Failure
${values.limitation || "[what the previous object could not express]"}

## Base Case
${values.basecase || "[smallest worked example]"}

## Worked Derivation
${values.derivation || "[formula or theorem derived by hand]"}

## Failure Mode
${values.failure || "[where the object misleads or breaks]"}

## Memory-System Connection
${values.memory || "[how this affects representation, retrieval, indexing, memory, or evaluation]"}`;

  cardOutput.textContent = markdown;
}

phaseTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activePhase = tab.dataset.phase;
    phaseTabs.forEach((item) => item.classList.toggle("active", item === tab));
    renderModules();
  });
});

searchInput.addEventListener("input", renderModules);
cardForm.addEventListener("input", renderCard);

copyCard.addEventListener("click", async () => {
  renderCard();
  await navigator.clipboard.writeText(cardOutput.textContent);
  copyCard.textContent = "Copied";
  window.setTimeout(() => {
    copyCard.textContent = "Copy Markdown";
  }, 1200);
});

renderToc();
renderModules();
showModule(modules[0]);
renderCard();
