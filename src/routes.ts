import { Router } from "express";

import user from "./routes/user";
import profile from "./routes/profile";

import * as homeController from "./controllers/home";

const router: Router = Router();

/**
 * GET /api
 */
router.get("/", homeController.index);

/**
 * GET /api/users
 */
router.use("/users", user);
router.use("/profile", profile);

export default router;
