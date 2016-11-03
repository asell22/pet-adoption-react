import React from 'react';

const Pet = (props) => {
  console.log(props.location.state.pet);
  const { description, contact, name, media  } = props.location.state.pet
  if (media.photos) {
    return (
      <div>
        <img src={media.photos.photo[2].$t} alt="" />
        <h3>This is {name.$t}</h3>
        <p>{description.$t}</p>
      </div>
    )
    } else {
      return <div>No Photo</div>
    }
}

export default Pet;
