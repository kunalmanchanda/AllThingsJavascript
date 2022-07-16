var a = 10,
    b = 5;

switch (a + b) {
    case 15: 
        console.log("First Case", a, b);
        console.log("15");
        break;
    
    case 5: 
        console.log("Second Case", a, b);
        console.log("5");
        break;
    
    
    case 10: 
        console.log("First Case", a, b);
        console.log("10");
        break;

    default:
        console.log("Default Case", a, b);
        console.log("Didn't Matched")
        break;
}


a = 0, b = 15;

