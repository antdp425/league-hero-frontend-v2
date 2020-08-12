import React from 'react'
import Date from "./LeagueDate"
import { Row, Col, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function ActiveLeagues({leagues}) {
   
   const activeLeagues = leagues.map(league =>
         <Link to={`/leagues/${league.id}`}>
         <Row className={"active-league"}>
               <Col xs={5} sm={4} md={3} lg={3}>
                  <Date league={league}/>
               </Col>
               <Col>
                  {league.name}
               </Col>
         </Row>
       </Link>
      )
   
   return (
      <>
         {activeLeagues}
      </>
   )
}

export default ActiveLeagues