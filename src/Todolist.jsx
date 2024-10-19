import { useState } from "react";
import "./Todolist.css";

function Todolist() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleCheck(index) {
    window.alert("Task Completed");
    const updateCheckedTask = task.filter((_, i) => i !== index);
    setTask(updateCheckedTask);
  }

  function addTask() {
    if (newTask !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updateTask = task.filter((_, i) => i !== index);
    setTask(updateTask);
  }

  return (
    <>
      <div className="todo-list">
        <h1>TO DO LIST</h1>
        <div>
          <input
            type="text"
            className="t-input"
            placeholder="Enter task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="task-btn" onClick={addTask}>
            Add Task
          </button>
        </div>
        <div className="tasks">
          <ol>
            {task.map((task, index) => (
              <li key={index}>
                <span className="text"> {task}</span>
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                >
                  delete
                </button>
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  onClick={handleCheck}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default Todolist;
