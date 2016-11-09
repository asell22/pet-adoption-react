import React, { Component, PropTypes } from 'react';

class Pet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pet: props.location.state.pet
    }
  }

  handleButtonClick() {
    const petStr = JSON.stringify(this.state.pet);
    const id = this.state.pet.id.$t;
    console.log('ID:', id);
    console.log('petStr:', petStr);
    localStorage.setItem(id, petStr);
    console.log('item saved');
    this.context.router.push({
      pathname: 'pets'
    })
  }

  render() {
    if (this.state.pet.media.photos) {
      return (
        <div className="row">
          <div className="col-sm-5">
            <img style={{borderRadius: '5%'}}src={this.state.pet.media.photos.photo[2].$t} alt="" />
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-5">
            <h3>This is {this.state.pet.name.$t}</h3>
            <p>{this.state.pet.description.$t}</p>
            { this.state.pet.contact.email.$st !== ""   ?
              <div style={{display: 'inline-block'}}>
                <a href={`mailto:${this.state.pet.contact.email.$t}`}>{this.state.pet.contact.email.$t}</a>
                <h5>{this.state.pet.contact.phone.$t}</h5>
              </div>
            :
              <div>
                <h5>{this.state.pet.contact.phone.$t}</h5>
              </div>
            }
            <button style={{display: 'inline-block', margin: '0 0 40px 150px'}} className="btn btn-primary" onClick={() => this.handleButtonClick()}>Add To List</button>
          </div>
        </div>
      )
      } else {
        return <div>No Photo</div>
      }
  }
}

Pet.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Pet;
