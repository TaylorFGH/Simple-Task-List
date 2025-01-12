document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("task-input");
    const btn = document.getElementById("add-btn");
    const list = document.getElementById("task-list");

    const addTask = () => {
    const text = input.value.trim();
    if (!text) return;

    const task = document.createElement("li");
    
    task.className = "task";
    task.innerHTML = `<span>${text}</span><button>Delete</button>`;

    task.querySelector("button").onclick = () => task.remove();
    list.appendChild(task);
    input.value = "";
    };

    btn.onclick = addTask;
    input.addEventListener("keydown", e => {
        if (e.key === "Enter") addTask();
    });

});