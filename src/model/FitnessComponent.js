import mongoose from "mongoose";

const fitnessComponentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String
});

export default mongoose.model("FitnessComponent", fitnessComponentSchema);
