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

  const clearOneTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const clearTasks = () => {
    setTasks([]);
    console.log(tasks);
  };

  return (
    <div className="container">
      <section>
        <h1>Todo's</h1>
        
        <Form onSubmit={handleSubmit}>
          
          <Form.Control
            type="text"
            id="inputtask"
            value={task}
            onChange={handleInputChange}
            placeholder="Add a new todo"
            aria-describedby="passwordHelpBlock"
          />
          <Button variant="primary" type="submit" className="btn">
            Add task
          </Button>
          <Button
            className="btn"
            variant="danger"
            type="button"
            onClick={clearTasks}
          >
            Delete All Tasks
          </Button>{" "}
          <div className="displayedtasks">
            <h5>
              {tasks.map((task, index) => (
                <li key={index} onClick={() => clearOneTask(index)}>
                  {task}
                </li>
              ))}
            </h5>
          </div>
        </Form>
      </section>
    </div>
  );
};

export default ExerciseComponent;
