import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar navbar-default" style={{marginBottom: '10px', background: '#7433DC'}}>
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="/" style={{color: '#fff'}}>Petfinder</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/#/" style={{color: '#fff'}}>Home</a></li>
            <li><a href="/#/about" style={{color: '#fff'}}>About</a></li>
            <li><a href="/#/pets" style={{color: '#fff'}}>My List</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
