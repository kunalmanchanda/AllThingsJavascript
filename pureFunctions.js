class Container {
    constructor(props)
    {
        this.state = props
        this.add = this.add.bind(this);
        console.log(this, props);
    }

    add(a, b)
    {
        return a + b;
    }
}

// constructor function this refers to the new empty object{}
let obj = new Container({a: [1,2,3], b:[4,5]});

console.log(obj.add(1, 2));
console.log(obj.add(1, 2));
