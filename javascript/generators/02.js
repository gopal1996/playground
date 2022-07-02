let i = 0;

const next = () => ({
    value: i++,
    done: i > 10
})

// for(let i=0; i< 10; i++) {
//     console.log(i)
// }

// console.log(next())

const iterator = {
    [Symbol.iterator]() {
        return {
            next
        }
    }
}

// console.log(iterator)
// console.log([Symbol.iterator])

for(let value of iterator) {
    console.log(value)
}
