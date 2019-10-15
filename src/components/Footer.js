import React from 'react';
import githubLogo from '../assets/githubLogo.png';
import twitterLogo from '../assets/twitterLogo.png';
import linkedinLogo from '../assets/linkedinLogo.png';
import styles from './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div>
        <a href='https://alexramirezdecruz.com/' rel='noopener noreferrer' target='_blank'><h4>© Alex Ramirez de Cruz</h4></a>
      </div>
      <span>
        <a href='https://github.com/aramirezdecruz3148' rel='noopener noreferrer' target='_blank'><img className={styles.logo} src={githubLogo} /></a>
        <a href='https://twitter.com/dev_de_cruz' rel='noopener noreferrer' target='_blank'><img className={styles.logoT} src={twitterLogo} /></a>
        <a href='https://www.linkedin.com/in/alex-ramirez-de-cruz/' rel='noopener noreferrer' target='_blank'><img className={styles.logo} src={linkedinLogo} /></a>
      </span>
    </footer>
  );
}
