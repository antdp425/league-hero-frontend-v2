import React from 'react'
import { Card } from 'react-bootstrap'
import { clearFlags } from '../../actions/leagues'
import { connect } from 'react-redux'

function NewLeagueButton({clearFlags}) {
   return (
      <Card onClick={clearFlags}className="new-league-card">
         <Card.Body className="new-league-card-body">
            <Card.Title>Create New League</Card.Title>
         </Card.Body>
      </Card>
   )
}

export default connect(null, {clearFlags})(NewLeagueButton)