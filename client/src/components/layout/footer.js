import React from "react";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">Import Express</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default footer;
