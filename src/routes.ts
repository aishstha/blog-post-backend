import { Router } from 'express';

import user from './routes/user';
import profile from './routes/profile';

import * as homeController from './controllers/home';

const router: Router = Router();

/**
 * GET /api
 */
router.get('/', homeController.index);

/**
 * GET /api/profile
 */
router.use('/profile', user);

export default router;
