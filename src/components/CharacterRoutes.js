import React from 'react';
import allCharacters from '../data/characters';
import paginatedCharacters from '../data/characters-pagination';
import nameCharacters from '../data/characters-name';
import randomCharacter from '../data/character-random';
import characterById from '../data/character-id';

export default function CharacterRoutes() {
  return (
    <>
      <h3>Character Routes</h3>
      <section>
        <h4>Get All Characters</h4>
        <h5>https://hey-arnold-api.herokuapp.com/api/v1/characters</h5>
        <div>
          <pre>{JSON.stringify(allCharacters, null, 2)}</pre>
        </div>
        <h5>Pagination</h5>
        <p>
          This route will return a paginated list.
          By default, a list (or <q>page</q>), will return 20 characters.
          To change this number, simply add a <q>perPage</q> query parameter,
          e.g. ?perPage=3. You can move to the next page of results by adding
          the <q>page</q> query parameter, e.g. ?page=2.
        </p>
        <h5>{'https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=3&page=2'}</h5>
        <div>
          <pre>{JSON.stringify(paginatedCharacters, null, 2)}</pre>
        </div>
        <h5>Query by Character Name</h5>
        <p>
          This route does allow you to query characters by name, with
          the ability to return all partial matches regardless of casing,
          e.g. ?name=hel
        </p>
        <h5>https://hey-arnold-api.herokuapp.com/api/v1/characters?name=hel</h5>
        <div>
          <pre>{JSON.stringify(nameCharacters, null, 2)}</pre>
        </div>
      </section>
      <section>
        <h4>Get Random Character</h4>
        <p>
          This route returns one random character by default. To change this number, 
          simply add a <q>count</q> query parameter, e.g. ?count=2.
        </p>
        <h5>https://hey-arnold-api.herokuapp.com/api/v1/characters/random?count=2</h5>
        <div>
          <pre>{JSON.stringify(randomCharacter, null, 2)}</pre>
        </div>
      </section>
      <section>
        <h4>Get Character by Id</h4>
        <h5>https://hey-arnold-api.herokuapp.com/api/v1/characters/5da237699734fdcb7bef8f51</h5>
        <div>
          <pre>{JSON.stringify(characterById, null, 2)}</pre>
        </div>
      </section>
    </>
  );
}

