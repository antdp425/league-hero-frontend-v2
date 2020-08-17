import React from 'react'
import { Card } from 'react-bootstrap'
import { clearFlags } from '../../actions/teams'
import { connect } from 'react-redux'


function NewTeamButton({clearFlags}) {
   return (
      <Card onClick={clearFlags} className="new-team-card">
         <Card.Body className="new-team-card-body">
            <Card.Title>Create New Team</Card.Title>
         </Card.Body>
      </Card>
   )
}

export default connect(null,{clearFlags})(NewTeamButton)
