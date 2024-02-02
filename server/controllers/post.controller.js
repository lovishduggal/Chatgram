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
        newPost,
    });
});

const handleGetAllPosts = catchAsyncError(async (req, res, next) => {
    const posts = await Post.find({ deleted: false })
        .populate('user') // Populate all info of  user
        .sort({ createdAt: -1 }); // Sort by creation date (newest first)
    return res.status(201).json({
        success: true,
        posts,
    });
});

const handleGetPost = catchAsyncError(async (req, res, next) => {
    const postId = req.params.id; // Get ID of post
    const post = await Post.findById(postId)
        .populate('user')
        .populate('comments'); // Populate all user and comments info.
    if (!post) {
        return next(new ErrorHandler('Post not found', 404));
    }
    return res.status(200).json({
        success: true,
        post,
    });
});

const handleUpdatePost = catchAsyncError(async (req, res, next) => {
    const postId = req.params.id; // Get ID of post
    const { content } = req.body;
    console.log(content, postId);
    const updatedPost = await Post.findByIdAndUpdate(
        postId,
        {
            content,
        },
        { new: true }
    );
    if (!updatedPost) {
        return next(new ErrorHandler('Post not found', 404));
    }
    return res.status(200).json({
        success: true,
        message: 'Post updated successfully',
        updatedPost,
    });
});

const handleDeletePost = catchAsyncError(async (req, res, next) => {
    const postId = req.params.id; // Get ID of post
    const post = await Post.findByIdAndUpdate(postId, {
        deleted: true,
    });
    if (!post) {
        return next(new ErrorHandler('Post not found', 404));
    }
    return res.status(200).json({
        success: true,
        message: 'Post deleted successfully',
    });
});
export {
    handleUploadPost,
    handleGetAllPosts,
    handleGetPost,
    handleUpdatePost,
    handleDeletePost,
};
