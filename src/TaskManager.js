import React, { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  // Add new task w/ ID, title, & status
  const addTask = () => {
    const newTask = {
      id: tasks.length + 1, 
      title: `Task ${tasks.length + 1}`, 
      completed: false 
    };
    setTasks([...tasks, newTask]); // Update tasks array
  };

  // Toggle task completion status
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

// Toggle task completion button
  return (
    <div>
      <h2>Task Manager</h2>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key = {task.id}>
            <span style = {{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span>
            <button onClick = {() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
