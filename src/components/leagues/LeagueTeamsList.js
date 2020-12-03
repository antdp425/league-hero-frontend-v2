import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Alert, Button } from 'react-bootstrap'
import TeamCard from '../teams/TeamCard'


function LeagueTeamsList({teams}) {

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

export default LeagueTeamsList
