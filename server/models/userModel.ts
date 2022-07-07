import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
      maxLength: [20, "Your name is up to 20 chars long."]
    },
    account: {
      type: String,
      required: [true, "Please enter your email."],
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      trim: true,
      minLength: [8, "Password must be at least 8 chars."]
    },
    avatar: {
      type: String,
      default: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
    },
    role: {
      type: String,
      default: "user"
    }
  },
  {
    timestamps: true
  }
);
export default mongoose.model("User", userSchema);
