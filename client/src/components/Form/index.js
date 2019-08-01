import React from "react";

// This file exports the search form for finding the books we want from google books

function Form(props) {
  return(
  <div id="search">
    <h2>Find a book, find a book....</h2>
    <form id="searchBooks">
        <input
          type="text"
          name="title"
          id="title"
          form="searchBooks"
          onChange={(event) => props.handleChange(event)}
          placeholder="Book Title" required />
        <br></br>
        <br></br>
        <button
          type="submit"
          onClick={(event) => props.handleSearch(event)}>Search</button>
    </form>
    </div>
  )
}
export default Form;