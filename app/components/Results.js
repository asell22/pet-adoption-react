import React, { Component, PropTypes } from 'react';
import { API_KEY } from '../../keys';
import PetsResult from './PetsResult';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = props.location.state;
    this.state.pets = [];
  }

  componentDidMount() {
    const url = `http://api.petfinder.com/pet.find?key=${API_KEY}&animal=${this.state.animal}&breed=${this.state.breed}&size=${this.state.size}&age=${this.state.age}&sex=${this.state.gender}&location=${this.state.zip}&description=full&format=json&count=300`;

    $.ajax({
      type : 'GET',
      url : url+'&callback=?',
      dataType: 'json'
    }).then((data) => {
      console.log('DATA:', data.petfinder.pets);
      if (Object.keys(data.petfinder.pets).length === 0) {
        this.setState({
          pets: undefined
        })
      } else {
        this.setState({
          pets: [].concat(data.petfinder.pets.pet)
        });
        console.log('PETS:', this.state.pets)
      }

    })
  }

  handlePetClick(pet) {
    console.log(pet);
    this.context.router.push({
      pathname: 'pet',
      state: { pet }
    })
  }

  render() {
    return (
      <div className="row">
        {this.state.pets !== undefined ?
          <PetsResult pets={this.state.pets} onPetClick={(pet) => this.handlePetClick(pet)}/> :
          <h2>Sorry no Matches</h2>
        }
      </div>
    )
  }
}

Results.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Results;
