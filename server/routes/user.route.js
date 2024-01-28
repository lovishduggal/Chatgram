import { Router } from 'express';
import {
    handleFollow,
    handleUnfollow,
} from '../controllers/user.controller.js';
const router = Router();

router.post('/follow/:id', handleFollow);
router.post('/unfollow/:id', handleUnfollow);

export default router;
