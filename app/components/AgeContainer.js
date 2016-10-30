import React, { Component, PropTypes } from 'react';
import Header from './Header';
import { zipForm, btn } from '../styles/zipForm';

class AgeContainer extends Component {
  constructor(props) {
    super(props);
    const state = this.props.location.state
    this.state = state;
    this.state.age = '';
  }

  handleAgeChange(evt) {
    this.setState({
      age: evt.target.value
    })
  }

  handleButtonClick() {
    this.context.router.push({
      pathname: 'gender',
      state: this.state
    })
  }

  render() {
    return (
      <div>
        <Header text="How old would you like your pet to be?"/>
        <div className="center" style={zipForm}>
          <select className="form-control" onChange={(evt) => this.handleAgeChange(evt)}>
            <option value="" style={{display:'none'}}>Select An Age</option>
            <option value="Baby">Baby</option>
            <option value="Young">Young</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <button className="btn btn-default center" style={btn} onClick={() => this.handleButtonClick()}>Select</button>
      </div>
    )
  }
}

AgeContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default AgeContainer;
