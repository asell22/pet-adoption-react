import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar navbar-default" style={{marginBottom: '10px'}}>
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">Petfinder</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/#/">Home</a></li>
            <li><a href="/#/about">About</a></li>
            <li><a href="/#/pets">My List</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
