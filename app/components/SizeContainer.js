import React, { Component, PropTypes } from 'react';
import Header from './Header';
import { zipForm, btn } from '../styles/zipForm';

class SizeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: this.props.location.state.animal,
      breed: this.props.location.state.breed,
      zip: this.props.location.state.zip,
      size: ''
    }
  }
  handleSizeChange(evt) {
    this.setState({
      size: evt.target.value
    })
  }
  handleButtonClick() {
    this.context.router.push({
      pathname: 'age'
    })
  }
  render() {
    // console.log(this.state)
    return (
      <div>
        <Header text="Select a size"/>
        <div className="center" style={zipForm}>
          <select className="form-control" onChange={(evt) => this.handleSizeChange(evt)}>
            <option value="" style={{display:'none'}}>Select Size </option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
          </select>
        </div>
        <button className="btn btn-default center" style={btn} onClick={() => this.handleButtonClick()}>Select</button>
      </div>
    )
  }
}

SizeContainer.contextTypes = {
  router: PropTypes.object.isRequired
}
export default SizeContainer;
