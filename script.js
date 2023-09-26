function logger(param) {
    console.log(param)
}

// FÜGGVÉNY MEGHÍVÁSA, CSAK ILYENKOR FUT LE

let result = logger(100)
console.log(result)

function sumOfTwoNumbers(number1, number2) {
    //console.log(number1 + number2) 
    let sum = number1 + number2
    return sum
}

logger(sumOfTwoNumbers)