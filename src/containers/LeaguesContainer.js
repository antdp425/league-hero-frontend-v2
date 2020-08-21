import React from 'react'
import { connect } from 'react-redux';
import {fetchLeagues} from '../actions/leagues'
import { Route, Switch, Link } from 'react-router-dom';
import LeagueList from '../components/leagues/LeagueList'
import LeagueShow from '../components/leagues/LeagueShow';
import LeagueForm from '../components/leagues/LeagueForm';
import LeagueEditForm from '../components/leagues/LeagueEditForm';
import TeamEditForm from '../components/teams/TeamEditForm';
import NewLeagueButton from '../components/leagues/NewLeagueButton';

function LeaguesContainer({match, leagues}) {

   return (
      <>        
        <Switch>
          <Route exact path ={`${match.url}`}
                 render={(routerProps) =>
                  <>
                    <br/> 
                    <h3>Leagues</h3>
                    <br/> 
                    <Link to={`/leagues/new`}>
                      <NewLeagueButton />
                    </Link>
                    <LeagueList {...routerProps} leagues={leagues} />
                  </>
                 }>
          </Route>

          <Route path={`${match.url}/new`} 
                  render={(routerProps) => 
                    <LeagueForm {...routerProps} />} 
                />
          <Route path={`${match.url}/:leagueId/edit`} 
                 render={(routerProps) => 
                  <LeagueEditForm {...routerProps} leagues={leagues}/>} 
                />

          <Route path={`/leagues/:leagueId/teams/:teamId/edit`} 
                      render={(routerProps) => 
                  <TeamEditForm {...routerProps} leagues={leagues}/>} 
                />

            <Route path={`${match.url}/:leagueId`} 
                  render={(routerProps) => <LeagueShow {...routerProps} />} />
        </Switch>
      </>
   )
}

const mapStateToProps = (state) => {
   return {
     leagues: state.leaguesReducer.leagues
   }
 }
 
 export default connect(mapStateToProps,{fetchLeagues})(LeaguesContainer)
