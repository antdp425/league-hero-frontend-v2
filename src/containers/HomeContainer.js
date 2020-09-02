import React from 'react'
import { connect } from 'react-redux';
import ActiveLeagues from '../components/home/ActiveLeagues';
import Loading from '../components/Loading';

function HomeContainer({leagues, leaguesLoading}) {

   return (
      <>
      <br/>
         {leaguesLoading ? <Loading /> :<ActiveLeagues leagues={leagues}/>}
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

