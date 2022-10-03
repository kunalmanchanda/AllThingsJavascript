let str = "I finished 50 from 98 of the tasks";

let final = str.split(" ").filter(a => !isNaN(a)).map((ele) => parseInt(ele))

final

const greeting = {
    greet: "Good morning !",
    display: function () {
        return this.greet;
    }
}

const user = Object.create(greeting)

user.name = "Dom",
user.age =  32,
user.occupation = "Web Developer"

// for of don't enummerate the attributes of object at all

for( let usr of Object.keys(user) ) {
    console.log(`${usr} => ${user[usr]}`)
}

for( let usr in user) {
    console.log(`${usr}, ${user[usr]}`)
}

