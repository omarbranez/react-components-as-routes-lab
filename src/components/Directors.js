import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h1>{director.name}</h1>
          <ul>Director's Movies:</ul>
          {director.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Directors
