import express from 'express';
import * as authController from "../controllers/auth.controllers.js"
import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleWare from '../middleware/role.middleware.js';

const router = express.Router();

router.post("/login", authController.loginUserController);

router.get("/getUser", roleMiddleWare("ADMIN", "AIRFORCE", "INTELLIGENCE"), authMiddleware, authController.getCurrentUser);

router.get("/getUser/:id", authMiddleware, roleMiddleWare("ADMIN"), authController.getUserById);

router.post("/create",authMiddleware, roleMiddleWare("ADMIN"), authController.createUserController);

router.put("/update",authMiddleware, roleMiddleWare("ADMIN"), authController.updateUserController);

router.get("/allUsers", authMiddleware, roleMiddleWare("ADMIN"), authController.getAllUsers)

router.delete("/delete/:id",authMiddleware, roleMiddleWare("ADMIN"), authController.deleteUserController);

export default router