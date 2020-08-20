import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import TeamList from '../components/teams/TeamList'
import TeamShow from '../components/teams/TeamShow';
import TeamForm from '../components/teams/TeamForm';
import NewTeamButton from '../components/teams/NewTeamButton';


function TeamsContainer({match, leagues, teams}) {

   return (
     <div>
     <Switch>
        <Route exact path ={`${match.url}`}
                 render={(routerProps) =>
                  <>
                    <br/> 
                    <h3>Teams</h3>
                    <br/> 
                    <Link to={`/teams/new`}>
                      <NewTeamButton />
                    </Link> 
                    <TeamList {...routerProps} teams={teams} />
                  </>
                 }>
          </Route>

        <Route path={`${match.url}/new`} 
                render={(routerProps) => 
                  <TeamForm {...routerProps} leagues={leagues}/>} 
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
     leagues: state.leaguesReducer.leagues,
     teams: state.teamsReducer.teams,
     teamsLoading: state.teamsReducer.loading
   }
 }
 
 export default connect(mapStateToProps)(TeamsContainer)
