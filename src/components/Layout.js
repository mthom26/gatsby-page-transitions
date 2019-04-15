import React, { Fragment } from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import Nav from './Nav';

import '../index.css';

const Layout = ({ children, id }) => {
  return (
    <Fragment>
      <TransitionPortal level="bottom">
        <div className="layoutBackground"></div>
      </TransitionPortal>
      <TransitionPortal level="middle">
        <div id={`layoutBgGradient-${id}`} className="layoutBgGradient"></div>
      </TransitionPortal>
      <Nav />
      <div id={id} className="layout">
        {children}
      </div>
    </Fragment>
  )
};

export default Layout;
