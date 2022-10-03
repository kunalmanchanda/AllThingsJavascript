const str = "The cow jumped over the moon.";

console.log(str.indexOf('over'))
console.log(str.startsWith('The'))
console.log(str.endsWith('moon.'))
console.log(str.includes("cow"))

str.split(" ").map(e => console.log(e))

