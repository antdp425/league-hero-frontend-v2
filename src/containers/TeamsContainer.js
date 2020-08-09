import React from 'react'
import {useEffect} from "react"
import { connect } from 'react-redux';
import {fetchTeams} from '../actions/teams'
import TeamList from '../components/TeamList'
import { Route } from 'react-router-dom';
import TeamShow from '../components/TeamShow';


function TeamsContainer({match, teams, teamsLoading, fetchTeams}) {

   useEffect(() => {
      fetchTeams()
    },[])

   return (
      <div>
        {<TeamList teams={teams} />}

        <Route path={`${match.url}/:teamId`} 
               render={(routerProps) => 
                <TeamShow {...routerProps} teams={teams}/>} 
              />
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
