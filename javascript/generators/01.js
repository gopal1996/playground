// console.log(Array.prototype)

const fruitList = ["Apple", "Orange", "Watermelon"]

const fruitIterator = fruitList[Symbol.iterator]()
const createFruitIterator = fruitList[Symbol.iterator].bind(fruitList)

// console.log(Symbol.iterator)

// console.log(fruitIterator)

// console.log(fruitIterator.next())
// console.log(fruitIterator.next())
// console.log(fruitIterator.next())
// console.log(fruitIterator.next())

for(let value of fruitIterator) {
    console.log(`Fruit: ${value}`)
}

let secondIterator = createFruitIterator()

for(let value of secondIterator) {
    console.log(`Fruit:: ${value}`)
}

for(let value of secondIterator) {
    console.log(`Fruit::Second ${value}`)
}