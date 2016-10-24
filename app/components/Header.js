import React from 'react';

const Header = (props) => {
  return (
    <h1 style={{fontFamily: 'Lato, sans-serif', textAlign: 'center', fontSize: '50px'}}>
      {props.text}
    </h1>
  )
}

export default Header;
