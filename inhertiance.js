const me = {
    talk() {
        return 'talking';
    }
}


const you = {
    talk() {
        return 'talking';
    }
}

console.log(me.talk());

console.log(you.talk());

me

class Person {
    talk() {
        return 'talking';
    }
}

const me2 = new Person();
const you2 = new Person();

console.log(me2.talk());
console.log(you2.talk());

console.log(me2)

console.log(me2.__proto__ === Person.prototype)

Person.prototype.talk = function() {
    return 'New and Improved Talking';
}

console.log(me2.talk());

console.log(you2.talk());

// class prototype === Object(instance of class) __proto__
// classes are syntatic sugar for constructor functions

// class.prototype have all the functions, so they are not copied for each instance


