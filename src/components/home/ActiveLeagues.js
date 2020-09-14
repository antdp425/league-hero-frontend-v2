import React from 'react'
import LeagueDate from "./LeagueDate"
import { Row, Col, Container, Alert, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function ActiveLeagues({leagues}) {

   const today = new Date().toISOString().split("T")[0].split("-")

   let filtered = leagues.filter(league =>
         (new Date(league.end_date.split("-")) >= new Date(today)) && 
         (new Date(league.start_date.split("-")) <= new Date(today)))

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
      <Container>
         {  
            activeLeagues.length == 1 ?
               <>
               <h4>Active Leagues</h4>
               <br/>
               {activeLeagues} </> :
               <Alert className={"text-center "} 
                  variant={"primary"}>Your <b>Active Leagues</b> will appear here.
                  <br/>
                  <Link to={`/leagues/new`}>
                     <Button className="mt-2" variant="dark" size="sm">Create League</Button>
                    </Link>
               </Alert>
         }
      </Container>
      </>
   )
}

export default ActiveLeagues