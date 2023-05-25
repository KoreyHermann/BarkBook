import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PetProfile from './components/PetProfile';
import PetServices from './components/PetServices';
import Adoption from './components/Adoption';
import SignupForm from './components/SignupForm';

function App() {
  const [currentTab, setCurrentTab] = useState('SignupForm');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleTabChange = (page) => setCurrentTab(page);
  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <div>
      <Navbar
        currentTab={currentTab}
        handleTabChange={handleTabChange}
        isLoggedIn={isLoggedIn}
        username={username}
      />
      <main>
        {currentTab === 'SignupForm' && (
          <SignupForm
            isLoggedIn={isLoggedIn}
            setLoggedIn={setLoggedIn}
            setUsername={setUsername}
            handleTabChange={handleTabChange}
            handleLogout={handleLogout}
          />
        )}
        {currentTab === 'Adoption' && <Adoption />}
        {currentTab === 'PetServices' && <PetServices />}
        {currentTab === 'PetProfile' && <PetProfile />}
      </main>
    </div>
  );
}

export default App;