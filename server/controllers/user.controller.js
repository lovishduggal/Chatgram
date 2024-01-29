import { catchAsyncError } from '../middlewares/catchAsyncError.js';
import { User } from '../models/user.model.js';
import ErrorHandler from '../utils/customErrorClass.js';

const handleFollow = catchAsyncError(async (req, res, next) => {
    const follower = req.user; // Current user.
    const followerId = req.user._id; // Current user.
    const followedId = req.params.userId; // Get ID of user to follow.

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
    const followedId = req.params.userId; // Get ID of user to follow.

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

const handleGetUserProfile = catchAsyncError(async (req, res, next) => {
    const userId = req.params.userId;
    const user = await User.findById(userId); // .populate('posts') will do later...
    if (!user) {
        return next(new ErrorHandler('User not found', 400));
    }

    return res.status(200).json({ success: true, user });
});

const handleUpdateUserProfile = catchAsyncError(async (req, res, next) => {
    console.log(req.file);
    return res.status(200).json({ success: true, file: req.file });
});
export {
    handleFollow,
    handleUnfollow,
    handleGetUserProfile,
    handleUpdateUserProfile,
};
