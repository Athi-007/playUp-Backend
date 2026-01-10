import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    age: {
      type: Number,
      required: true
    },
    fitnessLevel: {
      type: String,
      enum: ["beginner", "intermediate", "elite"],
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
