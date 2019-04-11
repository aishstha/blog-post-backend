import { Router } from "express";

import authenticate from "../middlewares/authenticate";

import * as userController from "../controllers/user";

const router: Router = Router();

/**
 * GET /api/profile
 */
router.get("/", authenticate, userController.getAll);

/**
 * POST /api/profile/signup
 */
router.post("/signup", userController.create);

/**
 * PUT /api/profile/:id
 */
router.put("/", authenticate, userController.update);

/**
 * GET /api/profile/:id
 */
router.get("/:id", userController.getById);

router.get("/profile", authenticate, userController.getUserDetail);

export default router;
