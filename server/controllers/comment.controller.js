import { catchAsyncError } from '../middlewares/catchAsyncError.js';
import { Comment } from '../models/comment.model.js';
import { Post } from '../models/post.model.js';
import ErrorHandler from '../utils/customErrorClass.js';

const handleCreateComment = catchAsyncError(async (req, res, next) => {
    const postId = req.params.id;
    const userId = req.user._id;
    const { content } = req.body;

    const existingPost = await Post.findById(postId);
    if (!existingPost) {
        return next(new ErrorHandler('Post not found', 404));
    }

    const newComment = await Comment.create({
        content,
        user: userId,
        post: postId,
    });

    await existingPost.updateOne({ $push: { comments: newComment._id } });

    return res.status(201).json({
        success: true,
        newComment,
    });
});
export { handleCreateComment };
