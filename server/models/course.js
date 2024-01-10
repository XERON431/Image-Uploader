import mongoose, { mongo } from "mongoose";

const { ObjectId } = mongoose.Schema;
 
// Lesson Schema
const lessonSchema = new mongoose.Schema({
  title: {
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
  content: {
    type: String,
    minlength: 200,
  },
  video_link: {},
  free_preview: {
    type: Boolean,
    default: false,
  },
  // Other fields related to a lesson
});

// Course Schema
const courseSchema = new mongoose.Schema({
    title: {
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
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
  },
  published: {
    type: Boolean,
    default: false,
  },
  instructor: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  lessons: [lessonSchema],
  // Other fields related to a course
}, { tijmestamps: true }
);

export default mongoose.model("Course", courseSchema);
