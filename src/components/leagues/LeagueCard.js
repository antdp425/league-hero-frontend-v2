import React from 'react'
import { Card } from 'react-bootstrap'


function LeagueCard({league}) {
   return (
      <Card className="league-card">
         <Card.Body className="league-card-body">
            <Card.Title>{league.name}</Card.Title>
         </Card.Body>
      </Card>
   )
}

export default LeagueCard
