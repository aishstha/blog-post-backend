import { Router } from 'express';

import * as authController from '../controllers/auth';

const router: Router = Router();

router.post('/login', authController.login);

export default router;
