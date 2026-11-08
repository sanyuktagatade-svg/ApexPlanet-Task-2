
const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Add a new task
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Mark task as completed
    checkbox.addEventListener("change", function() {
        li.classList.toggle("completed", checkbox.checked);
    });

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    // Add elements to the task
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
});
