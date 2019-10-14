import React from 'react';
import Title from '../components/Title';
import Overview from '../components/Overview';
import CharacterRoutes from '../components/CharacterRoutes';
import GifRoutes from '../components/GifRoutes';
import Footer from '../components/Footer';

export default function DocContainer() {
  return (
    <>
      <Title />
      <Overview />
      <CharacterRoutes />
      <GifRoutes />
      <Footer />
    </>
  );
}
