import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required : true,
            min: 2,
            max: 15,
        },
        email: {
            type: String,
            required : true,
            max: 25,
            unique: true,
        },
        password: {
            type: String,
            required : true,
            min: 2,
            max: 15,
        }
    }
);

const User = mongoose.model("User", userSchema);
export default User;
