import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
      deleted: false
    }
  }

  handleSave = event => {
    event.preventDefault();
    this.setState({ saved: true });
    
    const bookData = {
      title: this.props.title,
      authors: this.props.authors,
      link: this.props.link,
      image: this.props.image,
      description: this.props.description
    }
    API.saveBook(bookData).then(
      (response) => {
        console.log(response);
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    );
  }

  handleDelete = event => {
    event.preventDefault();
    this.setState({ deleted: true });
    API.deleteBook(this.props.id).then(
      (response) => {
        console.log(response);
        Router.dispatch(this.props.location, null)
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    );
  }
  render() {
    return (
      <div className="searchResult" id={(this.props.id) ? this.props.id : null} style={{ display: this.state.deleted ? "none" : "block" }}>
        <div className="wrapper">
          <div className="row">
            <div className="aboutBook">
              <h4>{this.props.title}</h4>
              <p>By: {(this.props.authors) ? this.props.authors.join(", ") : "N/A"}</p>
            </div>
          </div>

          <div className="row bookRowInfo">
            <div className="col-sm-3">
              {(this.props.image) ? <img src={
                // if thumbnail exists on this.props.img use that else leave src empty
                (this.props.image) ? this.props.image : ""
              } alt="book cover" /> : null}
              <div className="btnDiv">
                {// if link to book exists include View button else do not
                  (this.props.link) ? <a href={this.props.link}><button type="button" name="view" className="view">View</button></a> : null
                }
                {// if this.props.path is "/" display save button else display Delete button
                  (this.props.path === "/") ? <button type="button" name="save" onClick={this.handleSave} disabled={this.state.saved} className="save">{(this.state.saved) ? "Saved" : "Save"}</button> : <button type="button" name="Delete" onClick={this.handleDelete} disabled={this.state.deleted} className="delete">Delete</button>
                }
                </div>
              </div>
            <div className="col-sm-9">
              <p>{(this.props.description) ? this.props.description : "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResults;