import React from "react";
import Results from "../components/Results";
import API from "../utils/API";


// saved inherets from React Component
class Saved extends React.Component {
  constructor(props) {
    // by using super we call the parent element with props parameter
    super(props);
    this.state = {
      savedBooks: []
    }
  }

  componentDidMount() {
    this.loadSavedBooks();
  }

  loadSavedBooks = () => {
    API.getBooks().then(
      (response => {
        this.setState({ savedBooks: response.data });
      }))
        .catch(
          (error => {
            console.log(error);
        })
    )
  }


  render() {
    console.log(this.state.savedBooks);
    return (
      <main>
        <Results savedBooks={this.state.savedBooks} path={this.props.match.path}/>
      </main>
    )
  }
}

export default Saved;