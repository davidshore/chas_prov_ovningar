// 3. Skriv klart funktionen removeVowels som tar
// bort vokaler, alltså bokstäverna: aouåeiyäö.

const vowels = ["a", "o", "u", "å", "e", "i", "y", "ä", "ö"];

function removeVowels(word) {
  // variabel för resultat
  let wordWithoutVowels = "";

  //loop
  for (let index = 0; index < word.length; index++) {
    const letter = word[index];

    // Om det är en vokal lägg till wordWithoutVowels
    if (!vowels.includes(letter)) {
      wordWithoutVowels += letter;
    }
  }

  //returnera resultat
  return wordWithoutVowels;
}

console.log(removeVowels("hej")); // Ska logga "hj"
console.log(removeVowels("hallå")); // Ska logga hll
