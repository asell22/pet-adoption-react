import React, { Component } from 'react';

class UserPets extends Component {
  constructor() {
    super()
    this.state = {
      savedPets: []
    }
  }

  componentDidMount() {
    for (let i = 0; i < localStorage.length; i++) {
      let pet = JSON.parse(localStorage.getItem(localStorage.key(i)));
      this.state.savedPets.push(pet);
    }

    console.log(this.state.savedPets);
  }

  render() {
    return <div>List of Pets</div>
  }
}

export default UserPets;
