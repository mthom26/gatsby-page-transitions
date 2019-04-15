import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import animejs from 'animejs';

const TRANSITION_DELAY = 1.2;
const TRANSITION_LEN = 1.2;

const getAnimData = (e, item) => {
  // Returns the desired animation data based on the nav and page numbers
  const navNum = e.target.id.split('-')[1];
  const pageNum = item.id.split('-')[1];
  
  return {
    from: pageNum,
    to: navNum,
    dir: pageNum > navNum ? 'right' : 'left'
  };
};

const getAnim = (item, bg, animData, animType) => {
  // Determine the translateX value of the animation based on animData and
  // whether the animation is an 'entry' or 'exit' for the layout
  let translateValue = [];
  let opacityValue = [];

  if(animType === 'exit') {
    translateValue = animData.dir === 'right'
      ? ['0%', '40%']
      : ['0%', '-40%'];
    opacityValue = [1, 0];
  }
  if(animType === 'entry') {
    translateValue = animData.dir === 'right'
      ? ['-40%', '0%']
      : ['40%', '0%'];
    opacityValue = [0, 1];
  }

  // Get animation for the background gradient
  let bgTranslateValue = [];
  const from = `-${animData.from}00vw`;
  const to = `-${animData.to}00vw`;

  if(animType === 'exit') {
    bgTranslateValue = [from, to];
  }
  if(animType === 'entry') {
    bgTranslateValue = [to, to];
  }

  return animejs.timeline({
    duration: 1200,
    easing: 'easeInOutCubic'
  }).add({
    targets: [item],
    translateX: translateValue,
    opacity: opacityValue
  }).add({
    targets: [bg],
    translateX: bgTranslateValue
  }, 0);
};

const Nav = ({ id }) => {
  return (
    <nav className="nav">
      <TransitionLink
        to="/about"
        id="nav-0"
        className="navLink"
        exit={{
          length: TRANSITION_LEN,
          trigger: ({ node, e, exit, entry }) => {
            // Get the child node so the entire Layout does not animate
            const item = node.querySelector('.layout');
            const animData = getAnimData(e, item);

            const bg = document.querySelector(`#layoutBgGradient-${id}`);
            // Set the state on the entry so the entering page knows the correct
            // animation data
            entry.state = { animData: animData };
            return getAnim(item, bg, animData, 'exit');
          }
        }}
        entry={{
          delay: TRANSITION_DELAY,
          length: TRANSITION_LEN,
          trigger: ({ node, e, exit, entry }) => {
            // Get the child node so the entire Layout does not animate
            const item = node.querySelector('.layout');
            const bg = document.querySelector('#layoutBgGradient-page-0');
            // Get animation data from state
            const animData = entry.state.animData;
            return getAnim(item, bg, animData, 'entry');
          }
        }}
      >
        About
      </TransitionLink>
      <TransitionLink
        to="/"
        id="nav-1"
        className="navLink"
        exit={{
          length: TRANSITION_LEN,
          trigger: ({ node, e, exit, entry }) => {
            const item = node.querySelector('.layout');
            const bg = document.querySelector(`#layoutBgGradient-${id}`);
            const animData = getAnimData(e, item);
            entry.state = { animData: animData };
            return getAnim(item, bg, animData, 'exit');
          }
        }}
        entry={{
          delay: TRANSITION_DELAY,
          length: TRANSITION_LEN,
          trigger: ({ node, e, exit, entry }) => {
            const item = node.querySelector('.layout');
            const bg = document.querySelector('#layoutBgGradient-page-1');
            const animData = entry.state.animData;
            return getAnim(item, bg, animData, 'entry');
          }
        }}
      >
        Home
      </TransitionLink>
      <TransitionLink
        to="/contact"
        id="nav-2"
        className="navLink"
        exit={{
          length: TRANSITION_LEN,
          trigger: ({ node, e, exit, entry }) => {
            const item = node.querySelector('.layout');
            const bg = document.querySelector(`#layoutBgGradient-${id}`);
            const animData = getAnimData(e, item);
            entry.state = { animData: animData };
            return getAnim(item, bg, animData, 'exit');
          }
        }}
        entry={{
          delay: TRANSITION_DELAY,
          length: TRANSITION_LEN,
          trigger: ({ node, e, exit, entry }) => {
            const item = node.querySelector('.layout');
            const bg = document.querySelector('#layoutBgGradient-page-2');
            const animData = entry.state.animData;
            return getAnim(item, bg, animData, 'entry');
          }
        }}
      >
        Contact
      </TransitionLink>
    </nav>
  )
};

export default Nav;
