import React, { Component } from "react";
//Stateless Functional Component
const Navbar = totalCounters => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-seconday">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
