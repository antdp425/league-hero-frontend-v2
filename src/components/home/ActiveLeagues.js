import React from 'react'
import LeagueDate from "./LeagueDate"
import { Row, Col, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ActiveLeagues({leagues}) {
   
   const date = new Date()
   const today = `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`
   let filtered = leagues.filter(league => 
         (new Date(league.end_date) > new Date(today)) && 
         (new Date(league.start_date) >= new Date(today)))
   let sorted = filtered.sort((a,b) => { return new Date(a.start_date) - new Date(b.start_date)})

   const activeLeagues = sorted.map(league =>
      <div>
         <Link to={`/leagues/${league.id}`}>
         <Row className={"active-league"}>
               <Col xs={5} sm={4} md={3} lg={3}>
                  <LeagueDate league={league}/>
               </Col>
               <Col>
                  <div>{league.name}</div>
               </Col>
         </Row>
       </Link>
       </div>
      )

   return (
      <Container>
         {activeLeagues}
      </Container>
   )
}

export default ActiveLeagues