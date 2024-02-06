import { Router } from 'express';
import {
    handleCreateComment,
    handleDeleteComment,
    handleGetAllComments,
    handleUpdateComment,
} from '../controllers/comment.controller.js';
const router = Router();

router.get('/:postId', handleGetAllComments);
router.post('/:postId', handleCreateComment);
router.put('/:postId/:commentId', handleUpdateComment);
router.delete('/:postId/:commentId', handleDeleteComment);
export default router;
