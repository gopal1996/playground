function* generator() {
    yield 1;
    console.log("One")
    yield 2;
    console.log("One")
}

const iterator = generator()

console.log(iterator.next())
console.log(iterator.next())
