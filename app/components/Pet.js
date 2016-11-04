import React, { Component } from 'react';

class Pet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pet: props.location.state.pet
    }
  }

  handleButtonClick() {
    console.log(this.state.pet)
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
// const Pet = (props) => {
//   console.log(props.location.state.pet);
//   const { description, contact, name, media, id } = props.location.state.pet
//   if (media.photos) {
//     return (
//       <div className="row">
//         <div className="col-sm-5">
//           <img style={{borderRadius: '5%'}}src={media.photos.photo[2].$t} alt="" />
//         </div>
//         <div className="col-sm-1"></div>
//         <div className="col-sm-5">
//           <h3>This is {name.$t}</h3>
//           <p>{description.$t}</p>
//           { contact.email.$st !== ""   ?
//             <div style={{display: 'inline-block'}}>
//               <a href={`mailto:${contact.email.$t}`}>{contact.email.$t}</a>
//               <h5>{contact.phone.$t}</h5>
//             </div>
//           :
//             <div>
//               <h5>{contact.phone.$t}</h5>
//             </div>
//           }
//           <button style={{display: 'inline-block', margin: '0 0 40px 150px'}} className="btn btn-primary" onClick={() => buttonClick()}>Add To List</button>
//
//
//         </div>
//
//       </div>
//     )
//     } else {
//       return <div>No Photo</div>
//     }
// }

export default Pet;
