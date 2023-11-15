// 8. (2p) Skriv klart funktionen pizzaPrice som tar en pizza-sort
// som input och returnerar priset.
// Pizza-sorterna är begränsade till följande pizzor:
// "hawaii", "peperoni" och "vegetarian"
// En "hawaii" kostar 80 kr
// En "peperoni" kostar 90 kr
// En "vegetarian" kostar 85 kr

function pizzaPrice(pizza) {
  const pizzaLowerCase = pizza.toLowerCase();
  //Din kod här.
  // if (pizzaLowerCase == "hawaii") {
  //   return 80;
  // } else if (pizzaLowerCase == "peperoni") {
  //   return 90;
  // } else if (pizzaLowerCase == "vegetarian") {
  //   return 85;
  // } else {
  //   return "Not on the menu";
  // }

  switch (pizzaLowerCase) {
    case "hawaii":
      return 80;
    case "peperoni":
      return 90;
    case "vegetarian":
      return 85;

    default:
      "Not on the menu";
  }

  return result;
}

const pizzaPrices = {
  hawaii: 80,
  peperoni: 90,
  vegetarian: 85,
};

const price = pizzaPrices["hawaii"];

console.log(pizzaPrice("hawaii"));
