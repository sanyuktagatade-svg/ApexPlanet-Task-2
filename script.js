/* General Styling */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea, #764ba2);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

/* Main Container */
.container {
    background: white;
    width: 100%;
    max-width: 500px;
    padding: 35px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

/* Heading */
h1 {
    text-align: center;
    color: #333;
    margin-bottom: 10px;
}

p {
    text-align: center;
    color: #777;
    margin-bottom: 25px;
}

/* To-Do Form */
#todo-form {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

input {
    flex: 1;
    min-width: 0;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 15px;
}

/* Buttons */
button {
    padding: 12px 18px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

button:hover {
    background: #4c5fd5;
}

/* Task List */
#task-list {
    list-style: none;
}

#task-list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    background: #f3f4f8;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 6px;
    overflow-wrap: anywhere;
}

#task-list li input[type="checkbox"] {
    flex: 0 0 auto;
    width: auto;
}

#task-list li span {
    flex: 1;
}

#task-list li.completed span {
    text-decoration: line-through;
    color: gray;
}

/* Delete Button */
.delete-btn {
    background: #e74c3c;
    padding: 8px 12px;
    flex-shrink: 0;
}

.delete-btn:hover {
    background: #c0392b;
}

/* Divider */
hr {
    margin: 30px 0;
    border: 1px solid #eee;
}

/* Contact Form */
.contact-section h2 {
    text-align: center;
    color: #333;
    margin-bottom: 10px;
}

.contact-section form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.contact-section input,
.contact-section textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-family: Arial, sans-serif;
    font-size: 15px;
}

.contact-section textarea {
    min-height: 100px;
    resize: vertical;
}

.contact-section button {
    width: 100%;
}

#form-status {
    margin-top: 15px;
    font-weight: bold;
    text-align: center;
}

/* Responsive Design */
@media (max-width: 480px) {
    .container {
        padding: 20px;
    }

    #todo-form {
        flex-direction: column;
    }

    #todo-form button {
        width: 100%;
    }
}
    
