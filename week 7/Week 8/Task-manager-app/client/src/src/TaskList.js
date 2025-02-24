// src/TaskList.js
import React, { useState, useEffect } from 'react';
import { getTasks } from './api';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks()
      .then(response => setTasks(response.data.tasks))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Category: {task.category}</p>
            <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            <p>Status: {task.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
