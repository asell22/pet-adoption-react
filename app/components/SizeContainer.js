import React, { Component, PropTypes } from 'react';
import Size from './Size';

class SizeContainer extends Component {
  constructor(props) {
    super(props);
    const state = props.location.state;
    this.state = state;
    this.state.size = '';
  }
  handleSizeChange(evt) {
    this.setState({
      size: evt.target.value
    })
  }
  handleButtonClick() {
    this.context.router.push({
      pathname: 'age',
      state: this.state
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
