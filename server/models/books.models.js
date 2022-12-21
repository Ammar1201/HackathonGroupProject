import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: {
        type: String
    },
    text:{
        type: String
    },
    image:{
        type: String
    }
});

export const Book = mongoose.model("Book", bookSchema);
    