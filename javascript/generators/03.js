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


// for(let i=0; i< 10; i++) {
//     console.log(i)
// }

// console.log(next())


// console.log([Symbol.iterator])

for(let value of createReverseIterator(fruits)) {
    console.log(value)
}

