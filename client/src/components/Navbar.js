import React from 'react';

function Navbar({ currentTab, handleTabChange }) {
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#SignupForm"
            onClick={() => handleTabChange('SignupForm')}
            className={currentTab === 'SignupForm' ? 'nav-link active' : 'nav-link'}
          >
            Sign Up
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Adoption"
            onClick={() => handleTabChange('Adoption')}
            className={currentTab === 'Adoption' ? 'nav-link active' : 'nav-link'}
          >
            Adoption
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#PetServices"
            onClick={() => handleTabChange('PetServices')}
            className={currentTab === 'PetServices' ? 'nav-link active' : 'nav-link'}
          >
            Pet Services
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#PetProfile"
            onClick={() => handleTabChange('PetProfile')}
            className={currentTab === 'PetProfile' ? 'nav-link active' : 'nav-link'}
          >
            Pet Profile
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

