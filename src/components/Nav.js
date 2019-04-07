import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Index</Link>
      <Link to="/page-2">Page 2</Link>
      <Link to="/page-3">Page 3</Link>
    </nav>
  )
};

export default Nav;
