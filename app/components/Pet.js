import React from 'react';

const Pet = (props) => {
  console.log(props.location.state.pet);
  const { description } = props.location.state.pet
  return <div>{description.$t}</div>
}

export default Pet;
