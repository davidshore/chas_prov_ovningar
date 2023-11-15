// 1.1 Skriv funktionerna som anropas i myCalculator så att
// myCalculator kan fungera.

function myAddFunction(n1, n2) {
  return n1 + n2;
}

function mySubtractFunction(n1, n2) {
  return n1 - n2;
}

function myMultiplyFunction(n1, n2) {
  return n1 * n2;
}

function myDivisionFunction(n1, n2) {
  return n1 / n2;
}

// 1.2 Gör om myCalculator så att den använder if och else

function myCalculator(operator, num1, num2) {
  // switch (operator) {
  //   case "+":
  //     return myAddFunction(num1, num2);

  //   case "-":
  //     return mySubtractFunction(num1, num2);

  //   case "*":
  //     return myMultiplyFunction(num1, num2);

  //   case "/":
  //     return myDivisionFunction(num1, num2);

  //   default:
  //     return "Error operator not found!";
  // }

  if (operator == "+") {
    return myAddFunction(num1, num2);
  } else if (operator == "-") {
    return mySubtractFunction(num1, num2);
  } else if (operator == "*") {
    return myMultiplyFunction(num1, num2);
  } else if (operator == "/") {
    return myDivisionFunction(num1, num2);
  } else {
    return "Error operator not found!";
  }
}

const result = myCalculator("+", 2, 3);
const result1 = myCalculator("-", 2, 3);
const result2 = myCalculator("*", 2, 3);
const result3 = myCalculator("/", 2, 3);

console.log(result, result1, result2, result3);
