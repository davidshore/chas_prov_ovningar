// 3. Samma ord?
// Skriv klart funktionen som kollar om två ord är likadana
// oberoende av stor och liten bokstav.

function compareWords(word1, word2) {
  //din kod här
  return word1.toUpperCase() == word2.toUpperCase();
}

console.log(compareWords("hej", "HEJ")); // Ska logga true
console.log(compareWords("hej", "nej")); // Ska logga false
