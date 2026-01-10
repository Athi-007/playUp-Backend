import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: String,

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },

    fitnessComponent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FitnessComponent",
      default: null
    },

    sport: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sport",
      default: null
    },

    level: {
      type: String,
      enum: ["beginner", "intermediate", "elite"],
      required: true
    },

    durationMinutes: Number,
    caloriesBurn: Number
  },
  { timestamps: true }
);

export default mongoose.model("Workout", workoutSchema);
