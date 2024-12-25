import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength:[3,"title Should not be less than 3 Characters"]
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