import React from 'react';
import Header from './Header';
import { zipForm, btn } from '../styles/zipForm';

const Age = ({ color, heading, onAgeChange, onButtonClick }) => {
  return (
    <div>
      <Header text={heading} color={color}/>
      <div className="center" style={zipForm}>
        <select className="form-control" onChange={onAgeChange}>
          <optgroup label="Select Age">
            <option value="" style={{display:'none'}}>Select Age </option>
            <option value="Baby">Baby</option>
            <option value="Young">Young</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </optgroup>
        </select>
      </div>
      <button className="btn btn-default center" style={btn} onClick={onButtonClick}>Select</button>
    </div>
  )
}

export default Age;
