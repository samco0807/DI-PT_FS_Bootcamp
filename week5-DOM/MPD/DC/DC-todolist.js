// select each element in the HTML

// Select elements in the HTML
const addButton = document.querySelector("#addButton");
const clearButton = document.querySelector("#clearButton");
const checkboxContainer = document.querySelector("#checkbox-container");
const tasks = [];

const addTask = () => {
  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    const newTask = document.querySelector("#newtask").value.trim();
    if (newTask) {
      const divNewClass = document.createElement("div");
      const inputNewClass = document.createElement("input");
      const inputNewClassDelete = document.createElement("input");
      const labelNewClass = document.createElement("label");

      divNewClass.className = "checkbox";

      // first checkbox to strike-through the text
      inputNewClass.type = "checkbox";
      inputNewClass.id = `strike-task-${tasks.length}`;

      // second checkbox to delete the line the create div
      inputNewClassDelete.type = "checkbox";
      inputNewClassDelete.id = `delete-task-${tasks.length}`;
      inputNewClassDelete.style = "background-color: blue";
      

      labelNewClass.setAttribute("for", inputNewClass.id);
      labelNewClass.textContent = newTask;

      divNewClass.appendChild(inputNewClass);
      divNewClass.appendChild(inputNewClassDelete);
      divNewClass.appendChild(labelNewClass);

      checkboxContainer.appendChild(divNewClass);

      tasks.push(newTask);
      document.querySelector("#newtask").value = "";

      // Add event listener to toggle strikethrough

      inputNewClass.addEventListener("change", (e) => {
        if (e.target.checked) {
          labelNewClass.style.textDecoration = "line-through";
        } else {
          labelNewClass.style.textDecoration = "none";
        }
      });
      inputNewClassDelete.addEventListener("change", (e) => {
        if (e.target.checked) {
        checkboxContainer.removeChild(divNewClass)
    }});
    }
  });
};

clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  checkboxContainer.innerHTML = "";
  tasks.length = 0;
});

addTask();
