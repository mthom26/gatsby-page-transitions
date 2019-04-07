import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/" className="navLink">Index</Link>
      <Link to="/page-2" className="navLink">Page 2</Link>
      <Link to="/page-3" className="navLink">Page 3</Link>
    </nav>
  )
};

export default Nav;
