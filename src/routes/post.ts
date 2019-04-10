import { Router } from 'express';

import * as postController from '../controllers/post';
import * as commentController from '../controllers/comment';
import authenticate from '../middlewares/authenticate';

const router: Router = Router();

// TODO Keep doc type
router.get('/', postController.getAll);
router.get('/:id', postController.getById);

router.post('/',authenticate, postController.create);
router.post('/:postId/comments',authenticate, commentController.create);

router.delete('/:id', postController.deletePostById); //,authenticate,

router.put('/:id', authenticate,postController.updatePostById);

// router.put('/:id', userController.update);
// router.get('/:postId/comments', commentController.create)

export default router;
