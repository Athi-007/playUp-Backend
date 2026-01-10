import mongoose from "mongoose";

const sportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String
});

export default mongoose.model("Sport", sportSchema);
