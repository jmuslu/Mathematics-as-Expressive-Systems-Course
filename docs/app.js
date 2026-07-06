const modules = [
  ["00", "How To Work This Course", "modules/00-orientation.md", "Learn by base cases, operations, invariants, and failure modes."],
  ["01", "Scalars and Closure", "modules/01-number-systems.md", "What can one coordinate express, and which operations stay valid?"],
  ["02", "Vector Spaces and Friendship Profiles", "modules/02-vectors-and-spaces.md", "Represent multi-trait profiles and reachable combinations."],
  ["03", "Linear Maps and Change", "modules/03-linear-maps-and-change.md", "Treat perspective shifts and state changes as transformations."],
  ["04", "Projection, Error, and Misunderstanding", "modules/04-projection-error-approximation.md", "Measure best available representation and residual error."],
  ["05", "Duality and Measurement", "modules/05-duality-and-measurement.md", "Understand scores, constraints, and validation tests as covectors."],
  ["06", "Tensors and Typed Relations", "modules/06-tensors-typed-relations.md", "Represent multi-way dinner and social relations."],
  ["07", "Covariance and Contravariance", "modules/07-covariance-contravariance.md", "Track how states, measurements, and tensors transform under coordinate change."],
  ["08", "Inner Products and Hermitian Structure", "modules/08-hermitian-structure.md", "Preserve geometry over complex scalars and phase-aware representations."],
  ["09", "Spectral Theory", "modules/09-spectral-theory.md", "Find stable modes, attractors, and directions that survive transformation."],
  ["10", "Graphs, Incidence, and Laplacians", "modules/10-graphs-incidence-laplacians.md", "Move from connected nodes to flows, cuts, and diffusion."],
  ["11", "Algebraic Graph Theory", "modules/11-algebraic-graph-theory.md", "Use spectra and automorphisms to reason about graph structure."],
  ["12", "Hypergraphs and Simplicial Complexes", "modules/12-hypergraphs-simplicial-complexes.md", "Represent group commitments beyond pairwise edges."],
  ["13", "Groups and Symmetry", "modules/13-groups-and-symmetry.md", "Identify legal transformations and what they preserve."],
  ["14", "Group Actions on Sets and Graphs", "modules/14-group-actions-on-graphs.md", "Make abstract symmetry act on seating charts and graph data."],
  ["15", "Representations and Equivariance", "modules/15-representations-and-equivariance.md", "Turn symmetry into computation through linear representations."],
  ["16", "Invariant Operators and Reynolds Averaging", "modules/16-invariant-operators-and-reynolds.md", "Construct invariant subspaces by averaging over a group."],
  ["17", "Category Theory I: Objects and Morphisms", "modules/17-category-theory-i.md", "Study structure-preserving maps across mathematical worlds."],
  ["18", "Category Theory II: Universal Properties", "modules/18-universal-properties.md", "Define objects by their mapping behavior."],
  ["19", "Functors and Natural Transformations", "modules/19-functors-natural-transformations.md", "Translate between structured systems coherently."],
  ["20", "Categorical Databases and Schemas", "modules/20-categorical-databases.md", "Treat typed roster schemas as categories."],
  ["21", "Operads and Compositional Systems", "modules/21-operads-compositional-systems.md", "Compose typed multi-input dinner-planning operations."],
  ["22", "Topology, Neighborhoods, and Continuity", "modules/22-topology-neighborhoods-continuity.md", "Study structure that survives deformation."],
  ["23", "Persistent Homology", "modules/23-persistent-homology.md", "Track what survives across thresholds, decay, and scale."],
  ["24", "Sheaves and Local-to-Global Consistency", "modules/24-sheaves-local-global.md", "Patch local claims into coherent global belief."],
  ["25", "Message Passing and Belief Propagation", "modules/25-message-passing-belief-propagation.md", "Model validation loops as local graph updates."],
  ["26", "Probabilistic Graphical Models", "modules/26-probabilistic-graphical-models.md", "Represent uncertainty over structured memory."],
  ["27", "Energy, Constraints, and Optimization", "modules/27-energy-constraints-optimization.md", "Design explicit validation objectives."],
  ["28", "Dynamical Systems on Graphs", "modules/28-dynamical-systems-on-graphs.md", "Study decay, reinforcement, convergence, and attractors."],
  ["29", "Rewriting Systems and Structured Edits", "modules/29-rewriting-knowledge-evolution.md", "Control legal graph edits and closure."],
  ["30", "Evaluating Arguments and Failure Modes", "modules/30-evaluation-failure-modes.md", "Test invariants, coherence, and transformation safety."],
  ["31", "Evidence Board Architecture Studio", "modules/31-architecture-studio.md", "Assemble the math into an evidence-board design specification."]
];

const tocList = document.querySelector("#tocList");
const lectureList = document.querySelector("#lectureList");
const moduleReader = document.querySelector("#moduleReader");

tocList.innerHTML = modules.map(([id, title]) => `
  <li><a href="#module-${id}">${id}. ${title}</a></li>
`).join("");

lectureList.innerHTML = modules.map(([id, title, file, summary]) => `
  <article id="module-${id}" class="lecture">
    <h3>${id}. ${title}</h3>
    <p>${summary}</p>
    <p class="lecture-actions">
      <button type="button" class="read-button" data-module-id="${id}">Read lecture</button>
      <a href="${file}">Open Markdown</a>
    </p>
  </article>
`).join("<hr />");

lectureList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-module-id]");
  if (!button) return;
  loadModule(button.dataset.moduleId, true, true);
});

window.addEventListener("hashchange", () => {
  const match = location.hash.match(/^#read-(\d{2})$/);
  if (match) loadModule(match[1], false, true);
});

if (location.hash.match(/^#read-\d{2}$/)) {
  loadModule(location.hash.slice(6), false, true);
} else {
  loadModule("00", false, false);
}

async function loadModule(id, updateHash, scrollToReader) {
  const item = modules.find(([moduleId]) => moduleId === id);
  if (!item) return;

  const [moduleId, title, file] = item;
  moduleReader.innerHTML = `<h2>${moduleId}. ${escapeHtml(title)}</h2><p>Loading lecture...</p>`;

  try {
    const response = await fetch(versionedModuleUrl(file), { cache: "no-store" });
    if (!response.ok) throw new Error(`Could not load ${file}`);
    const markdown = await response.text();
    moduleReader.innerHTML = renderMarkdown(mathifyMarkdown(markdown));
    moduleReader.querySelectorAll("a").forEach((link) => {
      if (link.hostname && link.hostname !== location.hostname) {
        link.rel = "noreferrer";
      }
    });
    if (window.MathJax?.typesetPromise) {
      await window.MathJax.typesetPromise([moduleReader]);
    }
    if (updateHash) {
      history.pushState(null, "", `#read-${moduleId}`);
    }
    if (scrollToReader) {
      document.querySelector("#reader").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  } catch (error) {
    moduleReader.innerHTML = `
      <h2>${moduleId}. ${escapeHtml(title)}</h2>
      <p>Could not load this lecture. The Markdown file is still available here:
      <a href="${file}">${file}</a>.</p>
    `;
  }
}

function versionedModuleUrl(file) {
  const version = new URLSearchParams(location.search).get("v");
  if (!version) return file;
  return `${file}?v=${encodeURIComponent(version)}`;
}

function mathifyMarkdown(markdown) {
  return markdown
    .replace(/```text\n([\s\S]*?)```/g, (_, body) => {
      if (looksLikeMathBlock(body)) {
        return `\n$$\n${toTexBlock(body)}\n$$\n`;
      }
      return `\n~~~text\n${body.trimEnd()}\n~~~\n`;
    })
    .replace(/`([^`\n]+)`/g, (_, body) => {
      if (!looksLikeInlineMath(body)) return `\`${body}\``;
      return `$${toTexInline(body)}$`;
    });
}

function looksLikeMathBlock(body) {
  const text = body.trim();
  if (!text) return false;
  if (hasProseInsideMathBlock(text)) return false;
  if (text.includes(":") && !/[=+\-*/^<>()[\]]/.test(text)) return false;
  return /[=+\-*/^<>()[\]{}]|\\|lambda|rho|phi|tau|alpha|beta|epsilon|tensor|wedge|sqrt|dot|det|proj|span|conjugate|matrix|->|<-/.test(text);
}

function hasProseInsideMathBlock(text) {
  if (/[.!?]/.test(text) && /\b(the|a|an|so|because|therefore|then|if|when|where|which|that|this|yes|no|same|all|states|lies?|returns?|means?)\b/i.test(text)) {
    return true;
  }
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .some((line) => /\b(so|because|therefore|then|yes|no)\b/i.test(line));
}

function looksLikeInlineMath(text) {
  if (text.length > 80) return false;
  return /[=+\-*/^<>()[\]{}]|lambda|rho|phi|tau|alpha|beta|epsilon|tensor|wedge|sqrt|dot|det|proj|span|conjugate|Hermitian|unitary|PAP|A\^|v\^|u\^|x_\{|x\^|P\(|F\(|G\(|N\(|f\(|g\(/.test(text);
}

function toTexBlock(body) {
  const trimmed = body.trim();
  if (isAsciiMatrix(trimmed)) {
    return matrixBlockToTex(trimmed);
  }
  const lines = trimmed
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => toTexInline(line));

  if (lines.length === 1) return lines[0];

  return `\\begin{aligned}
${lines.join(" \\\\\n")}
\\end{aligned}`;
}

function toTexInline(value) {
  let text = value.trim();
  text = text.replace(/<([^>]+)>/g, "\\langle $1 \\rangle");
  text = text.replace(/&/g, "\\&");
  text = text.replace(/->/g, "\\to ");
  text = text.replace(/<-/g, "\\leftarrow ");
  text = text.replace(/\bo\b/g, "\\circ ");
  text = text.replace(/\btensor\b/g, "\\otimes");
  text = text.replace(/\bkron\b/g, "\\otimes");
  text = text.replace(/\bwedge\b/g, "\\wedge");
  text = text.replace(/\bdot\b/g, "\\cdot");
  text = text.replace(/\bconjugate\(([^)]+)\)/g, "\\overline{$1}");
  text = text.replace(/\bsqrt\(([^)]+)\)/g, "\\sqrt{$1}");
  text = text.replace(/\bsqrt([A-Za-z0-9_+\-*/^ ]+)/g, "\\sqrt{$1}");
  text = text.replace(/\b(lambda|rho|tau|phi|alpha|beta|epsilon)_([A-Za-z0-9]+)/g, (_, greek, subscript) => `${greekMap(greek)}_{${subscript}}`);
  text = text.replace(/\blambda\b/g, "\\lambda");
  text = text.replace(/\brho\b/g, "\\rho");
  text = text.replace(/\btau\b/g, "\\tau");
  text = text.replace(/\bphi\b/g, "\\phi");
  text = text.replace(/\balpha\b/g, "\\alpha");
  text = text.replace(/\bbeta\b/g, "\\beta");
  text = text.replace(/\bepsilon\b/g, "\\varepsilon");
  text = text.replace(/\bpi_([A-Za-z0-9]+)/g, "\\pi_{$1}");
  text = text.replace(/\bproj_([A-Za-z0-9]+)/g, "\\operatorname{proj}_{$1}");
  text = text.replace(/\bspan\(([^)]+)\)/g, "\\operatorname{span}($1)");
  text = text.replace(/\bdet\(([^)]+)\)/g, "\\det($1)");
  text = text.replace(/\|\|([^|]+)\|\|_([A-Za-z0-9]+)/g, "\\lVert $1 \\rVert_{$2}");
  text = text.replace(/\|\|([^|]+)\|\|/g, "\\lVert $1 \\rVert");
  text = text.replace(/([A-Za-z0-9)])\*/g, "$1^*");
  text = text.replace(/\b([A-Za-z])hat\b/g, "\\hat{$1}");
  text = text.replace(/\^([A-Za-z0-9]+)/g, "^{$1}");
  text = text.replace(/_([A-Za-z0-9]+)/g, "_{$1}");
  text = text.replace(/([A-Za-z])'(\s|$|[=,)])/g, "$1'$2");
  text = text.replace(/>=/g, "\\ge ");
  text = text.replace(/<=/g, "\\le ");
  text = romanizeNamedIdentifiers(text);
  return text;
}

function greekMap(name) {
  if (name === "epsilon") return "\\varepsilon";
  return `\\${name}`;
}

function romanizeNamedIdentifiers(text) {
  const reserved = new Set([
    "begin", "end", "bmatrix", "operatorname", "mathrm", "langle", "rangle",
    "overline", "sqrt", "det", "cdot", "circ", "to", "leftarrow", "otimes",
    "wedge", "lambda", "rho", "tau", "phi", "alpha", "beta", "varepsilon",
    "pi", "ge", "le", "lVert", "rVert", "proj", "span"
  ]);

  return text.replace(/(^|[^\\A-Za-z])([A-Za-z][A-Za-z0-9]*)(?![A-Za-z])/g, (match, prefix, word) => {
    if (reserved.has(word) || word.length === 1) return `${prefix}${word}`;
    return `${prefix}\\mathrm{${word}}`;
  });
}

function isAsciiMatrix(text) {
  const lines = text.split("\n").filter(Boolean);
  return lines.length > 1 && lines.every((line) => /^\s*\[[^\]]+\]\s*$/.test(line));
}

function matrixBlockToTex(text) {
  const rows = text.split("\n").map((line) => {
    return line.replace(/^\s*\[|\]\s*$/g, "").trim().split(/\s+/).join(" & ");
  });
  return `\\begin{bmatrix}\n${rows.join(" \\\\\n")}\n\\end{bmatrix}`;
}

function renderMarkdown(markdown) {
  const lines = markdown.split("\n");
  const html = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }

    if (line.startsWith("~~~")) {
      const language = line.slice(3).trim();
      const body = [];
      i += 1;
      while (i < lines.length && !lines[i].startsWith("~~~")) {
        body.push(lines[i]);
        i += 1;
      }
      i += 1;
      html.push(`<pre><code${language ? ` class="language-${language}"` : ""}>${escapeHtml(body.join("\n"))}</code></pre>`);
      continue;
    }

    if (line.trim() === "$$") {
      const body = [];
      i += 1;
      while (i < lines.length && lines[i].trim() !== "$$") {
        body.push(lines[i]);
        i += 1;
      }
      i += 1;
      html.push(`<div class="math-block">\\[${body.join("\n")}\\]</div>`);
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      const level = heading[1].length + 1;
      html.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
      i += 1;
      continue;
    }

    if (/^\|.+\|$/.test(line) && i + 1 < lines.length && /^\|\s*:?-+/.test(lines[i + 1])) {
      const headers = splitTableRow(line);
      i += 2;
      const rows = [];
      while (i < lines.length && /^\|.+\|$/.test(lines[i])) {
        rows.push(splitTableRow(lines[i]));
        i += 1;
      }
      html.push(renderTable(headers, rows));
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, ""));
        i += 1;
      }
      html.push(`<ul>${items.map((item) => `<li>${renderInline(item)}</li>`).join("")}</ul>`);
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, ""));
        i += 1;
      }
      html.push(`<ol>${items.map((item) => `<li>${renderInline(item)}</li>`).join("")}</ol>`);
      continue;
    }

    const paragraph = [line.trim()];
    i += 1;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,4})\s+/.test(lines[i]) &&
      !lines[i].startsWith("~~~") &&
      lines[i].trim() !== "$$" &&
      !/^\s*[-*]\s+/.test(lines[i]) &&
      !/^\s*\d+\.\s+/.test(lines[i]) &&
      !/^\|.+\|$/.test(lines[i])
    ) {
      paragraph.push(lines[i].trim());
      i += 1;
    }
    html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
  }

  return html.join("\n");
}

function renderInline(text) {
  return text.split(/(\$[^$]+\$)/g).map((part) => {
    if (part.startsWith("$") && part.endsWith("$")) {
      return `\\(${part.slice(1, -1)}\\)`;
    }
    return escapeHtml(part)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }).join("");
}

function renderTable(headers, rows) {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr>${headers.map((cell) => `<th>${renderInline(cell)}</th>`).join("")}</tr></thead>
        <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function splitTableRow(line) {
  return line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
