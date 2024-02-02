import { Router } from 'express';
import { handleCreateComment } from '../controllers/comment.controller.js';
const router = Router();

router.post('/:id', handleCreateComment);
export default router;
