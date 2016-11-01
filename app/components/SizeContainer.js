import React, { Component, PropTypes } from 'react';
import Size from './Size';

class SizeContainer extends Component {
  constructor(props) {
    super(props);
    const state = props.location.state;
    this.state = state;
    this.state.size = '';
    this.state.color = 'black';
    this.state.subheading = 'Select a size';
  }
  handleSizeChange(evt) {
    this.setState({
      size: evt.target.value
    })
  }
  handleButtonClick() {
    if (this.state.size.length) {
      this.context.router.push({
        pathname: 'age',
        state: this.state
      })
    } else {
      this.setState({
        subheading: 'Please select a size',
        color: 'red'
      })
    }
  }
  render() {
    console.log('STATE:', this.state)
    return (
      <Size
        onSizeChange={(evt) => this.handleSizeChange(evt)}
        onButtonClick={() => this.handleButtonClick()}
        color={this.state.color}
        subheading={this.state.subheading}
      />
    )
  }
}

SizeContainer.contextTypes = {
  router: PropTypes.object.isRequired
}
export default SizeContainer;
