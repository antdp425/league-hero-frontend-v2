import React from 'react'
import { connect } from 'react-redux';
import {fetchLeagues, clearFlags} from '../actions/leagues'
import { Route, Switch } from 'react-router-dom';
import LeagueList from '../components/leagues/LeagueList'
import LeagueShow from '../components/leagues/LeagueShow';
import LeagueForm from '../components/leagues/LeagueForm';
import LeagueEditForm from '../components/leagues/LeagueEditForm';
import TeamEditForm from '../components/teams/TeamEditForm';


function LeaguesContainer({match, leagues, clearFlags}) {

   return (
      <div>
        <Switch>
          <Route exact path ={`${match.url}`}
                 render={(routerProps) => 
                  <LeagueList {...routerProps} leagues={leagues} />
                 }>
          </Route>

          <Route path={`${match.url}/new`} 
                  render={(routerProps) => 
                    <LeagueForm {...routerProps} />} 
                />
          <Route
            onLeave={clearFlags} 
            path={`${match.url}/:leagueId/edit`} 
                render={(routerProps) => 
                  <LeagueEditForm {...routerProps} leagues={leagues}/>} 
                />

          <Route path={`/leagues/:leagueId/teams/:teamId/edit`} 
                      render={(routerProps) => 
                  <TeamEditForm {...routerProps} leagues={leagues}/>} 
                />

            <Route path={`${match.url}/:leagueId`} 
                  render={(routerProps) => 
                    <LeagueShow {...routerProps} leagues={leagues} />} 
                  />
        </Switch>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
     leagues: state.leaguesReducer.leagues
   }
 }
 
 export default connect(mapStateToProps,{fetchLeagues, clearFlags})(LeaguesContainer)
