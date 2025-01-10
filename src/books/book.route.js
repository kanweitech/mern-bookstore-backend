const express = require('express')
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const router = express.Router();

// Frontend => Backend Server => controller => Book Schema => Database => Send to Server => Back to the Frontend.
// post => submit data from frontend to db
// get => get data back from db
// put/patch => edit data already in the db
// delete => delete data in the db

// post a book
router.post("/create-book", postABook);

// get all books
router.get("/", getAllBooks);

// single book
router.get("/:id", getSingleBook);

// update a book
router.put("/edit/:id", UpdateBook);

// delete book
router.delete("/:id", deleteABook);

module.exports = router;