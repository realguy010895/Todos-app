const todoInput = document.querySelector("#todoInput");
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");
const span = document.getElementsByTagName("box");

addButton.addEventListener("click", () => {
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const text = document.createElement("p");
        // text.textContent = todoText;
        // todoList.appendChild(text);
        // todoInput.value = "";
        text.innerHTML = `
                    
        <span class="span-text">${todoText}</span>
                    
                    <div class="span-icon">
                    <span><i class="bi bi-pencil-square edit-icon"></i></span>
                    <span><i class="bi bi-trash delete-icon"></i></span>
                    </div>
                `;
        if (todoList.childElementCount === 0) {
            todoList.appendChild(text);
        } else {
            const firstTodo = todoList.firstChild;
            todoList.insertBefore(text, firstTodo);
        }

        addEditDelete(text);
        todoInput.value = "";
    }
});

todoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        addButton.click();
    }
});

// Sửa, Xoá Todos
function addEditDelete(todoItem) {
    let editIcon = todoItem.querySelector(".edit-icon");
    let deleteIcon = todoItem.querySelector(".delete-icon");
    let todoTextSpan = todoItem.querySelector(".span-text");

    editIcon.addEventListener("click", () => {
        const newText = prompt("Sửa công việc:", todoTextSpan.textContent);
        if (newText !== null && newText.trim() !== "") {
            todoTextSpan.textContent = newText;
        }
    });

    deleteIcon.addEventListener("click", () => {
        todoList.removeChild(todoItem);
    });
}
