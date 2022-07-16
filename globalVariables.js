var greeting = "hello";
var name2 = "insta"
var wow2 = 22;

function helloworld() {
    this.name = "world";
    punct = '!';
    console.log(greeting + this.name + punct, this.name2, wow, this.greeting);
}

this.helloworld = helloworld.bind(this);

this.helloworld();

helloworld()

console.log(this)