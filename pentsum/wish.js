// Initialize an empty array to store tasks
let tasks = [];

// Function to add a task to the array and update the task list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Add the task to the array
    tasks.push(taskText);

    // Clear the input field
    taskInput.value = '';

    // Update the task list in the DOM
    updateTaskList();
}

// Function to update the task list in the DOM
function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        const taskItem = document.createElement('li');
        taskItem.textContent = tasks[i];

        // Add a delete button to each task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            deleteTask(i);
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    }
}

// Function to delete a task from the array and update the task list
function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

// Initial update of the task list
updateTaskList();
