import React from 'react'
import {useEffect} from "react"
import { connect } from 'react-redux';
import {fetchTeams} from '../actions/teams'
import TeamList from '../components/TeamList'


function TeamsContainer({teams, teamsLoading, fetchTeams}) {

   useEffect(() => {
      fetchTeams()
    },[])

   return (
      <div>
         {teams.map(team => <TeamList team={team}/>)}
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
     teams: state.teamsReducer.teams,
     teamsLoading: state.teamsReducer.loading
   }
 }
 
 export default connect(mapStateToProps,{fetchTeams})(TeamsContainer)
