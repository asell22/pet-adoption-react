import React, { PropTypes } from 'react';
import Header from './Header';
import { zipForm, btn } from '../styles/zipForm';

const Animal = ({ onButtonClick, onAnimalChange }) => {
  return (
    <div>
      <Header text="What kind of pet did you have in mind?"/>
      <div className="center" style={zipForm}>
        <select className="form-control" onChange={onAnimalChange}>
          <option value="" style={{display:'none'}}>Select An Animal Type </option>
          <option value="barnyard">Barnyard</option>
          <option value="bird">Bird</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="horse">Horse</option>
          <option value="pig">Pig</option>
          <option value="reptile">Reptile</option>
          <option value="smallfurry">Small And Furry</option>
        </select>
      </div>
      <button className="btn btn-default center" style={btn} onClick={onButtonClick}>Select</button>
    </div>
  )
}

Animal.propTypes = {
  onAnimalChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired
}

export default Animal;
