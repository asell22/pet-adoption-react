import React, { Component } from 'react';
import { API_KEY } from '../../keys';

class Breed extends Component {
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
  componentDidMount() {
    console.log('STATE:', this.state)
    const url = `http://api.petfinder.com/breed.list?format=json&key=${API_KEY}&animal=${this.state.animal}`;
    $.ajax({
      type : 'GET',
      data : {},
      url : url+'&callback=?' ,
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


    // Fetch breeds from PETFINDER API, then update state
  }
  render() {
    return this.state.isLoading === true
      ? <p>LOADING</p>
      : <p>BREED COMPONENT</p>
  }
}

export default Breed;
