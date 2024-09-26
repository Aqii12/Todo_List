// Function to add a new todo item
function addTodo() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    // Check if the task text is not empty
    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item element
    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');

    // Construct the inner HTML for the new task
    newTask.innerHTML = `
        <div>
            <input type="checkbox">
            <span onclick="toggleSelectTask(this)">${taskText}</span>
        </div>
        <button onclick="removeTodo(this)"><i class="fas fa-times"></i></button>
    `;

    // Append the new task to the list
    taskList.appendChild(newTask);

    // Clear the input field after adding the task
    taskInput.value = '';
}

// Function to remove a specific todo item
function removeTodo(button) {
    const task = button.parentElement; // Get the <li> element containing the button
    task.remove();
}

// Function to delete all selected tasks
function deleteSelected() {
    const taskList = document.getElementById('task-list');
    const tasks = taskList.querySelectorAll('li');

    // Loop through each task and remove if it is checked
    tasks.forEach(task => {
        const checkbox = task.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            task.remove();
        }
    });
}

// Function to select a task when its text is clicked (prevent checkbox trigger)
function toggleSelectTask(span) {
    const checkbox = span.previousElementSibling; // Select the checkbox before the text
    checkbox.checked = !checkbox.checked; // Toggle the checkbox state
}

// Add event listener to detect 'Enter' key press in the input field
document.getElementById('new-task').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTodo(); // Call the addTodo function when Enter key is pressed
    }
});
