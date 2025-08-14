import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: { 
      type: String,
      unique: true,
    },
    location: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: true,
      default: "",
    },
    courses: [{
      type: Schema.Types.ObjectId, // Better to reference Course model
      ref: "CoursesModel"
    }],
    enrollments: {  // Added to store course progress
      type: [{
        courseId: {
          type: Schema.Types.ObjectId,
          ref: "Course",
          required: true
        },
        progress: {
          type: Number,
          default: 0,
          min: 0,
          max: 100
        },
        lastAccessed: {
          type: Date,
          default: Date.now
        }
      }],
      default: []
    },
    stats: {  // Added for learning stats
      learningTime: { type: Number, default: 0 }, // in minutes
      completionRate: { type: Number, default: 0 },
      streak: { type: Number, default: 0 }
    },
    achievements: {  
      type: [String],
      default: []
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    avatar: {  // Added for profile picture
      type: String,
      default: ""
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

const UserModel = models.UserModel || mongoose.model("UserModel", userSchema);
export default UserModel;