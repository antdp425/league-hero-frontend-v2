import React from 'react'
import { Card, ButtonGroup, Button } from 'react-bootstrap'


function LeagueShow({match, leagues}) {

   const league = leagues.find(league => league.id == match.params.leagueId)

   let unformattedStart = league && league.start_date
   let start = new Date(unformattedStart)
   let formattedStart = new Date(`${start.getFullYear()}-0${start.getMonth()+1}-${start.getUTCDate()+1}`)

   let unformattedEnd = league && league.end_date
   let end = new Date(unformattedEnd)
   let formattedEnd = new Date(`${end.getFullYear()}-0${end.getMonth()+1}-${end.getUTCDate()+1}`)


   return (
      <>
         <br/>
         { league && 
            <Card>
               <Card.Body className="league-show-card">
                  <Card.Title className="league-show-card-title">{league.name}</Card.Title>
                  <Card.Text className="league-show-card-text">
                     <b>Format:</b> {league.league_format} <br/>
                     <b>Start:</b> {formattedStart.toDateString()}<br/>
                     <b>End:</b> {formattedEnd.toDateString()}<br/>
                  </Card.Text>
               </Card.Body>
                  <ButtonGroup>
                     <Button className="mr-2" variant="success">
                        Edit League
                     </Button>
                     <Button variant="danger">
                        Delete League
                     </Button>
                  </ButtonGroup>
            </Card>
            }
      </>
   )
}

export default LeagueShow
