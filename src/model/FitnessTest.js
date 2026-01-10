import mongoose from "mongoose";

const fitnessTestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  maxScore: Number
});

export default mongoose.model("FitnessTest", fitnessTestSchema);
