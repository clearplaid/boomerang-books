require("dotenv").config();
const router = require("express").Router();
const booksController = require("../../controllers/booksController");

const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

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

router.route("/search", (req, res) => {
  // take user searched title replace white space with + for the url search to work properly
  let bookTitle = req.body.title.replace(/\s/g, "+");
  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookTitle + "&key=" + API_KEY)
    .then(
      (response) => {
        res.json(response.data.items)
      })
    .catch (
      (error) => {
        res.json({error: error})
      })
  })

module.exports = router;
