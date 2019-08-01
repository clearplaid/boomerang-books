## Boomerang Books
https://boomerang-books.herokuapp.com/

Search - User can search for books via the Google Books API and render them on this page. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

Saved - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.


Created a Book schema, using mongoose.

Books have each of the following fields:

  title - Title of the book from the Google Books API

  authors - The books's author(s) as returned from the Google Books API

  description - The book's description as returned from the Google Books API

  image - The Book's thumbnail image as returned from the Google Books API

  link - The Book's information link as returned from the Google Books API

This is a SPA (Single Page Application) that uses react-router-dom to navigate, hide and show your React components without changing the route within Express.

The layout includes at least two React Components for each page Search and Saved.

CSS framework used is Bootstrap.

Express routes used in app:
  /api/books (get) - Should return all saved books as JSON.

  /api/books (post) - Will be used to save a new book to the database.

  /api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.

* (get) - Will load your single HTML page in client/build/index.html. Make sure you have this after all other routes are defined.

Deployed application is hosted on Heroku.
Create React App and current versions of React and React-Router-Dom are used in this application.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
