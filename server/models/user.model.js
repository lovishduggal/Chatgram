import mongoose from 'mongoose';
import validator from 'validator';

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter your name'],
        },
        email: {
            type: String,
            required: [true, 'Please enter your email'],
            unique: true,
            validate: validator.isEmail,
        },
        password: {
            type: String,
            required: [true, 'Please enter your password'],
            minLength: [6, 'Password must be at least 6 characters'],
            select: false,
        },
        profilePicture: {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
        bio: String,
        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post',
            },
        ],
        resetPasswordToken: String,
        resetPasswordExpire: String,
    },
    { timestamps: true }
);
export const User = mongoose.model('User', schema);
