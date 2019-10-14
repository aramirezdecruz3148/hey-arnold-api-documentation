import React from 'react';
import githubLogo from '../assets/githubLogo.png';
import twitterLogo from '../assets/twitterLogo.png';
import linkedinLogo from '../assets/linkedinLogo.png';
import myLogo from '../assets/myLogo.png';

export default function Footer() {
  return (
    <footer>
      <div>
        <span>©<img src={myLogo} /></span>
      </div>
      <div>
        <img src={githubLogo} />
        <img src={twitterLogo} />
        <img src={linkedinLogo} />
      </div>
    </footer>
  );
}
