import axios from "axios";

document.addEventListener("DOMContentLoad", () => {
  const taskForm = document.querySelector("#taskForm");
  const newTask = document.querySelector("#inputTask");
  const addButton = document.querySelector("#addButton");
  const taskList = document.querySelector("#taskList");
  const checkboxContainer = document.querySelector("#checkbox-container");

  // Create a function display the task on the DOM
  const fetchTasks = async () => {
    // Select elements in the HTML form

    try {
      const response = await axios.get("http://localhost:3000/tasks");
      const tasks = response.data;
      taskList.innerHTML = ``;
      // Create a li for each task
      tasks.forEach((task) => {
        const taskItem = document.createElement("li");
        taskItem.classList = "taskItem";
        taskItem.textContent = fetchTasks;

        // Display a delete button while adding a new task on the DOM
        const deleteTaskButton = document.createElement("button");
        deleteTaskButton.textContent = "DELETE";
        deleteTaskButton.addEventListener("click", async () => {
          await axios.delete(`/tasks/${task.id}`);
          fetchTasks();
        });
        taskItem.appendChild(deleteTaskButton);
        taskList.appendChild(taskItem);
      });
    } catch (error) {
      console.log("error fetching task", error);
    }
  };
});

//   adding a new task to the json
  taskForm.addEventListener("click", async (e) => {
    e.preventDefault();
    const createTask = {
      id: Date.now().toString(),
      text: newTask.value.trim(),
    };
    try {
      await axios.post("/tasks", createTask);
      //   Empty the input field while task added to the list
      inputTask.value = "";
      if (createTask) {
        const divNewClass = document.createElement("div");
        divNewClass.className = "taskbox";

        divNewClass.innerHTML = `
<div class="form-check d-inline-flex p-2">
  <input class="form-check-input d-inline-flex p-2 delete-task" type="checkbox" value="" id="deletetask">
  <label class="form-check-label" for="deletetask id="deletasklabel">
  </label>
</div>
<div class="form-check d-inline-flex p-2">
  <input class="form-check-input d-inline-flex p-2 strike-task" type="checkbox" value="" id="striketask">
  <label class="form-check-label" for="striketasklabel">
  ${createTask}
  </label>
</div>
`;
        checkboxContainer.appendChild(divNewClass);
        tasks.push(createTask);
        document.querySelector("#newtask").value = "";
      }
    } catch (error) {
      console.log("Error adding task", error);
    }
  });
  addTask();
;

//   Clear tasks list displayed on the DOM
clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  tasklistContainer.innerHTML = "";
  tasks.length = 0;
});
