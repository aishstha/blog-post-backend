import { Router } from 'express';

import * as commentController from '../controllers/comment';

const router: Router = Router();

router.put('/:id/sub-comments', commentController.createSubComment);
router.put('/:id/sub-comments/:subCommentId', commentController.editSubComment);

export default router;
