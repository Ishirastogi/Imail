import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
    to: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
        required: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
},{timestamps:true});

export const User= mongoose.model("Email", emailSchema)