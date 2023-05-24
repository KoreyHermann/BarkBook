import React from 'react';
import '../assets/Navbar.css';

function Navbar({ currentTab, handleTabChange }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">BarkBook</div>
      <div className="navbar-right">
        <a
          href="#SignupForm"
          onClick={() => handleTabChange('SignupForm')}
          className={currentTab === 'SignupForm' ? 'nav-link active' : 'nav-link'}
        >
          Sign Up
        </a>
        <a
          href="#Adoption"
          onClick={() => handleTabChange('Adoption')}
          className={currentTab === 'Adoption' ? 'nav-link active' : 'nav-link'}
        >
          Adoption
        </a>
        <a
          href="#PetServices"
          onClick={() => handleTabChange('PetServices')}
          className={currentTab === 'PetServices' ? 'nav-link active' : 'nav-link'}
        >
          Pet Services
        </a>
        <a
          href="#PetProfile"
          onClick={() => handleTabChange('PetProfile')}
          className={currentTab === 'PetProfile' ? 'nav-link active' : 'nav-link'}
        >
          Pet Profile
        </a>
      </div>
    </nav>
  );
}

export default Navbar;