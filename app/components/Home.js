import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div>
      <div>HOME PAGE</div>
      <Link to='zip'>
        <button className="btn btn-success">Get Started</button>
      </Link>

    </div>

  )
}

export default Home;
