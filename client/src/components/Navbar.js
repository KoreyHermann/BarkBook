import React from 'react';
import '../assets/Navbar.css';

function Navbar({ isLoggedIn, username, activeTab, handleTabChange, handleLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">BarkBook</div>
      <div className="navbar-right">
        {isLoggedIn && (
          <>
            <a className="nav-link" href="#SignupForm" onClick={() => handleTabChange('SignupForm')}>
              {username}
            </a>
          </>
        )}
        {!isLoggedIn && (
          <a
            href="#SignupForm"
            onClick={() => handleTabChange('SignupForm')}
            className={`nav-link ${activeTab === 'SignupForm' ? 'active' : ''}`}
          >
            Sign Up
          </a>
        )}
        <a
          href="#Adoption"
          onClick={() => handleTabChange('Adoption')}
          className={`nav-link ${activeTab === 'Adoption' ? 'active' : ''}`}
        >
          Adoption
        </a>
        <a
          href="#PetServices"
          onClick={() => handleTabChange('PetServices')}
          className={`nav-link ${activeTab === 'PetServices' ? 'active' : ''}`}
        >
          Pet Services
        </a>
        <a
          href="#PetProfile"
          onClick={() => handleTabChange('PetProfile')}
          className={`nav-link ${activeTab === 'PetProfile' ? 'active' : ''}`}
        >
          Pet Profile
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

