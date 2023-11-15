// 9.1 (2p) Skapa ett nytt objekt state2
// Det nya objektet ska updatera value till 20 och
// Du får bara använda spread operatorn ...

const state = {
  list: [1, 2, 3],
  value: 10,
};

// 9.2 (2p) Skriv klart funktionen updateState
// som ska uppdatera list med newList på objektet state.
// Du måste använda spread operatorn ...

function updateState(state, newList) {
  //Din kod här:
}

console.log(updateState(state, [4, 5, 6])); // Ska logga: { list:[4,5,6], value: 20 }
