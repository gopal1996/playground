const fruits = ["Apple", "Mango", "Watermelon"];

const shoutIterator = function*(word) {
    yield word + "!"
    yield word + "!!"
    yield word + "!!!"
}

const reverseIterator = function* (array) {
    yield* shoutIterator(array[0])
    yield* shoutIterator(array[1])
    yield* shoutIterator(array[2])
}

const iterator = reverseIterator(fruits)

for(let value of iterator) {
    console.log(value)
}

// console.log(iterator.next())
// console.log(iterator.next())

const secondReverseIterator = function* (array) {
    yield* shoutIterator(array[0])
}

const secondIterator = secondReverseIterator(fruits)
// console.log(secondIterator.next().value.next())

// console.log(secondIterator.next())