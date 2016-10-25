import React, { Component } from 'react';
import Header from './Header';

class PetForm extends Component {
  render() {
    console.log(this.props.location.state.zip);
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
            <div className="col-sm-1">
              <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  Size
                  <span className="caret" style={{marginLeft: '29px'}}></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
            </div>
            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Age</label>
            <div className="col-sm-2">
              <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  Age
                  <span className="caret" style={{marginLeft: '29px'}}></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-group" style={{marginBottom: '30px'}}>
            <label htmlFor="breed" className="col-sm-2 col-sm-offset-1 control-label">Breed (optional)</label>
            <div className="col-sm-2">
              <input type="text" className="form-control" placeholder="Breed" />
            </div>
            <label htmlFor="inputPassword3" className="col-sm-1 col-sm-offset-1 control-label">Gender</label>
            <div className="col-sm-2">
              <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  Gender
                  <span className="caret" style={{marginLeft: '10px'}}></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
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
