import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import animejs from 'animejs';

const getAnimDir = (e, item) => {
  // Returns the desired animation direction based on the nav and page numbers
  const navNum = e.target.id.split('-')[1];
  const pageNum = item.id.split('-')[1];
  console.log(` Page ${pageNum} --> Nav ${navNum}`)
  return pageNum > navNum
    ? 'right'
    : 'left';
};

const Nav = () => {
  return (
    <nav className="nav">
      <TransitionLink
        to="/"
        id="nav-1"
        className="navLink"
        exit={{
          length: 2.0,
          trigger: ({ node, e, exit, entry }) => {
            // Get the child node so the entire Layout does not animate
            const item = node.querySelector('.layout');
          
            const animDir = getAnimDir(e, item);
            const animValue = animDir === 'right'
              ? '80%'
              : '-80%';
            // Set the state on the entry so the entering page knows the correct
            // animation direction
            entry.state = { direction: animDir };

            return animejs({
              targets: [item],
              duration: 2000,
              translateX: ['0%', animValue],
              easing: 'easeInOutCubic'
            })
          }
        }}
        entry={{
          delay: 0.5,
          length: 2.0,
          trigger: ({ node, e, exit, entry }) => {
            // Get the child node so the entire Layout does not animate
            const item = node.querySelector('.layout');

            const animDir = entry.state.direction;
            const animValue = animDir === 'right'
              ? '-80%'
              : '80%';
            
            return animejs({
              targets: [item],
              duration: 2000,
              translateX: [animValue, '0%'],
              easing: 'easeInOutCubic'
            })
          }
        }}
      >
        Index
      </TransitionLink>
      <TransitionLink
        to="/page-2"
        id="nav-2"
        className="navLink"
        exit={{
          length: 2.0,
          trigger: ({ node, e, exit, entry }) => {
            // Get the child node so the entire Layout does not animate
            const item = node.querySelector('.layout');
            return animejs({
              targets: [item],
              duration: 2000,
              translateX: ['0%', '80%'],
              easing: 'easeInOutCubic'
            })
          }
        }}
        entry={{
          delay: 0.5,
          length: 2.0,
          trigger: ({ node, e, exit, entry }) => {
            const item = node.querySelector('.layout');
            return animejs({
              targets: [item],
              duration: 2000,
              translateX: ['-80%', '0%'],
              easing: 'easeInOutCubic'
            })
          }
        }}
      >
        Page 2
      </TransitionLink>
      <TransitionLink
        to="/page-3"
        id="nav-3"
        className="navLink"
        exit={{
          length: 2.0,
          trigger: ({ node, e, exit, entry }) => {
            // Get the child node so the entire Layout does not animate
            const item = node.querySelector('.layout');
            return animejs({
              targets: [item],
              duration: 2000,
              translateX: ['0%', '80%'],
              easing: 'easeInOutCubic'
            })
          }
        }}
        entry={{
          delay: 0.5,
          length: 2.0,
          trigger: ({ node, e, exit, entry }) => {
            const item = node.querySelector('.layout');
            return animejs({
              targets: [item],
              duration: 2000,
              translateX: ['-80%', '0%'],
              easing: 'easeInOutCubic'
            })
          }
        }}
      >
        Page 3
      </TransitionLink>
    </nav>
  )
};

export default Nav;
