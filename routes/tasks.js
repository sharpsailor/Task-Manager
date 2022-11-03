const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask
} = require("../controller/tasks");
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;

//GET  Method used to retrieve data from server . This is only read-only method,no mutating nor corrupting data
// POST new data entry from parent data
// PUT /PATCH - Update Task
// DELETE -DELETE TASK
