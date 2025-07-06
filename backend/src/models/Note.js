import mongoose from "mongoose";

// 1 - create a note schema
// 2 - create a model based on the schema

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
},
{timestamps: true}
);

const Note = mongoose.model("Note", noteSchema);

export default Note;