import React, { Component } from 'react';
import { API_KEY } from '../../keys';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = props.location.state;
    this.state.pets = [];
  }

  componentDidMount() {
    http://api.petfinder.com/pet.find?key=92c1ab693c2e94984374d634551c27ab&animal=dog&breed=Boxer&size=S&age=Young&sex=F&location=94952&description=full&format=json
    const url = `http://api.petfinder.com/pet.find?key=${API_KEY}&animal=${this.state.animal}&breed=${this.state.breed}&size=${this.state.size}&age=${this.state.age}&sex=${this.state.gender}&location=${this.state.zip}&description=full&format=json`;
    console.log('URL', url);

    $.ajax({
      type : 'GET',
      url : url+'&callback=?',
      dataType: 'json'
    }).then((data) => {
      // console.log('RESULTS:', data.petfinder.pets.pet)
      console.log('DATA:', data);
      this.setState({
        pets: [].concat(data.petfinder.pets.pet)
      });
      console.log('PETS:', this.state.pets)
    })
  }

  render() {
    return (
      <div className="row">
        {this.state.pets !== undefined ? this.state.pets.map((pet, indx) =>
          <div className="col-sm-4" style={{textAlign: 'center', margin: '40px 0px'}} key={indx.toString()}>
            {Object.keys(pet.media).length !== 0 ? <img src={pet.media.photos.photo[2].$t} width="150" height="150" alt="" style={{borderRadius: '5%', objectFit: 'cover'}}/> : <div ><span style={{border: '1px solid #000', padding: '50px 0', display: 'block', margin: '20px', background: '#ccc', borderRadius: '2%'}}>NO PHOTO</span></div>}
            <h5>Meet {pet.name.$t}</h5>
          </div>) :
          <h2>Sorry no Matches</h2>
        }
      </div>
    )
  }
}


export default Results;
