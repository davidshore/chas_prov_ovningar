// 4	Skriv klart funktionen sumArray
// sumArray returnerar summan av alla talen i arrayen som skickas till den:

function sumArray(numbers) {
  // lägg till din kod här
  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  });

  return sum;
}

function sumArrayForLoop(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum += number;
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // ska logga 15
console.log(sumArray([-1, -2, -3, -4, -5])); // ska logga -15
