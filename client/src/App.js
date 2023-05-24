import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PetProfile from './components/PetProfile';
import PetServices from './components/PetServices';
import Adoption from './components/Adoption';
// import SignupForm from './components/SignupForm.js';

function App() {
  const [currentTab, setCurrentTab] = useState("SignupForm");

  const handleTabChange = (page) => setCurrentTab(page);

  return (
    <div>
      <Navbar currentTab={currentTab} handleTabChange={handleTabChange} />
      <main>
        {/* {currentTab === "SignupForm" && <SignupForm />} */}
        {currentTab === "Adoption" && <Adoption />}
        {currentTab === "PetServices" && <PetServices />}
        {currentTab === "PetProfile" && <PetProfile />}
      </main>
    </div>
  );
}

export default App;