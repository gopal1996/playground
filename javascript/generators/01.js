// console.log(Array.prototype)

const fruitList = ["Apple", "Orange", "Watermelon"]

const fruitIterator = fruitList[Symbol.iterator]()
const secondIterator = fruitList[Symbol.iterator]()
const createFruitIterator = fruitList[Symbol.iterator].bind(fruitList)

// console.log(Symbol.iterator)

// console.log(fruitIterator)

// console.log(fruitIterator.next())
// console.log(fruitIterator.next())
// console.log(fruitIterator.next())
// console.log(fruitIterator.next())

// console.log(secondIterator.next())
// console.log(secondIterator.next())
// console.log(secondIterator.next())
// console.log(secondIterator.next())

// for(let value of fruitIterator) {
//     console.log(`Fruit: ${value}`)
// }

// let secondIterator = createFruitIterator()

// for(let value of secondIterator) {
//     console.log(`Fruit:: ${value}`)
// }

// for(let value of secondIterator) {
//     console.log(`Fruit::Second ${value}`)
// }

// console.dir(fruitList)

// fruitList[Symbol.iterator] = {}

// for(let value of fruitList) {
//     console.log(value)
// }

// console.log([...fruitList])
// console.info(fruitList.map(test => test))