function logger(param) {
    console.log(param)
  }
  
  logger("kicsmacska") // FÜGGVÉNY MEGHÍVÁSA -> ILYENKOR (ÉS CSAK ILYENKOR) FUT LE
  
  function sumOfTwoNumbers(number1, number2) {
    //console.log(number1 + number2)
    let sum = number1 + number2
    return sum // ITT TÉR VISSZA A FÜGGVÉNY AZ EREDMÉNNYEL
  }
  
  /* let result = sumOfTwoNumbers(2, 4)
  logger(result) */
  
  logger(sumOfTwoNumbers(5, 10))