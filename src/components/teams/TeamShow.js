import React from 'react'
import { Card, ButtonGroup, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function TeamShow({match, teams}) {

   const team = teams.find(team => team.id == match.params.teamId)

   return (

      <>
         <hr/>
         { team && 
         <Card>
               {/* {team.name}
               <br/>
               {team.team.name}
               <br/>
               {team.phone}
               <br/>
               {team.email} */}

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
                     <Link to={`/leagues/${team.league.id}${match.url}/edit`}>
                        <Button 
                           block={true} className="mr-2" variant="success">
                           Edit Team
                        </Button>
                     </Link>
                     </Col>
                     <Col>
                     <Button block={true} variant="danger">
                        Delete League
                     </Button>
                     </Col>
                  </ButtonGroup>
            </Card>}
      </>
   )
}

export default TeamShow
