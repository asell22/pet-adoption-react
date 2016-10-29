import React, { Component } from 'react';

class AgeContainer extends Component {
  constructor(props) {
    super(props);
    const state = this.props.location.state
    this.state = state;
    this.state.age = '';
  }

  render() {
    console.log('STATE: ', this.state)
    return <div>AGE CONTAINER</div>
  }
}

// const AgeContainer = (props) => {
//   console.log('PROPS', props)
//   return <div>AGE CONTAINER</div>
// }

export default AgeContainer;
