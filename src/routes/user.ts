import { Router } from 'express';

import * as userController from '../controllers/user';

const router: Router = Router();

/**
 * GET /api/users
 */
router.get('/', userController.getAll);

/**
 * POST /api/users
 */
router.post('/', userController.create);

/**
 * PUT /api/users/:id
 */
router.put('/:id', userController.update);

/**
 * GET /api/users/:id
 */
router.get('/:id', userController.getById);

export default router;
