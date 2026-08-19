# Module 31: Transforms, Operator Spectra, and Group Chat Rhythm

## Lecture Promise

You will understand a spectrum as the basis-independent fingerprint of a process, including processes that have no matrix and no characteristic polynomial.

## Prerequisites

- Spectral theory
- Hermitian structure
- Dynamical systems on graphs

## Why The Old Object Fails

Module 09 found eigenvalues by solving `det(A - lambda I)=0`. That recipe needs a finite square matrix.

Many processes worth modeling are not finite matrices. Differentiation acts on a space of functions with no finite basis. A continuous-time decay acts for every real time, not in discrete steps. Neither has a determinant, so neither has a characteristic polynomial.

Yet these processes clearly have stable modes. Differentiation obviously does something simple to `e^{2t}`. The old object fails because it identified "spectrum" with "roots of a polynomial" when the spectrum is a more general thing.

## Base Case

Apply differentiation to an exponential:

```text
d/dt e^{2t} = 2 e^{2t}
```

The function comes back unchanged in shape and scaled by `2`. That is exactly the eigenvector equation `Av = lambda v`, with a function in place of a vector.

## Running Example: Group Chat Rhythm

Imagine counting messages per day in a group chat over several months.

The raw count looks like noise. But three different things are actually stacked on top of each other:

```text
a steady baseline everyone contributes
a weekly cycle that peaks every weekend
a burst after a big event that fades over a few weeks
```

Nobody in the chat is "the weekly cycle." Like the friendship moods of Module 09, these are modes of the whole signal rather than properties of individual members.

A transform is the tool that separates them. It rewrites the signal in a basis where each of the three pieces sits in its own slot, and each slot evolves independently of the others.

## Formal Object

An operator `A` acts on a space of functions or signals. A nonzero `f` with:

```text
A f = lambda f
```

is an eigenfunction, and `lambda` is the associated eigenvalue.

The spectrum of `A` is the set of all `lambda` for which `A - lambda I` fails to have a bounded inverse. For a finite matrix that set is exactly the roots of the characteristic polynomial. For an operator it can be an interval, a half-plane, or the whole complex plane.

Two spectra matter repeatedly in this course:

```text
d/dt on e^{st}   gives eigenvalue s
x_{t+1}=Ax_t     needs eigenvalues of A
```

The first is continuous time and its stability boundary is the imaginary axis. The second is discrete time and its stability boundary is the unit circle.

## Legal Operations

The legal moves are eigenbasis moves:

- test a candidate eigenfunction by substituting it into the operator
- read `s = sigma + j omega` as a decay rate paired with an oscillation rate
- expand a signal as a sum of eigenfunctions
- evolve each component independently by multiplying it by its own factor
- recombine the components back into a signal
- compare a continuous rate to a discrete factor through `factor = e^{rate * step}`

A transform is not a formula to memorize. It is a change of basis chosen so that the process becomes multiplication.

## Worked Derivation

Solve continuous decay by treating it as an eigenfunction problem. The rule is:

```text
dx/dt = a x
```

Guess `x(t) = e^{st}`. Substituting gives:

```text
s e^{st} = a e^{st}
```

so `s = a`, and the general solution is:

```text
x(t) = x(0) e^{at}
```

Now compare this to the discrete rule from Module 28. Sampling the continuous solution every one step gives:

```text
x(t+1) = e^{a} x(t)
```

So the discrete multiplier and the continuous rate are related by:

```text
multiplier = e^{rate}
```

If `a = -ln 2`, the multiplier is `0.5`. The continuous statement "decays at rate `ln 2` per week" and the discrete statement "halves each week" are the same mode written in two coordinate systems. Stability agrees under the translation: `a < 0` matches `|multiplier| < 1`.

## Invariants

- The spectrum is unchanged by a change of basis
- The stability verdict is unchanged by the continuous-to-discrete translation
- Eigenfunctions of a process stay eigenfunctions of every power of that process

The spectrum is what survives rewriting. Two processes written as completely different formulas but sharing a spectrum are, in the diagonalizable case, the same process seen in different coordinates.

## Failure Mode

Three failures recur:

- treating a spectrum as necessarily a finite list, when it can be continuous
- assuming the spectrum determines everything, when a defective operator has transient behavior no eigenvalue predicts
- reading `sigma` and `omega` as if they measured the same kind of quantity, when one is a decay rate and the other is an oscillation rate

The third failure is the one that quietly corrupts design work. A complex number carries two readings, and only the setup says which is which.

## Problem Ladder

1. Confirm that `e^{3t}` is an eigenfunction of `d/dt`.
2. Find the eigenvalue of `d^2/dt^2` on `sin(omega t)`.
3. Explain why a defective operator is not described by its spectrum alone.

## Representation Design Connection

Choosing a transform is choosing which decomposition of a signal you are willing to treat as independent. If a system reinforces, decays, and filters a stored signal, its designer should be able to say which modes are being strengthened and which are being erased, not merely that "the scores went up."

## Hand Problem Trail

### Problem 31.1: Eigenfunction of differentiation

Is `f(t) = e^{3t}` an eigenfunction of `d/dt`? If so, give the eigenvalue.

Answer check:

```text
d/dt e^{3t} = 3 e^{3t}
```

Yes, with eigenvalue `3`. The function returns scaled, not reshaped.

### Problem 31.2: Why the sine is not the eigenfunction

Compute `d/dt sin(t)` and `d/dt e^{jt}`. Which one is an eigenfunction of `d/dt`?

Answer check:

```text
d/dt sin(t) = cos(t)      shape changed, not an eigenfunction
d/dt e^{jt} = j e^{jt}    scaled by j, eigenfunction
```

The complex exponential is the eigenfunction. This is why phase-carrying complex scalars from Module 08 are the natural language here: a real sinusoid is a sum of two eigenfunctions, not one.

### Problem 31.3: Second derivative of a sinusoid

Compute `d^2/dt^2 sin(omega t)` and give the eigenvalue.

Answer check:

```text
d/dt sin(omega t)     = omega cos(omega t)
d^2/dt^2 sin(omega t) = -omega^2 sin(omega t)
```

The eigenvalue is `-omega^2`. Sine is not an eigenfunction of the first derivative but is one of the second.

### Problem 31.4: Continuous decay

Solve `dx/dt = -0.5x` with `x(0) = 8`, and give `x(2)`.

Answer check:

```text
x(t) = 8 e^{-0.5t}
x(2) = 8 e^{-1}
```

Numerically about `2.943`.

### Problem 31.5: Reading a complex rate

A mode has `s = -0.5 + 2j`. Describe its behavior in words, and state its envelope.

Answer check:

```text
real part -0.5: decays, envelope e^{-0.5t}
imaginary part 2: oscillates at 2 radians per unit time
```

It is a shrinking oscillation. The two parts of the same complex number answer two different questions.

### Problem 31.6: Why there is no characteristic polynomial

For any complex `lambda`, exhibit an eigenfunction of `d/dt` with that eigenvalue. What does this say about the spectrum?

Answer check:

```text
d/dt e^{lambda t} = lambda e^{lambda t} for every complex lambda
```

Every complex number is an eigenvalue, so the spectrum is the whole plane. No finite polynomial has that root set, which is why the determinant recipe cannot be the definition.

### Problem 31.7: A transform turns filtering into multiplication

A filter multiplies the mode at frequency `omega` by `H(omega) = 1/(1+omega)`. An input has a component of size `4` at `omega = 0` and a component of size `6` at `omega = 3`. Compute the output components.

Answer check:

```text
omega = 0: 4 * 1/(1+0) = 4
omega = 3: 6 * 1/(1+3) = 1.5
```

The slow component passes untouched and the fast component is cut to a quarter. In the eigenbasis the filter is just multiplication, one number per mode.

### Problem 31.8: Continuous rate to discrete factor

A quantity decays continuously at rate `a = -ln 2` per week. What is the per-week multiplier, and does it agree with the discrete stability test?

Answer check:

```text
multiplier = e^{-ln 2} = 0.5
|0.5| < 1, and a < 0
```

Both tests say stable. The two stability boundaries, `Re(s) = 0` and `|z| = 1`, correspond under `z = e^{s}`.

### Problem 31.9: Two stability tests

Classify `s = -2 + 5j` as a continuous-time mode, and `z = 0.9 - 0.5j` as a discrete-time mode.

Answer check:

```text
s: Re(s) = -2 < 0, so stable
z: |z|^2 = 0.81 + 0.25 = 1.06, so |z| > 1, unstable
```

The discrete mode is unstable despite both of its parts being smaller than one. Magnitude is the test, not the individual coordinates.

### Problem 31.10: The spectrum does not determine everything

For:

```text
A = [2 1]
    [0 2]
```

find the eigenvalues, then find how many independent eigenvectors exist.

Answer check:

```text
eigenvalues: lambda = 2, 2
(A - 2I) = [0 1]
           [0 0]
nullspace is spanned by (1,0) only
```

There is one independent eigenvector for a repeated eigenvalue, so `A` is defective. Powers of `A` grow like `t * 2^t`, a factor the eigenvalue list alone never shows.

### Problem 31.11: Decomposing the group chat

Message counts per day are modeled as a steady baseline, a weekly cycle, and a fading burst after an event. Assign each piece to a spectral component.

Answer check:

```text
baseline:      the zero-frequency mode, s = 0
weekly cycle:  a purely oscillatory pair, s = +/- j omega_week
fading burst:  a decaying mode, s = sigma < 0
```

Each of the three lives in its own slot, and each evolves without disturbing the others.

### Problem 31.12: Failure mode - trusting the eigenvalue list

Someone reports that a system's spectrum is `{-1, -1}` and concludes the response falls smoothly from its starting value with no rise. Give a counterexample.

Answer check:

```text
x(t) = (c1 + c2 t) e^{-t}
with c1 = 0, c2 = 1: x(t) = t e^{-t}
x(0) = 0, x(1) = e^{-1} = 0.368, x(3) = 3e^{-3} = 0.149
```

The response rises before it decays. A repeated eigenvalue with a missing eigenvector produces transient growth inside a stable spectrum, so the eigenvalue list is a claim about the long run only.
