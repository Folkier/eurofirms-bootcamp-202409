function removeFirstElement(object) {
    var result = object[0]
    for (var i = 0; i < object.length - 1; i++) {
        object[i] = object[i + 1]
    }

    delete object[object.length - 1]

    object.length--

    return result
}

var numbers = {
    0: 0,
    1: 1,
    2: 2,
    lenght: 3
}

console.log("numbers before shift", numbers)
console.log("first elemnt of numbers", removeFirstElement(numbers))
console.log("numbers after sihift", numbers)
console.log("first element of numbers after second shift", removeFirstElement(numbers))
console.log("numbers after 2 shifts", numbers)