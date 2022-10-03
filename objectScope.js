// the val inside function will point to the global val defined outside function 
function test() { val = val + 1; console.log(val) }

let val = 12;

test(val)

val

// the val inside function will point to the global val defined outside function since its const cant be modified, this keyword will create a new variable 
function test2() { 
    console.log(this.val2); 
    this.val2 = this.val2 + 1; 
    console.log(this.val2, val2) }

const val2 = 12;

test2(val2)

val2

// the val inside function will point to the global val defined outside function 
function test3() { val3 = val3 + 1; console.log(val3) }

var val3 = 12;

test3(val3)

val3

// the val inside function will point to the global val defined outside function 
let test4 = ()  => { val4 = val4 + 1; console.log(val4) }

let val4 = 12;

test4(val4)

val4

// the val inside function will point to the global val defined outside function 
function test5() { this.val5 = val5 + 1; console.log(val5, this.val5) }

let val5 = 12;

test5(val5)

val5

// the val inside function will point to the local val defined inside function any changes here won't change the outside behaviour
function test6(val) { val = val + 1; console.log(val) }

let val6 = 12;

test6(val6)

val6

// as arr is basically an object in JS, its stored as a reference, this keyword will create a new element, objects are mutable -> object are stored as a reference - only mutate changes are presistent
function testArr(myArr) {
    myArr.push(4);
}

let myArr = [ 1, 2, 3 ]

testArr(myArr)

myArr

// reassigning isn't mutating
let ArrAssign = (arr1, arr2)  => {
    arr1 = arr2
    console.log(arr1)
}

let arr1 = [1,2,3];
let arr2 = [4,5];

ArrAssign(arr1, arr2)

console.log(arr1)

// as const is not hoisted - but temporal dead zone knows it exists  
// sumConst(1,2);
const sumConst = (c,v) => c + v;

let a = f(); // 1
const b = 2;
function f() { return b; } // 2, b is in the TDZ