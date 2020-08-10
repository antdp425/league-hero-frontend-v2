import React from 'react'
import { Link } from 'react-router-dom'




function LeagueList({leagues}) {

   const list = leagues.map(league => 
      <div key={league.id}> 
         <Link to={`/leagues/${league.id}`}> {league.name} <br/> </Link>
      </div>
   )

   return (
      <div>
         {list}
      </div>
   )
}

export default LeagueList
