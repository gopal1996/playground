let i = 0;

const next = () => ({
    value: i++,
    done: i > 10
})

// for(let i=0; i< 10; i++) {
//     console.log(i)
// }

// console.log(next())
// console.log(next())

const iterator = {
    [Symbol.iterator]() {
        return {
            next
        }
    }
}

// Iteratora is function , that return object, that object has next method
// Next method will return object with key value {value,done}

// console.log(iterator)
// console.log([Symbol.iterator])

for(let value of iterator) {
    console.log(value)
}

const secondIterator = {
    [Symbol.iterator]: ()=> {
        return {
            next: next()
        }
    }
}

// for(let value of secondIterator) {
//     console.log(value)
// }


const thirdIterator = {
    a: "hello"
}

// for(let value of thirdIterator) {
//     console.log(value)
// }