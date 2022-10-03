let scores = [ 87, 65, 90, 100, 55, 0, 92, 43, 85 ];

let passScores = scores.filter(function(ele) { return ele > 60 })

passScores

let num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]

let sqr = val => val * val

let sqrArr = num.map(sqr)

sqrArr

let obj = num.map((val, index, arr) => {
    return {
        index: index,
        val: val,
        square: val ** 2,
        cube: val ** 3,
        originalArray: arr,
        subsequentMult: val * arr[index + 1]
    }
})

obj

let total = scores.reduce((acc, val) => acc + val, 1000)

total

let avg = scores.reduce((acc, val) => (acc+ val), 0)/scores.length

avg

let avg2 = scores.reduce((acc, val, index, arr) => {
    return acc + (val/ arr.length)
}, 0)


avg2

let highScore = scores.reduce((acc, val) => acc < val ? val : acc , 0)

highScore

let highScoreRight = scores.reduceRight((acc, val) => acc < val ? val : acc , 0)

highScoreRight

let arr = [ 1, 2, 3, 4, 5 ]

let res = arr.every( val => val < 5 )

res

let res2 = arr.some( val => val < 1 )

res2

let ans = "Life is like trying things to see if they work."
let corctAns = "Life is trying things to see if they work."

let match = (ans, corctAns) => {
    return corctAns.every((word, index) => {
        return word.toLowerCase() === ans[index].toLowerCase();
    })
}

console.log(match(ans.split(" "), corctAns.split(" ")))

