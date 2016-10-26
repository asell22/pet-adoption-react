import React, { Component } from 'react';
import Header from './Header';
import { zipForm } from '../styles/zipForm';

const Animal = () => {
  return (
    <div>
      <Header  text="What kind of pet did you have in mind?"/>
      <div className="center" style={zipForm}>
        <select className="form-control" onChange={(evt) => this.handleGenderChange(evt)}>
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
    </div>

  )
}

export default Animal;
