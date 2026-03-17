import express from 'express';
import * as authController from "../controllers/auth.controllers.js"

const router = express.Router();

router.post("/login", authController.loginUserController);

router.post("/create", authController.createUserController);

router.put("/update", authController.updateUserController);

router.delete("/delete/:id", authController.deleteUserController);

export default router