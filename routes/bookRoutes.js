const express = require("express");
const router = express.Router();
const { createBook, getBooks, deleteBook, updateBook } = require("../controllers/bookController");
const validateBook = require("../middleware/validateBook");
const upload = require("../middleware/upload");

router.post("/", upload.single("cover"), validateBook, createBook);
router.get("/", getBooks);
router.delete("/:id", deleteBook);
router.put("/:id", upload.single("cover"), updateBook);

module.exports = router;
