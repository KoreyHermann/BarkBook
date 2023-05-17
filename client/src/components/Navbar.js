import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/pet-profile">Pet Profile</Link>
        </li>
        <li>
          <Link to="/social">Social</Link>
        </li>
        <li>
          <Link to="/health-tracking">Health</Link>
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