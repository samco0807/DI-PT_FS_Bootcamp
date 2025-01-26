// Exercise2/controller/controller.js
import {
  _fetchAllBooks,
  _fetchBook,
  _createBook,
  _updateBook,
  _deleteBook,
} from "../model/model.js";

export const fetchAllBooks = async (req, res) => {
  try {
    const books = await _fetchAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const fetchBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await _fetchBook(id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: "Books not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createBook = async (req, res) => {
  const { title, author, published_year } = req.body;
  try {
    const newBook = await _createBook({ title, author, published_year });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, published_year } = req.body;
  try {
    const updatedBook = await _updateBook(id, { title, author, published_year });
    if (updatedBook.length) {
      res.status(200).json(updatedBook[0]);
    }
    res.status(404).json({ message: "Impossible update Book, Book not found" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await _deleteBook(id);
    if (deletedBook) {
      res.status(200).json(deletedBook);
    }
    res.status(404).json({ message: "Book not found, impossible to delete" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
