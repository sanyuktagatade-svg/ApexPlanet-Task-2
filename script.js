document.addEventListener("DOMContentLoaded", function () {

    // TO-DO LIST

    const todoForm = document.getElementById("todo-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    todoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const span = document.createElement("span");
        span.textContent = taskText;

        checkbox.addEventListener("change", function () {
            li.classList.toggle("completed", checkbox.checked);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.type = "button";
        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        taskInput.value = "";
    });


    // CONTACT FORM VALIDATION

    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const formStatus = document.getElementById("form-status");

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        formStatus.textContent = "";

        if (name === "" || email === "" || message === "") {
            formStatus.textContent = "Please fill in all fields!";
            formStatus.style.color = "red";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formStatus.textContent = "Please enter a valid email address!";
            formStatus.style.color = "red";
            return;
        }

        formStatus.textContent = "Form submitted successfully!";
        formStatus.style.color = "green";

        contactForm.reset();

    });

});

