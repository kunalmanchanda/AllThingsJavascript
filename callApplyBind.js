// this refers to the object that is calling the current function

function cleanTable(soap) {
    // normal function this will point to the global/ window object
    const innerFunction = function(_soap) {
        console.log(`cleaning the ${this.table} with this ${_soap}`) 
    }
    // if arrow function this will point to the parent function this
    innerFunction(soap);
}

this.table = "window table";

this.garage = {
    table: 'garage table'
}

let john = {
    table: 'john\'s table'
}

cleanTable.call(this, 'window soap');
cleanTable.call(this.garage, 'garage soap');
cleanTable.call(john, 'john soap');

let cleanTableBindThis = this.cleanTable.bind(this, 'window soap ')
let cleanTableBindGarage = this.cleanTable.bind(this.garage, 'garage')
let cleanTableBindJohn = this.cleanTable.bind(john, 'john soap')

cleanTableBindThis();
cleanTableBindGarage();
cleanTableBindJohn();


let name = {
    firstName: "Lily",
    lastName: "Adams"
}

let printFullName = function(city, state) {
    console.log(this.firstName + ' ' + this.lastName + ' ' + city + ' ' + state)
}

let name2 = {
    firstName: "Lily",
    lastName: "Collins"
}

printFullName.call(name, 'Brooklyn', 'New York')
printFullName.apply(name, ['London', 'Uk'])
