import React, { Component, PropTypes } from 'react';
import Age from './Age';


class AgeContainer extends Component {
  constructor(props) {
    super(props);
    const state = this.props.location.state
    this.state = state;
    this.state.age = '';
    this.state.heading = 'How old do you want your pet to be?',
    this.state.color = 'black'
  }

  handleAgeChange(evt) {
    this.setState({
      age: evt.target.value
    })
  }

  handleButtonClick() {
    if (this.state.age.length) {
      this.context.router.push({
        pathname: 'gender',
        state: {
          age: this.state.age,
          animal: this.state.animal,
          breed: this.state.breed,
          size: this.state.size,
          zip: this.state.zip
        }
      })
    } else {
      this.setState({
        heading: 'Please select an age group',
        color: 'red'
      })
    }
  }

  render() {
    console.log('state from age container:', this.state)
    return (
      <Age
        onAgeChange={(evt) => {this.handleAgeChange(evt)}}
        onButtonClick={() => {this.handleButtonClick()}}
        heading={this.state.heading}
        color={this.state.color}
      />
    )
  }
}

AgeContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default AgeContainer;
