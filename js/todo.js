const todoList = document.querySelector(".todo-list");
const todoText = document.querySelector(".todo-text");
const todoButton = document.querySelector(".todo-button");
initTodo();

todoText.onkeypress = e => e.keyCode === 13 ? addTodo() : "";
todoButton.onclick = () => addTodo();

function initTodo() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    const todoItems = document.querySelectorAll(".todo-item");

    todoItems.forEach(el => el.remove());
    todos.forEach(data => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.innerHTML = `
            <input type="checkbox">
            <div>${data.todo}</div>
            <button class='todo-delete'>지우기</button>
        `;
        todoItem.querySelector(".todo-delete").onclick = () => {
            const filtering = todos.filter(todo => todo.num !== data.num);
            localStorage.setItem("todos", JSON.stringify(filtering));
            initTodo();
        }
        todoList.append(todoItem);
    })
}

function addTodo() {
    const todo = document.querySelector(".todo-text");
    const localTodo = JSON.parse(localStorage.getItem("todos"));
    const todoJSON = {
        num: localTodo.length === 0 ? 1 : localTodo[localTodo.length-1].num+1,
        todo: todo.value,
        checked: false,
        date: new Date()
    }

    localTodo.push(todoJSON);
    localStorage.setItem("todos", JSON.stringify(localTodo));
    todo.value = "";
    initTodo();
}