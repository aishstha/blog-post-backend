import { Router } from 'express';

import user from './routes/user';
import auth from './routes/auth';
import post from './routes/post';
import comment from './routes/comment';

const router: Router = Router();

router.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.json({
    name: req.app.locals.name,
    version: req.app.locals.version
  });
});

router.use('/auth', auth);
router.use('/users', user);
router.use('/posts', post);
router.use('/comments', comment);

export default router;
