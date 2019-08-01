import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // finds all books with searched title from google books
  searchBooks: function (title) {
    // let bookTitle = inputTitle.replace(/\s/g, "+");
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
