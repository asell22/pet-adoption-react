import React, { Component } from 'react';
import { body, zipForm } from '../styles/zipForm';

class ZipForm extends Component {
  render() {
    return (
      <form className="form-inline" style={zipForm}>
        <h2>Enter Zip Code</h2>
        <div className="form-group">
          <label for="zipCodeInput" className="sr-only">Enter Zip Code</label>
          <input type="text" className="form-control" placeholder="Zip Code" required/>
        </div>
        <button className="btn btn-primary" type="submit">Find Pets</button>
      </form>
    )
  }
}

export default ZipForm;
