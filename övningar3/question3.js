// 3. Skapa en div med ett B. Så här: <div>B</div>
// Lägg det mellan A och C på html-sidan.

const myElement = document.querySelector("#my-element");
const cElement = document.querySelector("#C");

const bElement = document.createElement("div");
bElement.textContent = "B";

myElement.insertBefore(bElement, cElement);
