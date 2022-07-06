// function makeAdder(x) {
//     let x = 2;
//     return function(y) {
//         return x * y
//     }
// }

// let add2 = makeAdder(2)

// function* makeAdderGeneration(x) {
//     let y = yield x; // let y = yield 2
//     console.log(x,y)
//     while(true){
//         y = yield x * y
//         console.log(x,y)
//     }
// }

// let add2Iterator = makeAdderGeneration(2)
// console.log(add2Iterator.next(4))
// console.log(add2Iterator.next(3))
// console.log(add2Iterator.next(2))

function* stateMachine(state) {
    let action;
    while(true) {
        if(action === "Increment") {
            state++
        }
        action = yield state
    }
}

const iterator = stateMachine(1)
console.log(iterator.next())
console.log(iterator.next("Increment"))
console.log(iterator.next("Increment"))

// next() -> it pause at yield
