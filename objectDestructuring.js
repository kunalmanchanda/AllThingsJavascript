let obj = {
    a: [1, 2, 3],
    b: [3, 4]
}


let newObj = {
    ...obj,
    a: [...obj.a],
    b: [...obj.b]
}

console.log(obj)
console.log(newObj)

console.log(obj.a === newObj.a)