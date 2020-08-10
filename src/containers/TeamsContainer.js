import React from 'react'
import {useEffect} from "react"
import { connect } from 'react-redux';
import {fetchTeams} from '../actions/teams'
import { Route, Switch } from 'react-router-dom';
import TeamList from '../components/teams/TeamList'
import TeamShow from '../components/teams/TeamShow';
import TeamForm from '../components/teams/TeamForm';


function TeamsContainer({match, teams, teamsLoading, fetchTeams}) {

   useEffect(() => {
      fetchTeams()
    },[])

   return (
      <div>
        <Switch>

        {<TeamList teams={teams} />}

        <Route path={`${match.url}/new`} 
                render={(routerProps) => 
                  <TeamForm {...routerProps} />} 
              />

        <Route path={`${match.url}/:teamId`} 
               render={(routerProps) => 
                <TeamShow {...routerProps} teams={teams}/>} 
              />

        </Switch>
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
