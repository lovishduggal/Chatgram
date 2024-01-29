import { Router } from 'express';
import {
    handleFollow,
    handleUnfollow,
    handleGetUserProfile,
    handleUpdateUserProfile,
} from '../controllers/user.controller.js';
import { upload } from '../middlewares/multer.js';
const router = Router();

router.get('/:userId', handleGetUserProfile);
router.post('/follow/:userId', handleFollow);
router.post('/unfollow/:userId', handleUnfollow);
router.post('/me', upload.single('image'), handleUpdateUserProfile);

export default router;
