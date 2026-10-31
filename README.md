# Book Management API

A REST API for managing books built with Node.js, Express, and MongoDB.

## 📹 Demo Video
[Watch Demo](https://drive.google.com/file/d/1IkbmsxIkSPNb1eC3xFVps4IjRTE-Gv2U/view?usp=sharing)

## 📁 Project Structure

```
Book-Management/
├── config/
│   └── db.js               # MongoDB connection
├── controllers/
│   └── bookController.js   # Route logic
├── middleware/
│   ├── upload.js           # Multer file upload config
│   └── validateBook.js     # Request validation
├── models/
│   └── Book.js             # Book schema
├── routes/
│   └── bookRoutes.js       # API routes
├── uploads/                # Uploaded cover images
├── .env                    # Environment variables
└── server.js               # Entry point
```

## ⚙️ Setup

1. Clone the repo and install dependencies:
```bash
npm install
```

2. Create a `.env` file:
```
MONGO_URI=mongodb://localhost:27017/book-management
PORT=3000
```

3. Start the server:
```bash
npm start
```

## 🚀 API Endpoints

Base URL: `http://localhost:3000/api/books`

### Get All Books
```
GET /api/books
```
Response:
```json
{
  "count": 2,
  "data": [...]
}
```

### Create a Book
```
POST /api/books
```
Body: `form-data`

| Field | Type | Required |
|-------|------|----------|
| title | Text | ✅ |
| isbn | Text | ✅ |
| author | Text | ✅ |
| publisher | Text | ✅ |
| genre | Text | ✅ |
| price | Text (number) | ✅ |
| stock | Text (number) | ✅ |
| description | Text | ✅ |
| cover | File (image) | ❌ |

Response:
```json
{
  "message": "Book created",
  "id": "6ae6137299d7350e19a59a42"
}
```

### Update a Book
```
PUT /api/books/:id
```
Body: `form-data` — send only fields you want to update

Response:
```json
{
  "message": "Book updated",
  "data": {...}
}
```

### Delete a Book
```
DELETE /api/books/:id
```
Response:
```json
{
  "message": "Book deleted"
}
```

## 📦 Dependencies

- [express](https://expressjs.com/) — Web framework
- [mongoose](https://mongoosejs.com/) — MongoDB ODM
- [multer](https://github.com/expressjs/multer) — File upload handling
- [dotenv](https://github.com/motdotla/dotenv) — Environment variables
- [nodemon](https://nodemon.io/) — Dev server auto-restart

## 📌 Notes

- All POST and PUT requests must use `form-data` (not raw JSON) because of file upload support
- Cover images are served statically at `http://localhost:3000/uploads/{filename}`
- Supported image formats: `jpeg`, `jpg`, `png`, `webp`
