const fruits = ["Apple", "Mango", "Watermelon"];

const reverseIterator = function* (array) {
    let i = array.length;
    while(i > 0) {
        yield array[--i]
    }
}

const iterator = reverseIterator(fruits)

console.log(iterator.next())
console.log(iterator.return())
console.log(iterator.next())
console.log(iterator.next())

