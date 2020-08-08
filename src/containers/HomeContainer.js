import React from 'react'
import {useEffect} from "react"
import { connect } from 'react-redux';
import {fetchLeagues} from '../actions/leagues'
import {fetchTeams} from '../actions/teams'

function HomeContainer({leagues, leaguesLoading, teams, teamsLoading, fetchLeagues, fetchTeams}) {

   useEffect(() => {
      fetchLeagues()
      fetchTeams()
    },[])

   return (
      <div>
         { teamsLoading ? "Loading..." : `${teams.length} Teams(s)`}
         <br/>
         { leaguesLoading ? "Loading..." : `${leagues.length} Leagues(s)`}
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
     leagues: state.leaguesReducer.leagues,
     leaguesLoading: state.leaguesReducer.loading,

     teams: state.teamsReducer.teams,
     teamsLoading: state.leaguesReducer.loading
   }
 }
 
 export default connect(mapStateToProps,{fetchTeams, fetchLeagues})(HomeContainer)