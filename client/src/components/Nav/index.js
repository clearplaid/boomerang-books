import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary p-4">
      <div className="container">
        <a className="navbar-brand" href="/">
        <h1>Boomerang Books</h1>
        </a>
        <div className="links">
          <a href="/" className="link">Search Books</a>
          <a href="/saved"className="link">Saved Books</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
