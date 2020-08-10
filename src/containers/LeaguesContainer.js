import React from 'react'
import { connect } from 'react-redux';
import {fetchLeagues} from '../actions/leagues'
import { Route, Switch } from 'react-router-dom';
import LeagueList from '../components/leagues/LeagueList'
import LeagueShow from '../components/leagues/LeagueShow';
import LeagueForm from '../components/leagues/LeagueForm';


function LeaguesContainer({match, leagues, leaguesLoading}) {

   return (

      <div>
        {<LeagueList leagues={leagues} />}
        
        <Switch>

          <Route path={`${match.url}/new`} 
                render={(routerProps) => 
                  <LeagueForm {...routerProps} />} 
              />

          <Route path={`${match.url}/:leagueId`} 
                render={(routerProps) => 
                  <LeagueShow {...routerProps} leagues={leagues}/>} 
                />

      </Switch>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
     leagues: state.leaguesReducer.leagues,
     leaguesLoading: state.leaguesReducer.loading
   }
 }
 
 export default connect(mapStateToProps,{fetchLeagues})(LeaguesContainer)
