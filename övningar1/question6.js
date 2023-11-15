// 4 Skriv en funktion som tar en array med strängar som input och
// returnerar en array med bara de strängar som är minst 4 tecken långa.

function minFour(words) {
  const filteredWords = words.filter((word) => {
    return word.length > 4;
  });

  return filteredWords;
}

console.log(minFour(["hej", "hejsan"])); // ska logga ["hejsan"]
