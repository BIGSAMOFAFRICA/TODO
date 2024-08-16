document.addEventListener('DOMContentLoaded', () => {
    const completedTaskList = JSON.parse(localStorage.getItem('completedList')) || [];
    const completedTaskListDiv = document.getElementById('completed-task-list');
    const clearCompletedBtn = document.getElementById('clear-completed-btn');

    completedTaskListDiv.innerHTML = '';

    if (completedTaskList.length === 0) {
        clearCompletedBtn.style.display = 'none'; // Hide button if no completed tasks
    } else {
        clearCompletedBtn.style.display = 'inline-block'; // Show button if there are completed tasks
    }

    completedTaskList.forEach(task => {
        completedTaskListDiv.innerHTML += `
            <div class="p-4 bg-white shadow rounded-lg flex justify-between items-center">
                <div>
                    <h3 class="text-lg font-semibold">${task.title}</h3>
                    <p class="text-sm text-gray-600">${new Date(task.date).toLocaleString()}</p>
                </div>
            </div>
        `;
    });
});

function clearCompletedTasks() {
    console.log('Clearing completed tasks...'); // Debugging log
    localStorage.removeItem('completedList');
    document.getElementById('completed-task-list').innerHTML = '';
    document.getElementById('clear-completed-btn').style.display = 'none'; // Hide button after clearing
}
