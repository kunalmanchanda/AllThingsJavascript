const testStr = function() {
    let str = "Don't try to run before you can walk."

    console.log(str.indexOf('walk'))

    console.log(str.search(/walk/))

    console.log(str.match(/walk/))

    console.log(/walk/.test(str))

    console.log(str.includes('walk'))
}

testStr()
