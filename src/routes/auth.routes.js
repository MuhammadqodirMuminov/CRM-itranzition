import { Router } from 'express';

import authController from '../controller/auth.controller.js';

const router = Router();

router.post('/register', authController.signUp);

export default router;
