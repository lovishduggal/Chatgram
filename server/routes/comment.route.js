import { Router } from 'express';
import {
    handleCreateComment,
    handleDeleteComment,
    handleGetAllComments,
    handleUpdateComment,
} from '../controllers/comment.controller.js';
const router = Router();

router.get('/:id', handleGetAllComments);
router.post('/:id', handleCreateComment);
router.put('/:postId/comments/:commentId', handleUpdateComment);
router.delete('/:postId/comments/:commentId', handleDeleteComment);
export default router;
