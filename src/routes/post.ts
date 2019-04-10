import { Router } from "express";

import * as postController from "../controllers/post";
import * as commentController from "../controllers/comment";
import authenticate from "../middlewares/authenticate";

const router: Router = Router();

router.get("/", postController.getAll);
router.get("/:id", postController.getById);

router.post("/", authenticate, postController.create);
router.post("/:postId/comments", authenticate, commentController.create);

router.delete("/:id", postController.deletePostById); //,authenticate,
router.delete("/:postId/comments/:id", commentController.deletePostById); //,authenticate,

router.put(
  "/:postId/comments/:id",
  authenticate,
  postController.updatePostById
);

export default router;
