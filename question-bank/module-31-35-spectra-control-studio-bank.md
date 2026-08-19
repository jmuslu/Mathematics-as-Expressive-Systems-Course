# Modules 31-35 Bank: Operator Spectra, Feedback, Observability, Adaptive Gain, and Evidence-Board Design

Source posture: original course problems informed by standard public control-theory and signals-and-systems teaching material, plus the existing graph-memory and evaluation sources used elsewhere in this bank. These are reserve candidates, not promoted lecture text.

## Source Anchors

- [MIT OpenCourseWare 6.003 Signals and Systems](https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/)
- [MIT OpenCourseWare 16.30 Feedback Control Systems](https://ocw.mit.edu/courses/16-30-feedback-control-systems-fall-2010/)
- [MIT OpenCourseWare 18.06 Linear Algebra](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
- Astrom and Murray, *Feedback Systems: An Introduction for Scientists and Engineers* - the standard open textbook for gain, stability, and steady-state error.
- Kalman, *On the General Theory of Control Systems* - the origin of the controllability and observability rank tests.
- Liberzon, *Switching in Systems and Control* - the standard reference for why individually stable modes can switch into instability.

Link check note: the three OpenCourseWare URLs above should be re-verified before this bank is cited publicly. The three book and paper anchors are listed by title because they are used for orientation only, and no source problem text is reused.

## 31.eigenfunction.differentiation.a

```text
Module: 31
Topic: eigenfunctions of an operator with no matrix
Role: base case
Status: promoted in Module 31 Problem 31.1
Source use: original, source-informed
Source note: Standard signals-and-systems framing of the complex exponential as the eigenfunction of differentiation.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Decide which of the following are eigenfunctions of the operator `d/dt`, and give the eigenvalue where one exists:

```text
f(t) = e^{5t}
g(t) = cos(t)
h(t) = t
```

## Answer Check

```text
f: d/dt e^{5t} = 5 e^{5t}, eigenfunction with eigenvalue 5
g: d/dt cos(t) = -sin(t), shape changed, not an eigenfunction
h: d/dt t = 1, a constant, not a multiple of t, not an eigenfunction
```

## Intuition

An eigenfunction survives the operator with only its size changed. Most functions do not.

## Modeling Implication

Choosing a transform means choosing the family of signals a process acts on by simple scaling.

## Reserve Notes

Good warm-up before the continuous-versus-discrete stability comparison.

## 31.spectrum.continuous.a

```text
Module: 31
Topic: why an operator spectrum need not be a finite list
Role: derivation
Status: reserve
Source use: original, source-informed
Source note: Standard functional-analysis observation about the spectrum of differentiation.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Explain why the recipe `det(A - lambda I) = 0` cannot be used to find the spectrum of `d/dt`, and describe the spectrum instead.

## Answer Check

```text
Differentiation acts on a space with no finite basis, so there is no
determinant and no characteristic polynomial.

For every complex lambda, d/dt e^{lambda t} = lambda e^{lambda t}.
Every complex number is an eigenvalue, so the spectrum is the whole
complex plane rather than a finite root set.
```

## Intuition

The determinant recipe is a computation for finite matrices, not the definition of a spectrum.

## Modeling Implication

A system whose state is a signal rather than a short vector needs the general notion of spectrum from the start.

## Reserve Notes

Pairs with the defective-matrix entry to show both directions in which the naive eigenvalue picture is incomplete.

## 31.stability.continuous-discrete.a

```text
Module: 31
Topic: translating a continuous rate into a discrete multiplier
Role: computation
Status: promoted in Module 31 Problem 31.8
Source use: original, source-informed
Source note: Standard sampled-data correspondence between the left half-plane and the unit disk.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A weight decays continuously at rate `a` per week. Give the per-week multiplier for `a = -ln 2`, `a = 0`, and `a = 0.1`, and classify each.

## Answer Check

```text
a = -ln 2: multiplier e^{-ln 2} = 0.5, stable
a = 0:     multiplier e^{0} = 1, marginal
a = 0.1:   multiplier e^{0.1} = 1.105, unstable
```

## Intuition

The boundary `Re(s) = 0` in continuous time is the boundary `|z| = 1` in discrete time, carried across by `z = e^{s}`.

## Modeling Implication

A design stated as a half-life and a design stated as a per-step multiplier are the same commitment, and the stability verdict must agree.

## Reserve Notes

Useful for connecting Module 28's discrete decay rules to continuous-time language.

## 31.defective.transient.a

```text
Module: 31
Topic: transient growth inside a stable spectrum
Role: failure mode
Status: promoted in Module 31 Problem 31.12
Source use: original, source-informed
Source note: Standard Jordan-block example from linear systems courses.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A system has both eigenvalues equal to `-1`. A reviewer concludes the response cannot rise above its starting value. Give a counterexample and evaluate it at three times.

## Answer Check

```text
x(t) = t e^{-t}
x(0) = 0
x(1) = e^{-1} = 0.368
x(3) = 3 e^{-3} = 0.149
```

The response rises to a peak at `t = 1` and only then decays.

## Intuition

The eigenvalue list describes the long run. A repeated eigenvalue with a missing eigenvector adds a polynomial factor that dominates early.

## Modeling Implication

A stability claim is not a claim about the transient. Both need to be stated when the transient is what users experience.

## Reserve Notes

Could be extended into a full worked Jordan-form trail if Module 31 is ever expanded.

## 32.closed-loop.gain-range.a

```text
Module: 32
Topic: the set of gains that stabilize a drifting plant
Role: derivation
Status: promoted in Module 32 Problem 32.3
Source use: original, source-informed
Source note: Standard first-order proportional-control example from open control textbooks.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

For `x_{t+1} = a x_t + b u_t` with `a = 1.4`, `b = 2`, and `u_t = -k(x_t - r)`, find every gain that stabilizes the closed loop.

## Answer Check

```text
c = a - bk = 1.4 - 2k
|1.4 - 2k| < 1
-1 < 1.4 - 2k < 1
0.2 < k < 1.2
```

## Intuition

Both ends of the range are real constraints. Undercorrection and overcorrection are different failures.

## Modeling Implication

A tuning knob should be published with its admissible interval, not just its current value.

## Reserve Notes

Same shape as the Module 32 lecture problem with different numbers, suitable as a check-yourself variant.

## 32.steady-state-error.a

```text
Module: 32
Topic: why proportional feedback leaves an offset
Role: derivation
Status: reserve
Source use: original, source-informed
Source note: Standard steady-state-error derivation for proportional control of a drifting plant.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

With `a = 1.5`, `b = 1`, `r = 10`, and `k = 1`, find the closed-loop fixed point and the steady-state error. Then repeat with `k = 3`.

## Answer Check

```text
k = 1: c = 0.5
x* = 0.5 x* + 10
0.5 x* = 10
x* = 20, error = 10

k = 3: c = -1.5, magnitude above 1, unstable
no fixed point is reached
```

## Intuition

Raising the gain shrinks the offset only while the loop stays inside its stable range. Here it leaves that range before the offset becomes small.

## Modeling Implication

An offset that cannot be tuned away is a signal that the control law needs another term, not a larger number.

## Reserve Notes

A good setup for introducing integral action if the course ever adds a second feedback module.

## 32.lyapunov.contraction.a

```text
Module: 32
Topic: certifying convergence with a decreasing quantity
Role: derivation
Status: promoted in Module 32 Problem 32.8
Source use: original, source-informed
Source note: Standard quadratic Lyapunov argument for a scalar linear loop.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

For a closed loop with factor `c` and fixed point `x*`, let `V(x) = (x - x*)^2`. Show how `V` evolves in one step, and give the exact condition for convergence.

## Answer Check

```text
x_{t+1} - x* = c (x_t - x*)
V(x_{t+1}) = c^2 (x_t - x*)^2 = c^2 V(x_t)
V decreases whenever c^2 < 1, that is |c| < 1
```

## Intuition

Exhibiting a quantity that shrinks by a fixed ratio each step is a proof, not an observation about a particular run.

## Modeling Implication

Any decay-and-reinforcement rule in the course can be argued about this way once its closed-loop factor is written down.

## Reserve Notes

Generalizes to the matrix case with `V(x) = x^T P x`, which would be the natural next problem.

## 32.positive-feedback.a

```text
Module: 32
Topic: sign of feedback
Role: failure mode
Status: promoted in Module 32 Problem 32.7
Source use: original, source-informed
Source note: Standard negative-versus-positive feedback comparison.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A loop with `a = 0.9` and `b = 1` is already stable. Compute the closed-loop factor for `u_t = -0.5(x_t - r)` and for `u_t = +0.5(x_t - r)`.

## Answer Check

```text
negative feedback: c = 0.9 - 0.5 = 0.4, stable
positive feedback: c = 0.9 + 0.5 = 1.4, unstable
```

## Intuition

Positive feedback can destabilize a plant that was fine on its own. The sign is part of the design, not a notation convention.

## Modeling Implication

A reinforcement rule with no opposing term is positive feedback by default, which is why it needs a reference level to become a regulator.

## Reserve Notes

Connects directly to the Module 28 popularity-loop problem.

## 33.controllability.rank.a

```text
Module: 33
Topic: reachability of a diagonal two-state system
Role: base case
Status: promoted in Module 33 Problem 33.1
Source use: original, source-informed
Source note: Standard Kalman rank-test example.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

For `A = [[2,0],[0,3]]` and `B = (1,0)`, build the controllability matrix and give its rank. Then decide which states are reachable.

## Answer Check

```text
AB = (2, 0)
[B  AB] = [1  2]
          [0  0]
rank = 1
```

Only states of the form `(x, 0)` are reachable. The second coordinate never moves.

## Intuition

A diagonal system with a one-coordinate input can only ever drive that coordinate.

## Modeling Implication

If part of a stored state has no path from any input, no controller can repair it and no tuning effort is worthwhile.

## Reserve Notes

Different numbers from the lecture version, usable as a self-check.

## 33.observability.rank.a

```text
Module: 33
Topic: reconstructing state from a scalar output
Role: computation
Status: reserve
Source use: original, source-informed
Source note: Standard observability rank-test example.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

For `A = [[2,0],[0,3]]`, decide observability for `C = (1,0)` and for `C = (1,1)`.

## Answer Check

```text
C = (1,0): CA = (2,0)
[C ; CA] = [1  0]
           [2  0]
det = 0, rank 1, not observable

C = (1,1): CA = (2,3)
[C ; CA] = [1  1]
           [2  3]
det = 3 - 2 = 1, rank 2, observable
```

## Intuition

A single number per round is enough when it mixes the coordinates with weights that the dynamics then separate.

## Modeling Implication

What a system reports decides whether outside checking is possible at all, independently of how well it behaves.

## Reserve Notes

Pairs with the silent-divergence entry as the positive and negative cases.

## 33.silent-divergence.a

```text
Module: 33
Topic: an unstable mode hidden from the output
Role: failure mode
Status: promoted in Module 33 Problem 33.6
Source use: original, source-informed
Source note: Standard unobservable-unstable-mode example.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

For `A = [[0.4,0],[0,2]]`, `C = (1,0)`, and `x_0 = (1,1)`, compute the outputs for three rounds and the hidden coordinate at round three.

## Answer Check

```text
x_1 = (0.4, 2)
x_2 = (0.16, 4)
x_3 = (0.064, 8)

y_0 = 1
y_1 = 0.4
y_2 = 0.16
y_3 = 0.064
```

The output falls toward zero while the hidden coordinate has grown to `8`.

## Intuition

Calm outputs certify only the observable part of the state.

## Modeling Implication

A monitoring claim needs a rank check behind it. A longer record of quiet outputs adds no evidence about an unobservable mode.

## Reserve Notes

Stronger growth than the lecture version, useful when the point needs to be unmissable.

## 33.duality.transpose.a

```text
Module: 33
Topic: observability as controllability of the transpose
Role: derivation
Status: promoted in Module 33 Problem 33.7
Source use: original, source-informed
Source note: Standard duality statement from linear systems theory.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

For `A = [[0,1],[0,2]]` and `C = (1,0)`, build the observability matrix. Then build the controllability matrix of the pair `(A^T, C^T)` and compare the two.

## Answer Check

```text
CA = (0, 1)
observability = [1  0]
                [0  1]

A^T = [0  0]      C^T = (1, 0)
      [1  2]
A^T C^T = (0, 1)
controllability = [1  0]
                  [0  1]
```

The two matrices are transposes of each other, so their ranks agree. Both are rank `2`.

## Intuition

One rank test serves both questions once the system is transposed.

## Modeling Implication

Design work on what a system exposes and design work on what it can be steered by are the same mathematics viewed from two sides.

## Reserve Notes

A non-symmetric `A` makes the transpose visible; a symmetric one hides the point.

## 34.frozen-versus-switched.a

```text
Module: 34
Topic: individually stable modes that switch into instability
Role: derivation
Status: promoted in Module 34 Problems 35.4 and 35.5
Source use: original, source-informed
Source note: Standard switched-system counterexample of the shape used in the switching-stability literature.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Two contexts apply:

```text
A1 = [0.5  3  ]     A2 = [0.5  0  ]
     [0    0.5]          [3    0.5]
```

Give the spectral radius of each, then compute `A2 A1` and decide whether alternating between them is stable.

## Answer Check

```text
Each is triangular with diagonal 0.5 and 0.5, so each has
spectral radius 0.5.

A2 A1 = [0.5(0.5)+0(0)     0.5(3)+0(0.5) ]
        [3(0.5)+0.5(0)     3(3)+0.5(0.5) ]

      = [0.25  1.5 ]
        [1.5   9.25]

trace = 9.5
Two eigenvalues summing to 9.5 cannot both have magnitude below 1,
so the alternating schedule is unstable.
```

## Intuition

Stability of each frozen setting says nothing about stability of the schedule that uses them.

## Modeling Implication

A plasticity policy that switches between safe settings still needs its own stability argument.

## Reserve Notes

Larger off-diagonal entries than the lecture version, so the trace argument is even more immediate.

## 34.common-certificate.a

```text
Module: 34
Topic: when a switched schedule is safe
Role: derivation
Status: reserve
Source use: original, source-informed
Source note: Standard common-Lyapunov-function condition for switched linear systems.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

State the condition on a quantity `V` that makes a switched schedule stable regardless of switching order, then test `V(x) = x_1^2 + x_2^2` on the mode `A1 = [[0.5,3],[0,0.5]]` at `x = (0,1)`.

## Answer Check

```text
Condition: V must decrease under every mode in the schedule.

A1 (0,1) = (3, 0.5)
V before = 0 + 1 = 1
V after  = 9 + 0.25 = 9.25
```

`V` increases, so it is not a certificate for `A1` and cannot be a common one.

## Intuition

A stable matrix need not shrink the ordinary squared length at every step. A certificate must be found, not assumed.

## Modeling Implication

The positive result for scheduled systems is a single quantity that decreases everywhere, which is a much stronger design claim than a table of safe settings.

## Reserve Notes

Extending to `V(x) = x^T P x` with a shared `P` is the natural harder version.

## 34.noise-driven-gain.a

```text
Module: 34
Topic: adaptation that responds to noise
Role: failure mode
Status: promoted in Module 34 Problem 34.8
Source use: original, source-informed
Source note: Standard caution about adaptation driven by raw measurement variation.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A schedule sets `k_t = 0.2 + 2 d_t`, where `d_t` is the size of the last observed change. The true state is constant at `7`, but measurements alternate between `7.3` and `6.7`. Compute `d_t` and `k_t`, and check the result against the stable range `0.2 < k < 2.2`.

## Answer Check

```text
d_t = |7.3 - 6.7| = 0.6
k_t = 0.2 + 2(0.6) = 1.4
1.4 lies inside 0.2 < k < 2.2, so the loop is still stable
```

The gain has risen sevenfold although the true state never moved.

## Intuition

Measurement change and real change are different quantities. An adaptation rule that cannot tell them apart will track noise.

## Modeling Implication

A plasticity rule needs a noise model, or at least a threshold, before it is allowed to raise a gain.

## Reserve Notes

A follow-up could push the gain outside the stable range to combine both failure modes.

## 34.rate-limit.a

```text
Module: 34
Topic: limiting how fast a gain may move
Role: computation
Status: promoted in Module 34 Problem 34.10
Source use: original, source-informed
Source note: Standard rate-limiting practice in gain-scheduled control.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A gain may change by at most `0.15` per step and must stay inside `0.2 < k < 2.2`. How many steps are needed to move from `k = 0.35` to `k = 2.0`, and does the path stay admissible?

## Answer Check

```text
2.0 - 0.35 = 1.65
1.65 / 0.15 = 11 steps
Every intermediate value lies between 0.35 and 2.0, which is inside
the stable range, so the whole path is admissible.
```

## Intuition

Rate limiting restricts which switching sequences can occur, which is a practical way to exclude the fast alternation that destabilizes a schedule.

## Modeling Implication

A plasticity policy has at least three parts: the table of gains, the admissible range, and how fast the gain is allowed to move between them.

## Reserve Notes

Could be paired with a version where the shortest admissible path leaves the stable range and must be rerouted.

## 35.architecture-math-contract.a

```text
Module: 35
Topic: evidence-board design specification
Role: modeling interpretation
Status: promoted
Source use: original, source-informed
Source note: Inspired by graph-based agent memory lifecycle and evaluation sources.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A design spec says:

```text
We store debate cards in a graph and retrieve useful evidence.
```

Name five mathematical commitments missing from this spec.

## Answer Check

```text
Possible answers:
node and edge types
state space
legal transformations
invariants
restriction maps or consistency rules
decay and reinforcement dynamics
rewrite rules and guards
evaluation tests
```

## Intuition

A design is not mathematically specified until its objects, operations, and invariants are explicit.

## Modeling Implication

The final design document should test the course's whole vocabulary, not just name a graph.

## Reserve Notes

Promoted into Module 35 as the final mathematical-contract audit.

## 35.evaluation-alignment.a

```text
Module: 35
Topic: evaluation alignment
Role: conceptual check
Status: promoted in Module 35 Problem 35.11
Source use: original
Source note: Original evidence-board studio audit problem.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A debate-board design promises:

```text
permutation-invariant graph scores
sheaf-based consistency
decay-aware retrieval paths
```

Name one evaluation test for each promise.

## Answer Check

```text
permutation-invariant graph scores: relabel nodes and compare graph-level score
sheaf-based consistency: test whether local restrictions agree on overlaps
decay-aware retrieval paths: decay edge weights and check whether valid paths survive
```

## Intuition

Every mathematical promise needs a matching test.

## Modeling Implication

Design and evaluation should be co-designed.

## Reserve Notes

Useful final-module bridge from specification to QA.

## 35.rewrite-dynamics-conflict.a

```text
Module: 35
Topic: design conflict
Role: failure mode
Status: reserve
Source use: original
Source note: Original integration problem across rewrite and dynamics.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A system has:

```text
decay rule: delete edges below 0.2
rewrite rule: if a contradiction edge exists, preserve its provenance
```

What conflict should the design resolve?

## Answer Check

```text
The decay rule might delete a weak contradiction edge whose provenance the rewrite policy says should be preserved.
```

The design must specify priority, exceptions, or archival behavior.

## Intuition

Local rules can conflict even when each rule is reasonable alone.

## Modeling Implication

The final spec should include rule precedence or conflict-resolution policy.

## Reserve Notes

Good capstone failure-mode exercise.

## 35.local-global-studio-test.a

```text
Module: 35
Topic: studio integration and local-to-global validation
Role: modeling interpretation
Status: reserve
Source use: original
Source note: Original capstone studio problem combining schema, sheaf consistency, rewriting, and evaluation design.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

An evidence board has three local review panels:

```text
retrieval panel
source-quality panel
argument-coherence panel
```

Each panel assigns a status to the same evidence card:

```text
valid, weak, contradicted
```

Design one local-to-global consistency test and one rewrite rule that should fire if the panels disagree.

## Answer Check

One consistency test:

```text
Restrict each panel's local status to the shared evidence-card status field.
The card can be globally valid only if the restricted statuses agree or if a declared conflict-resolution rule applies.
```

One rewrite rule:

```text
if retrieval_status = valid
and source_quality_status = contradicted
then mark evidence card as needs_review
and preserve both panel reports as provenance
```

## Intuition

The board should not silently average away local disagreement.

## Modeling Implication

A capstone design should specify how local validations glue, how disagreements are preserved, and which rewrite rules respond to failed gluing.

## Reserve Notes

Good final studio reserve because it forces the student to combine sheaves, rewriting, and evaluation.

## 35.capstone.object-operation-invariant.a

```text
Module: 35
Topic: capstone mathematical contract
Role: guided derivation
Status: reserve
Source use: original
Source note: Original studio specification problem combining the course's object-operation-invariant spine.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A studio team proposes a debate evidence board with:

```text
nodes = claims, sources, evidence cards
edges = supports, contradicts, cites
```

Fill in one legal operation, one invariant, and one failure mode the design should test.

## Answer Check

One valid completion:

```text
legal operation: merge duplicate evidence cards only when source IDs and normalized claims agree
invariant: graph-level confidence score is unchanged by node relabeling
failure mode: a weak contradiction edge decays below threshold and disappears before review
```

Other answers are acceptable if they specify a concrete operation, a checkable invariant, and a plausible failure mode.

## Intuition

A final design should not just name mathematical objects; it should say what can be done to them and what must survive.

## Modeling Implication

The capstone contract turns course vocabulary into testable engineering commitments.

## Reserve Notes

Good final studio reserve for forcing specificity.

## 35.human-example.fit-check.a

```text
Module: 35
Topic: analogy and design fit
Role: conceptual check
Status: reserve
Source use: original
Source note: Original style-governance problem reflecting the course's analogy principle.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A student explains sheaf consistency using this scenario:

```text
Two witnesses describe the same dinner reservation from different details, and the overlap checks only the shared person field.
```

Another student explains it as:

```text
A memory architecture stores global truth in a trust dinner module.
```

Which analogy better fits the course style, and why?

## Answer Check

The witness/dinner-reservation analogy fits better. It is an ordinary situation first, and the mathematics explains local reports, overlap restrictions, and gluing.

The "trust dinner module" analogy is too dependent on a final system architecture and does not sound like a natural applied-math scenario.

## Intuition

Analogies should make the local mathematical structure easier to see before invoking a final design.

## Modeling Implication

Course examples should be promoted when they clarify the current principle, not merely because they point toward the capstone.

## Reserve Notes

Useful final-module reflection problem to preserve the agreed analogy standard.
