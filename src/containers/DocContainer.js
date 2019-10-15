import React from 'react';
import Title from '../components/Title';
import Overview from '../components/Overview';
import CharacterRoutes from '../components/CharacterRoutes';
import GifRoutes from '../components/GifRoutes';
import Footer from '../components/Footer';
import styles from './DocContainer.css';

export default function DocContainer() {
  return (
    <div className={styles.background}>
      <Title />
      <Overview />
      <CharacterRoutes />
      <GifRoutes />
      <Footer />
    </div>
  );
}
