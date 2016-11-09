import React, { Component, PropTypes } from 'react';

class UserPets extends Component {
  constructor() {
    super()
    this.state = {
      savedPets: []
    }
  }

  componentDidMount() {
    console.log()
    var savedPets = [];
    for (let i = 0; i < localStorage.length; i++) {
      let pet = JSON.parse(localStorage.getItem(localStorage.key(i)));
      savedPets.push(pet)
    }

    this.setState({
      savedPets
    })
    console.log('From componentDidMount:', this.state.savedPets);
  }

  handlePetClick(pet){
    this.context.router.push({
      pathname: 'pet',
      state: { pet }
    })
  }

  handleRemoveButtonClick(pet) {
    let id = pet.id.$t;
    localStorage.removeItem(id)
    console.log('Local Storage Key:', pet.id.$t);
    let savedPets = this.state.savedPets.filter((pet) => {
      return  pet.id.$t !== id
    });
    this.setState({
      savedPets
    })
  }

  render() {
    console.log('From render:', this.state.savedPets);
    return (
      <div>
        {this.state.savedPets.length !== 0 ? <h4>These are the pets you saved to your list: </h4> : <h2 style={{fontWeight: '100', textAlign: 'center'}}>You have no saved pets. Find a pet to save to your list.</h2>}
        {this.state.savedPets.map((pet, indx, arr) => {
          return (
            <div className="col-sm-3" key={arr[indx].id.$t} style={{textAlign: 'center', margin: '40px 0px'}}>
              <h4>{arr[indx].name.$t}</h4>
              <div onClick={() => this.handlePetClick(arr[indx])} style={{cursor: 'pointer'}}>
                {Object.keys(arr[indx]).length !== 0 ?
                  <img src={arr[indx].media.photos.photo[2].$t} width="150" height="150" style={{borderRadius: '5%', objectFit: 'cover'}}/>
                  :
                  <div>
                    <span style={{border: '1px solid #000', padding: '70px 0', display: 'block', background: '#ccc', borderRadius: '2%',  cursor: 'pointer'}}>NO PHOTO</span>
                  </div>
                }
              </div>

              <div style={{display: 'block', marginTop: '10px'}}>
                <button className="btn btn-danger" onClick={() => this.handleRemoveButtonClick(pet)}>Remove</button>
              </div>
            </div>
          )
        })}
        </div>
    )
  }
}

UserPets.contextTypes = {
  router: PropTypes.object.isRequired
}

export default UserPets;
