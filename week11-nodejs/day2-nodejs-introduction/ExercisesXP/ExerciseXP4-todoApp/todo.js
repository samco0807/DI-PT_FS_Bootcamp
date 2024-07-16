class todoList {
  constructor() {
    this.tasks = [];
  }

  addTasks(task) {
    this.tasks.push(task);
  }
  markAsComplete(taskIndex) {
    if (taskIndex >= 0 && taskIndex < this.tasks.length)
      this.tasks[taskIndex].completed = true;
  }
  listTasks() {
    this.tasks.forEach((task, index) => {
      console.log(
        `${index + 1}.${task.description}-${
          task.completed ? "completed" : "incomplete"
        }`
      );
    });
  }
}

export default todoList;
