import React from 'react'
import {useEffect} from "react"
import { connect } from 'react-redux';
import {fetchLeagues} from '../actions/leagues'
import { Route, Switch } from 'react-router-dom';
import LeagueList from '../components/LeagueList'
import LeagueShow from '../components/LeagueShow';
import LeagueForm from '../components/LeagueForm';


function LeaguesContainer({match, leagues, leaguesLoading, fetchLeagues}) {

  useEffect(() => {
      fetchLeagues()
    },[])

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
