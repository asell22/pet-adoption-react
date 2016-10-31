import React, { Component, PropTypes } from 'react';
import Animal from './Animal';

class AnimalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: '',
      zip: this.props.location.state.zip,
      text: 'What kind of pet did you have in mind?',
      color: 'black'
    }
  }
  handleAnimalChange(evt) {
    this.setState({
      animal: evt.target.value
    });
  }
  handleButtonClick() {
    if (this.state.animal.length) {
      this.context.router.push({
        pathname: 'breed',
        state: {
          zip: this.state.zip,
          animal: this.state.animal
        }
      })
    } else {
      this.setState({
        text: ' Please select an animal type',
        color: 'red'
      })
    }
  }
  render() {
    return (
      <Animal
        onAnimalChange={(evt) => this.handleAnimalChange(evt)}
        onButtonClick={() => this.handleButtonClick()}
        headerText={this.state.text}
        color={this.state.color}
        />
    )
  }
}

AnimalContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default AnimalContainer;
