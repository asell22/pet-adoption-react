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
      var savedPets = [];
      let pet = JSON.parse(localStorage.getItem(localStorage.key(i)));
      savedPets.push(pet)
    }

    this.setState({
      savedPets
    })
    console.log('From componentDidMount:', this.state.savedPets);
  }

  render() {
    console.log('From render:', this.state.savedPets);
    return (
      <div>
        <h4>List of Pets</h4>
        {this.state.savedPets.map((pet, indx, arr) => {
          return <div key={arr[indx].id.$t}>{arr[indx].name.$t}</div>
        })}
      </div>
    )

  }
}

export default UserPets;
