import React, { Component } from 'react';
import Header from './Header';


class PetForm extends Component {
  constructor() {
    super();
    this.state = {
      size: 'small',
      age: 'baby',
      gender: 'female'
    }
  }
  handleChange(evt) {
    console.log('Value:', evt.target.value);
  }
  render() {

    console.log('Zip:', this.props.location.state.zip);
    return (
      <div>
        <Header text="Fill Out The Information Below" />
        <form className="form-horizontal" style={{marginTop: '80px'}}>
          <div className="form-group">
            <label htmlFor="animal" className="col-sm-2 col-sm-offset-1 control-label">Type of Animal</label>
            <div className="col-sm-2">
              <input type="text" className="form-control" placeholder="Animal" required/>
            </div>
            <label htmlFor="inputPassword3" className="col-sm-1 col-sm-offset-1 control-label">Size</label>
            <div className="col-sm-2">
              <select className="form-control" onChange={(evt) => this.handleChange(evt)}>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
                <option value="extra-large">extra-large</option>
              </select>
            </div>
            <label htmlFor="inputPassword3" className="col-sm-1 control-label">Age</label>
            <div className="col-sm-2">
              <select className="form-control" onChange={(evt) => this.handleChange(evt)}>
                <option value="baby">Baby</option>
                <option value="young">Young</option>
                <option value="adult">Adult</option>
                <option value="senior">Senior</option>
              </select>
            </div>
          </div>
          <div className="form-group" style={{marginBottom: '30px'}}>
            <label htmlFor="breed" className="col-sm-2 col-sm-offset-1 control-label">Breed (optional)</label>
            <div className="col-sm-2">
              <input type="text" className="form-control" placeholder="Breed" />
            </div>
            <label htmlFor="inputPassword3" className="col-sm-1 col-sm-offset-1 control-label">Gender</label>
            <div className="col-sm-2">
              <select className="form-control" onChange={(evt) => this.handleChange(evt)}>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-5 col-sm-2">
              <button type="submit" className="btn btn-lg btn-default" style={{padding: '10px 40px', marginTop: '30px'}} >Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default PetForm;
