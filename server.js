const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

connectDB();

app.use("/api/books", bookRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
