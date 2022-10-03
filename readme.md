# Javascript

> Fundamentals ...

## querySelectorAll

* converts the NodeList into Array using Array.prototype.slice.call(li)
* use array methods to iterate through the items - forEach() - map() - filter()

### array

* unshift Adds elements to the beginning of the Array
* shift Removes elements to the beginning of the Array

### Objects

* Object.freeze - can't change prop or delete anything immutable

> Temporal Dead Zone - can not access before initialization

### this - keyword

* arrow function lexical binding - where it is called not by whom, where it is written
* object function dec - method defined in the object - implicit binding - the object that is calling this
* arrow functions not so good for constructor or methods, but for callbacks & nested functions

### cloneDeep

1. check if input is array or object - init accordingly
2. if input isn't an object return input
3. iterate over array keys recursively calling on value of the object
4. return result
