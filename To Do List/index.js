const addBtn = document.getElementById("add-btn");
const input = document.getElementById("input");
const pendingTasks = document.getElementById("pending-tasks");
const completedTask = document.getElementById("completed-tasks");

function addTask() {
    let taskName = input.value.trim();

    if (taskName === "") {
        alert("Please enter a task name.");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskName;

    let button = document.createElement("button");
    button.textContent = "Complete";
    button.className = "complete-btn";

    li.appendChild(span);
    li.appendChild(button);

    pendingTasks.appendChild(li);

    input.value = "";
}

addBtn.addEventListener("click", addTask);


// COMPLETE TASK
pendingTasks.addEventListener("click", function(event) {

    if (event.target.classList.contains("complete-btn")) {

        let task = event.target.closest("li");

        event.target.textContent = "Delete";
        event.target.className = "delete-btn";

        completedTask.appendChild(task);
    }
});


// DELETE TASK
completedTask.addEventListener("click", function(event) {

    if (event.target.classList.contains("delete-btn")) {

        let task = event.target.closest("li");

        task.remove();
    }
});