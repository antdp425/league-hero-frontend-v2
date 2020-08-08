import React from 'react';
import { connect } from 'react-redux';
import {useState, useEffect} from "react"
import {fetchLeagues} from './actions/leagues'

function App(props) {

  useEffect(() => {
    props.fetchLeagues()
  },)

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

export default connect(mapStateToProps, {fetchLeagues})(App)
