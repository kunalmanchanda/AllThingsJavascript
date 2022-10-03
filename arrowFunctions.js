let protoObj = {
    fullname: () => {
        console.log(this)
        return this.firstName + ' ' + this.lastName;
    }
}

let obj = { firstName: "fn gro", lastName: "od no dv fo" }

Object.setPrototypeOf(obj, protoObj)

console.log(obj.fullname());

let obj2 = { 
    name: "sdn cv oi",
    print: function() {
        console.log(this.name, this);
    },
    print2: () => { 
        console.log(this, this.name)
    }
}

obj2.print()
obj2.print2()

var controller = {
    data: "This is controller data",
    init: function() {
        console.log(this.data, this);    
    }
}

controller.init()