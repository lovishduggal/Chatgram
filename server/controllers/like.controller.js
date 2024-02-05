import { catchAsyncError } from '../middlewares/catchAsyncError.js';
import { Like } from '../models/like.model.js';
import { Post } from '../models/post.model.js';
import ErrorHandler from '../utils/customErrorClass.js';
const handleLikePost = catchAsyncError(async (req, res, next) => {
    const userId = req.user._id;
    const postId = req.params.postId;

    const existingPost = await Post.findById(postId);
    if (!existingPost) {
        return next(new ErrorHandler('Post not found', 404));
    }

    // Check if user already liked the post
    const alreadyLiked = await Like.findOne({ user: userId, post: postId });
    if (alreadyLiked) {
        return next(new ErrorHandler('You already liked this post', 404));
    }

    const newLike = await Like.create({ user: userId, post: postId });

    await existingPost.updateOne({ $push: { likes: newLike._id } });

    return res.status(201).json({
        success: true,
        newLike,
    });
});

const handleUnLikePost = catchAsyncError(async (req, res, next) => {
    const userId = req.user._id;
    const postId = req.params.postId;

    const existingPost = await Post.findById(postId);
    if (!existingPost) {
        return next(new ErrorHandler('Post not found', 404));
    }

    // Check if user already unliked the post
    const alreadyLiked = await Like.findOne({ user: userId, post: postId });
    if (!alreadyLiked) {
        return next(new ErrorHandler('You already unliked this post', 404));
    }

    await existingPost.updateOne({ $pull: { likes: alreadyLiked._id } });
    await alreadyLiked.deleteOne();

    return res.status(201).json({
        success: true,
    });
});
export { handleLikePost, handleUnLikePost };