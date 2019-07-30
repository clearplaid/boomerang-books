import React from 'react';
import axios from 'axios';

export default class Search extends React.Component {

  state = {
    booksSearched: []
  }

  componentDidMount() {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=')
      .then(res => {
        console.log(res);
        this.setState({ booksSearched: res.data });
      });
  }

  render() {
    return <ul>{this.state.booksSearched.map(book => <li>{book.title}</li>)}</ul>;
  }
}


