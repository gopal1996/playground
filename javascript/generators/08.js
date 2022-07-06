function* generator() {
    console.log("One")
    yield 1;
    console.log("Two")
    yield 2;
    console.log("Three")
}

const iterator = generator()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
