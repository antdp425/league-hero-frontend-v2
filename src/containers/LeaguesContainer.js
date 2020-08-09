import React from 'react'
import {useEffect} from "react"
import { connect } from 'react-redux';
import {fetchLeagues} from '../actions/leagues'
import LeagueList from '../components/LeagueList'
import { Route } from 'react-router-dom';
import LeagueShow from '../components/LeagueShow';

function LeaguesContainer({match, leagues, leaguesLoading, fetchLeagues}) {

   useEffect(() => {
      fetchLeagues()
    },[])

   return (
      <div>
        {<LeagueList leagues={leagues} />}

        <Route path={`${match.url}/:leagueId`} 
               render={(routerProps) => 
                <LeagueShow {...routerProps} leagues={leagues}/>} 
              />
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
