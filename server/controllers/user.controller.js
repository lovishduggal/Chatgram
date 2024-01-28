import { catchAsyncError } from '../middlewares/catchAsyncError.js';
import { User } from '../models/user.model.js';
import ErrorHandler from '../utils/customErrorClass.js';

const handleFollow = catchAsyncError(async (req, res, next) => {
    const follower = req.user; // Current user.
    const followerId = req.user._id; // Current user.
    const followedId = req.params.id; // Get ID of user to follow.

    // Check if already following
    if (follower.following.includes(followedId)) {
        return next(
            new ErrorHandler('You are already following this user', 400)
        );
    }

    // Update both users' followers/following lists
    await User.findByIdAndUpdate(followerId, {
        $push: { following: followedId },
    });
    await User.findByIdAndUpdate(followedId, {
        $push: { followers: followerId },
    });
    return res.status(200).json({ message: 'Successfully followed' });
});

const handleUnfollow = catchAsyncError(async (req, res, next) => {
    const follower = req.user; // Current user.
    const followerId = req.user._id; // Current user.
    const followedId = req.params.id; // Get ID of user to follow.

    // Check if already following
    if (!follower.following.includes(followedId)) {
        return next(new ErrorHandler('You are not following this user', 400));
    }

    // Update both users' followers/following lists
    await User.findByIdAndUpdate(followerId, {
        $pull: { following: followedId },
    });
    await User.findByIdAndUpdate(followedId, {
        $pull: { followers: followerId },
    });
    return res
        .status(200)
        .json({ success: true, message: 'Successfully unfollowed' });
});
export { handleFollow, handleUnfollow };
