# Modules 25-27 Bank: Inference, Graphical Models, and Optimization

Source posture: original course problems inspired by public sources on factor graphs, belief propagation, probabilistic graphical models, and constrained optimization. These are reserve candidates, not promoted lecture text.

## Source Anchors

- [Factor Graphs and the Sum-Product Algorithm](https://www.mit.edu/~6.454/www_fall_2000/chanal/factor.pdf)
- [A Tutorial Introduction to Belief Propagation](https://www.ski.org/wp-content/uploads/2025/01/bptutorial.pdf)
- [Message-Passing Algorithms for Optimization and Inference](https://www.merl.com/publications/docs/TR2011-087.pdf)
- [Probabilistic Graphical Models](https://users.cs.utah.edu/~zhe/teach/archived/2019f/6190-pdf/9-graphical.pdf)
- [Note Set 2: Conditional Independence and Graphical Models](https://ics.uci.edu/~smyth/courses/cs274/notes/Notes2_GraphicalModels.pdf)
- [CS229 Convex Optimization Overview](https://cs229.stanford.edu/section/cs229-cvxopt2.pdf)
- [MIT Nonlinear Optimization Lecture 7: Lagrange Multipliers and KKT Conditions](https://ocw.mit.edu/courses/6-7220j-nonlinear-optimization-spring-2025/mit6_7220_s25_lec07.pdf)

## 25.factor-to-variable.table.a

```text
Module: 25
Topic: sum-product factor message
Role: computation
Status: promoted in Module 25 Problems 25.5-25.6
Source use: original, source-informed
Source note: Inspired by factor-graph sum-product message formulas.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A binary factor connects variables `A` and `B` with potential:

```text
f(A,B)
        B=0 B=1
A=0     3   1
A=1     2   4
```

Incoming message from `A` is:

```text
m_A_to_f = (0.6, 0.4)
```

Compute the unnormalized message `m_f_to_B`.

## Answer Check

```text
m(B=0) = f(0,0)0.6 + f(1,0)0.4 = 3(0.6) + 2(0.4) = 2.6
m(B=1) = f(0,1)0.6 + f(1,1)0.4 = 1(0.6) + 4(0.4) = 2.2
```

## Intuition

The factor sums over the variable it is not sending to.

## Modeling Implication

Local compatibility tables can transmit belief without sending the whole graph state.

## Reserve Notes

Good replacement if Module 25 needs a less symmetric factor than equality/difference.

## 25.variable-message.exclude-target.a

```text
Module: 25
Topic: variable-to-factor message
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Inspired by standard variable-to-factor update rule.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A binary variable `X` is connected to factors `a`, `b`, and `c`. Incoming messages are:

```text
m_a_to_X = (2, 1)
m_b_to_X = (3, 4)
m_c_to_X = (5, 6)
```

What unnormalized message should `X` send to factor `c`?

## Answer Check

```text
m_X_to_c(0) = 2 * 3 = 6
m_X_to_c(1) = 1 * 4 = 4
```

The message to `c` excludes the incoming message from `c`.

## Intuition

A variable tells a factor what the rest of the graph says, without echoing that factor's own message back.

## Modeling Implication

Message direction matters. Echoing a message back can create artificial reinforcement.

## Reserve Notes

Good double-counting prevention example.

## 25.rumor-chain.false-true.a

```text
Module: 25
Topic: belief update from incoming messages
Role: warm-up / computation
Status: promoted
Source use: original, source-informed
Source note: Inspired by factor-graph sum-product updates where local beliefs are proportional to the product of incoming messages and local evidence.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

In a rumor chain Ari-Bea-Cy, Bea has binary states:

```text
false = rumor is false
true = rumor is true
```

Ari sends:

```text
m_Ari_to_Bea(false)=0.8
m_Ari_to_Bea(true)=0.2
```

Cy sends:

```text
m_Cy_to_Bea(false)=0.5
m_Cy_to_Bea(true)=0.5
```

If Bea has no local preference, compute and normalize Bea's belief.

## Answer Check

```text
b_Bea(false)=0.8*0.5=0.4
b_Bea(true)=0.2*0.5=0.1

total = 0.5
normalized = (false=0.8, true=0.2)
```

## Intuition

An uninformative neighbor does not change the balance; Ari's message dominates this update.

## Modeling Implication

Messages summarize local evidence in a state space. Naming the states prevents belief propagation from becoming empty arithmetic.

## Reserve Notes

Promoted into Module 25 as the ordinary rumor-chain base case for message multiplication.

## 25.normalize.after-product.a

```text
Module: 25
Topic: normalization
Role: warm-up
Status: reserve
Source use: original
Source note: Original arithmetic drill for belief normalization.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Incoming unnormalized messages produce:

```text
b(0) = 0.18
b(1) = 0.42
```

Normalize the belief.

## Answer Check

```text
total = 0.18 + 0.42 = 0.60
P(0) = 0.18 / 0.60 = 0.30
P(1) = 0.42 / 0.60 = 0.70
```

## Intuition

Belief propagation often works with proportional values before normalizing.

## Modeling Implication

Scores and probabilities are not the same object until the normalization convention is declared.

## Reserve Notes

Small warm-up candidate.

## 25.loopy.echo.failure.a

```text
Module: 25
Topic: loopy belief propagation failure
Role: failure mode
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by belief-propagation tutorials warning about loops and double counting.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A rumor graph has:

```text
Source S -> Blog A -> Summary C
Source S -> Blog B -> Summary C
```

If the model treats A and B as independent confirmations, what can go wrong?

## Answer Check

```text
A and B share Source S.
Counting them as independent can overstate confidence because one origin is treated like two independent origins.
```

## Intuition

Graph shape matters because it encodes dependency assumptions.

## Modeling Implication

Validation systems need provenance-aware graphical structure, not only repeated agreement.

## Reserve Notes

Natural human information-flow analogy for correlated evidence.

## 25.max-product.choice.a

```text
Module: 25
Topic: max-product versus sum-product
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Inspired by message-passing algorithms for inference and optimization.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A factor sends a score to `B` by considering two possible values of `A`:

```text
For B=0: scores are 6 and 2
For B=1: scores are 3 and 5
```

Compute the sum-product and max-product messages.

## Answer Check

```text
sum-product:
m(0)=6+2=8
m(1)=3+5=8

max-product:
m(0)=max(6,2)=6
m(1)=max(3,5)=5
```

## Intuition

Sum-product marginalizes over alternatives. Max-product keeps the best explanation.

## Modeling Implication

Inference and optimization can use similar message structure while answering different questions.

## Reserve Notes

Good bridge from Module 25 to Module 27.

## 26.joint-factorization.fork.a

```text
Module: 26
Topic: Bayesian network factorization
Role: computation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by PGM factorization examples.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

For the graph:

```text
SourceReliability -> Evidence1
SourceReliability -> Evidence2
ClaimTruth -> Evidence1
ClaimTruth -> Evidence2
```

write the joint factorization.

## Answer Check

```text
P(S, T, E1, E2)
= P(S) P(T) P(E1 | S,T) P(E2 | S,T)
```

where `S` is source reliability and `T` is claim truth.

## Intuition

Both observations depend on shared latent causes.

## Modeling Implication

Shared source variables prevent treating related evidence as independent by default.

## Reserve Notes

Directly supports correlated-evidence reasoning.

## 26.viral-review.factorization.a

```text
Module: 26
Topic: Bayesian network factorization with hidden common cause
Role: warm-up / computation
Status: promoted
Source use: original, source-informed
Source note: Inspired by PGM examples where graph structure encodes factorization and conditional independence.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Two friends recommend the same restaurant, and both recommendations may be influenced by one viral review:

```text
ViralReview -> FriendARecommendation
ViralReview -> FriendBRecommendation
```

Write the joint factorization. Then state what independence holds after conditioning on `ViralReview`.

## Answer Check

```text
P(V,A,B)=P(V)P(A|V)P(B|V)
```

After conditioning on `V`, the graph says:

```text
A is independent of B given V.
```

## Intuition

The two recommendations may look like separate signals, but a shared cause can explain their agreement.

## Modeling Implication

Graphical models prevent copied enthusiasm from being counted as independent confirmation.

## Reserve Notes

Promoted into Module 26 as the running-example base case for factorization and conditional independence.

## 26.conditional-independence.chain.a

```text
Module: 26
Topic: conditional independence
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Inspired by graphical-model conditional-independence notes.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

In the chain:

```text
A -> B -> C -> D
```

which variables become independent when conditioning on `B`?

## Answer Check

```text
A is independent of C and D given B.
```

Conditioning on `B` blocks paths from `A` to variables downstream of `B`.

## Intuition

The middle variable can screen off upstream and downstream information.

## Modeling Implication

Graphical models let the course state when a local summary is enough.

## Reserve Notes

Useful extension of the current three-node chain.

## 26.explaining-away.numeric.a

```text
Module: 26
Topic: explaining away
Role: derivation
Status: reserve
Source use: original, source-informed
Source note: Inspired by Bayesian-network explaining-away examples.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A page is wet if either rain or sprinkler happened. Suppose:

```text
P(Rain)=0.5
P(Sprinkler)=0.5
Wet is true if Rain or Sprinkler is true
```

Given `Wet=true`, compute `P(Rain=true)`. Then compute `P(Rain=true | Wet=true, Sprinkler=true)`.

## Answer Check

```text
Possible equally likely worlds:
R,S = 00, 01, 10, 11
Wet=true excludes 00, leaving 01, 10, 11.

P(Rain=true | Wet=true) = 2/3

If Sprinkler=true and Wet=true, possible worlds are 01 and 11.
P(Rain=true | Wet=true, Sprinkler=true) = 1/2
```

## Intuition

Knowing one cause is present can reduce the need for another cause.

## Modeling Implication

Evidence sources can compete as explanations rather than simply add.

## Reserve Notes

Good hand-checkable explaining-away variant.

## 26.markov-blanket.restaurant.a

```text
Module: 26
Topic: Markov blanket
Role: modeling interpretation
Status: reserve
Source use: original
Source note: Course-style ordinary analogy for Markov blanket.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A dinner-choice model has:

```text
Weather -> PatioChoice
Budget -> RestaurantChoice
PatioChoice -> Satisfaction
RestaurantChoice -> Satisfaction
Mood -> Satisfaction
```

What is the Markov blanket of `RestaurantChoice`?

## Answer Check

```text
Parent: Budget
Child: Satisfaction
Co-parents of child Satisfaction: PatioChoice, Mood

Markov blanket = {Budget, Satisfaction, PatioChoice, Mood}
```

## Intuition

The Markov blanket is the local boundary that makes the node conditionally independent of the rest.

## Modeling Implication

Local inference can be principled when the dependency graph is correct.

## Reserve Notes

Natural analogy without memory-system premise.

## 26.edge-absence.commitment.a

```text
Module: 26
Topic: missing edge assumption
Role: failure mode
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by PGM notes on graph structure and conditional independence.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A model has:

```text
SourceQuality -> EvidenceAccuracy
ClaimTruth -> EvidenceAccuracy
```

but no edge from `SourceQuality` to `ClaimTruth`. What assumption is the model making before observing evidence?

## Answer Check

```text
It assumes SourceQuality and ClaimTruth are independent a priori, unless connected through other variables.
```

## Intuition

A missing edge is not just a blank space. It encodes a simplifying assumption.

## Modeling Implication

Graphical model design should document absent dependencies as well as present ones.

## Reserve Notes

Good conceptual guardrail for Module 26.

## 27.lagrange.circle-line.a

```text
Module: 27
Topic: equality constrained optimization
Role: derivation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by Lagrange multiplier lecture examples.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Minimize:

```text
f(x,y)=x^2+y^2
```

subject to:

```text
x + 2y = 4
```

using `L = x^2 + y^2 + lambda(x+2y-4)`.

## Answer Check

```text
2x + lambda = 0
2y + 2lambda = 0
x + 2y = 4

lambda = -2x
2y - 4x = 0, so y = 2x
x + 2(2x) = 4
5x = 4
x = 4/5, y = 8/5
```

## Intuition

The nearest point to the origin on a line is where the objective gradient balances the constraint normal.

## Modeling Implication

Constraints define the feasible surface; the optimum may be the best feasible compromise, not the unconstrained preference.

## Reserve Notes

Slightly harder equality constraint than the current symmetric example.

## 27.kkt.boundary.active.a

```text
Module: 27
Topic: KKT active inequality
Role: computation
Status: lecture candidate
Source use: original, source-informed
Source note: Inspired by KKT condition notes.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Minimize:

```text
f(x)=(x-5)^2
```

subject to:

```text
x <= 3
```

Find the minimizer and say whether the constraint is active.

## Answer Check

```text
Unconstrained minimizer is x=5, infeasible.
Best feasible point is x=3.
g(x)=x-3, so g(3)=0.
The constraint is active.
```

## Intuition

The boundary can become the solution when the unconstrained optimum is forbidden.

## Modeling Implication

Trust, budget, or consistency constraints can force a model away from the score it would otherwise prefer.

## Reserve Notes

Good direct KKT intuition.

## 27.dinner-budget.kkt.active.a

```text
Module: 27
Topic: active and inactive inequality constraints
Role: computation / modeling interpretation
Status: promoted
Source use: original, source-informed
Source note: Inspired by KKT examples where active constraints bind at equality and inactive constraints have zero multiplier.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Let `x` be dinner cost in tens of dollars and let:

```text
E(x) = (x - 3)^2
```

Compare two budget caps:

```text
A. x <= 2
B. x <= 5
```

For each cap, find the minimizer and say whether the budget constraint is active.

## Answer Check

```text
A. The unconstrained minimizer x=3 violates x<=2, so the best feasible point is x=2.
   The constraint is active.

B. The unconstrained minimizer x=3 satisfies x<=5, so the minimizer is x=3.
   The constraint is inactive.
```

## Intuition

An active constraint actually shapes the chosen optimum. An inactive constraint is present but not binding at the solution.

## Modeling Implication

Optimization diagnostics should report which human requirements shaped the result, not only the final score.

## Reserve Notes

Promoted into Module 27 to tie KKT active/inactive constraints to the dinner-planning running example.

## 27.kkt.inactive.multiplier.a

```text
Module: 27
Topic: KKT inactive inequality
Role: conceptual check
Status: reserve
Source use: original, source-informed
Source note: Inspired by complementary slackness.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Minimize:

```text
f(x)=(x-1)^2
```

subject to:

```text
x <= 3
```

What is the minimizer, and what should complementary slackness say about the inequality multiplier?

## Answer Check

```text
The unconstrained minimizer x=1 is feasible.
The constraint is inactive because 1 < 3.
The multiplier should be 0.
```

## Intuition

Inactive constraints are present in the problem statement but not shaping the optimum.

## Modeling Implication

Not every rule affects every validated state; diagnostics should distinguish active from inactive constraints.

## Reserve Notes

Pairs with active-boundary problem.

## 27.penalty-limit.a

```text
Module: 27
Topic: penalty method
Role: computation
Status: reserve
Source use: original
Source note: Original penalty-method arithmetic variant.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

Minimize:

```text
E_mu(x) = (x-4)^2 + mu(x-1)^2
```

for `mu=3`.

## Answer Check

```text
E_mu'(x)=2(x-4)+6(x-1)
        = 2x - 8 + 6x - 6
        = 8x - 14

8x - 14 = 0
x = 14/8 = 7/4
```

## Intuition

The penalty pulls the solution from 4 toward the constraint target 1.

## Modeling Implication

Soft constraints trade off rather than absolutely forbid violation.

## Reserve Notes

Good extension of the current penalty example.

## 27.wrong-energy.oversmoothing.a

```text
Module: 27
Topic: objective failure mode
Role: failure mode
Status: lecture candidate
Source use: original
Source note: Original course problem aligned with validation objective design.
License note: No source problem text copied.
Verification status: checked by hand
```

## Problem

A validation objective minimizes:

```text
sum over edges (belief_u - belief_v)^2
```

Name one useful behavior and one dangerous behavior this objective can create.

## Answer Check

```text
Useful: it encourages neighboring beliefs to agree.
Dangerous: it can oversmooth real disagreement or minority evidence.
```

## Intuition

Every objective encodes a value judgment.

## Modeling Implication

Low energy is only good if the energy function penalizes the right failures.

## Reserve Notes

Important design-interpretation problem for Module 27.
