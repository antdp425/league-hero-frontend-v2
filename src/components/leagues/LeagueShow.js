import React, { useState } from 'react'
import { Card, ButtonGroup, Button, Col, Modal, Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteLeague } from '../../actions/leagues'
import { connect } from 'react-redux'
import LeagueTeamsList from './LeagueTeamsList'
import NewTeamButton from '../teams/NewTeamButton'

function LeagueShow({history, match, deleteLeague, deleteErrors, teams, league}) {
   
   const [confirmShow, setConfirmShow] = useState(false)
   const handleConfirm = () => setConfirmShow(true)
   const handleClose = () => setConfirmShow(false)

   let unformattedStart = league && league.start_date
   let start = new Date(unformattedStart)
   let formattedStart = new Date(`${start.getFullYear()}/0${start.getMonth()+1}/${start.getDate()+1}`)

   let unformattedEnd = league && league.end_date
   let end = new Date(unformattedEnd)
   let formattedEnd = new Date(`${end.getFullYear()}/0${end.getMonth()+1}/${end.getDate()+1}`)

   const handleDelete = () => {
      handleClose()
      deleteLeague(match.params.leagueId)
      !deleteErrors && history.push(`/leagues`)
   }

   return (
      <>
         <br/>
         { league && 
            <Card>
               <Card.Body className="league-show-card">
                  <Card.Title className="league-show-card-title">{league.name}</Card.Title>
                  <Card.Text className="league-show-card-text">
                     <b>Format:</b> {league.league_format} <br/>
                     <b>Start:</b> {formattedStart.toDateString()}<br/>
                     <b>End:</b> {formattedEnd.toDateString()}<br/>
                  </Card.Text>
               </Card.Body>
                  <ButtonGroup>
                     <Col>
                     <Link to={`${match.url}/edit`}>
                        <Button 
                           block={true} className="mr-2" variant="success">
                           Edit League
                        </Button>
                     </Link>
                     </Col>
                     <Col>
                     <Button onClick={() => handleConfirm()} block={true} variant="danger">
                        Delete League
                     </Button>
                     </Col>
                  </ButtonGroup>
            </Card>
            }

            <hr/>
  
            {teams.length > 0 ?
               <> 
                  <h5>Teams</h5>
                  <LeagueTeamsList teams={teams} />
               </> : 
               <>
                  <i>No teams added to this league yet</i>
               </>
            }

         <Modal show={confirmShow}>
            <Modal.Header>
               <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>

            <Modal.Body>
               <p>You are about to delete <b>{league && league.name}</b></p>
            </Modal.Body>

            <Modal.Footer>
               <Button onClick={() => handleClose()} variant="secondary">Close</Button>
               <Button onClick={() => handleDelete()} variant="danger">Delete</Button>
            </Modal.Footer>
         </Modal>
         </>
   )
}

const mapStateToProps = (state, {match}) => {
   return {
      league: state.leaguesReducer.leagues.find(league => league.id == match.params.leagueId),
      teams: state.teamsReducer.teams.filter(team => team.league.id == match.params.leagueId),
      deleteErrors: !!state.leaguesReducer.deleteErrors
   }
}


export default connect(mapStateToProps, {deleteLeague})(LeagueShow)
