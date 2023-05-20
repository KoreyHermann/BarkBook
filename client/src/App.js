import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PetProfile from './components/PetProfile';
import Social from './components/Social';
import HealthTracking from './components/HealthTracking';
import PetServices from './components/PetServices';
import Adoption from './components/Adoption';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/pet-profile" component={PetProfile} />
          <Route path="/social" component={Social} />
          <Route path="/health-tracking" component={HealthTracking} />
          <Route path="/pet-services" component={PetServices} />
          <Route path="/adoption" component={Adoption} />
          {/* home will switch to social when logged in */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;