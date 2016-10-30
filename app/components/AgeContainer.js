import React, { Component, PropTypes } from 'react';
import Age from './Age';


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
      <Age
        onAgeChange={(evt) => {this.handleAgeChange(evt)}}
        onButtonClick={() => {this.handleButtonClick()}}
      />
    )
  }
}

AgeContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default AgeContainer;
