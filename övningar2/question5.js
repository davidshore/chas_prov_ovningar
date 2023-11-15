// 7.1 (2p) Skriv klart funktionen updatePeople
// som lägger till en property:
// adult: true
// om personen i arrayen är 18 år eller över annars
// en property:
// adult: false
// funktionen ska returnera den uppdaterade arrayen.

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 35 },
  { name: "Fred", age: 19 },
  { name: "Alice", age: 6 },
];

function updatePeople(peopleArr) {
  // Din kod här:
  return peopleArr.map((person) => {
    // person.adult = person.age >= 18;
    // return person;
    const adult = person.age >= 18;
    return { ...person, adult: adult };
  });
}

console.log(updatePeople(people));

// 7.2 (2p) Skriv en funktion med arrayen people som input som
// returnerar en array med bara vuxna. Alltså age minst 18 år.

function filterAdults(peopleArr) {
  const onlyAdults = peopleArr.filter((person) => {
    return person.age >= 18;
  });
  return onlyAdults;
}

console.log(filterAdults(people));
