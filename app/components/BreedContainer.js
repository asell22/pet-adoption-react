import React, { Component, PropTypes } from 'react';
import { API_KEY } from '../../keys';
import Breed from './Breed';

class BreedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      breeds: [],
      breed: '',
      animal: props.location.state.animal,
      zip: props.location.state.zip,
      value: 'Select A Breed'
    }
  }
  handleBreedChange(evt) {
    this.setState({
      breed: evt.target.value,
      value: evt.target.value
    });
  }
  handleButtonClick() {
    this.context.router.push({
      pathname: 'size',
      state: {
        zip: this.state.zip,
        animal: this.state.animal,
        breed: this.state.breed
      }
    })
  }
  componentDidMount() {
    const url = `http://api.petfinder.com/breed.list?format=json&key=${API_KEY}&animal=${this.state.animal}`;
    $.ajax({
      type : 'GET',
      data : {},
      url : url+'&callback=?',
      dataType: 'json'
    }).then((data) => {
      this.setState({
        isLoading: false,
        breeds: data.petfinder.breeds.breed
      })
    })
  }
  render() {
    return (
      <Breed
        isLoading={this.state.isLoading}
        breeds={this.state.breeds}
        onBreedChange={(evt) => this.handleBreedChange(evt)}
        onButtonClick={() => this.handleButtonClick()}
        value={this.state.value}
      />
    )
  }
}

BreedContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default BreedContainer;
