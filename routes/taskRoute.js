import { Router } from "express";
// import { getCompletedTask } from "../controllers/taskController.js";
import { createTask } from "../controllers/taskController.js";
import { deleteTask } from "../controllers/taskController.js";
import { getAllTasks } from "../controllers/taskController.js";

const router=Router();
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').delete(deleteTask)

export default router