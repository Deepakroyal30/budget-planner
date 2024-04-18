import React from 'react';
import './Nav.css';
import logo2 from './logo2.svg';


function Nav() {
  return (
    <div className="App">
      <header className="nav-bar">
        <div className="logo-container">
          <img src={logo2} alt="Logo" className="logo" />
          <span className="brand"><a href='https://geekfood.vercel.app/'>GeekFoods</a></span>
        </div>
        <ul className="ulStyle">
        
          <li>Home</li>
          <li>Quote</li>
          <li>Restaurants</li>
          <li>Foods</li>
          <li>Contact</li>
        </ul>
        <button className="get-started-button">Get Started</button>
      </header>
    </div>
  );
}

export default Nav;
