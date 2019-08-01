import React from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      bookData: []
    }
  }
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSearch = event => {
    event.preventDefault();
    const title = this.state.title.replace(/\s/g, "+");

    API.searchBooks(title)
      .then(
        (response) => {
          console.log(response.data.items)
          this.setState({ title: "", bookData: response.data.items })
      }
    )
  }

  render() {
    return (
      <main>
        <Form handleChange={this.handleChange} handleSearch={this.handleSearch} />

        {(this.state.bookData.length > 0) ?
          <Results bookData={this.state.bookData} path={this.props.match.path} /> : null
        }
      </main>
    )
  }
}

export default Search;