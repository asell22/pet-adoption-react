import React, { Component, PropTypes } from 'react';
import Header from './Header';
import { zipForm, btn } from '../styles/zipForm';

class AnimalContainer extends Component {
  constructor() {
    super();
    this.state = {
      animal: ''
    }
  }
  handleAnimalChange(evt) {
    this.setState({
      animal: evt.target.value
    });
  }
  render() {
    return (
      <div>
        <Header text="What kind of pet did you have in mind?"/>
        {/* <div className="center" style={zipForm}>
          <select className="form-control" onChange={(evt) => this.handleAnimalChange(evt)} >
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
        </div> */}
        <div className="dropdown" style={{textAlign: 'center'}}>
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{margin:'10px auto', padding: '10px 12px 10px 15px'}}>
            Select An Animal Type
            <span className="caret" style={{marginLeft: '20px'}} ></span>
          </button>
          <ul className="dropdown-menu" style={{margin:'10px auto', width: '200px', left: '50%', marginLeft:'-100px'}} aria-labelledby="dropdownMenu1">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>
        <button className="btn btn-default center" style={btn}>Select</button>
      </div>

    )
  }
}

AnimalContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default AnimalContainer;
