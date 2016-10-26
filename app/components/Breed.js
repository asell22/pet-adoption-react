import React, { Component } from 'react';

class Breed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      breeds: [],
      breed: '',
      animal: props.location.state.animal,
      zip: props.location.state.zip
    }
  }
  render() {
    // console.log(this.props)
    console.log(this.state)
    return <div>BREED COMPONENT</div>
  }
}

export default Breed;
