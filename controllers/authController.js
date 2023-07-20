const userModel = require('../models/userModel');
const errorResponse = require('../utils/errorResponse');

//JWT Token
exports.sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken(res);
    const username = user.username;
    res.status(statusCode).json({
        success: true,
        token,
        username,
    });
};

//REGISTER
exports.registerController = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        //existing user
        const existingEmail = await userModel.findOne({ email });
        if (existingEmail) {
            return next(new errorResponse('Email already exists', 400));
        }
        const user = await userModel.create({
            username,
            email,
            password,
        });
        //send token
        this.sendToken(user, 201, res);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

//LOGIN
exports.loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
            return next(new errorResponse("Please provide email or password"));
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return next(new errorResponse("Invalid Creditial", 401));
        }
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return next(new errorResponse("Invalid Creditial", 401));
        }
        //fetch username
        const username = user.username;
        console.log(username);
        //res
        this.sendToken(user, 200, res);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

//LOGOUT
exports.logoutController = async (req, res) => {
    res.clearCookie('refreshToken');
    res.status(200).json({
        success: true,
        message: 'Logged out successfully',
    });
};
