// 1.1 Använd forEach för att summera talen i arrayen numbers
// och spara resultatet i variabeln sum.
let sum = 0;
const numbers = [1, 54, 532, 33, 44];

// 1.2 Använd myForEach som tar en array och en funktion som input
// för att summera talen i arrayen numbers
// och spara reslutatet i variabeln mySum.
let mySum = 0;

function myForEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}
