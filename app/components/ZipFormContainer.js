import React, { Component } from 'react';


import ZipForm from './ZipForm'

class ZipFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      zip: 'blah'
    }
  }
  handleInputChange(evt) {
    this.setState({
      zip: evt.target.value
    })
  }
  handleFormSubmit(evt) {
    console.log('Zip:', this.state.zip)
    evt.preventDefault();
  }
  render() {
    return (
      <ZipForm
        onInputChange={(evt) => this.handleInputChange(evt)}
        onFormSubmit={(evt) => this.handleFormSubmit(evt)}
      />
    )
  }
}

export default ZipFormContainer;
