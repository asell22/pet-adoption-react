import React from 'react';
import { v4 } from 'node-uuid';
import Header from './Header';
import { zipForm, btn } from '../styles/zipForm';

const Breed = ({ isLoading, breeds, onBreedChange, onButtonClick }) => {
  return (
    isLoading === true
    ? <Header text="Loading..." />
    : <div>
        <Header text="Select a breed"/>
        <div className="center" style={zipForm}>
          <select className="form-control" onChange={onBreedChange}>
            <option value="" style={{display:'none'}}>Select An Breed </option>
            {breeds.map((breed) => {
              return <option key={v4()} value={breed.$t}>{breed.$t}</option>
            })}
          </select>
        </div>
        <button className="btn btn-default center" style={btn} onClick={onButtonClick}>Select</button>
      </div>

  )
}

export default Breed;
