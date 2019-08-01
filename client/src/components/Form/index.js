import React from "react";
import "./style.css";
// This file exports the search form for finding the books we want from google books

function Form(props) {
  return(
    <div id="search">
      <div className="row">
        <h2>Find a book, find a book....</h2>
      </div>
      <br></br>
      <div className="row">
        <form id="searchBooks">
            <input
              type="text"
              name="title"
              id="title"
              form="searchBooks"
              onChange={(event) => props.handleChange(event)}
              placeholder="Book Title" required />
            <button
              type="submit"
              onClick={(event) => props.handleSearch(event)}>Search</button>
          </form>
        </div>
    </div>
  )
}
export default Form;