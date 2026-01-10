import mongoose from "mongoose";

const testResultSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    test: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FitnessTest",
      required: true
    },
    score: {
      type: Number,
      required: true
    },
    recommendedLevel: {
      type: String,
      enum: ["beginner", "intermediate", "elite"]
    }
  },
  { timestamps: true }
);

export default mongoose.model("TestResult", testResultSchema);
