const validateBook = (req, res, next) => {
  const { title, isbn, author, publisher, genre, price, stock, description } = req.body;

  if (!title || !isbn || !author || !publisher || !genre || !price || !stock || !description)
    return res.status(400).json({ message: "Required fields are missing" });

  if (isNaN(parseFloat(price)) || parseFloat(price) <= 0)
    return res.status(400).json({ message: "Price must be a positive number" });

  if (isNaN(parseInt(stock)) || parseInt(stock) < 0)
    return res.status(400).json({ message: "Stock must be a non-negative number" });

  next();
};

module.exports = validateBook;
