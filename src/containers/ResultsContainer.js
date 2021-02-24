import React from 'react' 
import { connect } from 'react-redux'
import LeagueList from '../components/leagues/LeagueList'
import TeamList from '../components/teams/TeamList'
import { Row, Col } from 'react-bootstrap'

function ResultsContainer({teamResults, leagueResults}) {
   
   return (
      <>
      <br/>
      <Row>
         <Col>
            <br/>
            {
               leagueResults && leagueResults.length > 0 ?
                  <>
                     <h3>League Results</h3>
                     <br/> 
                     <LeagueList leagues={leagueResults} />
                  </> : 
                  <>
                     <h3>No League Results</h3>                  
                  </>
            }
         </Col>
         <Col>
            <br/>
            {
               teamResults && teamResults.length > 0 ? 
                  <>
                     <h3>Team Results</h3>
                     <br/> 
                     <TeamList teams={teamResults} />
                  </> : 
                  <>
                     <h3>No Team Results</h3>                  
                  </>
            }
         </Col>
      </Row>
      </>
   )
}

const mapStateToProps = (state, {match}) => {
   return {
      teamResults: state.teamsReducer.teams.filter(team => team.name.toLowerCase().includes(match.params.query.toLowerCase())),
      leagueResults: state.leaguesReducer.leagues.filter(league => league.name.toLowerCase().includes(match.params.query.toLowerCase()))
   }
}

export default connect(mapStateToProps)(ResultsContainer)