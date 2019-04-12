import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import animejs from 'animejs';

const getAnimDir = (e, item) => {
  // Returns the desired animation direction based on the nav and page numbers
  const navNum = e.target.id.split('-')[1];
  const pageNum = item.id.split('-')[1];
  // console.log(` Page ${pageNum} --> Nav ${navNum}`)
  return pageNum > navNum
    ? 'right'
    : 'left';
};

const getAnim = (item, animDir, animType) => {
  // Determine the translateX value of the animation based on animDir and
  // whether the animation is an 'entry' or 'exit' and return the final
  // animation
  let translateValue = [];
  let opacityValue = [];

  if(animType === 'exit') {
    translateValue = animDir === 'right'
      ? ['0%', '80%']
      : ['0%', '-80%'];
    opacityValue = [1, 0];
  }
  if(animType === 'entry') {
    translateValue = animDir === 'right'
      ? ['-80%', '0%']
      : ['80%', '0%'];
    opacityValue = [0, 1];
  }

  return animejs({
    targets: [item],
    duration: 2000,
    translateX: translateValue,
    opacity: opacityValue,
    easing: 'easeInOutCubic'
  });
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
            // Set the state on the entry so the entering page knows the correct
            // animation direction
            entry.state = { direction: animDir };
            return getAnim(item, animDir, 'exit');
          }
        }}
        entry={{
          delay: 0.5,
          length: 2.0,
          trigger: ({ node, e, exit, entry }) => {
            // Get the child node so the entire Layout does not animate
            const item = node.querySelector('.layout');
            // Get animation direction from state
            const animDir = entry.state.direction;
            return getAnim(item, animDir, 'entry');
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
            const item = node.querySelector('.layout');
            const animDir = getAnimDir(e, item);
            entry.state = { direction: animDir };
            return getAnim(item, animDir, 'exit');
          }
        }}
        entry={{
          delay: 0.5,
          length: 2.0,
          trigger: ({ node, e, exit, entry }) => {
            const item = node.querySelector('.layout');
            const animDir = entry.state.direction;
            return getAnim(item, animDir, 'entry');
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
            const item = node.querySelector('.layout');
            const animDir = getAnimDir(e, item);
            entry.state = { direction: animDir };
            return getAnim(item, animDir, 'exit');
          }
        }}
        entry={{
          delay: 0.5,
          length: 2.0,
          trigger: ({ node, e, exit, entry }) => {
            const item = node.querySelector('.layout');
            const animDir = entry.state.direction;
            return getAnim(item, animDir, 'entry');
          }
        }}
      >
        Page 3
      </TransitionLink>
    </nav>
  )
};

export default Nav;
