import React from 'react'
import { Card } from 'react-bootstrap'

function NewLeagueButton() {
   return (
      <Card className="new-league-card">
         <Card.Body className="new-league-card-body">
            <Card.Title>Create New League</Card.Title>
         </Card.Body>
      </Card>
   )
}

export default NewLeagueButton
