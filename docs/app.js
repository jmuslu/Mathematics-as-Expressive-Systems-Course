const modules = [
  {
    id: "00",
    title: "Orientation",
    object: "Mathematics as expressive design",
    move: "structure",
    file: "modules/00-orientation.md",
    summary: "Learn the six-question lens and the three design moves.",
    operations: ["Ask what failed before the object existed", "Track operations and invariants", "Build object cards"]
  },
  {
    id: "01",
    title: "Numbers",
    object: "Number systems",
    move: "scalars",
    file: "modules/01-number-systems.md",
    summary: "Follow N, Z, Q, R, C, and H as increasingly expressive scalar systems.",
    operations: ["Subtract", "Divide", "Take limits", "Solve polynomial equations", "Handle noncommutative multiplication"]
  },
  {
    id: "02",
    title: "Vectors and Spaces",
    object: "Vector spaces",
    move: "space",
    file: "modules/02-vectors-and-spaces.md",
    summary: "Move from quantities to directions, combinations, spans, and bases.",
    operations: ["Add vectors", "Scale vectors", "Form spans", "Change basis"]
  },
  {
    id: "03",
    title: "Matrices",
    object: "Linear maps",
    move: "operation",
    file: "modules/03-linear-maps-and-matrices.md",
    summary: "Treat matrices as machines that transform vector spaces.",
    operations: ["Transform", "Compose", "Invert", "Solve systems"]
  },
  {
    id: "04",
    title: "Invariants",
    object: "Stable features",
    move: "structure",
    file: "modules/04-invariants.md",
    summary: "Ask what survives when coordinates or transformations change.",
    operations: ["Classify", "Compare", "Detect preserved directions"]
  },
  {
    id: "05",
    title: "Complex Geometry",
    object: "Complex vector spaces",
    move: "scalars",
    file: "modules/05-complex-geometry.md",
    summary: "Let scaling include phase, rotation, conjugation, and Hermitian geometry.",
    operations: ["Rotate by scaling", "Conjugate", "Use Hermitian inner products", "Preserve geometry with unitary maps"]
  },
  {
    id: "06",
    title: "Rings, Fields, Quotients",
    object: "Arithmetic rule systems",
    move: "structure",
    file: "modules/06-rings-fields-quotients.md",
    summary: "Separate the rules of arithmetic from any single number system.",
    operations: ["Add", "Multiply", "Invert when allowed", "Quotient by a rule"]
  },
  {
    id: "07",
    title: "Algebras",
    object: "Vector spaces with multiplication",
    move: "operation",
    file: "modules/07-algebras.md",
    summary: "Give objects internal multiplication and study the consequences.",
    operations: ["Add", "Scale", "Multiply", "Track commutativity"]
  },
  {
    id: "08",
    title: "Tensors",
    object: "Multilinear constructions",
    move: "operation",
    file: "modules/08-tensors.md",
    summary: "Represent several inputs interacting simultaneously.",
    operations: ["Tensor spaces", "Represent bilinear maps", "Track type and symmetry"]
  },
  {
    id: "09",
    title: "Duality and Constraints",
    object: "Dual spaces",
    move: "space",
    file: "modules/09-duality-and-constraints.md",
    summary: "Study covectors, measurement, constraints, and primal-dual thinking.",
    operations: ["Evaluate", "Constrain", "Pair", "Take adjoints"]
  },
  {
    id: "10",
    title: "Groups",
    object: "Legal moves",
    move: "structure",
    file: "modules/10-groups.md",
    summary: "Describe symmetries as composable and reversible moves.",
    operations: ["Compose", "Invert", "Act", "Classify by orbit"]
  },
  {
    id: "11",
    title: "Representation Theory",
    object: "Symmetry as linear action",
    move: "operation",
    file: "modules/11-representation-theory.md",
    summary: "Turn abstract symmetries into matrices and operators.",
    operations: ["Represent", "Decompose", "Compute characters", "Find fixed spaces"]
  },
  {
    id: "12",
    title: "Category Theory",
    object: "Structure-preserving systems",
    move: "structure",
    file: "modules/12-category-theory.md",
    summary: "Compare whole mathematical worlds through objects and arrows.",
    operations: ["Compose arrows", "Use functors", "State universal properties"]
  },
  {
    id: "13",
    title: "Capstone",
    object: "Your chosen object",
    move: "structure",
    file: "modules/13-capstone.md",
    summary: "Design a mini-lecture around one mathematical object and the limitation it solves.",
    operations: ["Create an object card", "Work an example", "Name the design move"]
  }
];

const moduleGrid = document.querySelector("#moduleGrid");
const activeModule = document.querySelector("#activeModule");
const searchInput = document.querySelector("#searchInput");
const moveTabs = document.querySelectorAll(".move-tab");
const cardForm = document.querySelector("#cardForm");
const cardOutput = document.querySelector("#cardOutput");
const copyCard = document.querySelector("#copyCard");

let activeMove = "all";

function progressKey(moduleId) {
  return `expressive-systems-progress-${moduleId}`;
}

function renderModules() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = modules.filter((module) => {
    const matchesMove = activeMove === "all" || module.move === activeMove;
    const haystack = `${module.title} ${module.object} ${module.summary} ${module.operations.join(" ")}`.toLowerCase();
    return matchesMove && haystack.includes(query);
  });

  moduleGrid.innerHTML = filtered.map((module) => {
    const checked = localStorage.getItem(progressKey(module.id)) === "done" ? "checked" : "";
    return `
      <article class="module-card" data-move="${module.move}">
        <p class="eyebrow">Module ${module.id}</p>
        <h3>${module.title}</h3>
        <p><strong>${module.object}</strong></p>
        <p>${module.summary}</p>
        <div class="module-meta">
          <label>
            <input type="checkbox" data-progress="${module.id}" ${checked} />
            Done
          </label>
          <button class="open-module" type="button" data-open="${module.id}">View</button>
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
    button.addEventListener("click", () => {
      const module = modules.find((item) => item.id === button.dataset.open);
      showModule(module);
      activeModule.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}

function showModule(module) {
  activeModule.innerHTML = `
    <p class="eyebrow">Module ${module.id}</p>
    <h3>${module.title}</h3>
    <p><strong>Object:</strong> ${module.object}</p>
    <p>${module.summary}</p>
    <p><strong>Legal operations:</strong></p>
    <ul>${module.operations.map((operation) => `<li>${operation}</li>`).join("")}</ul>
    <p><a href="${module.file}">Open Markdown lecture</a></p>
  `;
}

function renderCard() {
  const values = Object.fromEntries(new FormData(cardForm).entries());
  const markdown = `# Object Card: ${values.object || "[object]"}

## Limitation
${values.limitation || "[what the previous language could not express]"}

## Legal Operations
${values.operations || "[what becomes legal]"}

## Invariants
${values.invariants || "[what survives change]"}

## Concrete Example
${values.example || "[one small hand-worked example]"}

## Design Move
${values.move || "[design move]"}`;

  cardOutput.textContent = markdown;
}

moveTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeMove = tab.dataset.move;
    moveTabs.forEach((item) => item.classList.toggle("active", item === tab));
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

renderModules();
showModule(modules[0]);
renderCard();
