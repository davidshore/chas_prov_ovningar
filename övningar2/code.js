const firstName = "David";
const lastName = "Shore";

const fullName = "Jag heter: " + firstName + " " + lastName;
console.log(fullName);

const fullName2 = `Jag heter: ${firstName} ${lastName}`;

const products = [
  { name: "Camera", brand: "Canon", model: "EOS 70D" },
  { name: "Camera", brand: "Nikon", model: "D3400" },
  { name: "Camera", brand: "GoPro", model: "Hero 4" },
  { name: "Drone", brand: "DJI", model: "Phantom" },
  { name: "Drone", brand: "GoPro", model: "Karma" },
];

const result = products.map((product) => {
  return product.model;
  console.log("product.name: " + product.name + " brand: " + product.brand);
});

console.log(result);
