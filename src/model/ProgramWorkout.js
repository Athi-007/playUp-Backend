import mongoose from "mongoose";

const programWorkoutSchema = new mongoose.Schema({
  program: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program",
    required: true
  },
  workout: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workout",
    required: true
  },
  dayNumber: {
    type: Number,
    required: true
  }
});

export default mongoose.model("ProgramWorkout", programWorkoutSchema);
