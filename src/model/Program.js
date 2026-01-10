import mongoose from "mongoose";

const programSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },
    level: {
      type: String,
      enum: ["beginner", "intermediate", "elite"],
      required: true
    },
    durationDays: Number,
    description: String
  },
  { timestamps: true }
);

export default mongoose.model("Program", programSchema);
