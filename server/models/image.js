import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;
 

// Image Schema
const imageSchema = new mongoose.Schema({
    name: {
    type: String,
    trim: true,
    minlength: 3,
    maxlenghth: 320,
    required: true,
    },
    slug: {
    type: String,
    lowercase: true,
    },
  description: {
    type: {},
    minlength:200,
    required: true,
  },
  image: {},
  category: {
    type: String,
  },
  published: {
    type: Boolean,
    default: false,
  },
  creator: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true }
);

export default mongoose.model("Image", imageSchema);
