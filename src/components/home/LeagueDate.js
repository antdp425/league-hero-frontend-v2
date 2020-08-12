import React from 'react'
import { Card } from 'react-bootstrap'
import { useEffect, useState} from 'react'


function LeagueDate({league}) {

   // useEffect(()=>{
   // },[])

   const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

   const date = league && new Date(league.start_date)
   const month = monthNames[date.getMonth()]
   const day = date.getUTCDate()

   return (
      <Card className="card">
         <Card.Body>
            <Card.Title className="month" >{month}</Card.Title>
            <Card.Text className="day">
               {day}
            </Card.Text>
         </Card.Body>
      </Card>
   )
}

export default LeagueDate
