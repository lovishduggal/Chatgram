import { Router } from 'express';
import { handleLogin } from '../controllers/auth.controller.js';
const router = Router();

router.post('/signup', handleLogin);

export default router;
