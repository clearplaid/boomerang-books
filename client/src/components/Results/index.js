import React from "react";
import SearchResults from "../SearchResults";
import "./style.css";

function Results(props) {
  if(props.path === "/") {
    return(
        <div id="results">
            <h3>Search Results:</h3>
            {props.bookData.map((book) => {
              const bookInfo = book.volumeInfo;
              return <SearchResults
              id={book.id}
              key={book.id}
              path={props.path}
              title={bookInfo.title}
              authors={bookInfo.authors}
              description={bookInfo.description}
              image={bookInfo.imageLinks.thumbnail}
              link={bookInfo.canonicalVolumeLink}/>
            })}
        </div>
    );
  } else if(props.path === "/saved") {
    if(props.savedBooks.length > 0) {
        return(
            <div id="results">
                <h3>Saved Books:</h3>
                {props.savedBooks.map((book) => {
                  return <SearchResults
                    id={book._id}
                    key={book._id}
                    path={props.path}
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    image={book.image}
                    link={book.link}/>
                })}
            </div>
        );
    } else {
        return(
            <div id="results">
                <h3>Saved Books</h3>
                <p>Nothing to see here...yet!</p>
            </div>
        );
      }
    }
}

export default Results;