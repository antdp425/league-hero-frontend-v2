import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer'
import LeaguesContainer from './containers/LeaguesContainer'
import TeamsContainer from './containers/TeamsContainer'
import Navbar from './components/Navbar';

function App() {
  
  return (
    <Router>
      <>
        <Navbar />
        <Route exact path="/" render={() => <HomeContainer />}/>
        <Route exact path="/leagues" render={() => <LeaguesContainer />} />
        <Route exact path="/teams" render={() => <TeamsContainer />} />
      </>
    </Router>
  );
}

export default App