// in constructor functions this points to the new empty object {}
class user {
    constructor(name) {
        this.name = name
        this.getName = this.getName.bind(this)
    }

    // normal function this will points to class this object
    // prototype function
    getName() {
        console.log(this);
        return this.name;
    }
    
    // object function
    setName = () => {
        return this.getName();
    }
}

const User = new user("Elina")

console.log(User.getName())
console.log(User.setName())


// will crate a new empty object {}
class createRoom{
    constructor(name) {
        this.table = `${name}s table`
        this.cleanTable = this.cleanTable.bind(this)
    }
    // prototype function
    cleanTable(soap) {
        console.log(this)
        console.log(`cleaning ${this.table} using ${soap}.`)
    }
}

const jillsRoom = new createRoom('jill')
const johnsRoom = new createRoom('john')

jillsRoom.cleanTable('jills soap')
johnsRoom.cleanTable('johns soap')

// in class this points to the new empty object {}
class Person{
    constructor(name) {
        this.name = name
    }

    printNameArrow() {
        setTimeout(() => {
            // arrow this refers to the parent function this
            console.log(this)
            console.log(`Arrow: ` + this.name)
        }, 0)
    }

    printNameFunction() {
        setTimeout(function() {
            // normal function this refers to the global object
            // it depends upon where the function is called
            // this refers to teh object that is calling the current function
            console.log(this)
            console.log(`Function: ` + this.name)
        }, 0)
    }
}

let person1 = new Person("John")

person1.printNameArrow();
person1.printNameFunction();

