import React, { useState } from 'react';
import '../assets/Signup.css';

const SignupForm = ({ isLoggedIn, setLoggedIn, setUsername, handleLogout }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameInput, setUsernameInput] = useState('');

  const handleSignupLogin = (e) => {
    e.preventDefault();

    if (email && password && usernameInput) {
      setLoggedIn(true);
      setUsername(usernameInput);
    }
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    setUsername('');
    setEmail('');
    setPassword('');
    handleLogout();
  };

  if (isLoggedIn) {
    return (
      <div className="pet-profile">
        <h2 className="title">Welcome {usernameInput}!</h2>
        <button className="submit-btn" onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }

  return (
    <div className="pet-profile">
      <h2 className="title">Signup/Login</h2>
      <form className="form" onSubmit={handleSignupLogin}>
        <label className="label">Email</label>
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="label">Username</label>
        <input
          className="input"
          type="text"
          placeholder="Username"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />

        <button className="submit-btn" type="submit">Sign up/Login</button>
      </form>
    </div>
  );
};

export default SignupForm;