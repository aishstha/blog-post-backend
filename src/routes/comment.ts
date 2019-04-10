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

export default router;
