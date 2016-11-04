import React from 'react';

const Pet = (props) => {
  console.log(props.location.state.pet);
  const { description, contact, name, media  } = props.location.state.pet
  if (media.photos) {
    return (
      <div className="row">
        <div className="col-sm-5">
          <img style={{borderRadius: '5%'}}src={media.photos.photo[2].$t} alt="" />
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-5">
          <h3>This is {name.$t}</h3>
          <p>{description.$t}</p>
          { contact.email.$st !== "" ?
            <div>
              <a href={`mailto:${contact.email.$t}`}>{contact.email.$t}</a>
              <h5>{contact.phone.$t}</h5>
            </div>
          :
            <h5>{contact.phone.$t}</h5>
          }

        </div>

      </div>
    )
    } else {
      return <div>No Photo</div>
    }
}

export default Pet;
