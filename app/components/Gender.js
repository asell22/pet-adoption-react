import React, { Component } from 'react';
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
  }
  render() {
    return (
      <div>
        <Header text={this.state.heading} color={this.state.color}/>
        <div className="center" style={zipForm}>
          <select className="form-control">
            <option value="" style={{display:'none'}}>Select Gender</option>
            <option value="small">Male</option>
            <option value="medium">Female</option>
          </select>
        </div>
        <button className="btn btn-default center" style={btn}>Select</button>
      </div>
    )
  }
}

export default Gender;
