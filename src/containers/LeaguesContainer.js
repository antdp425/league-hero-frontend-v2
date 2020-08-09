import React from 'react'
import {useEffect} from "react"
import { connect } from 'react-redux';
import {fetchLeagues} from '../actions/leagues'
import LeagueList from '../components/LeagueList'
import { Route } from 'react-router-dom';

function LeaguesContainer({leagues, leaguesLoading, fetchLeagues}) {

   useEffect(() => {
      fetchLeagues()
    },[])

   return (
      <div>
        {<LeagueList leagues={leagues} />}
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
