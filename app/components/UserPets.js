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
          return (
            <div className="col-sm-3" key={arr[indx].id.$t} style={{textAlign: 'center', margin: '40px 0px'}}>
              <div style={{cursor: 'pointer'}}>
                {Object.keys(arr[indx]).length !== 0 ?
                  <img src={arr[indx].media.photos.photo[2].$t} width="150" height="150" style={{borderRadius: '5%', objectFit: 'cover'}}/>
                  :
                  <div>
                    <span style={{border: '1px solid #000', padding: '70px 0', display: 'block', background: '#ccc', borderRadius: '2%',  cursor: 'pointer'}}>NO PHOTO</span>
                  </div>
                }
              </div>
              {arr[indx].name.$t}
            </div>
          )
        })}
        </div>
    )
  }
}

export default UserPets;
