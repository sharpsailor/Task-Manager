const express = require("express");
// const router = express.Router();
const app = express();
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} = require("../controller/tasks");
app.route("/").get(getAllTasks).post(createTask);
app.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = app;

//GET  Method used to retrieve data from server . This is only read-only method,no mutating nor corrupting data
// POST new data entry from parent data
// PUT /PATCH - Update Task
// DELETE -DELETE TASK
