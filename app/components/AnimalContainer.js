import React, { Component, PropTypes } from 'react';
import Animal from './Animal';

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
      <Animal
        onAnimalChange={(evt) => this.handleAnimalChange(evt)}
        onButtonClick={() => this.handleButtonClick()}
        />
    )
  }
}

AnimalContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default AnimalContainer;
