import React, { Component } from 'react';
import Header from './Header';

class Form extends Component {
  render() {
    console.log(this.props.location.state.zip);
    return (
      <div>
        <Header text="Fill Out The Information Below" />
      </div>
    )
  }
}

export default Form;
