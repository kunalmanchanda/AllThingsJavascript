import {each, map} from "lodash";

[1, 2].forEach((item) => console.log(item));

var native = [1, 2].forEach(item => console.log(item));

native

var lodashEach = each([1, 2], (item) => console.log(item))

lodashEach

var items = {
    "lol": {
        name: "milk"
    }, 
    "rofl": {
        name: "bread"
    }
}

var array = []
var itemsEach = each(items, (item, index) => {console.log(item, index); array.push(item);})

itemsEach

array

let users = [{id: 1, name: "John"}, {id: 2, name: "Jack"}]

let names = map(users, 'name')

names

let users2 = [ 
    {
        id: 1, 
        first_name: "John",
        status: "active"
    },
    {
        id: 2, 
        first_name: "Jack",
        status: "inactive"
    }
]

let users3 = map(users2, (user) => {
    return {
        id: user.id,
        firstName: user.first_name,
        isActive: user.status === "active" ? true : false
    }
})

users3

