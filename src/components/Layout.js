import React, { Fragment } from 'react';

import Nav from './Nav';

import '../index.css';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Nav />
      <div className="layoutBackground"></div>
      <div className="layout">
        {children}
      </div>
    </Fragment>
  )
};

export default Layout;
