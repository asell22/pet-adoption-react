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
  componentDidMount() {
    console.log('STATE:', this.state)
    // Fetch breeds from PETFINDER API, then update state
  }
  render() {
    return this.state.isLoading === true
      ? <p>LOADING</p>
      : <p>BREED COMPONENT</p> 
  }
}

export default Breed;
