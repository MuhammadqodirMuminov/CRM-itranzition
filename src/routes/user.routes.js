import { Router } from 'express';

import userController from '../controller/user.controller.js';
import checkToken from '../middlewares/check-token.js';

const router = Router();

router.get('/', checkToken, userController.getUsers);

export default router;
