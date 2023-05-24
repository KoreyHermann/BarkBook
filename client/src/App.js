import React, { useState } from 'react';
// import { BrowserRouter as Router,  Route } from 'react-router-dom'; // add Switch // 
import Navbar from './components/Navbar';
import PetProfile from './components/PetProfile';
import PetServices from './components/PetServices';
import Adoption from './components/Adoption';
import SignupForm from './components/SignupForm.js'

function App() {

  const [currentTab, setCurrentTab] = useState("SignupForm");

  const renderTab = () => {
    if (currentTab === "SignupForm") {
      return <SignupForm />;
    }
    if (currentTab === "Adoption") {
      return <Adoption />;
    }
    if (currentTab === "PetServices") {
      return <PetServices />;
    }
    if (currentTab === "PetProfile") {
      return <PetProfile />;
    }
    return <SignupForm />;
  };
  const handleTabChange = (page) => setCurrentTab(
    page
  )

  return (
    <div>
      <Navbar currentTab={currentTab} handleTabChange={handleTabChange} />
      <main>
        <Adoption />
        <PetServices />
        <PetProfile />
      </main>
    </div>
  );
}

export default App;








// <Router>
//   <div>
//     <Navbar />
//     {/* <Switch> */}
//       <Route exact path="/PetProfile" component={PetProfile} />
//       <Route path="/social" component={Social} />
//       <Route path="/health-tracking" component={HealthTracking} />
//       <Route path="/pet-services" component={PetServices} />
//       <Route path="/adoption" component={Adoption} />
//       {/* home will switch to social when logged in */}
//     {/* </Switch> */}
//   </div>
// </Router>