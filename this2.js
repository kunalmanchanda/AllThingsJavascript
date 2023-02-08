// this refers to the object that is calling the current function
var person = {
    name: 'John',
    sayHi: function() {
        console.log(this, this.name)
    }
}

// in method this refers to that object itself & "this" : the object that is calling the current function
person.sayHi();

var sayHi = person.sayHi;
sayHi();

// so binding the function to this keyword
var sayHi2 = person.sayHi.bind(person)
sayHi2();

// a is defined with let & let have a block scope & they stays with script or block not the window 
var a = 5;

// normal function declaration & function expression - this points to the global/window object
const getParams = function() {
    console.log(this.a)
}

getParams();

// method this always points to it's own object, given that its called with what object bcz this is the object that is calling the current function & anonymous functions this always points to its parent normal function

let user = {
    name: "John Doe",
    age: 35,
    getDetails() {
        return () => {
            console.log(this.name)
        }
    }
}

user.getDetails()();


let userZ = {
    name: "Lily Adams",
    age: 35,
    getDetails() {
        console.log(this.name)
    },
    userZ2: {
        name: "Leo Abram",
        age: 35,
        getDetails() {
            console.log(this.name)
        },
    }  
}

userZ.getDetails();
userZ.userZ2.getDetails();


// arrow function this points to its outer normal parent function

let user3 = {
    name: "kunal Manchanda",
    // no outer normal function or method which we expects so its this will point to window object
    getDetails: () => {
        console.log(this, this.name)
    }
}

user3.getDetails();

// in normal function this points to the global object - i.e window
function makeUser() {
    return {
        name: "John",
        ref: this
    }
}

// user5 is an object with ref: window & this refers to the object that is calling the current function 
let user5 = makeUser();

// window.name = '' predefined always so empty string is an answer
console.log(user5.ref.name)

const objects = {
    name: "kunal",
    ref: this,
    sayIt() {
        console.log(this)
    }
}

console.log(objects.ref)
objects.sayIt()