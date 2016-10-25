import React from 'react';
import Header from './Header';
import { zipForm, button } from '../styles/zipForm';

const ZipForm = ({ onFormSubmit, onInputChange }) => {
  return (
    <div>
      <Header text="Let Us Help You Find A Pet"/>
      <form className="form-inline" style={zipForm} onSubmit={onFormSubmit}>
        <h2 style={{fontFamily: 'sans-serif', fontWeight: '100'}}>Enter Your Zip Code</h2>
        <div className="form-group">
          <label htmlFor="zipCodeInput" className="sr-only">Enter Zip Code</label>
          <input type="text" className="form-control" placeholder="Zip Code" onChange={onInputChange} required/>
        </div>
        <button className="btn btn-primary" type="submit" style={button}  >Find Pets</button>
      </form>
    </div>
  )
}


export default ZipForm;
