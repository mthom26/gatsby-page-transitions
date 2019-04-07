import React from 'react';

import Nav from './Nav';

import '../index.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
};

export default Layout;
