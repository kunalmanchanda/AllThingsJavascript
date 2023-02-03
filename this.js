// this points to the object that is calling the current function

// method
// map(callback(), object)
var video = {
    title: 'a',
    tags: ['aa', 'ab', 'ac'], 
    play: function() {
        console.log(this);
        this.tags.map(function(ele) {console.log(this, ele)}, this);
        (() => {
            console.log(this)
        })()
    }
}

video.play();

// anonymous method
video.stop = function() {
    console.log(this);
} 

video.stop();

// normal function - this refers to the global object in node or window in web

function PlayVideo(title) {
    this.title = title;
    console.log(this, this.title);
}

PlayVideo('b');

// constructor function this refers to the new empty object {}
const v = new PlayVideo('c');

v;

// let have a block scope - they stay in script not window so can't access it with this
// let a1 = 10;

var a1 = 20;
function showNumber() {
    // 
    var a1 = 100;
    console.log(a1);
    // in functions this refers to the global object
    console.log(this.a1);
    a1 = 30
    console.log(this.video)
}

showNumber();

console.log(this.a1);


const user = {
    name: "Interview Bit",
    showName: function() {
        console.log(this.name)
    },
    user2: {
        name: "LeetCode",
        showName: function() {
            // in object method this refer to the object itself same goes for nested objects
            console.log(this.name)
        }
    }
}

user.showName()
user.user2.showName()