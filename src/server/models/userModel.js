import mongoose from "mongoose";

export const schema = {
  email: { type: String, required: true, min: 6, max: 255, unique: true },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  token: String,

  facebook: String,
  twitter: String,
  google: String,

  profile: {
    name: {
      type: String,
      required: false,
      min: 6,
      max: 255,
    },
    gender: { type: String, required: false, min: 6, max: 255 },
    location: {
      type: String,
      required: false,
      min: 6,
      max: 255,
    },
    website: {
      type: String,
      required: false,
      min: 6,
      max: 255,
    },
    picture: {
      type: String,
      required: false,
      min: 6,
      max: 255,
    },
  },
};

const userSchema = new mongoose.Schema(schema, { timestamp: true });
const User = mongoose.model("User", userSchema);

export default User;
