const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Database api calls-Saved books 

// Matches with "/api/books"
router.route("/")
  // return all saved books as JSON
  .get(booksController.findAll)
  // save a new book to the database
  .post(booksController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  // delete a book from the database by DB id
  .delete(booksController.remove);

module.exports = router;
