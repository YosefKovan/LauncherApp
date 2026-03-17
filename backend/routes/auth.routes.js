import express from 'express';
import * as authController from "../controllers/auth.controllers.js"
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", authController.loginUserController);

router.post("/create",authMiddleware, authController.createUserController);

router.put("/update",authMiddleware, authController.updateUserController);

router.delete("/delete/:id",authMiddleware, authController.deleteUserController);

export default router