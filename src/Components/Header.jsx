import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      {/* Navbar starts */}
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              Movie App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" to="/">
                  Add Movie
                </Link>
                <Link className="nav-link" to="/search">
                  Search Movie
                </Link>
                <Link className="nav-link" to="/delete">
                  Delete Movie
                </Link>
                <Link className="nav-link" to="/viewAll">
                  View Movie
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </nav>
      {/* Navbar ends */}
    </div>
  );
}

export default Header