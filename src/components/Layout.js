import React, { Fragment } from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import Nav from './Nav';

import '../index.css';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <TransitionPortal level="bottom">
        <div className="layoutBackground"></div>
      </TransitionPortal>
      <Nav />
      <div className="layout">
        {children}
      </div>
    </Fragment>
  )
};

export default Layout;
