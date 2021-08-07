import React from "react";
import { Link ,NavLink} from "react-router-dom";

const NavLinks = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        School
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              School List
            </NavLink>
          </li>
         
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/createschool">
              Create School
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/createschooldetail">
              Create School Details
            </NavLink>
          </li>
        </ul>
      </div>

     
    </div>
  </nav>
    </>
  );
};

export default NavLinks;
