let cnt = 10;

// function using side-effect cnt variable - not a pure functions
// cnt is outside the scope of the function using its lexical outside environment
// cnt can be used by any other function that can cause side-effect, an unpredictable result
let increment = function() {
    cnt++;
    return cnt;
}

var MainApp = (function (nsp) {
    var currentUser = 0,
    users = [
        {name: "James", score: 30, tries: 1},
        {name: "Mary", score: 110, tries: 4},
        {name: "Henry", score: 80, tries: 3}
    ];

    var updateScore = function(newAmt) {
        users[currentUser]["score"] += newAmt;
    }

    var getUsers = function() {
        return users;
    }

    var updateTries = function() {
        users[currentUser].tries++;
    }

    var updateUser = function(newUser) {
        currentUser = newUser;
    }

    nsp.updateUser = updateUser;
    nsp.updateScore = updateScore;
    nsp.updateTries = updateTries;
    nsp.getUsers = getUsers;
    
    return nsp;
})(MainApp || {})


// all three will be in callback queue
// 3 - currentUser -  2 - Henry
setTimeout(() => {
    MainApp.updateUser(2);
}, 300);

// 1 - James - score - 50
setTimeout(() => {
    MainApp.updateScore(20);    
}, 100);

// 2 - James - tries - 2
setTimeout(() => {
    MainApp.updateTries();    
}, 200);


// setTimeout(() => {
//     console.log(MainApp.getUsers());
// }, 500);


// console.log(MainApp.getUsers());

/*

  var currentUser = 2,
    users = [
        {name: "James", score: 50, tries: 2},
        {name: "Mary", score: 110, tries: 4},
        {name: "Henry", score: 80, tries: 3}
    ];

*/

let average = function(scores) {
    var total = 0;
    if(scores.length == 0)
        return total;
    total = scores.reduce((item, acc) => acc += item, 0);
    return total/scores.length;
};

console.log(average([10, 20, 30, 40]));

