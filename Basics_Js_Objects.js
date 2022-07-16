
const user = {
    firstName: 'John',
    lastName: 'Heywood',
    levelsComplete: [1, 2, 3],
    fullName: function() { 
        return this.firstName + ' ' + this.lastName;
    },
    dateStarted: new Date("July 16, 2021"),
    dateEnded: new Date("July 16, 2022")
}

console.log(user.fullName())
console.log(user.dateEnded)
console.log(user.dateStarted)
console.log(user.firstName)
console.log(user.lastName)
console.log(user.levelsComplete)

console.log(JSON.stringify(user))

console.log(user)

var obj1 = new Object();

console.log(obj1);

var arr1 = new Array();

console.log(arr1);

var func1 = new Function("console.log('Hello from function');");

func1();

// for making prototype null -> no JS Object perdefined properties are inherited by this object -> no prototype is associated with this object
var obj2 = Object.create(null); 

obj2

obj2.firstName = "Rogers Steven"

obj2

user.firstName = "Emily"

console.log(user.firstName)

arr1.name = "July"

arr1

arr1.push(8);

arr1

arr1.pop()

arr1

user.levelsComplete.push(8);

console.log(user.levelsComplete)

var arr = [1, 2, 3, 4, 5, 6, 7, 8]

arr.age= "14";

arr

console.log(user[ 'first' + 'Name' ])

console.log(user['fullName']())

console.log(user['levelsComplete'][3])

