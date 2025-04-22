let todoInput = document.querySelector(".form-control");
let ulTodo = document.querySelector(".list-group");

todoInput.addEventListener("keydown", function (event) {
  let todoInputValue = todoInput.value;
  if (event.key === "Enter") {
    let newLi = document.createElement("li");
    let spanTrash = document.createElement("span");
    spanTrash.className = "material-symbols-outlined";
    spanTrash.innerText = "delete";
    newLi.innerHTML = `${todoInputValue.trim()} `;
    newLi.appendChild(spanTrash);
    newLi.setAttribute(
      "class",
      "list-group-item text-white d-flex justify-content-between align-items-start list-group-item-dark"
    );
    ulTodo.append(newLi);
    todoInput.value = "";
    spanTrash.addEventListener("click", function (event) {
      event.target.parentElement.remove();
    });
  }
});
