import React from 'react'
import { Link } from 'react-router-dom'

function TeamList({teams}) {

   const list = teams.map(team => 
      <div key={team.id}>
         {/* <Link to={`/teams/${team.id}`}> {team.name} <br/> </Link>  */}
         <Link to={`/leagues/${team.league.id}/teams/${team.id}`}> {team.name} <br/> </Link>
      </div>
   )

   return (
      <div>
         {list}
      </div>
   )
}

export default TeamList
