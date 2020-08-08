import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {useState, useEffect} from "react"
import {fetchLeagues} from './actions/leagues'
import {fetchTeams} from './actions/teams'
import Home from './containers/HomeContainer'
import LeaguesContainer from './containers/LeaguesContainer'
import TeamsContainer from './containers/TeamsContainer'

function App(props) {

  useEffect(() => {
    props.fetchLeagues()
    props.fetchTeams()
  },[])

  return (
    <Router>
      <>
        <Route exact path="/" render={Home}/>
        <Route exact path="/leagues" render={LeaguesContainer}/>
        <Route exact path="/teams" render={TeamsContainer} />
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
