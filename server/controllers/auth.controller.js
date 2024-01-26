import { catchAsyncError } from '../middlewares/catchAsyncError.js';
import { User } from '../models/user.model.js';
import ErrorHandler from '../utils/customErrorClass.js';
const options = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: 'none',
};

const handleSignUp = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
        return next(new ErrorHandler('Please provide all fields', 400));

    let user = await User.findOne({ email });
    if (user) return next(new ErrorHandler('User already exists', 400));
    user = await User.create({ name, email, password });

    return res.status(200).json({
        success: true,
        message: 'User registered successfully',
    });
});

const handleLogin = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
        return next(new ErrorHandler('Please provide all fields', 400));

    let user = await User.findOne({ email }).select('password');
    if (!user) return next(new ErrorHandler('User does not exists', 400));

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return next(new ErrorHandler('Invalid credentials', 400));

    user.password = undefined;

    const token = user.getJWTToken();
    return res.status(200).cookie('jwt', token, options).json({
        success: true,
        message: 'Logged In successfully',
    });
});

const handleCheck = catchAsyncError(async (req, res, next) => {
    const user = req.user;
    return res.status(200).json({
        success: true,
        user,
    });
});

export { handleSignUp, handleLogin, handleCheck };
