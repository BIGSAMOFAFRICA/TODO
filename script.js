// Initialize task list and completed list from localStorage
let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
let completedList = JSON.parse(localStorage.getItem('completedList')) || [];
document.getElementById('year').textContent = new Date().getFullYear();
// Display tasks when the page loads
document.addEventListener('DOMContentLoaded', displayTasks);

function createTask() {
    const titleInput = document.getElementById('task-title');
    const dateInput = document.getElementById('task-date');
    const title = titleInput.value.trim();
    const date = dateInput.value;

    if (title && date) {
        const task = {
            id: Date.now(),
            title: title,
            date: date,
            completed: false,
        };

        taskList.push(task);
        localStorage.setItem('taskList', JSON.stringify(taskList));
        displayTasks();
        clearForm();
    } else {
        alert("Please fill out both fields.");
    }
}

function displayTasks() {
    const taskListDiv = document.getElementById('task-list');
    taskListDiv.innerHTML = '';

    taskList.forEach(task => {
        const daysRemaining = Math.ceil((new Date(task.date) - new Date()) / (1000 * 60 * 60 * 24));

        taskListDiv.innerHTML += `
            <div class="p-4 bg-white shadow rounded-lg flex justify-between items-center">
                <div>
                    <h3 class="text-lg font-semibold">${task.title}</h3>
                    <p class="text-sm text-gray-600">${new Date(task.date).toLocaleString()}</p>
                    <p class="text-sm text-gray-400">in ${daysRemaining} day(s)</p>
                </div>
                <div class="flex space-x-2">
                    <button onclick="markComplete(${task.id})"
                        class="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                        <i class="fas fa-check"></i> Mark Complete
                    </button>
                    <button onclick="deleteTask(${task.id})"
                        class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `;
    });
}

function clearForm() {
    document.getElementById('task-title').value = '';
    document.getElementById('task-date').value = '';
}

function cancelTask() {
    clearForm();
}

function markComplete(id) {
    taskList = taskList.map(task => task.id === id ? { ...task, completed: true } : task);
    const completedTask = taskList.find(task => task.id === id);
    if (completedTask) {
        completedList.push(completedTask);
        localStorage.setItem('completedList', JSON.stringify(completedList));
    }
    taskList = taskList.filter(task => task.id !== id);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    displayTasks();
}

function deleteTask(id) {
    taskList = taskList.filter(task => task.id !== id);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    displayTasks();
}
