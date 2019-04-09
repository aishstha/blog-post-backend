import { Router } from 'express';

import * as userController from '../controllers/user';

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
router.put('/:id', userController.update);

/**
 * GET /api/profile/:id
 */
router.get('/:id', userController.getById);

export default router;
