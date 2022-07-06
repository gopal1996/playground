const fruits = ["Apple", "Mango", "Watermelon"];

const reverseIterator = function* (array) {
    yield* array
    yield 2
    yield Math.random()
}

const iterator = reverseIterator(fruits)

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// for(let value of iterator) {
//     console.log(value)
// }

