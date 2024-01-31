import { catchAsyncError } from '../middlewares/catchAsyncError.js';
import { User } from '../models/user.model.js';
import ErrorHandler from '../utils/customErrorClass.js';
import * as cloudinary from 'cloudinary';

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
    const user = await User.findById(userId).populate({
        path: 'posts',
        options: {
            select: 'image',
            sort: { createdAt: -1 }, // Sort by creation date (newest first)
        },
    }); // .populate('posts') will do later...
    if (!user) {
        return next(new ErrorHandler('User not found', 400));
    }

    return res.status(200).json({ success: true, user });
});

const handleUpdateUserProfile = catchAsyncError(async (req, res, next) => {
    const userId = req.user._id;
    const { name, bio } = req.body;

    const user = await User.findOne({ _id: userId });
    if (!user) return next(new ErrorHandler('User not found', 400));

    if (name) user.name = name;
    if (bio) user.bio = bio;

    if (user.profilePicture.public_id && user.profilePicture.url)
        await cloudinary.v2.uploader.destroy(user.profilePicture.public_id, {
            resource_type: 'image',
        });
    if (req.file) {
        user.profilePicture.public_id = req.file.filename;
        user.profilePicture.url = req.file.path;
    }

    await user.save();

    return res
        .status(200)
        .json({ success: true, message: 'Profile updated successfully', user });
});
export {
    handleFollow,
    handleUnfollow,
    handleGetUserProfile,
    handleUpdateUserProfile,
};
