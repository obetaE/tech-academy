import mongoose, { Schema } from "mongoose"; 

const topicSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: [{
    type: { 
      type: String,
      enum: ['text', 'highlight', 'subheader', 'list', 'code', 'definition'],
      required: true
    },
    content: String,
    items: [String],
    language: String,
    term: String,
    definition: String
  }],
  assignments: [{
    title: String,
    description: String,
    requirements: [String],
    hint: String
  }]
});

const moduleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  topics: [topicSchema]
});

const courseSchema = new Schema({
  title: {
    type: String,
    required: true, 
  },
  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  students: {
    type: Number,
    default: 0,
  },
  duration: {
    type: String,
    required: true,
  },
  modules: [moduleSchema],
  level: {
    type: String,
    required: true,
    enum: ["Beginner", "Intermediate", "Advanced"],
    default: "Beginner",
  },
  price: {
    type: Number,
    required: true,
  },
  popular: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    required: true,
    enum: ["Web Development", "Data Science", "UI/UX Design", "DevOps & Cloud", "Cybersecurity", "AI & Machine Learning"],
  },
  color: {
    type: String,
    default: "#6B4E71", // Default to vintage-plum
  },
  thumbnail: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const CourseModel = models.CourseModel || mongoose.model("CourseModel", courseSchema);
export default CourseModel;