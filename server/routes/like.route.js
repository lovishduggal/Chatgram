import { Router } from 'express';
import { handleAddLike } from '../controllers/like.controller.js';
const router = Router();

router.post('/:postId', handleAddLike);
export default router;
