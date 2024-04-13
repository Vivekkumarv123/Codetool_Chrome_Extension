// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Initial tasks data
let tasks = [
  { id: 1, title: 'Task 1', description: 'Description for Task 1' },
  { id: 2, title: 'Task 2', description: 'Description for Task 2' },
];

// API endpoint to get tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// API endpoint to add a task
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  newTask.id = tasks.length + 1; // Assign a new ID
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// API endpoint to update a task
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;
  tasks = tasks.map(task => {
    if (task.id === taskId) {
      return { ...task, ...updatedTask };
    }
    return task;
  });
  res.json(updatedTask);
});

// API endpoint to delete a task
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== taskId);
  res.sendStatus(204);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
