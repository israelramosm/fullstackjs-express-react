import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: { type: String, unique: true},
        password: String,
        passwordResetToken: String,
        passwordResetExpires: Date,
        token: String,

        facebook: String,
        twitter: String,
        google: String,

        profile: {
            name: String,
            gender: String,
            location: String,
            website: String,
            picture: String
        }
    },
    { timestamp: true}
)

const User = mongoose.model("User", userSchema)
export default User