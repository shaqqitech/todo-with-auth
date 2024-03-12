import mongoose, { Schema } from "mongoose";

const userScehma = new Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter a email address"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
});

const User = mongoose.models.User || mongoose.model("User", userScehma);
export default User;
