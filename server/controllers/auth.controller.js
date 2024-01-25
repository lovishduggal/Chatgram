import { catchAsyncError } from '../middlewares/catchAsyncError.js';
import { User } from '../models/user.model.js';
import ErrorHandler from '../utils/customErrorClass.js';

const handleLogin = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
        return next(new ErrorHandler('Please provide all fields', 400));

    let user = await User.findOne({ email });
    if (user) return next(new ErrorHandler('User already exists', 400));
    user = await User.create({ name, email, password });
    user.password = undefined;
    return res.status(200).json({
        success: true,
        user,
    });
});

export { handleLogin };
