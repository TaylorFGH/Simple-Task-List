const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        tasks.forEach(task => createTaskElement(task));
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks)); //saveto local storage
}

function createTaskElement(taskText) {  //create new  task element
    const taskElement = document.createElement('li');
    taskElement.className = 'task';
    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    
    deleteButton.addEventListener('click', () => {
        taskElement.remove();
        tasks = tasks.filter(task => task !== taskText);
        saveTasks();
    });
    
    taskElement.appendChild(taskSpan);
    taskElement.appendChild(deleteButton);
    taskList.appendChild(taskElement);
}

function addTask() {
    const taskText = taskInput.value.trim();   //adding new task
    if (taskText !== '') {
        createTaskElement(taskText);
        tasks.push(taskText);
        saveTasks();
        taskInput.value = '';
    }
}

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

document.addEventListener('DOMContentLoaded', loadTasks); //load tasks when refresh 

//i would assume there is an easier way to access and use local storage but idk ill come back to this later it works good sooo