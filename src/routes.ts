import { Router } from 'express';

// import * as validate from './middlewares/validate';
// import * as homeController from './controllers/home';
import user from './routes/user'
import auth from './routes/auth'
import post from './routes/post'
import comment from './routes/comment'
// import * as authController from './controllers/auth';
// import authenticate from './middlewares/authenticate';
// import { loginSchema } from './validators/loginRequest';
// import { userPOSTSchema } from './validators/userRequest';
// import validateRefreshToken from './middlewares/validateRefreshToken';

const router: Router = Router();

router.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.json({name: req.app.locals.name,
    version: req.app.locals.version});
});

// router.post('/login', validate.schema(loginSchema), authController.login);
// router.post('/refresh', validateRefreshToken, authController.refresh);
// router.post('/logout', validateRefreshToken, authController.logout);

router.use('/auth', auth);
router.use('/users', user);
router.use('/posts', post);
router.use('/comments', comment)

// router.get('/users', userController.getAll);
// router.post('/users', userController.create);
// router.put('/users/:id', userController.update);
// router.get('/users/:id', userController.getById);

export default router;
