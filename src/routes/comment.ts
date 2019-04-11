import { Router } from "express";

import * as commentController from "../controllers/comment";
import authenticate from "../middlewares/authenticate";

const router: Router = Router();

router.put(
  "/:id/sub-comments",
  authenticate,
  commentController.createSubComment
);
router.put(
  "/:id/sub-comments/:subCommentId",
  authenticate,
  commentController.editSubComment
);

router.delete("/:id", authenticate, commentController.deleteById);
router.put("/:id", authenticate, commentController.update);
router.delete(
  "/:id/sub-comments/:subCommentId",
  commentController.removeSubComment
);

export default router;
