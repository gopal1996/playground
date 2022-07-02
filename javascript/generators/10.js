// function* range(start, end) {
//     while(start < end) yield start++
// }

// for(let value of range(0,10)){
//     console.log(value)
// }

// console.log([...range(0,10)])


let names = ["Jhon", "Mindy", "Sally"]

let result = names.filter(name => name.includes("y")).map(name => name.toLowerCase())

console.log(result)

function* format(array) {
    for(let value of array) {
        if(value.includes("y")) {
            yield value.toLowerCase()
        }
    }
}

let iterator = format(names)
console.log([...format(names)])

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())