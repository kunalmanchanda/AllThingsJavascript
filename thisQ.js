// this points to the object that is calling the current function
// 1
const user1 = {
    name: "John",
    // object method this points to the object itself
    getName() {
        const name = "Lily"
        return this.name;
    }
}

console.log(user1.getName());

// 2
// in normal function this points to the window object
function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    }
}

let user = makeUser();

console.log(user.ref());

// 3
// object method this points to the object itself
var person = {
    name: "Lisa Adams",
    logMessage() {
        const name = "John";
        console.log(this.name);
    }
}

// // setTimeOut is using the person.logMessage as a callback & it takes the callback function body copy and then use it, so this will point to the window object
// setTimeout(this.person.logMessage, 0);

// // setTimeout is using logMessage method here 
// // in here we are calling the method & this is the object that is calling the current function -> person is calling the method
// setTimeout(function() {
//     this.person.logMessage();
// }, 0)


// 4
// this refers to the object that is calling the current function
// in normal function this points to the window object
// in arrow function this points to the parent wrapping function
// in object method this points to the object itself


// 5
// method inside object this points to the object itself
let calculator = {
    a: 10,
    b: 5,
    read() {
        this.a = parseInt(prompt("a = ", this.a))
        this.b = parseInt(prompt("b = ", this.b))
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
}

// let read = calculator.read.bind(calculator);
// read();

// console.log(calculator.sum());

// 6

var length = 4;
// normal function this points to the global object 
function callback() {
    console.log(this.length);
}

const obj = {
    length: 50,
    // in method this points to the object itself, normal functions inside method points to the global object
    method(fn) {
        fn();
    }
}

obj.method(callback);

const obj2 = {
    length: 60,
    method() { // arguments = [callback, 1, 2] this array is itself in an object, this inside it will point to the parent object that is the array itself
        arguments[0]();
    }
}

obj2.method(callback, 1, 2); 

// 7

const calc = {
    total: 0,
    add(a) {
        this.total += a
        return this
    },
    sub(a) {
        this.total -= a
        return this
    },
    mul(a){
        this.total *= a
        return this
    }
}

const result = calc.add(10).mul(5).sub(20).add(10);

console.log(result.total);