import React, { useState } from 'react'
import { Card, ButtonGroup, Button, Col, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteTeam, clearFlags } from '../../actions/teams'


function TeamShow({history, match, team, deleteTeam, deleteErrors, clearFlags}) {
   
   const [confirmShow, setConfirmShow] = useState(false)
   const handleConfirm = () => setConfirmShow(true)
   const handleClose = () => setConfirmShow(false)
   const handleDelete = () => {
      handleClose()
      deleteTeam(match.params.teamId)
      !deleteErrors && history.push(`/teams`)
   }


   return (

      <>
         <hr/>
         { team && 
         <Card>
               <Card.Body className="team-show-card">
                  <Card.Title className="team-show-card-title">{team.name}</Card.Title>
                  <Card.Text className="team-show-card-text">
                     <b>League:</b> {team.league.name} <br/>
                     <b>Contact Phone:</b> {team.phone} <br/>
                     <b>Contact Email:</b> {team.email} <br/>
                  </Card.Text>
               </Card.Body>
                  <ButtonGroup>
                     <Col>
                     <Link onClick={clearFlags} to={`/leagues/${team.league.id}${match.url}/edit`}>
                        <Button 
                           block={true} className="mr-2" variant="success">
                           Edit Team
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

         <Modal show={confirmShow}>
            <Modal.Header>
               <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>

            <Modal.Body>
               <p>You are about to delete <b>{team && team.name}</b></p>
            </Modal.Body>

            <Modal.Footer>
               <Button onClick={() => handleClose()}variant="secondary">Close</Button>
               <Button onClick={() => handleDelete()}variant="danger">Delete</Button>
            </Modal.Footer>
         </Modal>
      </>
   )
}

const mapStateToProps = (state, {match}) => {
   return {
      team: state.teamsReducer.teams.find(team => team.id == match.params.teamId),
      deleteErrors: !!state.teamsReducer.deleteErrors
   }
}

export default connect(mapStateToProps, {deleteTeam, clearFlags})(TeamShow)
