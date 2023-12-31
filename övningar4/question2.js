// 10.1 Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// userId: 1

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();

  data.forEach((todo) => {
    const todo = document.createElement("div");

    const btnTitle = todo.completed ? "Undo" : "Done";

    todo.innerHTML = `<h2>${todo.title}</h2> <button>${btnTitle}</button>`;

    document.body.appendChild(todo);
  });
}

getTodos();

// 10.2 Lägg till en done-knapp under varje titel. Om todo-objektet är genomfört,
// alltså completed: true, så ska det stå "Undo" på knappen annars "Done"

// 10.3 Knappen ska kunna växla mellan "Undo" och "Done" när man trycker på den.
// Om det står "Undo" på knappen ska titeln vara genomstruken, alltså i css:
// text-decoration: line-through;
// Annars ska den inte vara det.
