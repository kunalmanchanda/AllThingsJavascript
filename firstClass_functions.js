// a value can be assigned to the variable same as function - function expression
var num = 28;
var funct = function() {
    console.log("Hello")
}

funct();

// a value can be passed in array same as function
var arr = [28, function () { console.log("Hi from an array")}];

arr[1]()

// a value can be an object entity same as function
var obj = {
    num: 20,
    funct: function() { console.log("Hello from an object.");}
}

obj.funct()

// a value can be console.log same as function 
console.log( 28, (function() { return 48} )())

// a value can be passed as a param to the function same as function can be passed as a param to the function
var addTwo = function(num, fn) {
    console.log(num + fn());
}

addTwo(20, function() {return 10})

// a value can be returned from the function same as function
var returnNumber = function() { return 28; }

var returnFunction = function() { 
    var x = 20;
    return function() { console.log( "Hello from return function inside function " + x ) } }

console.log( returnNumber() )
returnFunction()()

