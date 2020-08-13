import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer'
import LeaguesContainer from './containers/LeaguesContainer'
import TeamsContainer from './containers/TeamsContainer'
import LeagueHeroNav from './components/LeagueHeroNav';
import { connect } from 'react-redux';
import { fetchLeagues } from './actions/leagues';
import { fetchTeams } from './actions/teams';
import { Container } from 'react-bootstrap';


function App({fetchLeagues, fetchTeams, leagues, teams}) {

  useEffect(()=>{
    fetchLeagues()
    fetchTeams()
  },[leagues.length , teams.length])

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

const mapStateToProps = (state) => {
  return {
    leagues: state.leaguesReducer.leagues,
    teams: state.teamsReducer.teams
  }
}

export default connect(mapStateToProps, {fetchLeagues, fetchTeams})(App)