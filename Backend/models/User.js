
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true
   },
  email: { 
    type: String, 
    required: true, 
    unique: true
   },
  password: { 
    type: String, 
    required: true
   },
  role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User",
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); 
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error); 
  }
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    throw new Error("Password comparison failed");
  }
};

UserSchema.methods.generateOTP = function () {
  try {
    const otpToken = jwt.sign(
      { email: this.email }, 
      process.env.JWT_SECRET, 
      { expiresIn: "10m" } 
    );
    return otpToken;
  } catch (error) {
    throw new Error("OTP generation failed");
  }
};

UserSchema.methods.generateAuthToken = function () {
  try {
    const token = jwt.sign(
      { id: this._id, role: this.role }, 
      process.env.JWT_SECRET, 
      { expiresIn: "1d" } 
    );
    return token;
  } catch (error) {
    throw new Error("Auth token generation failed");
  }
};

module.exports = mongoose.model("User", UserSchema);