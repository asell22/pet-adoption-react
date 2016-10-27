import React, { Component } from 'react';
import { API_KEY } from '../../keys';
import Breed from './Breed';

class BreedContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      breeds: [],
      breed: '',
      animal: props.location.state.animal,
      zip: props.location.state.zip
    }
  }
  handleAnimalChange(evt) {
    this.setState({
      breed: evt.target.value
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
    console.log('STATE:', this.state)
    const url = `http://api.petfinder.com/breed.list?format=json&key=${API_KEY}&animal=${this.state.animal}`;
    $.ajax({
      type : 'GET',
      data : {},
      url : url+'&callback=?',
      dataType: 'json'
    }).then((data) => {
      console.log(data);
      this.setState({
        isLoading: false,
        breeds: data.petfinder.breeds.breed
      })
    }).then(() => {
      console.log(this.state);
    })
  }
  render() {
    return (<Breed
      isLoading={this.state.isLoading}
      breeds={this.state.breeds}
    />)
  }
}

export default BreedContainer;
