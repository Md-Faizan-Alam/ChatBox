import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    time: {
        type: Date,
        required: true,
        default: Date.now()
    },
    sender: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    }
})

export default mongoose.model('Message',messageSchema);