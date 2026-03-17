import express from "express";
import * as launchersController from "../controllers/launchers.controllers.js"
import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleWare from "../middleware/role.middleware.js";

const router = express.Router();

router.use(authMiddleware)

router.get("/", roleMiddleWare("ADMIN", "AIRFORCE", "INTELLIGENCE"), launchersController.getLaunchers);

router.get("/:id", roleMiddleWare("ADMIN", "AIRFORCE", "INTELLIGENCE"), launchersController.getLauncherById);

router.post("/", roleMiddleWare("ADMIN", "INTELLIGENCE"), launchersController.addLauncher);

router.delete("/:id", roleMiddleWare("ADMIN", "INTELLIGENCE"), launchersController.deleteLauncher);

router.put("/:id", roleMiddleWare("AIRFORCE"), launchersController.destroyed)

export default router;

