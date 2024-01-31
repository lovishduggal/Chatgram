import { catchAsyncError } from '../middlewares/catchAsyncError.js';
import { Post } from '../models/post.model.js';
import { User } from '../models/user.model.js';
import ErrorHandler from '../utils/customErrorClass.js';

const handleUploadPost = catchAsyncError(async (req, res) => {
    const userId = req.user._id; // Get ID of current user
    const { content } = req.body;
    const image = req.file
        ? { public_id: req.file.filename, url: req.file.path }
        : null;

    const newPost = await Post.create({
        content,
        image,
        user: userId,
    });

    // Update user's post list
    await User.findByIdAndUpdate(userId, {
        $push: { posts: newPost._id },
    });
    return res.status(201).json({
        success: true,
        message: 'Post uploaded successfully',
        post: newPost,
    });
});

const handleGetAllPosts = catchAsyncError(async (req, res, next) => {
    const posts = await Post.find({ deleted: false })
        .populate('user') // Populate user with user
        .sort({ createdAt: -1 }); // Sort by creation date (newest first)
    return res.status(201).json({
        posts,
    });
});
export { handleUploadPost, handleGetAllPosts };
