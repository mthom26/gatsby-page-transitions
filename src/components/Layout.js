import React, { Fragment } from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import Nav from './Nav';

import '../index.css';

const Layout = ({ children, id }) => {
  // console.log(`Render: ${id}`);
  return (
    <Fragment>
      {/* Switching this TransitionPortal to below the Nav and div will fix 
          the weird css and layout problems when run after building.
      */}
      <TransitionPortal level="bottom">
        <div id={`layoutBgGradient-${id}`} className="layoutBgGradient"></div>
        <div className="layoutBackground"></div>
      </TransitionPortal>
      <Nav id={id} />
      <div id={id} className="layout">
        {children}
      </div>
    </Fragment>
  )
};

export default Layout;
