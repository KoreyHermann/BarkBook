import React from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom'; // add Switch // 
import Navbar from './components/Navbar';
import PetProfile from './components/PetProfile';
import Social from './components/Social';
import HealthTracking from './components/HealthTracking';
import PetServices from './components/PetServices';
import Adoption from './components/Adoption';

function App() {
 
  return (
    <div>
      <Navbar />
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