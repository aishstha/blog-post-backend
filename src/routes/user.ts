import { Router } from 'express';

import * as userController from '../controllers/user';
import authenticate from '../middlewares/authenticate';

const router: Router = Router();

/**
 * GET /api/profile
 */
router.get('/', userController.getAll);

/**
 * POST /api/profile/signup
 */
router.post('/signup', userController.create);

/**
 * PUT /api/profile/:id
 */
router.put('/', authenticate, userController.update);

/**
 * GET /api/profile/:id
 */
router.get('/:id', userController.getById);
router.get('/', authenticate, userController.getAll);
router.get('/profile', authenticate, userController.getUserDetail);

export default router;
