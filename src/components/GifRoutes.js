import React from 'react';
import randomGifs from '../data/gif-random';
import gifById from '../data/gif-id';
import styles from './GifRoutes.css';

export default function GifRoutes() {
  return (
    <div className={styles.flex}>
      <h3 className={styles.title}>Gif Routes</h3>
      <section>
        <h4>Get All GIFs</h4>
        <h5>https://hey-arnold-api.herokuapp.com/api/v1/gifs</h5>
        <p>This route will return a list of 49 Hey Arnold GIFs.</p>
      </section>
      <section>
        <h4>Get Random GIF</h4>
        <p>
          This route returns one random GIF by default. To change this number, 
          simply add a <q>count</q> query parameter, e.g. ?count=2.
        </p>
        <h5>https://hey-arnold-api.herokuapp.com/api/v1/gifs/random?count=2</h5>
        <div className={styles.codeBlock}>
          <pre>{JSON.stringify(randomGifs, null, 2)}</pre>
        </div>
      </section>
      <section>
        <h4>Get GIF by Id</h4>
        <h5>https://hey-arnold-api.herokuapp.com/api/v1/gifs/5da23754845fd2cb76d59ee7</h5>
        <div className={styles.codeBlock}>
          <pre>{JSON.stringify(gifById, null, 2)}</pre>
        </div>
      </section>
    </div>
  );
}

