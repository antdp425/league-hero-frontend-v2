import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import TeamCard from './TeamCard'

function TeamList({teams, match}) {

   const list = teams.map(team => 
      <div key={team.id}>
         { 
            <Link to={`/teams/${team.id}`}> 
               <Row noGutters={true} className={"team-list"}>
                  <Col>
                     <TeamCard team={team}/>
                  </Col>
               </Row>
            </Link>
         }
      </div>
   )

   return (
      <>
         {list}
      </>
   )
}

export default TeamList
