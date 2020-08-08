import React from 'react'
import {useEffect} from "react"
import { connect } from 'react-redux';
import {fetchTeams} from '../actions/teams'

function TeamsContainer({teams, teamsLoading, fetchTeams}) {

   useEffect(() => {
      fetchTeams()
    },[])

   return (
      <div>
         Teams
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
