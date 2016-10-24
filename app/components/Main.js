import React, { Component } from 'react';
import Nav from './Nav';

class Main extends Component {
  render() {
    return  (
      <div>
        <Nav />
        <div className="container">
          <h1 style={{fontFamily: 'Lato, sans-serif'}}>
            Let Us Help You Find a Pet
          </h1>

          {this.props.children}
        </div>
      </div>

    )
  }
}

export default Main;
