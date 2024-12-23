const express = require("express");
const { loginLimiter } = require("../middlewares/rateLimiter");
const { registerUser, loginUser,sendPasswordResetOTP,resetPasswordWithOTP, } = require("../controllers/authController");

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login",loginLimiter, loginUser);

userRouter.post("/password-reset/send-otp", sendPasswordResetOTP);
userRouter.post("/password-reset/verify-otp", resetPasswordWithOTP);

module.exports = userRouter;
