import React from 'react';
import { connect } from 'react-redux';
import {useState, useEffect} from "react"
import {fetchLeagues} from './actions/leagues'
import {fetchTeams} from './actions/teams'

function App(props) {

  useEffect(() => {
    // Update the document title using the browser API
    props.fetchLeagues()
    props.fetchTeams()
  },[])

  return (
    <div>
      Hi
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    leagues: state.leagues,
    teams: state.teams
  }
}

export default connect(mapStateToProps, {fetchLeagues, fetchTeams})(App)
