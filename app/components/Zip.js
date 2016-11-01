import React, { PropTypes } from 'react';
import Header from './Header';
import { zipForm, button } from '../styles/zipForm';
import { Link } from 'react-router';

const Zip = ({ onZipSubmit, onInputChange, zip, color, subheading }) => {
  return (
    <div>
      <Header text="Let Us Help You Find A Pet"/>
      <form className="form-inline" style={zipForm} onSubmit={onZipSubmit}>
        <h2 style={{fontFamily: 'sans-serif', fontWeight: '100', color}}>{subheading}</h2>
        <div className="form-group">
          <label htmlFor="zipCodeInput" className="sr-only">Enter Zip Code</label>
          <input type="text" className="form-control" placeholder="Zip Code" onChange={onInputChange} value={zip} required/>
        </div>
        <button className="btn btn-primary" type="submit" style={button}  >Find Pets</button>
      </form>
    </div>
  )
}

Zip.propTypes = {
  onZipSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  zip: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired
}


export default Zip;
