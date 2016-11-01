import React, { Component, PropTypes } from 'react';
import Zip from './Zip'

class ZipContainer extends Component {
  constructor() {
    super();
    this.state = {
      zip: '',
      color: 'black',
      subheading: 'Enter Your Zip Code'
    }
  }
  handleInputChange(evt) {
    this.setState({
      zip: evt.target.value
    })
  }
  handleZipSubmit(evt) {
    evt.preventDefault();
    if (!isNaN(+this.state.zip) && this.state.zip.length === 5) {
      this.context.router.push({
        pathname: '/animal',
        state: this.state
      })
      this.setState({
        zip: ''
      });
    } else {
      this.setState({
        zip: '',
        color: 'red',
        subheading: 'Enter A Valid Zip Code'
      });
    }
  }
  render() {
    return (
      <Zip
        color={this.state.color}
        subheading={this.state.subheading}
        onInputChange={(evt) => this.handleInputChange(evt)}
        onZipSubmit={(evt) => this.handleZipSubmit(evt)}
        zip={this.state.zip}
      />
    )
  }
}

ZipContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ZipContainer;
