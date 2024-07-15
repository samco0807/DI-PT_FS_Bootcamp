import TodoList from "./todo.js";

const myTodolist = new TodoList();

myTodolist.addTasks({description: "Shopping", complete: false})
myTodolist.addTasks({description: "Fix the computer", complete: false})
myTodolist.addTasks({description: "Wash the clothes", complete: true})

myTodolist.listTasks()

myTodolist.markAsComplete(0)