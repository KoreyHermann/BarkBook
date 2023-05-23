import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
      <li>
          <Link to="/SignupForm">Sign Up</Link>
        </li>
        <li>
          <Link to="/PetProfile">Pet Profile</Link>
        </li>
        <li>
          <Link to="/Social">Social</Link>
        </li>
        <li>
          <Link to="/pet-services">Pet Services</Link>
        </li>
        <li>
          <Link to="/adoption">Adoption</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;