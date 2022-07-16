sum();

// function expression - var declaration is hoisted so error not a function 
var sum = function() {
    console.log(a + b);
}

var a = 5, 
    b = 10;