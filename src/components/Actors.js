import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index}>
          <h1>{actor.name}</h1>
          <p>Actor's movies:</p>
          <ul>
          {actor.movies.map((movie, index)=> (
            <li key={index}>{movie}</li>
          ))}
          </ul>
        </div>
      ))}
      </div>
  );
};

export default Actors;
