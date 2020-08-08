import React from 'react'
import {useEffect} from "react"
import { connect } from 'react-redux';
import {fetchLeagues} from '../actions/leagues'
import {fetchTeams} from '../actions/teams'

function HomeContainer({leagues, teams, fetchLeagues, fetchTeams}) {

   useEffect(() => {
      fetchLeagues()
      fetchTeams()
    },[])

   return (
      <div>
         {teams.length} Team(s)
         <br/>
         {leagues.length} League(s)
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
     leagues: state.leaguesReducer.leagues,
     teams: state.teamsReducer.teams
   }
 }
 
 export default connect(mapStateToProps, {fetchTeams, fetchLeagues})(HomeContainer)