import React from 'react'
import { Link } from 'react-router-dom'

function TeamList({teams, match}) {

   const list = teams.map(team => 
      <div key={team.id}>
         {
         match.params.leagueId ?
         <Link to={`/leagues/${match.params.leagueId}/teams/${team.id}`}> {team.name} <br/> </Link> :
         <Link to={`/teams/${team.id}`}> {team.name} <br/> </Link>
         }
      </div>
   )

   return (
      <div>
         {list}
      </div>
   )
}

export default TeamList
