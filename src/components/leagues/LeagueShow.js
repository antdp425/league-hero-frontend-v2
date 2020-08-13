import React, { useState } from 'react'
import { Card, ButtonGroup, Button, Col, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteLeague } from '../../actions/leagues'
import { connect } from 'react-redux'


function LeagueShow({match, leagues, deleteLeague }) {

   const league = leagues.find(league => league.id == match.params.leagueId)

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

export default connect(null, {deleteLeague, })(LeagueShow)
