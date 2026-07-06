# Module 07 Bank: Covariance, Contravariance, and Budget Units

Source posture: original course problems inspired by public notes on dual spaces, metrics, tensor slots, and transformation laws. These are reserve candidates, not promoted lecture text.

## Source Anchors

- [Notes on Dual Spaces](https://sites.math.northwestern.edu/scg479/courses/notes/dual-spaces.pdf)
- [The Dual of a Vector Space](https://people.math.osu.edu/gerlach.1/math5451/TensorCalculus/DualOfAVectorSpace.pdf)
- [Chapter 10: Vectors and Tensors](https://cns.gatech.edu/~predrag/courses/PHYS-6124-12/StGoChap10.pdf)
- [An Elucidation of Vector Calculus Through Differential Forms](https://www.math.uchicago.edu/~may/VIGRE/VIGRE2008/REUPapers/Emberton.pdf)

## 07.budget.units.covector.a

```text
Module: 07
Topic: covectors under unit changes
Role: warm-up
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by dual-space and covariant/contravariant transformation-law notes.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A cafe receipt vector records:

```text
v = (4, 6)
```

where the first coordinate counts sandwiches and the second counts drinks. A cost covector is:

```text
phi = [8, 3]
```

so the bill is `phi(v)`. The cafe starts recording sandwiches in pairs, so the same order has new coordinate:

```text
v' = (2, 6)
```

What must the sandwich price component become if the bill is unchanged?

## Answer Check

```text
old bill = 8(4) + 3(6) = 50
new bill = a(2) + 3(6)
2a + 18 = 50
a = 16
```

## Intuition

When the coordinate unit doubles, the vector coordinate halves. The measuring covector moves the other way so the scalar bill survives.

## Modeling Implication

Unit changes should not silently change scores. Store whether a quantity is a state coordinate or a measurement rule.

## Reserve Notes

Good replacement if Module 07 needs a cleaner everyday analogy than abstract basis matrices.

## 07.map.scale.invariant-pairing.a

```text
Module: 07
Topic: invariant pairing
Role: computation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by the standard dual-basis pairing rule.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let:

```text
A = [3 0]
    [0 1/2]

v = A v'
phi' = phi A
```

If `v' = (2, 8)` and `phi = [5, -4]`, compute `v`, `phi'`, and verify `phi(v) = phi'(v')`.

## Answer Check

```text
v = (6, 4)
phi' = [5, -4][3 0; 0 1/2] = [15, -2]

phi(v) = 5(6) - 4(4) = 14
phi'(v') = 15(2) - 2(8) = 14
```

## Intuition

The vector coordinates and covector coordinates do not match component-by-component, but the pairing is invariant.

## Modeling Implication

The invariant is the evaluated score, not the raw coordinate list.

## Reserve Notes

Could be promoted if Module 07 needs one more matrix-based check.

## 07.metric.lowering.nonorthogonal.a

```text
Module: 07
Topic: metric-dependent lowering
Role: derivation
Status: promoted in Module 07 Problem 7.11
Source use: original, source-informed
Source note: Inspired by metric-dependent covariant components in tensor/vector notes.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A non-orthogonal coordinate system has metric:

```text
G = [1 1]
    [1 2]
```

For the vector coordinate column:

```text
v = (3, 4)
```

compute the lowered covector:

```text
v_flat = v^T G
```

Then compare it with the Euclidean lowering that would use `I`.

## Answer Check

```text
v_flat = [3,4][1 1; 1 2] = [7, 11]

Euclidean lowering:
[3,4]I = [3,4]
```

## Intuition

The same vector becomes a different measuring rule when the geometry changes.

## Modeling Implication

Identifying states with scores requires a chosen geometry. Without recording the metric, a system can confuse "same entries" with "same object."

## Reserve Notes

Graduate-depth reserve. Useful when emphasizing that lowering an index is not free.

## 07.metric.pairing.check.a

```text
Module: 07
Topic: metric pairing
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Inspired by the metric formula for covariant components.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Using:

```text
G = [1 1]
    [1 2]
u = (1, 2)
v = (3, 4)
```

compute the metric pairing:

```text
u^T G v
```

Then compute it by first lowering `u` to `u_flat = u^T G`.

## Answer Check

```text
Gv = [7, 11]
u^T G v = [1,2](7,11) = 29

u_flat = [1,2][1 1; 1 2] = [3,5]
u_flat(v) = [3,5](3,4) = 29
```

## Intuition

The metric lets a vector act as a covector, but the score depends on the metric.

## Modeling Implication

Similarity scoring is not just "dot product by habit." It encodes a geometry.

## Reserve Notes

Pairs naturally with `07.metric.lowering.nonorthogonal.a`.

## 07.slots.category-error.a

```text
Module: 07
Topic: slot grammar
Role: conceptual check
Status: promoted in Module 07 Problem 7.10
Source use: original
Source note: Based on the course's product-discipline principle.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

For each expression, mark it as legal without extra structure or illegal without extra structure.

```text
A. covector(vector)
B. vector + covector
C. metric(vector, vector)
D. 2-form(vector, vector)
E. 2-form(covector, vector)
```

## Answer Check

```text
A. legal
B. illegal without an identification
C. legal if the metric is part of the structure
D. legal
E. illegal for an ordinary 2-form on vectors
```

## Intuition

Matching dimensions is weaker than matching slots.

## Modeling Implication

Typed mathematical objects prevent plausible-looking but meaningless operations.

## Reserve Notes

Good for reinforcing the course's "grammar of operations" theme.

## 07.wedge.determinant.area.a

```text
Module: 07
Topic: wedge evaluation
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Inspired by differential-forms notes where covariant tensors eat vectors.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let:

```text
alpha = [2, 1]
beta = [1, -1]
u = (3, 0)
v = (1, 4)
```

Compute:

```text
(alpha wedge beta)(u, v)
```

## Answer Check

```text
alpha(u) = 6
beta(v) = 1 - 4 = -3
alpha(v) = 2 + 4 = 6
beta(u) = 3

(alpha wedge beta)(u,v) = 6(-3) - 6(3) = -36
```

## Intuition

The wedge notices oriented two-slot content, not just two independent scores.

## Modeling Implication

When order and orientation matter, a symmetric similarity score is the wrong object.

## Reserve Notes

Useful as a harder hand calculation than the current lecture's coordinate-covector wedge example.

## 07.wedge.dependence.failure.a

```text
Module: 07
Topic: wedge failure mode
Role: counterexample
Status: reserve
Source use: original
Source note: Standard wedge-dependence phenomenon, rewritten in course language.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Use:

```text
alpha = [2, 1]
beta = [1, -1]
u = (3, 0)
w = (6, 0)
```

Compute `(alpha wedge beta)(u, w)`. What failed?

## Answer Check

```text
alpha(u) = 6
beta(w) = 6
alpha(w) = 12
beta(u) = 3

(alpha wedge beta)(u,w) = 6(6) - 12(3) = 0
```

## Intuition

The two input directions are dependent, so no oriented area remains.

## Modeling Implication

Two pieces of evidence can look like two inputs while contributing only one independent direction.

## Reserve Notes

Good failure-mode variant if Module 07 later gets a source/redundancy analogy.

## 07.table.relabeling.variance.a

```text
Module: 07
Topic: active/passive interpretation
Role: modeling interpretation
Status: reserve
Source use: original
Source note: Course-style standalone analogy.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A dinner organizer records a guest state as:

```text
v = (conversation energy, dietary difficulty)
```

A seating-risk score is a covector:

```text
phi = [2, 5]
```

The organizer changes the second coordinate so that one new unit means "two old dietary-difficulty units." Explain, without computing a new full basis matrix, which component of `v` changes direction and which component of `phi` must compensate.

## Answer Check

```text
The second coordinate of v is divided by 2.
The second component of phi must be multiplied by 2.
The scalar risk phi(v) should remain unchanged.
```

## Intuition

Changing the ruler should not change the bill, score, or risk. Measurements compensate for state coordinates.

## Modeling Implication

The scenario is ordinary first; the memory/design lesson is that representation changes require type-aware transformation rules.

## Reserve Notes

Natural human analogy candidate that avoids making the final memory system the premise.
