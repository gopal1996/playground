const fruits = ["Apple", "Mango", "Watermelon"];

const reverseIterator = function* (array) {
    yield* array
    yield 2
    yield Math.random()
}

const iterator = reverseIterator(fruits)

for(let value of iterator) {
    console.log(value)
}

