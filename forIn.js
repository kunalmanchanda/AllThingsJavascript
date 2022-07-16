var proto1 = {
    morningGreet: "Good Morning !",
    greet: function() { 
        console.log(this.greeting);
    }
}

Object.setPrototypeOf(proto1, {eveningGreet: "Good Evening !"})

var obj1 = Object.create(proto1);

obj1.greeting = "Hello";
obj1.type = "greeting";
obj1.daytime = "morning";

for ( var i in obj1 ) {
    console.log(i)
}

obj1

obj1.setGreet = function () {
    if ( this.daytime.toLowerCase() === "morning") {
        this.greeting = this.morningGreet;
    }
    else if( this.daytime.toLowerCase() === "evening") {
        this.greeting = this.eveningGreet;
    }
}

obj1

for ( let object in obj1 ) {
    console.log( object + " -- " + obj1[object], typeof(obj1[object]), typeof(obj1[object]) === "function" ? obj1[object]() : NaN)
}

obj1.setGreet()

console.log(obj1.greeting)

obj1.daytime = "evenInG"

console.log(obj1.daytime)

obj1.setGreet()

console.log(obj1.greeting)

obj1.greet();

const obj2 = {}

for(let i in obj2) {
    console.log(i)
}

console.log(obj2.toString());
console.log(obj1.toString());

if(obj2) {
    console.log("yes")
}

for(let i in obj1) {
    if( obj1.hasOwnProperty(i) && typeof(obj1[i]) !== "function" ) {
        console.log(i + " -- " + obj1[i])
    }
}

console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))

const arr = []
const obj = {}

console.log( obj.toString())
console.log( toString(arr))



