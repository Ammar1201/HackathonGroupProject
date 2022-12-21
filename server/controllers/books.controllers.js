import { Book } from "../models/books.models.js";

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}