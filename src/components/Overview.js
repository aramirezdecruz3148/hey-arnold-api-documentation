import React from 'react';
import styles from './Overview.css';

export default function Overview() {
  return (
    <div className={styles.flex}>
      <h3 className={styles.title}>Overview</h3>
      <p>
        The Hey Arnold API provides character information and GIFs from
        Nickelodeons Hey Arnold. Below you will find information on the 
        routes and endpoints. The information is publicly sourced and 
        I do not claim to own it.
      </p>
      <q>Move it Footballhead!!!</q>
    </div>
  );
}
