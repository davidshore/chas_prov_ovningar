// 4.1 (3p) Skriv kod som lägger till 10 button element till html-sidan.
// Varje button ska innehålla en klass "primary"
// och texten "Button" + talet 1 till 10.
// Så här: <button class="primary">Button1</button> <button class="primary">Button2</button> ...
// Koden kan använda en for-loop

const myElement2 = document.querySelector("#my-element2");

for (let i = 1; i < 11; i++) {
  const btnEl = document.createElement("button");
  btnEl.setAttribute("class", "primary");
  btnEl.textContent = "Button" + i;

  btnEl.addEventListener("click", (e) => {
    const el = e.target;

    if (el.className == "primary") {
      el.className = "secondary";
    } else {
      el.className = "primary";
    }
  });

  myElement2.appendChild(btnEl);
}

// 4.2 (2p) Lägg till addEventlistener på varje button.
// Vid eventet "click" på button ska klassen ändras till "secondary"
