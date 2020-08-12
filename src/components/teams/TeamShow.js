import React from 'react'

function TeamShow({match, teams}) {

   const team = teams.find(team => team.id == match.params.teamId)

   return (
      <div>
         <hr/>
         { team && <div>
               {team.name}
               <br/>
               {team.league.name}
               <br/>
               {team.phone}
               <br/>
               {team.email}
            </div>}
      </div>
   )
}

export default TeamShow
