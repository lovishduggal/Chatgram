import { Router } from 'express';
import {
    handleLogin,
    handleSignUp,
    handleCheck,
} from '../controllers/auth.controller.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router = Router();

router.post('/signup', handleSignUp);
router.post('/login', handleLogin);
router.get('/check', isAuthenticated, handleCheck);

export default router;
