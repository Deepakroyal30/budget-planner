import React from 'react'
import "./Header.css";

function Header() {
  return (
    <div className='Header'>
      <h1>Family Wellness</h1>
      <br />
      <h6>Family Therapy</h6>
      <br />
      <nav>
        <ul>
        <li className='active'>HOME</li>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>FAQ</li>
        <li>CONTACT</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
