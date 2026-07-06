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
```

## Style Gate

Promoted lecture problems should follow the course rhythm:

```text
base case -> by-hand manipulation -> answer check -> intuition -> modeling or design implication
```

Not every problem needs every label, but the trail as a whole should move through that pattern.

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
- problem numbering/module-prefix consistency.

## Deployment Check

After pushing to GitHub Pages, verify the live site with a versioned query:

```text
https://jmuslu.github.io/Mathematics-as-Expressive-Systems-Course/?v=<commit>
```

Use the versioned URL because the reader fetches modules with version-aware paths.
