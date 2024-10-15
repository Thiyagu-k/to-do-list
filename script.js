function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");
    
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteBtn);
    li.onclick = function() {
        li.classList.toggle("done");
    };

    taskList.appendChild(li);
    taskInput.value = "";
}
