// 1.1 (2p) Använd forEach för att lägga ihop orden i words-arrayen till ett långt ord
// som sparas i variabeln myWord.
let myWord = "";
const words = ["programming", "is", "fun"];

words.forEach((word) => (myWord += word));

console.log(myWord); // Ska logga: "programmingisfun";

// 1.2 (2p) Använd en for-lop för att lägga ihop orden i words-arrayen till en mening
// med mellanslag mella varje ord.
let sentence = "";

for (let i = 0; i < words.length; i++) {
  const word = words[i];

  if (i == words.length - 1) {
    sentence += word;
  } else {
    sentence += word + " ";
  }
}

console.log(sentence); // Ska logga "programming is fun";
