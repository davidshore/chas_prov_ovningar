// 2.1 (2p) Använd filter för att filtrera numbers och
// skapa en ny array med alla tal som är mindre än 50.
// Den nya arrayen ska sparas i en variabel som heter smallerThan50.
const numbers = [200, 54, 582, 33, 4];

const smallerThan50 = numbers.filter((number) => {
  return number < 50;
});
console.log(smallerThan50);

// 2.2 (2p) Använd map på arrayen numbers2 och
// skapa en ny array där alla tal är tripplade. Alltså gånger 3.
// Den nya arrayen ska sparas i en variabel som heter tripple.
const numbers2 = [...numbers]; //[200, 54, 582, 33, 4];

const tripple = numbers2.map((number) => {
  return number * 3;
});
console.log(tripple);
