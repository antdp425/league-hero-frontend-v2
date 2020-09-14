import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Alert, Button } from 'react-bootstrap'
import LeagueCard from './LeagueCard'



function LeagueList({leagues}) {

   const list = leagues.map(league => 
      <div key={league.id}> 
         <Link to={`/leagues/${league.id}`}>
            <Row noGutters={true} className={"league-list"}>
                  <Col>
                     <LeagueCard league={league}/>
                  </Col>
            </Row>
         </Link>
      </div>
   )

   return (
      <>
         {
            list.length >= 1 ?
            list :
            <>
            <br/>
               <Alert className={"text-center "} variant={"primary"}>
                  No leagues, yet... 👻.
               </Alert>
            </>
         }
      </>
   )
}

export default LeagueList
