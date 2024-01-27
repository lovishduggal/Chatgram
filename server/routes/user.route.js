import { Router } from 'express';
import { handleFollow } from '../controllers/user.controller';
const router = Router();

router.post('/:id/follow', handleFollow);

export default router;
