import React from 'react' 
import { connect } from 'react-redux'
import LeagueList from '../components/leagues/LeagueList'

function ResultsContainer({query, teamResults, leagueResults}) {

   return (
      <>
      <br/>
         {
            leagueResults && leagueResults.length > 0 &&
               <>
                  <br/>
                  <h3>League Results</h3>
                  <br/> 
                  <LeagueList leagues={leagueResults} />
               </>
         }
         <br/>
         {
            teamResults && teamResults.length > 0 ? 
               <h1>hi</h1> : 
               <h1>No Team Results</h1>
         }
      </>
   )
}

const mapStateToProps = (state, {query}) => {
   if(query != ""){ 
      return {
               teamResults: state.teamsReducer.teams.filter(team => team.name.toLowerCase().includes(query)),
               leagueResults: state.leaguesReducer.leagues.filter(league => league.name.toLowerCase().includes(query))
      }
   }
}

export default connect(mapStateToProps)(ResultsContainer)