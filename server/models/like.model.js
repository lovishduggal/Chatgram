import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
        },
    },
    { timestamps: true }
);
export const Like = mongoose.model('Like', schema);
