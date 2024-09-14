import { useState } from "react";
import "./App.css";

function App() {
  const date = new Date().toLocaleDateString();
  const day = new Date().toLocaleDateString("en-us", { weekday: "long" });

  const [task, setTask] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [deadLineInput, setDeadLineInput] = useState("");

  const addtask = () => {
    if (taskInput.trim() && deadLineInput) {
      setTask([...task, { task: taskInput, deadline: deadLineInput }]);
      setTaskInput("");
      setDeadLineInput("");
    } else {
      alert("Please enter both Task and commitment date");
    }
  };

  const deleteTask = (indexToDelete) => {
    setTask(task.filter((_,index) => index !== indexToDelete))
  }
  return (
    <div className="parent">
      <div className="parent-container">
        <h1>Todo List</h1>
        <div className="header-container">
          <p>
            Data : <span>{date}</span>
          </p>
          <p>
            Day : <span>{day}</span>{" "}
          </p>
        </div>
        <div className="task-conatiner">
          <input
            type="text"
            placeholder="Enter task"
            className="task-input"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <input
            type="date"
            className="task-input-date"
            value={deadLineInput}
            onChange={(e) => setDeadLineInput(e.target.value)}
          />
          <button
            type="button"
            class="btn btn-success action-button"
            onClick={() => addtask()}
          >
            Add Task
          </button>
        </div>
        {task.length > 0 ? ( 
          task.map((taskItem, index) => (
            <div key={index} className="list-conatiner">
              <p className="task-input">{taskItem.task}</p>
              <p className="task-input-date">{taskItem.deadline}</p>
              <button
                type="button"
                className="btn btn-danger action-button"
                onClick={() => deleteTask(index)}
              >
                Delete Task
              </button>
            </div>
          ))
        ) : (
          <p>No tasks added yet!</p>
        )}
      </div>
    </div>
  );
}

export default App;
