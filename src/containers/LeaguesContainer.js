import React from 'react'
import {useEffect} from "react"
import { connect } from 'react-redux';
import {fetchLeagues} from '../actions/leagues'

function LeaguesContainer({leagues, leaguesLoading, fetchLeagues}) {

   useEffect(() => {
      fetchLeagues()
    },[])

   return (
      <div>
         Leagues
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
