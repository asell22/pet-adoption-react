import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div style={{textAlign: 'center', fontFamily: 'Lato'}}>
      <h1>Welcome</h1>
      <h3>This application helps people adopt pets from various animal shelters throughout the United States.</h3>
      <h4 style={{marginTop: '30px'}}>Click get started to find a pet.</h4>

      <Link to='zip'>
        <button className="btn btn-success" style={{background: '	#7433DC', border: '5px solid 	#7433DC', marginTop: '5px'}}>Get Started</button>
      </Link>
    </div>

  )
}

export default Home;
