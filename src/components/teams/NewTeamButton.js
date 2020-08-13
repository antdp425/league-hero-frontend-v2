import React from 'react'
import { Card } from 'react-bootstrap'

function NewTeamButton() {
   return (
      <Card className="new-team-card">
         <Card.Body className="new-team-card-body">
            <Card.Title>Create New Team</Card.Title>
         </Card.Body>
      </Card>
   )
}

export default NewTeamButton
