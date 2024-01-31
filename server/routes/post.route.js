import { Router } from 'express';
import {
    handleUploadPost,
    handleGetAllPosts,
} from '../controllers/post.controller.js';
import { upload } from '../middlewares/multer.js';
const router = Router();

router.get('/', handleGetAllPosts); //* get all posts
router.post('/', upload.single('image'), handleUploadPost); //* Upload post
export default router;
