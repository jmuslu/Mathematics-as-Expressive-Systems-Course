# Question Bank Coverage

This report tracks structured reserve-entry coverage by module. It is a planning aid for future scraping, source review, and problem promotion; it is not a replacement for the stricter metadata checks in `scripts/audit-course.ps1`.

Run:

```powershell
.\scripts\question-bank-coverage.ps1
```

## Current Structured Counts

```text
01: 4
02: 4
03: 4
04: 4
05: 4
06: 14
07: 8
08: 9
09: 6
10: 6
11: 6
12: 6
13: 6
14: 6
15: 6
16: 6
17: 6
18: 6
19: 6
20: 6
21: 6
22: 7
23: 7
24: 9
25: 8
26: 6
27: 6
28: 6
29: 6
30: 7
31: 4
32: 4
33: 4
34: 4
35: 6
```

## Expansion Priorities

1. Expand Modules 01-05 with more reserve problems for scalar systems, span, linear maps, projection, and dual measurements.
2. Expand Modules 31-34 with more operator-spectrum, gain-range, rank-test, and switched-stability problems, since each is currently at the four-entry minimum.
3. Add more capstone-style Module 35 design-specification reserves once the earlier mathematical banks are less uneven.

## Promotion Guidance

Structured reserve entries should stay broader than lecture trails. Promote only when a problem clearly supports the module rhythm:

```text
base case -> by-hand manipulation -> answer check -> intuition -> design implication
```

Exact source-derived problems should remain out of lectures unless their license permits reuse and the source policy has been followed.
