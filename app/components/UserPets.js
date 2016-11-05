import React, { Component } from 'react';

class UserPets extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log(localStorage.length);
  }

  render() {
    return <div>List of Pets</div>
  }
}

export default UserPets;
