import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Exercise-Component.css";

const ExerciseComponent = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setTask(inputValue);
    // console.log(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
      console.log(tasks);
    }
  };

  const clearOneTask = (e) => { 
    e.preventDefault()
  
    setTask([])
   }
  
  const clearTasks = () => {
    setTasks([]);
    console.log(tasks);
  };

  return (
    <div className="container">
      <h1>Todo's</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="inputPassword5">Add a new todo:</Form.Label>
        <Form.Control
          type="text"
          id="inputtask"
          value={task}
          onChange={handleInputChange}
          aria-describedby="passwordHelpBlock"
        />
        <Button variant="primary" type="submit" className="btn">
          Add task
        </Button>
        <Button className="btn" variant="danger" type="button" onClick={clearTasks}>Delete Tasks</Button>{" "}
        <div className="dislayedtasks">
          <h5>
            {tasks.map((task, index) => (
              <li key={index} onClick={clearOneTask}>{task}</li>
            ))}
          </h5>
        </div>
      </Form>
    </div>
  );
};

export default ExerciseComponent;