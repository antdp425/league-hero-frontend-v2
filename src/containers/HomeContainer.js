import React from 'react'
import { connect } from 'react-redux';
import ActiveLeagues from '../components/home/ActiveLeagues';


function HomeContainer({leagues}) {

   return (
      <>
         <br/>
         <h4>Active Leagues</h4>
         <br/>
         <ActiveLeagues leagues={leagues}/>
      </>
   )
}

const mapStateToProps = (state) => {
   return {
     leagues: state.leaguesReducer.leagues,
     leaguesLoading: state.leaguesReducer.loading,

     teams: state.teamsReducer.teams,
     teamsLoading: state.leaguesReducer.loading
   }
 }

export default connect(mapStateToProps)(HomeContainer)

