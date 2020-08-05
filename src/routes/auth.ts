import { Router } from 'express';

import * as authController from '../controllers/auth';
import validateRefreshToken from '../middlewares/validateRefreshToken';

const router: Router = Router();

router.post('/login', authController.login);
router.post('/logout', validateRefreshToken, authController.logout);
router.post('/refresh-token', validateRefreshToken, authController.getAccesstoken);

export default router;
