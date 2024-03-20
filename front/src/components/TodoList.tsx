import React, { useState } from "react";

function TodoList() {
  function TodoItem({ task, deleteTask, toggleCompleted }) {
    function handleChange() {
      toggleCompleted(task.id);
    }

    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleChange}
        />
        <p style={{ textDecoration: style }}>{task.text}</p>
        <button onClick={() => deleteTask(task.id)}>X</button>
      </div>
    );
  }

  const [tasks, setTasks] = useState([]);
  const [style, setStyle] = useState("none");

  const [text, setText] = useState("");
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
    setStyle("line-through");
  }
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          
          toggleCompleted={toggleCompleted}
          style={{ marginTop: "1rem", textDecoration: style }}
        />
      ))}
      <input
        value={text}
        onKeyPress={(e) => {setText(e.target.value); if (e.key === "Enter") {addTask(text)}}}
        onChange={(e) => setText(e.target.value)}
        style={{ marginTop: "1rem" }}
      />
      <button onClick={() => addTask(text)}>Add</button>
    </div>
  );
}
export default TodoList;
