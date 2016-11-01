import React from 'react';
import Header from './Header';
import { zipForm, btn } from '../styles/zipForm';

const Age = ({ color, heading, onAgeChange, onButtonClick }) => {
  return (
    <div>
      <Header text={props.heading} color={props.color}/>
      <div className="center" style={zipForm}>
        <select className="form-control" onChange={props.onAgeChange}>
          <option value="" style={{display:'none'}}>Select Age </option>
          <option value="baby">Baby</option>
          <option value="young">Young</option>
          <option value="adult">Adult</option>
          <option value="senior">Senior</option>
        </select>
      </div>
      <button className="btn btn-default center" style={btn} onClick={props.onButtonClick}>Select</button>
    </div>
  )
}

export default Age;
