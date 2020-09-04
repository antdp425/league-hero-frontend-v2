import React from 'react'
import LeagueDate from "./LeagueDate"
import { Row, Col, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ActiveLeagues({leagues}) {

   const today = new Date()

   let filtered = leagues.filter(league =>
         (new Date(league.end_date) >= (today)) && 
         (new Date(league.start_date) <= (today)))

   let sorted = filtered.sort((a,b) => { return new Date(a.start_date) - new Date(b.start_date)})

   let activeLeagues = sorted.map(league =>
      <div key={league.id}>
         <Link to={`/leagues/${league.id}`}>
         <Row noGutters={true} className={"active-league"}>
               <Col xs={4} sm={3} md={3} lg={3}>
                  <LeagueDate league={league}/>
               </Col>
               <Col className="active-league-name">
                  {league.name}
               </Col>
         </Row>
       </Link>
       </div>
      )

   return (
      <>
         <h4>Active Leagues</h4>
         <br/>
      <Container>
         {activeLeagues}
      </Container>
      </>
   )
}

export default ActiveLeagues