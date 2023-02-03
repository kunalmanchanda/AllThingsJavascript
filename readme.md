# Javascript

> Getting Started...

## function currying

* a function that accepts one argument & return a function expecting another argument
* closure - inner function + outer lexical environment
* partial Application - number of arguments does not determine the number of nesting functions
* in functional currying the number of nested functions depends on the number of arguments (+1 if you use extra function() in the end for calculations)

## pure functions

* it always produces the expected result every time, avoid unexpected side affect
* The functions that doesn't have any side effects(not uses anything from outside the function) & treat is params as immutable
* every time you give its same input it should always return same output
* it does not affect anything outside of the function
* Math.random() -> it same input & have but always have different output not a pure function
* console.log is side effect it changes the state of the application - function not pure anymore

## state

* what get rendered on the screen and console also part of application state
* state is the data which is manipulated and reflected by your running program
* the current state of the application

## this - Implicit Binding Rules

* this refers to the object that is calling the current function
* in method - this refers to the object itself
* in normal function - this refers to the window object
* in constructor function this point ot the new empty object {}
* in arrow functions this points to its outer normal function
* binding the function to the object & this will point to that object
* arrow, anonymous, "IIFE" all points up to its parent normal functions for this
