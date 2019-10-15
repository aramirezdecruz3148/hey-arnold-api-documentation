import React from 'react';
import githubLogo from '../assets/githubLogo.png';
import twitterLogo from '../assets/twitterLogo.png';
import linkedinLogo from '../assets/linkedinLogo.png';
import myLogo from '../assets/myLogo.png';
import styles from './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div>
        <span>©<img src={myLogo} /></span>
      </div>
      <span>
        <img src={githubLogo} />
        <img src={twitterLogo} />
        <img src={linkedinLogo} />
      </span>
    </footer>
  );
}
