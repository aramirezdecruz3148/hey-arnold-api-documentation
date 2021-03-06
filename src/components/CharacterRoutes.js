import React from 'react';
import paginatedCharacters from '../data/characters-pagination';
import nameCharacters from '../data/characters-name';
import randomCharacter from '../data/character-random';
import characterById from '../data/character-id';
import styles from './CharacterRoutes.css';

export default function CharacterRoutes() {
  return (
    <div className={styles.flex}>
      <h3 className={styles.title}>Character Routes</h3>
      <section>
        <h4 className={styles.queries}>Get All Characters</h4>
        <h5 className={styles.endpoints}>https://hey-arnold-api.herokuapp.com/api/v1/characters</h5>
        <p className={styles.description}>
          This route will return a paginated list.
          By default, a list (or <q>page</q>), will return 20 characters.
          To change this number, simply add a <q>perPage</q> query parameter,
          e.g. ?perPage=3. You can move to the next page of results by adding
          the <q>page</q> query parameter, e.g. ?page=2.
        </p>
        <h5 className={styles.endpoints}>{'https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=3&page=2'}</h5>
        <div className={styles.codeBlock}>
          <pre>{JSON.stringify(paginatedCharacters, null, 2)}</pre>
        </div>
        <h4 className={styles.queries}>Query by Character Name</h4>
        <p className={styles.description}>
          This route does allow you to query characters by name, with
          the ability to return all partial matches regardless of casing,
          e.g. ?name=hel.
        </p>
        <h5 className={styles.endpoints}>https://hey-arnold-api.herokuapp.com/api/v1/characters?name=hel</h5>
        <div className={styles.codeBlock}>
          <pre>{JSON.stringify(nameCharacters, null, 2)}</pre>
        </div>
      </section>
      <section>
        <h4 className={styles.queries}>Get Random Character</h4>
        <p className={styles.description}>
          This route returns one random character by default. To change this number, 
          simply add a <q>count</q> query parameter, e.g. ?count=2.
        </p>
        <h5 className={styles.endpoints}>https://hey-arnold-api.herokuapp.com/api/v1/characters/random?count=2</h5>
        <div className={styles.codeBlock}>
          <pre>{JSON.stringify(randomCharacter, null, 2)}</pre>
        </div>
      </section>
      <section>
        <h4 className={styles.queries}>Get Character by Id</h4>
        <h5 className={styles.endpoints}>https://hey-arnold-api.herokuapp.com/api/v1/characters/5da237699734fdcb7bef8f51</h5>
        <div className={styles.codeBlock}>
          <pre>{JSON.stringify(characterById, null, 2)}</pre>
        </div>
      </section>
    </div>
  );
}

