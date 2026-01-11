import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    fitnessLevel: {
      type: String,
      enum: ["beginner", "intermediate", "elite"],
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true }
);

userSchema.methods.getjwt = async function () {
    try {
        const user = this
        const token =  jwt.sign({ _id: user._id.toString()}, process.env.JWT_SECRET , { expiresIn: '7d' });
        if (!token) {
            throw new Error ("Token not found")
        }
        else {
            return token
        }
    } catch (err) {
        throw new Error(err.message)
    } 
}


userSchema.methods.validatePassword = async function (passwordByUser) {
  const user = this;
  const isValidPassword = await bcrypt.compare(passwordByUser, user.password);

  if (!isValidPassword) {
    throw new Error("Invalid password");
  }

  return isValidPassword;
};

export default mongoose.model("User", userSchema);
