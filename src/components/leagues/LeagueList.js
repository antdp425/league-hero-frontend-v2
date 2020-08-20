import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
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
         {list}
      </>
   )
}

export default LeagueList
