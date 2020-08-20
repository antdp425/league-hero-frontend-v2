import React from 'react' 
import { connect } from 'react-redux'
import LeagueList from '../components/leagues/LeagueList'
import { Row, Col } from 'react-bootstrap'

function ResultsContainer({query, teamResults, leagueResults}) {

   return (
      <>
      <br/>
      <Row>
         <Col>
            {
               leagueResults && leagueResults.length > 0 &&
                  <>
                     <br/>
                     <h3>League Results</h3>
                     <br/> 
                     <LeagueList leagues={leagueResults} />
                  </>
            }
         </Col>
         <Col>
            {
               teamResults && teamResults.length > 0 ? 
                  <h1>hi</h1> : 
                  <h1>No Team Results</h1>
            }
         </Col>
      </Row>
      </>
   )
}

const mapStateToProps = (state, {match}) => {
      return {
         teamResults: state.teamsReducer.teams.filter(team => team.name.toLowerCase().includes(match.params.query)),
         leagueResults: state.leaguesReducer.leagues.filter(league => league.name.toLowerCase().includes(match.params.query))
      }
}

export default connect(mapStateToProps)(ResultsContainer)