document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }
        const li = document.createElement('li');
        li.textContent = taskText;

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.addEventListener('dblclick', function() {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = '';
    }
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
