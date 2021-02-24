import React from 'react'
import { Card } from 'react-bootstrap'


function LeagueDate({league}) {

   const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

   const date = new Date(league.start_date)
   const month = monthNames[date.getMonth()]
   const day = date.getUTCDate()
   
   return (
      <Card className="card">
         <Card.Body className="league-date-body">
            <Card.Title className="month" >{month}</Card.Title>
            <Card.Text className="day">
               {day}
            </Card.Text>
         </Card.Body>
      </Card>
   )
}

export default LeagueDate
