// routes/tasks.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// 1. Create a task (POST)
router.post('/', async (req, res) => {
  try {
    const { title, description, category, dueDate, priority } = req.body;
    const task = new Task({ title, description, category, dueDate, priority });
    await task.save();
    res.status(201).json({ message: 'Task created successfully', task });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// 2. Get tasks (GET)
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find(req.query);  // Filters can be applied from query params
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve tasks' });
  }
});

// 3. Update a task (PUT)
router.put('/:id', async (req, res) => {
  try {
    const { category, status, priority } = req.body;
    const task = await Task.findByIdAndUpdate(req.params.id, { category, status, priority }, { new: true });
    res.status(200).json({ message: 'Task updated successfully', task });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// 4. Delete a task (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

// 5. Mark a task as completed (POST)
router.post('/complete/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, { status: 'Completed' }, { new: true });
    res.status(200).json({ message: 'Task marked as completed', task });
  } catch (err) {
    res.status(500).json({ error: 'Failed to mark task as completed' });
  }
});

module.exports = router;
