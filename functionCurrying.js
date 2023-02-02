function addition(a, b, c)
{
    return a + b + c;
}

console.log(addition(1,2,3));

// closure
function AddCurry(a)
{
    return function(b)
    {
        return function(c)
        {
            return function()
            {
                return a + b + c;
            }
        }
    }
}

let res1 = AddCurry(1);
console.log(res1);

let res2 = res1(2);
console.log(res2);

let res3 = res2(3);
console.log(res3);

let res4 = res3(); 
console.log(res4);

console.log(AddCurry(11)(12)(13)());

let AddCurry2 = (a) => (b) => (c) => () => a + b + c;
console.log(AddCurry2(1)(2)(3)());

const userObj = {
    name: "ViJay",
    age: 28
}

function userInfo(user)
{
    return function(type)
    {
        return user[type]
    }
}

console.log(userInfo(userObj)("name"), userInfo(userObj)("age"));

// infiniteCurrying
function add(a)
{
    return function(b) 
    {
        if(b)
        {
            return add(a+b);
        }
        else
        {
            return a;
        }
    }
}

console.log(add(51)(21)(54)());


let sum = (a) => (b) => (c) => () => a + b + c;

console.log(sum(5)(6)(9)());

function eval(type) 
{
    return function(a) 
    {
        return function(b)
        {
            return function()
            {
                switch (type) 
                {
                    case "addition":
                        return a + b;
                        break;

                    case "multiply":
                        return a * b;
                        break;

                    case "divide":
                        return a / b;
                        break;
                
                    case "subtraction":
                        return a - b;
                        break;
                
                    default:
                        return -1;
                        break;
                }
            }
        }
    }
}

console.log(eval("subtraction")(8)(2)());


function updateElementText(id)
{
    return function(content)
    {
        document.getElementById(id).innerHTML = content;
    }
}

updateElementText("heading2")("HELLO KUNAL@GMAIL.COM")

function updateObject(obj)
{
    return function (prop)
    {
        return function(item)
        {
            return function()
            {
                return(obj[prop] = item);
            }
        }
    }
}

const obj2 = {
    name: "john",
    age: 26
}

console.log(updateObject(obj2)("name")("Leo")());

console.log(obj2);

// @TODO - lodash curry
// function(a,b,c) into function(a)(b)(c);
