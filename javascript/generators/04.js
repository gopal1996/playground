const fruits = ["Apple", "Mango", "Watermelon"];

const createReverseIterator = array => ({
    [Symbol.iterator]() {
        let i = array.length
        return {
            next:() => ({
                value: array[--i],
                done: i < 0
            })
        }
    }
})


const reverseIterator = function* (array) {
    let i = array.length;
    while(i > 0) {
        yield array[--i]
    }
}

// for(let value of reverseIterator(fruits)) {
//     console.log(value)
// }

let iterator = reverseIterator(fruits)
console.log(iterator.next())
console.log(iterator.next())

