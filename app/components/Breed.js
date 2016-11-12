import React, { PropTypes } from 'react';
import { v4 } from 'node-uuid';
import Header from './Header';
import { zipForm, btn } from '../styles/zipForm';



const Breed = ({ isLoading, breeds, onBreedChange, onButtonClick, value, headerText, color }) => {
  return (
    isLoading === true
    ? <Header text="Loading..." />
    : <div>
        <Header text={headerText} color={color} />
        <div className="center" style={zipForm}>
          <select id="select-breed" className="form-control" onChange={onBreedChange}>
            <optgroup label="Select A Breed">
              <option value="" style={{display:'none'}}>{value}</option>
              {breeds.map((breed) => {
                return <option key={v4()} value={breed.$t} >{breed.$t}</option>
              })}
            </optgroup>
          </select>
        </div>
        <button className="btn btn-default center" style={btn} onClick={onButtonClick}>Select</button>
      </div>

  )
}

Breed.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  breeds: PropTypes.array.isRequired,
  onBreedChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Breed;
