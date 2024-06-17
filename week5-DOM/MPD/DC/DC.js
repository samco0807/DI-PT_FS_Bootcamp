// select each element in the HTML
const taskForm = document.querySelector(".taskForm");
const newTask = document.querySelector("#newtask");
const tasks = [];
const addButton = document.querySelector("#addButton");
const clearButton = document.querySelector("#clearButton");
const checkboxContainer = querySelector("#checkbox-container");

const addTask = () => {
  addButton.addEventListener("click", () => {
    if (newTask.value.trim()!==""){
    const divNewClass = document.createElement("div");
    const inputNewClass = document.createElement("input");
    const labelNewClass = document.createElement("label");
    divNewClass.className = "checkbox";
    inputNewClass.type = "checkbox";
    inputNewClass.id = `task-${tasks.length}`;
    labelNewClass.setAttribute = ("for", inputNewClass.id);
    labelNewClass.textContent = newTask.value;

    divNewClass.appendChild(inputNewClass);
    divNewClass.appendChild(labelNewClass);

    checkboxContainer.appendChild(divNewClass);

    tasks.push(newTask.value);
    newTask.value = "";
}  });
};


clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  checkboxContainer.innerHTML = "";
  tasks.length = 0;
});

addTask()