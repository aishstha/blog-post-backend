import { Router } from 'express';

import authenticate from '../middlewares/authenticate';

import * as postController from '../controllers/post';
import * as commentController from '../controllers/comment';

const router: Router = Router();

router.get('/', postController.getAll);
router.get('/:id', postController.getById);

router.post('/', authenticate, postController.create);
router.post('/:postId/comments', authenticate, commentController.create);

router.delete('/:id', authenticate, postController.deletePostById);

router.put('/:id', authenticate, postController.update);

export default router;
