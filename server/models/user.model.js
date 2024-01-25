import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

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
            },
            url: {
                type: String,
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

/* The `schema.pre('save', async function (next) { ... })` is a pre-save middleware function in
Mongoose. It is executed before saving a document to the database. */
schema.pre('save', async function (next) {
    //*If 'password' is unchanged, skip hashing and move to continue the save operation.
    if (!this.isModified('password')) {
        return next();
    }
    const saltRounds = 10; //*Salt rounds increase hashing complexity, enhancing the difficulty for attackers to crack the password.
    this.password = await bcrypt.hash(this.password, saltRounds);
    this.password = this.password.toString('hex');
    return next();
});

export const User = mongoose.model('User', schema);
