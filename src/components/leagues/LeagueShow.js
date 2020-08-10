import React from 'react'

function LeagueShow({match, leagues}) {

   const league= leagues.find(league => league.id == match.params.leagueId)

   return (
      <div>
         <hr/>
         { league && <div>
               {league.name}
               <br/>
               {league.league_format}
               <br/>
               {league.start_date}
               <br/>
               {league.end_date}
            </div>}
      </div>
   )
}

export default LeagueShow
