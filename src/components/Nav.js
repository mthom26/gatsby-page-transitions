import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import animejs from 'animejs';

const Nav = () => {
  return (
    <nav className="nav">
      <TransitionLink
        to="/"
        className="navLink"
        exit={{
          length: 6.0,
          trigger: ({ node, e, exit, entry }) => {
            // Get the child node so the entire Layout does not animate
            const item = node.querySelector('.layout');
            console.log(item)
            return animejs({
              targets: [item],
              duration: 3000,
              translateX: ['0%', '10%'],
              easing: 'easeInOutCubic'
            })
          }
        }}
        entry={{
          delay: 3.0,
          length: 6.0,
          trigger: ({ node, e, exit, entry }) => {
            const item = node.querySelector('.layout');
            return animejs({
              targets: [item],
              duration: 3000,
              translateX: ['-10%', '0%'],
              easing: 'easeInOutCubic'
            })
          }
        }}
      >
        Index
      </TransitionLink>
      <TransitionLink
        to="/page-2"
        className="navLink"
      >
        Page 2
      </TransitionLink>
      <TransitionLink
        to="/page-3"
        className="navLink"
      >
        Page 3
      </TransitionLink>
    </nav>
  )
};

export default Nav;
