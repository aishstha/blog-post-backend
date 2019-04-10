import { Router } from 'express';

import * as postController from '../controllers/post';
import * as commentController from '../controllers/comment';

const router: Router = Router();

// TODO Keep doc type
router.get('/', postController.getAll);
router.get('/:id', postController.getById);

router.post('/', postController.create);
router.post('/:postId/comments', commentController.create);

router.delete('/:id', postController.deletePostById);

router.put('/:id', postController.updatePostById);

// router.put('/:id', userController.update);
// router.get('/:postId/comments', commentController.create)

export default router;
