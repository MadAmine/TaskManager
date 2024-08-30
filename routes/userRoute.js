import { Router } from "express";
import { getUser } from "../controllers/userController.js";
import { createUser } from "../controllers/userController.js";
import { deleteUser } from "../controllers/userController.js";
import { getAllUsers } from "../controllers/userController.js";
import { isAutorized,isAuthenticated } from "../Middlewares/authMiddleware.js";

const router=Router();

router.route('/').get(isAuthenticated,getAllUsers).post(isAuthenticated,isAutorized("admin"),createUser)
router.route('/:id').get(getUser).delete(deleteUser)

export default router