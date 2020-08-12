import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer'
import LeaguesContainer from './containers/LeaguesContainer'
import TeamsContainer from './containers/TeamsContainer'
import LeagueHeroNav from './components/LeagueHeroNav';
import { connect } from 'react-redux';
import { fetchLeagues } from './actions/leagues';
import { fetchTeams } from './actions/teams';
import { Container } from 'react-bootstrap';


function App({fetchLeagues, fetchTeams}) {

  useEffect(()=>{
    fetchLeagues()
    fetchTeams()
  },[])

  return (
    <Router>
      <>
        <LeagueHeroNav />
          <Container>
            <Route exact path="/" render={() => <HomeContainer />}/>
            <Route path="/leagues" render={(routerProps) => <LeaguesContainer {...routerProps} />} />
            <Route path="/teams" render={(routerProps) => <TeamsContainer {...routerProps} />} />
          </Container>
      </>
    </Router>
  );
}

// export default App
export default connect(null, {fetchLeagues, fetchTeams})(App)