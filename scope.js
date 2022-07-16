var a = 10;

var add5 = function(num) {
    var b = 5;

    console.log(b + num);

    var add10 = function(num2) {
        console.log(num2 + a);
    }

    add10(3);

    var add15 = function(num3) {
        var c= 15;
        console.log(num3 + c + b + num);
        
        return num3+ c + b + num3;
    }

    add15(3);

    return add15(3); // add15 is inside add5 scope when its returned it gives undefined
}

console.log(add5(3))

// a has a global scope, function declaration is the part of the outer scope only the definition of the function is inside the function inner scope
// props passed to the function is part of the function inner scope
// var have functional scope 
