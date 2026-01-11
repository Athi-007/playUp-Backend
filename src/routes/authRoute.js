import express from 'express';
const authRouter = express.Router();
import User from '../model/User.js';
import bcrypt from 'bcryptjs';
import validateSignup from '../utils/validation.js';


authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isValid = await user.validatePassword(password);
    if (!isValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    const token = user.getjwt();

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, 
      sameSite: "lax",
    });

    return res.status(200).json({
        success: true,
        message: "Login successful",
    });

  } catch (error) {
    console.error("Error in login route:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});


authRouter.post("/signup", async (req, res) => {
  try {
    const { name, age, fitnessLevel, email, password } = req.body;

    validateSignup(req, res);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already in use",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      age,
      fitnessLevel,
      email,
      password : hashedPassword,
    });

    await user.save();

    const token = user.getjwt();

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, 
      sameSite: "lax",
    });

    return res.status(201).json({
        success: true,
        message: "Signup successful",
    });

  } catch (error) {
    console.error("Error in signup route:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

authRouter.post("/logout", async (req, res) => {
  try {
    res.cookie("token", null, { expires: new Date(Date.now()) })
    res.send("you logout successfully ")
  } catch (err) {
    res.status(500).json({
      message : "cannot logout"
    })
  }
});

export default authRouter;



