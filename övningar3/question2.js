// 2. (3p) Skapa ett inputfält och en knapp på html-sidan.
// När man klickar på
// knappen ska det man skrev i input-fältet synas nedanför
//input-fältet i en div.

const inputEl = document.getElementById("input");
const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");

btnEl.addEventListener("click", (e) => {
  const inputValue = inputEl.value;

  resultEl.innerHTML = `<h1>${inputValue}</h1>`;
});
