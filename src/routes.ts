import { Router } from "express";

import * as homeController from "./controllers/home";
import * as userController from "./controllers/user";

const router: Router = Router();

/**
 * GET /
 */
router.get("/", homeController.index);

router.get("/users", userController.getAll);
router.get("/users/:id(\\d+)", userController.fetchById); //to only use this route if the ID is a number
router.post("/users/:id(\\d+)", userController.create);

export default router;
