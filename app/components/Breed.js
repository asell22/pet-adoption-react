import React from 'react';
import { v4 } from 'node-uuid';

const Breed = ({ isLoading, breeds }) => {
  return (
    isLoading === true
    ? <p>LOADING</p>
    : <ul>
        {breeds.map((breed) => {
          return <li key={v4()}>{breed.$t}</li>
        })}
      </ul>
  )
}

export default Breed;
