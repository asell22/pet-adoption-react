import React from 'react';

const Header = ({ color, text }) => {
  return (
    <h1 style={{fontFamily: 'Lato, sans-serif', textAlign: 'center', fontSize: '50px', color}}>
      {text}
    </h1>
  )
}

export default Header;
