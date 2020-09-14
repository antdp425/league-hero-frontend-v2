import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Alert, Button } from 'react-bootstrap'
import TeamCard from './TeamCard'
import NewTeamButton from './NewTeamButton'


function TeamList({leagues, teams}) {

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
         {
            leagues.length >= 1 ?
            <>
               <Link to={`/teams/new`}>
                  <NewTeamButton />
               </Link> 
               {
                  teams.length >= 1 ? 
                     list :
                  <> 
                     <br/>
                     <Alert className={"text-center "} variant={"primary"}>
                        No teams, yet... 👻.
                     </Alert>
                  </>
               }
            </>:
            
            <Alert className={"text-center "} variant={"primary"}>
             Your teams will appear here, but first create a league 👇
             <br/>
                  <Link to={`/leagues/new`}>
                     <Button className="mt-2" variant="dark" size="sm">Create League</Button>
                    </Link>
            </Alert>
         }
      </>
   )
}

export default TeamList
