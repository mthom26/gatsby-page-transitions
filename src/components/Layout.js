import React, { Fragment } from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import Nav from './Nav';

import '../index.css';

const Layout = ({ children, id }) => {
  // console.log(`Render: ${id}`);
  return (
    <Fragment>
      <Nav id={id} />
      <div id={id} className="layout">
        {children}
      </div>
      <TransitionPortal level="bottom">
        <div id={`layoutBgGradient-${id}`} className="layoutBgGradient"></div>
        <div className="layoutBackground"></div>
      </TransitionPortal>
    </Fragment>
  )
};

export default Layout;
