# Javascript

> Getting Started...

* Everything in JavaScript depends upon execution context

## lodash

* Values that aren't considered collections are always seen as empty

### Scope

* scope is determined lexically - whr its defined and how
* JS uses function scope
* nested functions create a scope chain - execution context & lexical environment

#### Global Variables

* this keyword inside function is a global object, _add a property directly to the global object_
* variable declared without var | let | const keyword, _use a variable without declaring it_
* var statement outside function

#### Type Coercion

* ( - , * , / , % ) converts into number
* ( + ) concats _true : 1, false : 0_
* 7 falsy values __null__ __0__ __-0__ __""__ __NaN__ __null__ __undefined__  i.e. 6 bcz -0 is 0 only
* some truty values __[]__ __{}__ __-ve integers__

#### Hoisting

* Execution Context
* Hoist means to lift or raise up
* function declaration are hoisted not function expression
* functions & variable declarations are hoisted to the top level of code - i.e. you can use them even before they are declared
* let & const are hoisted but they stay in Temporal Dead Zone until initialized with value

#### functions

* __var fun = function()__ function expression
* __function fun()__ function declaration
* JS functions are first-class means that something is just a value

#### var Vs let

* var has a functional & global scope
* let, const have a code block scope
* var & let can be hoisted, but let stays in temporal dead zone until its initialized

##### system assigned absence of value -> undefined, programmer assigned absence of value -> null

#### Objects

* objects are passed by reference, functions are basically an object in JS same behaviour
* JS objects - A collection of values

#### forIn - Enumrating JS Objects

* Enumerating a JS Object - it can access the js object prototype properties - enumerable attribute must be set to true
* use the forIn loop to iterate over non-array objects
* the properties displayed may include properties from the prototype chain
* the forIn loop will only display enumerable properties; the enumerable attribute of a property must be set to true
* you cannot rely on the order the properties are displayed

#### async & defer script tags attribute

* async - JS downloads while the HTML file is loading and parsing. Once downloaded, pauses HTML in order to execute the code.
* defer - JS downloads while the HTML file is loading and parsing. Won't execute the code until the HTML file is complete.

> Lazy loading - DOMContentLoaded only necessary files are present inside script tag, after complete html files are loaded then others JS script files are loaded

##### use delete for object entity, everything in JS is an object & avoid using new with Javascript objects

* parseInt doesn't work when vlaue starts with a letter or a symbol
* selecting DOM Element -> 6 options = 3 names, 2 query, 1 id
