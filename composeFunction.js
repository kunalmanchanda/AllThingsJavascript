var addTwo = (num) => num + 2;
var MultiplyThree = (num) => num * 3;
var addFive = (num) => num + 5;

let compose = (...functions) => {
    return function(args) {
        return functions.reduce((acc, func) => {
            console.log(acc, func(acc));    
            return func(acc)
        }, args)
    }
}

// 10 + 2  = 12
// 12 * 3 = 36
// 36 + 5 = 41

let evaluate = compose(addTwo, MultiplyThree, addFive);

console.log(evaluate(10));
