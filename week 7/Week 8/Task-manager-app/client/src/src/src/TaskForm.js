// src/TaskForm.js
import React, { useState } from 'react';
import { createTask } from './api';

function TaskForm() {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    category: 'Work',
    dueDate: '',
    priority: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(taskData);
    // Redirect or show confirmation (not shown in this example)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={taskData.title} onChange={handleInputChange} placeholder="Title" required />
      <textarea name="description" value={taskData.description} onChange={handleInputChange} placeholder="Description"></textarea>
      <select name="category" value={taskData.category} onChange={handleInputChange}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
        <option value="Others">Others</option>
      </select>
      <input type="date" name="dueDate" value={taskData.dueDate} onChange={handleInputChange} required />
      <input type="number" name="priority" value={taskData.priority} onChange={handleInputChange} min="1" max="5" />
      <button type="submit">Create Task</button>
    </form>
  );
}

export default TaskForm;
