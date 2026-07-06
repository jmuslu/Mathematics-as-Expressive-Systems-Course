# Question Bank Coverage

This report tracks structured reserve-entry coverage by module. It is a planning aid for future scraping, source review, and problem promotion; it is not a replacement for the stricter metadata checks in `scripts/audit-course.ps1`.

Run:

```powershell
.\scripts\question-bank-coverage.ps1
```

## Current Structured Counts

```text
01: 3
02: 3
03: 4
04: 4
05: 4
06: 14
07: 8
08: 9
09: 4
10: 4
11: 4
12: 4
13: 4
14: 4
15: 4
16: 4
17: 4
18: 5
19: 4
20: 5
21: 5
22: 5
23: 6
24: 6
25: 6
26: 6
27: 6
28: 5
29: 5
30: 7
31: 3
```

## Expansion Priorities

1. Expand Modules 01-05 with more reserve problems for scalar systems, span, linear maps, projection, and dual measurements.
2. Expand Modules 09-12 with more spectral, Laplacian, algebraic-graph, and higher-order relation problems.
3. Add more capstone-style Module 31 design-specification reserves once the earlier mathematical banks are less uneven.

## Promotion Guidance

Structured reserve entries should stay broader than lecture trails. Promote only when a problem clearly supports the module rhythm:

```text
base case -> by-hand manipulation -> answer check -> intuition -> design implication
```

Exact source-derived problems should remain out of lectures unless their license permits reuse and the source policy has been followed.
