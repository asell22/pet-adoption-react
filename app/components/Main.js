import React, { Component } from 'react';
import Nav from './Nav';

class Main extends Component {
  render() {
    return  (
      <div>
        <Nav />
        MAIN COMPONENT
        {this.props.children}
      </div>
    )
  }
}

export default Main;
