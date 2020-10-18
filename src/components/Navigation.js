import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <h1>COVID-19 Ontario Tracker</h1>
      <button>
        <Link to='/'> Home </Link>
      </button>
      <button>
        <Link to='/about'> About </Link>
      </button>
    </nav>
  );
}

export default Navigation;
