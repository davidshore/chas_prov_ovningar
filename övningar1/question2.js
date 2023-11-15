// 2.	Skriv klart funktionen findLargest.
// findLargest ska returnera det största numret i arrayen som skickas till den:

function findLargest(numbers) {
  // lägg till din kod här
  let largest = numbers[0];

  numbers.forEach((number) => {
    if (number > largest) {
      largest = number;
    }
  });

  return largest;
}

console.log("findLargest", findLargest([1, 2, 3, 4, 5])); // ska logga 5
console.log(findLargest([-1, -2, -3, -4, -5])); // ska logga -1

// 2.1	Skriv klart funktionen findSmallest.
// findSmallest ska returnera det minsta talet i arrayen.

function findSmallest(numbers) {
  // lägg till din kod här
  let smallest = numbers[0];

  numbers.forEach((number) => {
    if (number < smallest) {
      smallest = number;
    }
  });

  return smallest;
}

console.log(findSmallest([1, 2, 3, 4, 5])); // ska logga 1
console.log(findSmallest([-1, -2, -3, -4, -5])); // ska logga -5
