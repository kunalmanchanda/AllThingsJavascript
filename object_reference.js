var num1 = 10, 
    num2 = num1;

var obj1 = {
    name: "lkndfr",
    value: "20"
}

var obj2 = obj1;

console.log(obj1 === obj2)

obj1.name = "ugbroit"

console.log(obj2 === obj1)

var func1 = function(obj) {
    console.log(obj)
}

var func2 = func1;

console.log(func1 === func2)

func1(obj1)

func2(obj2)

var func3 = function(term) {
    term.val++;
    console.log(term);
}

func3(obj1)

obj2


var func4 = function() {
    console.log(obj1)
}

func4()

var func5 = func4;

func5.invalid = "fndjkbvn"

obj2

func4
func5

// object is passed by reference, so we mostly uses spread operator or cloeDeep by lodash