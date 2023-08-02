# functional Programming

* Javascript in depth working process of Functional Programming
* composing Pure functions
* uses functions composition
* avoiding shared states, mutable Data, & side-effects
* Functional programming is declarative rather than imperative coding
* Application state flows through pure functions

## avoiding side Effects

* not using any globally declared variable or something outside of the function
* side-effects make code harder to debug, more difficult to predict & understand
* changing the original values of the function parameter
* throwing an exception
* printing to the screen or logging
* triggering an external process
* invoking other function that causes the side effect

## Pure Functions

* function depends on the data provided and not on the external data
* the function does not cause any side-effects, it doesn't cause change beyond its scope
* given the same function will always return the same output
