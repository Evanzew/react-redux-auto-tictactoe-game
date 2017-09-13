import React from "react";
import { Link } from "react-router-dom";
const Header = ({ children }) =>
  <div>
    <header>
      <div className="navbar navbar-default nav-phone-fixed" role="navigation">
        <div className="course-container container-fill">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <span className="logo" />
            </a>
            <a
              className="navbar-toggle search-padding"
              data-toggle="collapse"
              href="#search"
            >
              <span className="glyphicon glyphicon-search " />
            </a>
            <a className="navbar-toggle" data-toggle="collapse" href="#menu">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </a>
          </div>

          <div id="menu" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/" className="left-line catalog">
                  Game
                </Link>
              </li>
              <li>
                <Link to="/footer" className="left-line catalog">
                  Moves
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>;

export default Header;
