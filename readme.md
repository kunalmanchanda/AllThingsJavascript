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
* let have a block scope, this points to the window object & let stays inside script

## bind, call, apply - explicit Binding

> function.call(object)

* bind - binding the function to that object (Obj) will create a new function, so that new function this will point to object(Obj)
* call calling the function with reference to the object passed as a parameter
* apply params are passed as an array of args, call takes ti as a comma separated values
* concat returns a new array instead of modifying the new array
* try to use apply with the array questions - Math.max.apply(null, [1, 2, 3]) returns 3 as apply takes arguments as an array
* when a function is bind to a object it will remain in binding to that object only -> bind chaining doesn't exists
