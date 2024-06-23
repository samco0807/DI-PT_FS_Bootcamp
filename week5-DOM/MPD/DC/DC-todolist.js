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
      divNewClass.className = "checkbox";

divNewClass.innerHTML=`
<div class="form-check d-inline-flex p-2">
  <input class="form-check-input d-inline-flex p-2 delete-task" type="checkbox" value="" id="deletetask">
  <label class="form-check-label" for="deletetask id="deletasklabel">
  </label>
</div>
<div class="form-check d-inline-flex p-2">
  <input class="form-check-input d-inline-flex p-2 strike-task" type="checkbox" value="" id="striketask">
  <label class="form-check-label" for="striketasklabel">
  ${newTask}
  </label>
</div>
`

      // const inputNewClass = document.createElement("input");
      // const inputNewClassDelete = document.createElement("input");
      // const labelNewClass = document.createElement("label");

      

      // first checkbox to strike-through the text
      // inputNewClass.type = "checkbox";
      // inputNewClass.id = `strike-task-${tasks.length}`;

      // second checkbox to delete the line the create div
      // inputNewClassDelete.type = "checkbox";
      // inputNewClassDelete.id = `delete-task-${tasks.length}`;
      // inputNewClassDelete.className = "background-color: blue";

      // labelNewClass.setAttribute("for", inputNewClass.id);
      // labelNewClass.textContent = newTask;

      // divNewClass.appendChild(inputNewClass);
      // divNewClass.appendChild(inputNewClassDelete);
      // divNewClass.appendChild(labelNewClass);

      checkboxContainer.appendChild(divNewClass);

      tasks.push(newTask);
      document.querySelector("#newtask").value = "";

      const inputStrike=divNewClass.querySelector(".strike-task")
      const inputDelete=divNewClass.querySelector(".delete-task")
const labelStrike=divNewClass.querySelector(".strike-task + label")

      // Add event listener to toggle strikethrough

      inputStrike.addEventListener("change", (e) => {
        if (e.target.checked) {
          labelStrike.style.textDecoration = "line-through";
        } else {
          labelStrike.style.textDecoration = "none";
        }
      });
      inputDelete.addEventListener("change", (e) => {
        if (e.target.checked) {
          checkboxContainer.removeChild(divNewClass);
        }
      });
    }
  });
};

clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  checkboxContainer.innerHTML = "";
  tasks.length = 0;
});

addTask();
