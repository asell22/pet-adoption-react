import React, { Component, PropTypes } from 'react';
import Size from './Size';

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
      pathname: 'age',
      state: {
        animal: this.props.location.state.animal,
        breed: this.props.location.state.breed,
        zip: this.props.location.state.zip,
        size: this.state.size
      }
    })
  }
  render() {
    return (
      <Size
        onSizeChange={(evt) => this.handleSizeChange(evt)}
        onButtonClick={() => this.handleButtonClick()}
      />
    )
  }
}

SizeContainer.contextTypes = {
  router: PropTypes.object.isRequired
}
export default SizeContainer;
