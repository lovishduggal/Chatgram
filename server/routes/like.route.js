import { Router } from 'express';
import {
    handleLikePost,
    handleUnLikePost,
} from '../controllers/like.controller.js';
const router = Router();

router.post('/:postId', handleLikePost);
router.delete('/:postId', handleUnLikePost);
export default router;
