import React, { Component, PropTypes } from 'react';
import Header from './Header';
import { zipForm, btn } from '../styles/zipForm';

class AnimalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: '',
      zip: this.props.location.state.zip
    }
  }
  handleAnimalChange(evt) {
    this.setState({
      animal: evt.target.value
    });
  }
  handleButtonClick() {
    console.log(this.state);
    this.context.router.push({
      pathname: 'breed',
      state: {
        zip: this.state.zip,
        animal: this.state.animal
      }
    })
  }
  render() {
    return (
      <div>
        <Header text="What kind of pet did you have in mind?"/>
        <div className="center" style={zipForm}>
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
        </div>
        <button className="btn btn-default center" style={btn} onClick={() => this.handleButtonClick()}>Select</button>
      </div>

    )
  }
}

AnimalContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default AnimalContainer;
