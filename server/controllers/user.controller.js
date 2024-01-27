import { catchAsyncError } from '../middlewares/catchAsyncError.js';
import { User } from '../models/user.model.js';

const handleFollow = catchAsyncError(async (req, res, next) => {
    const follower = req.user; // Current user.
    const followerId = req.user._id; // Current user.
    const followedId = req.params.id; // Get ID of user to follow.

    if (follower.following.includes(followedId)) {
        return res.status(400).json({
            status: 'error',
            message: 'You are already following this user.',
        });
    }

    // Update both users' followers/following lists
    await User.findByIdAndUpdate(followerId, {
        $push: { following: followedId },
    });
    await User.findByIdAndUpdate(followedId, {
        $push: { followers: followerId },
    });
});
export { handleFollow };
