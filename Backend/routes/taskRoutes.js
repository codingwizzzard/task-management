const express = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTaskById,
} = require("../controllers/taskController");
const { protect } = require("../middlewares/authMiddleware");

const taskRouter = express.Router();

taskRouter.get("/",protect, getTasks) 
taskRouter.post("/",protect, createTask); 

taskRouter.get("/:id",protect, getTaskById) 
taskRouter.put("/:id",protect, updateTask) 
taskRouter.delete("/:id",protect, deleteTask); 

module.exports = taskRouter;
