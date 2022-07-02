// function makeAdder(x) {
//     return function(y) {
//         return x * y
//     }
// }

// let add2 = makeAdder(2)

// function* makeAdderGeneration(x) {
//     let y = yield x;
//     while(true){y = yield x * y}
// }

// let add2Iterator = makeAdderGeneration(2)
// console.log(add2Iterator.next())
// console.log(add2Iterator.next(3))
// console.log(add2Iterator.next(2))

function* stateMachine(state) {
    let transition;
    while(true) {
        if(transition === "Increment") {
            state++
        }
        transition = yield state
    }
}

const iterator = stateMachine(1)
console.log(iterator.next())
console.log(iterator.next("Increment"))
console.log(iterator.next("Increment"))