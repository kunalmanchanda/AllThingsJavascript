hoisting();

function hoisting(){
    console.log(hoist);

    var what = "Variable and function declarations.";

    console.log("what is hoisted " + what);

    var hoist = "to lift or raise up";

    console.log("Hoist means " + hoist);
}


console.log(typeof a === "undefined") // not declared & undefined insted of a === undefined which fails bcz a doesnt exist in the memory of js



