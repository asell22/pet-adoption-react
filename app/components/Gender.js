import React, { Component, PropTypes } from 'react';
import Header from './Header';
import { zipForm, btn } from '../styles/zipForm';

// const Gender = (props) => {
//   console.log(props);
//   return <div>GENDER COMPONENT</div>
// }
class Gender extends Component {
  constructor(props) {
    super(props);
    this.state = props.location.state;
    this.state.heading = 'Select Gender';
    this.state.color = 'black';
    this.state.gender = '';
  }
  handleGenderChange(evt) {
    this.setState({
      gender: evt.target.value
    })
  }
  handleButtonClick() {
    this.context.router.push({
      pathname: 'results',
      state: {
        animal: this.state.animal,
        breed: this.state.breed,
        size: this.state.size,
        zip: this.state.zip,
        age: this.state.age,
        gender: this.state.gender
      }
    })
  }
  render() {
    return (
      <div>
        <Header text={this.state.heading} color={this.state.color}/>
        <div className="center" style={zipForm}>
          <select className="form-control" onChange={(evt) => this.handleGenderChange(evt)}>
            <option value="" style={{display:'none'}}>Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <button className="btn btn-default center" style={btn} onClick={() => this.handleButtonClick()}>Select</button>
      </div>
    )
  }
}

Gender.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Gender;
