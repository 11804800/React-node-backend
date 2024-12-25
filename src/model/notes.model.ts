import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Notes = mongoose.model("note", NoteSchema);
export default Notes;