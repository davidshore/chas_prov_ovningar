// 1.1 Skriv funktionerna som anropas i myCalculator så att
// myCalculator kan fungera.

// 1.2 Gör om myCalculator så att den använder if och else

function myCalculator(operator, num1, num2) {
  switch (operator) {
    case "+":
      return myAddFunction(num1, num2);

    case "-":
      return mySubtractFunction(num1, num2);

    case "*":
      return myMultiplyFunction(num1, num2);

    case "/":
      return myDivisionFunction(num1, num2);

    default:
      return "Error operator not found!";
  }
}
