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
        <Route path="/leagues" render={(routerProps) => <LeaguesContainer {...routerProps} />} />
        <Route path="/teams" render={(routerProps) => <TeamsContainer {...routerProps} />} />
      </>
    </Router>
  );
}

export default App