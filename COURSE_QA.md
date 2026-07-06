# Course QA

This file records the repeatable checks for keeping the course consistent as modules, problem banks, and source-derived exercises grow.

## Current Depth Gate

Every module should have:

- `## Hand Problem Trail`
- exactly 12 numbered hand problems,
- exactly 12 `Answer check` markers,
- problem numbering that matches the module number,
- small enough calculations to verify by hand,
- at least one failure-mode or interpretation problem in the trail.

Current status:

```text
32 modules
12 hand problems per module
384 total module hand problems
30 running examples in lecture modules
11 question-bank markdown files, including the template
129 bank problem/reserve entries
```

The running examples are intentionally not universal. Orientation, scalar setup, and final studio modules can stay cleaner when the surrounding modules already carry enough friendship, dinner, dating, social-media, debate, witness, party, and graph-design scenarios.

## Style Gate

Promoted lecture problems should follow the course rhythm:

```text
base case -> by-hand manipulation -> answer check -> intuition -> modeling or design implication
```

Not every problem needs every label, but the trail as a whole should move through that pattern.

For analogy and promotion guidance, use `PROBLEM_TRAIL_STYLE.md`. The short version is: the central bank can be broad, but lecture problems should be selected for the local mathematical principle rather than forced into the final architecture too early.

## Source Gate

Before adding a source-derived problem:

1. Check `QUESTION_BANK_SOURCE_POLICY.md`.
2. Store source-oriented or reserve problems in `question-bank/`.
3. Use `question-bank/problem-template.md` for provenance.
4. Promote only rewritten, verified, course-appropriate problems into `modules/`.

## Local Checks

Run:

```powershell
.\scripts\audit-course.ps1
```

The script checks:

- renderer JavaScript syntax,
- hand-trail presence,
- problem count,
- answer-check count,
- problem numbering/module-prefix consistency,
- live-module cross-references to `Problem M.N`,
- question-bank README index coverage,
- structured question-bank entry metadata and answer-check presence.

The cross-reference check catches stale references after problem edits. The question-bank index check catches new reserve files that have not been listed in `question-bank/README.md`, and README entries whose files no longer exist.

The structured bank-entry check applies to reserve entries named like `## 25.factor-to-variable.table.a`. Each such entry must include source-use, license-note, verification-status, and answer-check sections. The older Module 06 pilot trail remains intentionally separate from that structured reserve-entry format.

## Current Progress Map

The course currently has:

- a complete 32-module lecture sequence,
- accepted tutorial-style website structure with in-page rendered Markdown and MathJax,
- a 12-problem hand trail in every module,
- central question banks covering modules 01-31,
- source-use policy and primary-paper trail,
- running examples spread through the course without forcing every module into an analogy,
- automated checks for renderer syntax, module depth shape, problem references, bank index drift, and structured bank-entry metadata.

The remaining work is not basic scaffolding. The most useful next passes are:

- keep expanding reserve banks from public and licensed sources with provenance,
- selectively promote only the strongest bank problems into modules,
- add more graduate-depth derivations where a module still says the right thing but does not make the student compute it,
- periodically preview the site when renderer-sensitive notation changes,
- verify GitHub Pages after major content batches with a versioned URL.

## Deployment Check

After pushing to GitHub Pages, verify the live site with a versioned query:

```text
https://jmuslu.github.io/Mathematics-as-Expressive-Systems-Course/?v=<commit>
```

Use the versioned URL because the reader fetches modules with version-aware paths.
