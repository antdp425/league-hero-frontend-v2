import React from 'react'
import { Card } from 'react-bootstrap'


function TeamCard({team}) {
   return (
   <Card className="team-card">
      <Card.Body className="team-card-body">
         <Card.Title>{team.name}</Card.Title>
      </Card.Body>
   </Card>
   )
}

export default TeamCard
