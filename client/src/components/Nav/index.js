import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary p-3">
      <a className="navbar-brand" href="/">
      <h1>Boomerang Books</h1>
      </a>
      <a href="/" className="link">Search</a>|
      <a href="/saved"className="link">Saved Books</a>

    </nav>
  );
}

export default Nav;
