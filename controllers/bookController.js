const Book = require("../models/Book");

const createBook = async (req, res, next) => {
  try {
    const { title, isbn, author, publisher, genre, price, stock, description } = req.body;
    const book = await Book.create({ title, isbn, author, publisher, genre, price: parseFloat(price), stock: parseInt(stock), description,
      cover: req.file ? req.file.filename : ""
    });
    res.status(201).json({ message: "Book created", id: book._id });
  } catch (err) {
    next(err);
  }
};

const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json({ count: books.length, data: books });
  } catch (err) {
    next(err);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).json({ message: "Invalid book ID" });
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book deleted" });
  } catch (err) {
    next(err);
  }
};

const updateBook = async (req, res, next) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).json({ message: "Invalid book ID" });
    const updateData = { ...req.body };
    if (updateData.price) updateData.price = parseFloat(updateData.price);
    if (updateData.stock) updateData.stock = parseInt(updateData.stock);
    if (req.file) updateData.cover = req.file.filename;
    const book = await Book.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book updated", data: book });
  } catch (err) {
    next(err);
  }
};

module.exports = { createBook, getBooks, deleteBook, updateBook };
