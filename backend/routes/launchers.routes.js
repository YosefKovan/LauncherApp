import express from "express";
import * as launchersController from "../controllers/launchers.controllers.js"

const router = express.Router();

router.get("/", launchersController.getLaunchers);

router.get("/:id", launchersController.getLauncherById);

router.post("/", launchersController.addLauncher);

router.delete("/:id", launchersController.deleteLauncher);

export default launchersController;

