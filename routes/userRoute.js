import { Router } from "express";
import { getUser } from "../controllers/userController.js";
import { createUser } from "../controllers/userController.js";
import { deleteUser } from "../controllers/userController.js";
import { getAllUsers } from "../controllers/userController.js";

const router=Router();

router.route('/').get(getAllUsers).post(createUser)
router.route('/:id').get(getUser).delete(deleteUser)

export default router