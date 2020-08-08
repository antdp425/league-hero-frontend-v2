import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {useState, useEffect} from "react"
import {fetchLeagues} from './actions/leagues'
import {fetchTeams} from './actions/teams'
import LeaguesContainer from './containers/LeaguesContainer'
import TeamsContainer from './containers/TeamsContainer'


function App(props) {

  useEffect(() => {
    // Update the document title using the browser API
    props.fetchLeagues()
    props.fetchTeams()
  },[])

  return (
    <>
    <LeaguesContainer />
    <TeamsContainer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    leagues: state.leaguesReducer.leagues,
    teams: state.teamsReducer.teams
  }
}

export default connect(mapStateToProps, {fetchLeagues, fetchTeams})(App)
