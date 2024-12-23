const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sendEmail = require("../utils/sendEmail");

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body; 

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const userRole = role === "Admin" ? "Admin" : "User";

    const user = await User.create({ name, email, password, role: userRole });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sendPasswordResetOTP = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const otp = Math.floor(1000 + Math.random() * 9000).toString(); 

    const otpToken = jwt.sign(
      { email: user.email, otp }, 
      process.env.JWT_SECRET, 
      { expiresIn: "10m" } 
    );

    const message = `Your password reset OTP is: ${otp}. It is valid for 10 minutes.`;

    await sendEmail({
      email: user.email,
      subject: "Password Reset OTP",
      message,
    });

    res.status(200).json({ message: "OTP sent to your email.", otpToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const resetPasswordWithOTP = async (req, res) => {
  const { otp, password, otpToken } = req.body;

  try {
    const decoded = jwt.verify(otpToken, process.env.JWT_SECRET);

    if (decoded.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP." });
    }

    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    user.password = password;
    await user.save();

    res.status(200).json({ message: "Password reset successful." });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      res.status(400).json({ message: "OTP has expired." });
    } else {
      res.status(400).json({ message: "Invalid OTP or Token." });
    } 
  }
};

module.exports = { registerUser, loginUser, sendPasswordResetOTP ,resetPasswordWithOTP };