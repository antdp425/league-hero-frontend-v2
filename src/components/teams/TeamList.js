import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import TeamCard from './TeamCard'
import NewTeamButton from './NewTeamButton'

function TeamList({teams, match}) {

   const list = teams.map(team => 
      <div key={team.id}>
         {
            match.params.leagueId ?
               <Link to={`/leagues/${match.params.leagueId}/teams/${team.id}`}>
                  <Row noGutters={true} className={"team-list"}>
                     <Col>
                        <TeamCard team={team}/>
                     </Col>
                  </Row>
               </Link> :
               <> <Link to={`/teams/${team.id}`}> 
                  <Row noGutters={true} className={"team-list"}>
                     <Col>
                        <TeamCard team={team}/>
                     </Col>
                  </Row>
               </Link>
         </>}
      </div>
   )

   return (
      <div>
         <br/>
            <h3>Teams</h3>
        <br/>
        <Link to={`${match.url}/new`}>
          <NewTeamButton />
         </Link>
         {list}
      </div>
   )
}

export default TeamList
