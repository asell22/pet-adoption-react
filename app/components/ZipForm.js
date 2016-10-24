import React, { Component } from 'react';
import { zipForm, button } from '../styles/zipForm';
import Header from './Header';

class ZipForm extends Component {
  constructor() {
    super();
    this.state = {
      zip: 'blah'
    }
  }
  handleInputChange(evt) {
    this.setState({
      zip: evt.target.value
    })
  }
  handleSubmit(evt) {
    console.log('Zip:', this.state.zip)
    evt.preventDefault();
  }
  render() {
    return (
      <div>
        <Header text="Let Us Help You Find A Pet"/>
        <form className="form-inline" style={zipForm} onSubmit={(evt) =>this.handleSubmit(evt)}>
          <h2 style={{fontFamily: 'sans-serif', fontWeight: '100'}}>Enter Your Zip Code</h2>
          <div className="form-group">
            <label htmlFor="zipCodeInput" className="sr-only">Enter Zip Code</label>
            <input type="text" className="form-control" placeholder="Zip Code" onChange={(evt) => this.handleInputChange(evt)} required/>
          </div>
          <button className="btn btn-primary" type="submit" style={button}  >Find Pets</button>
        </form>
      </div>
    )
  }
}

export default ZipForm;
