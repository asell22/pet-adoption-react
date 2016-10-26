import React, { Component, PropTypes } from 'react';
import ZipForm from './ZipForm'

class ZipFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      zip: ''
    }
  }
  handleInputChange(evt) {
    this.setState({
      zip: evt.target.value
    })
  }
  handleFormSubmit(evt) {
    evt.preventDefault();
    this.context.router.push({
      pathname: '/animal',
      state: { zip: this.state.zip }
    })
    this.setState({
      zip: ''
    });
  }
  render() {
    return (
      <ZipForm
        onInputChange={(evt) => this.handleInputChange(evt)}
        onFormSubmit={(evt) => this.handleFormSubmit(evt)}
        zip={this.state.zip}
      />
    )
  }
}

ZipFormContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ZipFormContainer;
