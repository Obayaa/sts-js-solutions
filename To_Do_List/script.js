function addTask(){
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();

    if (taskValue === ""){
        alert("Please Add an item!");
        return;
    }

    let taskList = document.getElementById("taskList")

    let list = document.createElement("li");
    list.textContent = taskValue;


    taskList.appendChild(list);
}